import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../lib/firebase';
import { useAuthStore } from '../store/useAuthStore';
import { Camera, Save } from 'lucide-react';

const profileSchema = z.object({
  displayName: z.string().min(2, 'Display name must be at least 2 characters'),
  bio: z.string().max(160, 'Bio must be less than 160 characters'),
});

type ProfileForm = z.infer<typeof profileSchema>;

export function Profile() {
  const { user } = useAuthStore();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState('');
  const [uploadingAvatar, setUploadingAvatar] = useState(false);

  const { register, handleSubmit, setValue, formState: { errors } } = useForm<ProfileForm>({
    resolver: zodResolver(profileSchema),
  });

  useEffect(() => {
    const loadProfile = async () => {
      if (!user) return;

      try {
        const docRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setValue('displayName', data.displayName);
          setValue('bio', data.bio);
          setAvatarUrl(data.avatarUrl);
        }
      } catch (error) {
        console.error('Error loading profile:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, [user, setValue]);

  const handleAvatarChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!user || !e.target.files?.[0]) return;

    try {
      setUploadingAvatar(true);
      const file = e.target.files[0];
      const storageRef = ref(storage, `avatars/${user.uid}`);
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      
      await updateDoc(doc(db, 'users', user.uid), {
        avatarUrl: url,
      });
      
      setAvatarUrl(url);
    } catch (error) {
      console.error('Error uploading avatar:', error);
    } finally {
      setUploadingAvatar(false);
    }
  };

  const onSubmit = async (data: ProfileForm) => {
    if (!user) return;

    try {
      setSaving(true);
      await updateDoc(doc(db, 'users', user.uid), {
        displayName: data.displayName,
        bio: data.bio,
      });
    } catch (error) {
      console.error('Error updating profile:', error);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Profile Settings
          </h1>

          <div className="mb-8">
            <div className="flex items-center justify-center">
              <div className="relative">
                <img
                  src={avatarUrl || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'}
                  alt="Profile"
                  className="w-32 h-32 rounded-full object-cover"
                />
                <label
                  htmlFor="avatar-upload"
                  className="absolute bottom-0 right-0 bg-indigo-600 p-2 rounded-full cursor-pointer hover:bg-indigo-700 transition-colors"
                >
                  <Camera className="h-5 w-5 text-white" />
                  <input
                    id="avatar-upload"
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleAvatarChange}
                    disabled={uploadingAvatar}
                  />
                </label>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label
                htmlFor="displayName"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Display Name
              </label>
              <input
                {...register('displayName')}
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
              {errors.displayName && (
                <p className="mt-1 text-sm text-red-600">{errors.displayName.message}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="bio"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Bio
              </label>
              <textarea
                {...register('bio')}
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
              {errors.bio && (
                <p className="mt-1 text-sm text-red-600">{errors.bio.message}</p>
              )}
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={saving}
                className="flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
              >
                <Save className="h-4 w-4 mr-2" />
                {saving ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
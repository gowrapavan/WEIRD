import React from 'react';
import { UserPlus, Star } from 'lucide-react';

export function Recommendations() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4">
      <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
        Recommended for you
      </h2>
      
      <div className="space-y-4">
        {recommendations.map((rec) => (
          <div
            key={rec.id}
            className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition"
          >
            <div className="flex items-center space-x-3">
              <img
                src={rec.avatar}
                alt={rec.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">
                  {rec.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {rec.followers} followers
                </p>
              </div>
            </div>
            <a  href="https://www.instagram.com/weird_fc/"  target="_blank"  rel="noopener noreferrer">
            <button className="flex items-center px-3 py-1 text-sm bg-indigo-600 hover:bg-indigo-700 text-white rounded-full transition">
              <UserPlus className="w-4 h-4 mr-1" />
              Follow
            </button>
            </a>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg text-white">
        <div className="flex items-center space-x-2 mb-2">
          <Star className="w-5 h-5" />
          <h3 className="font-semibold">Premium Features</h3>
        </div>
        <p className="text-sm text-gray-100 mb-3">
          Unlock exclusive content and features with WEIRD Premium
        </p>
        <button className="w-full py-2 bg-white text-indigo-600 rounded-lg font-medium hover:bg-gray-100 transition">
          Upgrade Now
        </button>
      </div>
      <br></br><br></br>
    </div>
  );
}

const recommendations = [
  {
    id: 1,
    name: 'WEIRD',
    avatar: 'https://images.unsplash.com/photo-1542144582-1ba00456b5e3?auto=format&fit=crop&q=80&w=100',
    followers: '542K',
  },
  {
    id: 2,
    name: 'Team Velocity',
    avatar: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?auto=format&fit=crop&q=80&w=100',
    followers: '231K',
  },
  {
    id: 3,
    name: 'eSports Daily',
    avatar: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=100',
    followers: '892K',
  },
];
<br>
<br></br></br>
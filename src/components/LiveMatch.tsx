import React, { useState } from 'react';
import { Play, Users, X, Volume2, Maximize2 } from 'lucide-react';

export function LiveMatch() {
  const [isWatching, setIsWatching] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-6">
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=1200"
          alt="Live match"
          className="w-full h-48 sm:h-64 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <span className="flex items-center px-2 py-1 bg-red-600 rounded-full text-sm">
                <span className="animate-pulse w-2 h-2 bg-white rounded-full mr-2" />
                LIVE
              </span>
              <span className="flex items-center text-sm">
                <Users className="w-4 h-4 mr-1" />
                24.5K
              </span>
            </div>
          </div>
          <h2 className="text-lg sm:text-xl font-bold">Championship Finals 2024</h2>
          <p className="text-sm text-gray-200">Team Alpha vs Team Omega</p>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1584447128309-b66b7a4d1b57?auto=format&fit=crop&q=80&w=100"
                alt="Team Alpha"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
              />
              <span className="text-sm font-medium dark:text-gray-200">Alpha</span>
            </div>
            <div className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">2 - 1</div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1584447128309-b66b7a4d1b57?auto=format&fit=crop&q=80&w=100"
                alt="Team Omega"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
              />
              <span className="text-sm font-medium dark:text-gray-200">Omega</span>
            </div>
          </div>
          <button 
            onClick={() => setIsWatching(!isWatching)}
            className="flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition text-sm sm:text-base"
          >
            {isWatching ? (
              <>
                <X className="w-4 h-4 mr-1 sm:mr-2" />
                Close
              </>
            ) : (
              <>
                <Play className="w-4 h-4 mr-1 sm:mr-2" />
                Watch
              </>
            )}
          </button>
        </div>
      </div>

      {isWatching && (
        <div className="relative w-full pt-[56.25%] bg-black">
          <div className="absolute top-0 left-0 w-full h-full">
            <iframe
              className="w-full h-full"
              src="https://2kora.naba24.net/albaplayer/bn5/?serv=2"
              allowFullScreen
            />
            <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4 bg-gradient-to-t from-black/80 to-transparent">
              <div className="flex items-center justify-between text-white">
                <div className="flex items-center space-x-4">
                  <button className="p-1.5 hover:bg-white/20 rounded-full transition">
                    <Volume2 className="w-5 h-5" />
                  </button>
                </div>
                <button className="p-1.5 hover:bg-white/20 rounded-full transition">
                  <Maximize2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
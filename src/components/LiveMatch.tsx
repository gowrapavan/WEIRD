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
                NOT LIVE
              </span>
              <span className="flex items-center text-sm">
                <Users className="w-4 h-4 mr-1" />
                27.5K
              </span>
            </div>
          </div>
          <h2 className="text-lg sm:text-xl font-bold">Nations League · Fri, 15 Nov, 1:15 am</h2>
          <p className="text-sm text-gray-200">Greece vs England</p>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="text-center">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAEZ0FNQQAAsY58+1GTAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAOxAAADsQBlSsOGwAABQ5JREFUeNrtm0tsG0UYgGe969oG20kqxWlTJNuhiegDIYccgUgtEo8SxIlKXKESFYhK3KhakKDiBhKReAgBdzggQBQkkCohcWuxJYTgQGgdaOw0oUkTN/Km9uzPbLBhbc/uPHYdr5sdaf3Yeez//fPPP/+MPQgFKUhB2slJccosFos5ADhFPh4h1yi51D7hwuQqkeuCoijvZDKZgpACCLQyPz//Onk/Tb6G+ryTDaKEN9Pp9KvkHdozNVqNBvyZ5ve1KtbLa3VcN8Cwe8pkdijcfm9145Zx+doGdhAOgCU+cN1qyVVVRd03EFaH7lCjZgeaLITJzDzLtICG2V8yK9Yw4A9/XK5+/8taXK9hZECn5NAQZ272sQ5Rviksohc+znfWsbZjwXHKb73XYq0d+QqhioZVNHPf7psvHR2JhYlCGpYw1T4cQhTzP9W8//4Py9Wv8ivx6i3M0VX+SaaspsyfXVyOv/VdudpkbbAhRwU0HB5a2cD6tz+vxOXs1j/pi8L1+PWbdd3KxlKA6e3Rlb91bADvuBMYwNvtAYnX+n1Jx1Y2lgK2pjri8DBQxxx9/PKYZS+GQpPFysacBez6sJsQucwgevZI1t5+QMK+GgXSyZpqV1qT7T2a9xYfIP9XHN0dQ09OjXZFuQvlxVBtUxdXgB0YuBjbtsrqkbvQZHtMpPf9PGtoosBegXkxhLbdAmQEBvC3Jdgq4MF7hsNzs4ddNf54bi8qvruXq+zX+TK66/nzTAuBthDY1klb7r19PFN7YDwRoz3XPys94LCgLjzWl0vd7Qyw+nKtDwCelQ35ufdlzV/EKmyd4PL6ppEvlbkFmLm/09mVVnX00x+rXGZdJmX/jQSB+jygCGIfqLUW2DMYUYQV8NvCOn7l8z+5NU5TQOHKKnrxk0IHPG1qfILU/+DEZLdCYU0qFPbC1HjgfRsJeu1xnepDjxYDmtO0zAsssx6Q3VfwRSjsJhz2E7yzAsADk2fAW1P+8g108qM8czOE6fnbCpmfjucS9f2pXd47QbdRm7Xuwkp166IBseL+TufaqoDpsSx4qgBRsxXdUfIS3oUPAPfjE5x73Qv4njlBKWcoAC+33wDCbdkqIDUQDXVsUoJY460bneAI67QD7Bw/0B1fK4tEKHxgX0I9OjXuyjoms4PovedyPY/2nELhfv/p+/bcEAkUECjAB6Hwr39V8LnzJaGwVygfxKdUp3DXvh1AT08m6xOikeBSRTe+vMRWgJDQNkEOVzvgUJex0Jq+OwITMqGwu19+vAGXhfdkNegVNE3wbsPzhvHutsS4QlWQtiwv4FnP0twC8kK72z0CfksTlNpWAdOHhsPlh++9LaY6EgqHg1A4CIQCBQQKEIsE1zaNi1dL3j3J4z9cAUfbzZQdqBtDUdG1wNV1/PKnRW/YQWy6BNa0yNpaa/s++8wYfmgiwa0A81+Vqqq4OxzhuI0lCS4Db5ZXQ6Ba2Jg+YMvux4YjISS452+97MCpkWEX4c3X/aloyMrGUsAF8yWV3BV79GCiwgIFYPe2KDgNRA4eoWOHk5URwmJlc1SAecaGvG2dDDk9k449cuDOCjIwE5QX2g5cpNd54BXA6NiheOW1p7JNeKPB1spLE7BYLL5hPTKztL6pzy1u4DoG7M4vCP6iJFlI0xR1fE9cHRmIRC0dey6TyZzlmgXMA0bmGZvmoalUMhIlV79O9f8dmqJl7vhjc0EKUpB2dvoHga82YGQkwu8AAAAASUVORK5CYII="
                alt="Team Alpha"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
              />
              <span className="text-sm font-medium dark:text-gray-200">Greece</span>
            </div>
            <div className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">0 - 0</div>
            <div className="text-center">
              <img
                src="https://ssl.gstatic.com/onebox/media/sports/logos/DTqIL8Ba3KIuxGkpXw5ayA_96x96.png"
                alt="Team Omega"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
              />
              <span className="text-sm font-medium dark:text-gray-200">England</span>
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



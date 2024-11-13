import React from 'react';
import { Zap } from 'lucide-react';

export function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <Zap className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
      <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
        WEIRD
      </span>
    </div>
  );
}
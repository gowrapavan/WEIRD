import React from 'react';
import { Menu, Sun, Moon, Home, Instagram, Twitter, Youtube, User, Trophy } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';


interface LayoutProps {
  children: React.ReactNode;
  onThemeToggle: () => void;
}

export function Layout({ children, onThemeToggle }: LayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="relative">
      <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <Menu className="h-6 w-6" />
              </button>
              <Link to="/">
                <Logo className="h-8 w-auto ml-2 lg:ml-0" />
              </Link>
            </div>
            
            <nav className="hidden lg:flex items-center space-x-8">
              <NavLink 
                to="/" 
                icon={<Home className="h-5 w-5" />} 
                label="Home" 
                isActive={isActive('/')}
              />
              <NavLink 
                to="/instagram" 
                icon={<Instagram className="h-5 w-5" />} 
                label="Instagram" 
                isActive={isActive('/instagram')}
              />
              <NavLink 
                to="/twitter" 
                icon={<Twitter className="h-5 w-5" />} 
                label="Twitter" 
                isActive={isActive('/twitter')}
              />
              <NavLink 
                to="/youtube" 
                icon={<Youtube className="h-5 w-5" />} 
                label="YouTube" 
                isActive={isActive('/youtube')}
              />
            </nav>

            <div className="flex items-center space-x-4">
              <button
                onClick={onThemeToggle}
                className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <Sun className="h-6 w-6 hidden dark:block" />
                <Moon className="h-6 w-6 block dark:hidden" />
              </button>
              <Link 
                to="/profile" 
                className="flex items-center space-x-2 text-gray-500 hover:text-indigo-600 dark:text-gray-400"
              >
                <User className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="relative">
        {children}
      </div>

      <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 lg:hidden">
        <div className="flex justify-around py-3">
          <NavLink 
            to="/" 
            icon={<Home className="h-5 w-5" />} 
            label="Home" 
            isActive={isActive('/')}
          />
            <NavLink 
            to="/live" 
            icon={<Trophy className="h-5 w-5" />} 
            label="Live" 
            isActive={isActive('/live')}
          />
          <NavLink 
            to="/instagram" 
            icon={<Instagram className="h-5 w-5" />} 
            label="Instagram" 
            isActive={isActive('/instagram')}
          />
          <NavLink 
            to="/twitter" 
            icon={<Twitter className="h-5 w-5" />} 
            label="Twitter" 
            isActive={isActive('/twitter')}
          />
          <NavLink 
            to="/youtube" 
            icon={<Youtube className="h-5 w-5" />} 
            label="YouTube" 
            isActive={isActive('/youtube')}
          />
        </div>
      </nav>
    </div>
  );
}

interface NavLinkProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
}

function NavLink({ to, icon, label, isActive }: NavLinkProps) {
  return (
    <Link
      to={to}
      className={`flex flex-col items-center ${
        isActive 
          ? 'text-indigo-600 dark:text-indigo-400' 
          : 'text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400'
      }`}
    >
      {icon}
      <span className="text-xs mt-1">{label}</span>
    </Link>
  );
}
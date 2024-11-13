import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { AuthProvider } from './components/auth/AuthProvider';
import { ProtectedRoute } from './components/auth/ProtectedRoute';
import { Login } from './pages/auth/Login';
import { Register } from './pages/auth/Register';
import { Profile } from './pages/Profile';
import { Home } from './pages/Home';
import { LiveMatches } from './pages/LiveMatches';
import { InstagramFeed } from './pages/InstagramFeed';
import { TwitterFeed } from './pages/TwitterFeed';
import { YoutubeFeed } from './pages/YoutubeFeed';
import { useTheme } from './hooks/useTheme';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <AuthProvider>
      <div className={`min-h-screen ${theme === 'dark' ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
        <BrowserRouter>
          <Layout onThemeToggle={toggleTheme}>
            <div className="flex flex-col lg:flex-row gap-6 p-4 lg:p-8 max-w-7xl mx-auto">
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/profile" element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                } />
                <Route path="/" element={<Home />} />
                <Route path="/live" element={<LiveMatches />} />
                <Route path="/instagram" element={<InstagramFeed />} />
                <Route path="/twitter" element={<TwitterFeed />} />
                <Route path="/youtube" element={<YoutubeFeed />} />
              </Routes>
            </div>
          </Layout>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
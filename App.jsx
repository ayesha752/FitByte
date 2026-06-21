import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import Plans from './pages/Plans';
import Membership from './pages/Membership';
import Profile from './pages/Profile';

function App() {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState('dark');
  const [toastMessage, setToastMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const cachedUser = localStorage.getItem('fitUser');
    if (cachedUser) {
      setUser(JSON.parse(cachedUser));
    }
  }, []);

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 4000);
  };

  const handleLogout = () => {
    localStorage.removeItem('fitUser');
    setUser(null);
    triggerToast("User telemetry tracking link severed.");
    navigate('/');
  };

  return (
    <div style={{ 
      backgroundColor: '#090d16', 
      minHeight: '100vh', 
      color: '#f8fafc',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Navbar user={user} theme={theme} setTheme={setTheme} onLogout={handleLogout} />
      
      {/* Toast Bar Notification Layer */}
      {toastMessage && (
        <div style={{
          position: 'fixed', bottom: '30px', right: '30px', 
          backgroundColor: '#2563eb', color: '#fff',
          padding: '16px 28px', borderRadius: '12px', zIndex: 2000,
          fontFamily: '"Inter", sans-serif', fontWeight: '600', fontSize: '0.95rem',
          boxShadow: '0 20px 40px rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)'
        }}>
          ⚡ {toastMessage}
        </div>
      )}

      {/* Main Framework Content Container Block */}
      <div style={{ padding: '40px 8%', flex: 1 }}>
        <Routes>
          <Route path="/" element={user ? <Dashboard user={user} triggerToast={triggerToast} /> : <Auth setUser={setUser} triggerToast={triggerToast} />} />
          <Route path="/plans" element={user ? <Plans /> : <Navigate to="/" />} />
          <Route path="/membership" element={user ? <Membership user={user} triggerToast={triggerToast} /> : <Navigate to="/" />} />
          <Route path="/profile" element={user ? <Profile user={user} triggerToast={triggerToast} setUser={setUser} /> : <Navigate to="/" />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
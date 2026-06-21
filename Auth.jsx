import React, { useState } from 'react';

const Auth = ({ setUser, triggerToast }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isLogin ? 'login' : 'register';
    const payload = isLogin ? { email, password } : { name, email, password };
    
    try {
      const response = await fetch(`http://localhost:5000/api/users/${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await response.json();
      
      if (response.ok) {
        localStorage.setItem('fitUser', JSON.stringify(data));
        setUser(data);
        triggerToast(`Welcome to FitByte, ${data.name}!`);
      } else {
        triggerToast(data.message || "Authentication error encountered.");
      }
    } catch (err) {
      triggerToast("Failed to connect to backend engine.");
    }
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', minHeight: '75vh', borderRadius: '24px', overflow: 'hidden', backgroundColor: '#0f172a', border: '1px solid #1e293b', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)', margin: '40px 0' }}>
      
      {/* Editorial Branding Panel */}
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '60px', background: 'linear-gradient(rgba(15, 23, 42, 0.1), #0f172a), url("https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div style={{ position: 'relative', zIndex: 2 }}>
          <span style={{ backgroundColor: '#3b82f6', color: 'white', padding: '6px 12px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>Next-Gen Fitness Ecosystem</span>
          <h1 style={{ fontSize: '3rem', fontWeight: '900', color: 'white', margin: '15px 0 10px 0', letterSpacing: '-1.5px', lineHeight: '1' }}>Track Everything. Accomplish Anything.</h1>
          <p style={{ color: '#94a3b8', fontSize: '1.1rem', margin: 0, lineHeight: '1.5' }}>Synchronized biometric processing, automated schedule architecture, and integrated club facility logs inside one single ecosystem.</p>
        </div>
      </div>

      {/* Form Interface Layer */}
      <div style={{ padding: '60px', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#1e293b' }}>
        <div style={{ maxWidth: '400px', width: '100%', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#f8fafc', margin: '0 0 8px 0', letterSpacing: '-0.5px' }}>
            {isLogin ? 'Sign In to Hub' : 'Create Credentials'}
          </h2>
          <p style={{ color: '#94a3b8', margin: '0 0 35px 0', fontSize: '0.95rem' }}>
            {isLogin ? 'Enter your parameters to sync active telemetry logs.' : 'Register an account structure to begin automated logging analysis.'}
          </p>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {!isLogin && (
              <div>
                <label style={{ display: 'block', color: '#94a3b8', fontSize: '0.85rem', fontWeight: '600', marginBottom: '6px' }}>Account Name</label>
                <input type="text" placeholder="e.g., Raza Chaudhary" value={name} onChange={e => setName(e.target.value)} required style={{ width: '100%', padding: '14px', boxSizing: 'border-box', borderRadius: '12px', border: '1px solid #334155', backgroundColor: '#0f172a', color: '#f8fafc', fontSize: '0.95rem', transition: 'all 0.2s' }} />
              </div>
            )}
            <div>
              <label style={{ display: 'block', color: '#94a3b8', fontSize: '0.85rem', fontWeight: '600', marginBottom: '6px' }}>Email Address</label>
              <input type="email" placeholder="student@university.edu" value={email} onChange={e => setEmail(e.target.value)} required style={{ width: '100%', padding: '14px', boxSizing: 'border-box', borderRadius: '12px', border: '1px solid #334155', backgroundColor: '#0f172a', color: '#f8fafc', fontSize: '0.95rem' }} />
            </div>
            <div>
              <label style={{ display: 'block', color: '#94a3b8', fontSize: '0.85rem', fontWeight: '600', marginBottom: '6px' }}>Security Key Password</label>
              <input type="password" placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)} required style={{ width: '100%', padding: '14px', boxSizing: 'border-box', borderRadius: '12px', border: '1px solid #334155', backgroundColor: '#0f172a', color: '#f8fafc', fontSize: '0.95rem' }} />
            </div>

            <button type="submit" style={{ padding: '16px', borderRadius: '12px', border: 'none', backgroundColor: '#3b82f6', color: 'white', fontWeight: '700', fontSize: '1rem', cursor: 'pointer', boxShadow: '0 4px 20px rgba(59, 130, 246, 0.3)', marginTop: '10px', transition: 'all 0.2s' }}>
              {isLogin ? 'Initialize Dashboard Link' : 'Generate Core Account'}
            </button>
          </form>

          <p onClick={() => setIsLogin(!isLogin)} style={{ textAlign: 'center', marginTop: '30px', cursor: 'pointer', color: '#3b82f6', fontSize: '0.95rem', fontWeight: '600' }}>
            {isLogin ? "New to platform? Set up profile framework" : 'Possess existing operational profile? Link here'}
          </p>
        </div>
      </div>

    </div>
  );
};

export default Auth;
import React, { useState } from 'react';

const Profile = ({ user, setUser, triggerToast }) => {
  const [age, setAge] = useState(user.age || 22);
  const [gender, setGender] = useState(user.gender || 'Male');
  const [height, setHeight] = useState(user.height || 175);
  const [weight, setWeight] = useState(user.weight || 70);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:5000/api/users/update/${user._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ age, gender, height, weight })
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem('fitUser', JSON.stringify(data));
        setUser(data);
        triggerToast("Biometric system metrics attributes configured successfully.");
      }
    } catch (err) {
      triggerToast("Error processing update mapping operations.");
    }
  };

  return (
    <div style={{ maxWidth: '520px', margin: '20px auto', padding: '30px', backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
      <h2 style={{ fontWeight: '800', marginTop: 0 }}>Configure Personal Biometric Attributes</h2>
      <p style={{ color: '#9ca3af', fontSize: '0.9rem', marginBottom: '25px' }}>These details populate your core algorithmic health analysis formulas.</p>
      
      <form onSubmit={handleUpdate} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.9rem', color: '#9ca3af', fontWeight: '500' }}>Age Value:</label>
          <input type="number" value={age} onChange={e => setAge(e.target.value)} style={{ width: '100%', padding: '12px', boxSizing: 'border-box', borderRadius: '8px', border: '1px solid #4b5563', backgroundColor: 'transparent', color: 'inherit' }} />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.9rem', color: '#9ca3af', fontWeight: '500' }}>Identified Biometric Gender:</label>
          <select value={gender} onChange={e => setGender(e.target.value)} style={{ width: '100%', padding: '12px', boxSizing: 'border-box', borderRadius: '8px', border: '1px solid #4b5563', backgroundColor: '#1f2937', color: 'white', cursor: 'pointer' }}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.9rem', color: '#9ca3af', fontWeight: '500' }}>Height Index Metric (cm):</label>
          <input type="number" value={height} onChange={e => setHeight(e.target.value)} style={{ width: '100%', padding: '12px', boxSizing: 'border-box', borderRadius: '8px', border: '1px solid #4b5563', backgroundColor: 'transparent', color: 'inherit' }} />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.9rem', color: '#9ca3af', fontWeight: '500' }}>Base Mass Index Scale (kg):</label>
          <input type="number" value={weight} onChange={e => setWeight(e.target.value)} style={{ width: '100%', padding: '12px', boxSizing: 'border-box', borderRadius: '8px', border: '1px solid #4b5563', backgroundColor: 'transparent', color: 'inherit' }} />
        </div>
        <button type="submit" style={{ padding: '14px', backgroundColor: '#3b82f6', color: 'white', fontWeight: 'bold', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '1rem', marginTop: '10px' }}>Commit Biometric Changes</button>
      </form>
    </div>
  );
};

export default Profile;
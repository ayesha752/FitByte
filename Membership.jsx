import React, { useState, useEffect } from 'react';

const Membership = ({ user, triggerToast }) => {
  const [membership, setMembership] = useState(null);

  useEffect(() => {
    loadMembershipData();
  }, []);

  const loadMembershipData = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/members/${user._id}`);
      const data = await res.json();
      if (res.ok) setMembership(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleCheckIn = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/members/checkin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user._id })
      });
      const data = await res.json();
      if (res.ok) {
        triggerToast(data.message);
        loadMembershipData();
      } else {
        triggerToast(data.message || "Failed check-in operations validation error.");
      }
    } catch (err) {
      triggerToast("Network operational pipeline check-in error.");
    }
  };

  if (!membership) return <h3 style={{ textAlign: 'center', marginTop: '50px' }}>Syncing student authorization index parameters...</h3>;

  return (
    <div style={{ maxWidth: '750px', margin: '0 auto' }}>
      <h1 style={{ fontWeight: '800' }}>Gym Membership Management Portal</h1>
      <p style={{ color: '#9ca3af', marginBottom: '35px' }}>Verify active programmatic credentials and record student daily check-in logs history.</p>
      
      <div style={{ padding: '30px', backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)', marginBottom: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
        <div>
          <h3 style={{ margin: '0 0 6px 0', fontWeight: '700', fontSize: '1.3rem' }}>Tier Tier Status: <span style={{ color: '#10b981' }}>{membership.membershipType} Plan</span></h3>
          <p style={{ color: '#9ca3af', margin: 0, fontSize: '0.95rem' }}>Account Standing Verification: 🟢 Active System Standing</p>
        </div>
        <button onClick={handleCheckIn} style={{ padding: '14px 24px', backgroundColor: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', fontSize: '0.95rem', cursor: 'pointer', boxShadow: '0 4px 12px rgba(59,130,246,0.2)' }}>
          🎯 Log Today's Gym Attendance Check-in
        </button>
      </div>

      <div style={{ padding: '28px', backgroundColor: 'rgba(255,255,255,0.01)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
        <h3 style={{ marginTop: 0, fontWeight: '700', marginBottom: '18px' }}>Verified Digital Logs History ({membership.attendanceLogs.length} verified check-ins)</h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          {membership.attendanceLogs.map((dateStr, index) => (
            <span key={index} style={{ padding: '8px 16px', backgroundColor: 'rgba(16,185,129,0.08)', color: '#10b981', border: '1px solid rgba(16,185,129,0.3)', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600' }}>
              ✓ Check-in: {dateStr}
            </span>
          ))}
          {membership.attendanceLogs.length === 0 && <p style={{ color: '#6b7280', margin: 0, fontSize: '0.95rem' }}>No automated attendance records verified inside system yet.</p>}
        </div>
      </div>
    </div>
  );
};

export default Membership;
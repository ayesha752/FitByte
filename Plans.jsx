import React, { useState, useEffect } from 'react';

const Plans = () => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');

  useEffect(() => {
    loadSchedules();
  }, [searchTerm, selectedType]);

  const loadSchedules = async () => {
    try {
      const url = `http://localhost:5000/api/plans?type=${selectedType}&search=${searchTerm}`;
      const res = await fetch(url);
      const data = await res.json();
      if (res.ok) setItems(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ fontFamily: '"Inter", sans-serif' }}>
      
      {/* Editorial Catalog Hero Banner Section */}
      <div style={{ 
        position: 'relative', overflow: 'hidden', borderRadius: '24px', 
        marginBottom: '45px', minHeight: '280px', display: 'flex', 
        alignItems: 'center', padding: '0 60px',
        background: 'linear-gradient(90deg, #090d16 50%, rgba(9, 13, 22, 0.2) 100%), url("https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=1200&q=80")',
        backgroundSize: 'cover', backgroundPosition: 'center', border: '1px solid #1e293b'
      }}>
        <div style={{ maxWidth: '600px', zIndex: 2 }}>
          <span style={{ color: '#10b981', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem', fontWeight: '800' }}>Architecture Library</span>
          <h1 style={{ fontFamily: '"Outfit", sans-serif', fontSize: '2.6rem', fontWeight: '900', margin: '10px 0', letterSpacing: '-1.5px', color: '#fff' }}>
            Operational Schedules
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: '1.5', margin: 0 }}>
            Query macro-nutrient preset tables, hyper-targeted workout splits, and cross-reference records verified by accredited coaching entities.
          </p>
        </div>
      </div>

      {/* Professional Search/Filter Workspace Bar */}
      <div style={{ 
        display: 'flex', gap: '20px', alignItems: 'center', margin: '35px 0', flexWrap: 'wrap', 
        backgroundColor: '#0f172a', padding: '24px', borderRadius: '16px', border: '1px solid #1e293b' 
      }}>
        <div style={{ flex: 3, minWidth: '280px' }}>
          <input 
            type="text" 
            placeholder="🔍 Enter verification search string parameters (e.g., Strength, Bulking, Coach)..." 
            value={searchTerm} 
            onChange={e => setSearchTerm(e.target.value)}
            style={{ width: '100%', padding: '14px 18px', boxSizing: 'border-box', borderRadius: '10px', border: '1px solid #334155', backgroundColor: '#1e293b', color: '#fff', fontSize: '0.95rem' }} 
          />
        </div>
        <div style={{ flex: 1, minWidth: '200px' }}>
          <select 
            value={selectedType} 
            onChange={e => setSelectedType(e.target.value)}
            style={{ width: '100%', padding: '14px 18px', boxSizing: 'border-box', borderRadius: '10px', border: '1px solid #334155', backgroundColor: '#1e293b', color: '#fff', fontSize: '0.95rem', fontWeight: '600', cursor: 'pointer' }}
          >
            <option value="">All Matrix Categories</option>
            <option value="diet">Dietary Regimens</option>
            <option value="workout">Training Split Frameworks</option>
            <option value="trainer">Accredited Consultants</option>
          </select>
        </div>
      </div>

      {/* Production Web App Grid Layout */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '35px' }}>
        {items.map(item => (
          <div key={item._id} style={{ 
            backgroundColor: '#0f172a', borderRadius: '20px', overflow: 'hidden', 
            border: '1px solid #1e293b', display: 'flex', flexDirection: 'column',
            boxShadow: '0 15px 35px rgba(0,0,0,0.4)', transition: 'all 0.3s ease'
          }}>
            {item.imageUrl && (
              <div style={{ position: 'relative', width: '100%', height: '220px', overflow: 'hidden' }}>
                <img src={item.imageUrl} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ 
                  position: 'absolute', bottom: '15px', left: '15px', 
                  backgroundColor: '#2563eb', color: '#fff', padding: '5px 14px', 
                  borderRadius: '12px', fontSize: '0.75rem', fontWeight: '700', 
                  textTransform: 'uppercase', letterSpacing: '1px', fontFamily: '"Outfit", sans-serif'
                }}>
                  {item.type}
                </div>
              </div>
            )}
            
            <div style={{ padding: '30px', display: 'flex', flexDirection: 'column', flex: 1 }}>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#10b981', fontWeight: '800', letterSpacing: '1px' }}>
                {item.category || "Verified Node"}
              </span>
              <h3 style={{ margin: '8px 0 12px 0', fontFamily: '"Outfit", sans-serif', fontWeight: '800', fontSize: '1.5rem', color: '#fff', letterSpacing: '-0.5px' }}>
                {item.title}
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.6', margin: '0 0 25px 0', fontWeight: '400' }}>
                {item.description}
              </p>
              
              <div style={{ marginTop: 'auto' }}>
                <div style={{ height: '1px', backgroundColor: '#1e293b', margin: '20px 0' }} />
                <h4 style={{ margin: '0 0 12px 0', fontSize: '0.8rem', fontWeight: '700', color: '#3b82f6', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Execution Parameters:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {item.details.map((detail, idx) => (
                    <div key={idx} style={{ 
                      padding: '12px 16px', backgroundColor: '#1e293b', 
                      borderRadius: '10px', fontSize: '0.85rem', color: '#f8fafc', 
                      border: '1px solid #334155', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '10px' 
                    }}>
                      <span style={{ color: '#10b981' }}>✔</span> {detail}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Plans;
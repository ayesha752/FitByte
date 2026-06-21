import React, { useState } from 'react';

const Dashboard = ({ user, triggerToast }) => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if(newsletterEmail) {
      triggerToast("Node registered successfully inside newsletter broadcast array!");
      setNewsletterEmail('');
    }
  };

  return (
    <div style={{ backgroundColor: '#0B0F19', color: '#F8FAFC', fontFamily: '"Inter", sans-serif', overflowX: 'hidden' }}>
      
      {/* SECTION 1 – HERO SECTION */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '40px', padding: '60px 0', alignItems: 'center', minHeight: '85vh', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)', filter: 'blur(40px)', zIndex: 1 }}></div>
        <div style={{ position: 'absolute', bottom: '10%', right: '5%', width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)', filter: 'blur(5px)', zIndex: 1 }}></div>
        
        <div style={{ zIndex: 2 }}>
          <span style={{ background: 'linear-gradient(90deg, rgba(59,130,246,0.1), rgba(139,92,246,0.1))', border: '1px solid rgba(59,130,246,0.2)', color: '#3B82F6', padding: '6px 16px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1.5px' }}>v2.0 Deployment Ready</span>
          <h1 style={{ fontFamily: '"Outfit", sans-serif', fontSize: '3.8rem', fontWeight: '900', margin: '20px 0', lineHeight: '1.05', letterSpacing: '-2px', background: 'linear-gradient(to right, #F8FAFC, #94A3B8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Train Smarter.<br />Track Progress.<br /><span style={{ background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Transform Yourself.</span>
          </h1>
          <p style={{ color: '#94A3B8', fontSize: '1.15rem', lineHeight: '1.6', marginBottom: '35px', maxWidth: '520px', fontWeight: '400' }}>
            Architect personalized routine matrices, evaluate telemetry tracking streams, and unlock precise nutrition computation cycles inside a unified dark-themed dashboard pipeline.
          </p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <button onClick={() => triggerToast("Initializing secure profile connection framework...")} style={{ padding: '16px 35px', backgroundColor: '#3B82F6', color: '#F8FAFC', border: 'none', fontWeight: '700', borderRadius: '12px', fontSize: '1rem', cursor: 'pointer', boxShadow: '0 8px 25px rgba(59, 130, 246, 0.3)', fontFamily: '"Outfit", sans-serif', transition: 'transform 0.2s' }}>Start Free Trial</button>
            <button style={{ padding: '16px 35px', backgroundColor: 'transparent', color: '#F8FAFC', border: '1px solid #121826', fontWeight: '700', borderRadius: '12px', fontSize: '1rem', cursor: 'pointer', transition: 'all 0.2s' }}>Watch Interface Demo</button>
          </div>
        </div>
        
        <div style={{ zIndex: 2, position: 'relative' }}>
          <div style={{ backgroundColor: '#121826', borderRadius: '24px', border: '1px solid #121826', overflow: 'hidden', boxShadow: '0 25px 60px -15px rgba(0,0,0,0.7)' }}>
            <img src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80" alt="Telemetry Interface Mockup" style={{ width: '100%', height: '340px', objectFit: 'cover' }} />
            <div style={{ padding: '25px', display: 'flex', gap: '15px', justifyContent: 'space-between', backgroundColor: '#0B0F19' }}>
              <div style={{ backgroundColor: '#121826', padding: '15px', borderRadius: '14px', flex: 1, border: '1px solid #121826' }}>
                <span style={{ fontSize: '0.75rem', color: '#94A3B8', fontWeight: '700' }}>🔥 ENERGY TRACKER</span>
                <h3 style={{ margin: '5px 0 0 0', color: '#22C55E', fontFamily: '"Outfit", sans-serif', fontSize: '1.4rem' }}>640 / 2500 kcal</h3>
              </div>
              <div style={{ backgroundColor: '#121826', padding: '15px', borderRadius: '14px', flex: 1, border: '1px solid #121826' }}>
                <span style={{ fontSize: '0.75rem', color: '#94A3B8', fontWeight: '700' }}>⚡ METRIC INDEX</span>
                <h3 style={{ margin: '5px 0 0 0', color: '#3B82F6', fontFamily: '"Outfit", sans-serif', fontSize: '1.4rem' }}>92.4% Optimal</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 – TRUSTED USERS SECTION */}
      <section style={{ backgroundColor: '#121826', padding: '40px 5%', borderRadius: '20px', border: '1px solid #121826', display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', gap: '30px', margin: '40px 0' }}>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: '"Outfit", sans-serif', fontSize: '2.3rem', fontWeight: '900', margin: 0, color: '#F8FAFC' }}>50,000+</h2>
          <p style={{ color: '#94A3B8', fontSize: '0.85rem', margin: '5px 0 0 0', textTransform: 'uppercase', fontWeight: '700', letterSpacing: '0.5px' }}>Active System Members</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: '"Outfit", sans-serif', fontSize: '2.3rem', fontWeight: '900', margin: 0, color: '#3B82F6' }}>1M+</h2>
          <p style={{ color: '#94A3B8', fontSize: '0.85rem', margin: '5px 0 0 0', textTransform: 'uppercase', fontWeight: '700', letterSpacing: '0.5px' }}>Workouts Logged</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: '"Outfit", sans-serif', fontSize: '2.3rem', fontWeight: '900', margin: 0, color: '#8B5CF6' }}>10,000+</h2>
          <p style={{ color: '#94A3B8', fontSize: '0.85rem', margin: '5px 0 0 0', textTransform: 'uppercase', fontWeight: '700', letterSpacing: '0.5px' }}>Diet Presets Generated</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: '"Outfit", sans-serif', fontSize: '2.3rem', fontWeight: '900', margin: 0, color: '#22C55E' }}>4.9 / 5</h2>
          <p style={{ color: '#94A3B8', fontSize: '0.85rem', margin: '5px 0 0 0', textTransform: 'uppercase', fontWeight: '700', letterSpacing: '0.5px' }}>Verified User Rating</p>
        </div>
      </section>

      {/* SECTION 3 – FEATURES GRID */}
      <section style={{ padding: '60px 0' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span style={{ color: '#8B5CF6', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '0.8rem' }}>High Performance Toolkit</span>
          <h2 style={{ fontFamily: '"Outfit", sans-serif', fontSize: '2.4rem', fontWeight: '900', color: '#F8FAFC', margin: '10px 0 0 0', letterSpacing: '-1px' }}>Premium Functional Architecture</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px' }}>
          {[
            { t: "AI Workout Planner", d: "Automate target schedule splits mapped strictly via genetic training parameters database records.", i: "🤖" },
            { t: "Smart Diet Generator", d: "Compute comprehensive dynamic micro-nutrient matrices optimized for strict target weight targets.", i: "🥑" },
            { t: "Exercise Reference Library", d: "Query verified video blueprints, target vectors, and kinetic structural movement patterns.", i: "📚" },
            { t: "Progress Telemetry Analytics", d: "Stream real-time biometric datasets straight into graphical telemetry timeline blocks.", i: "📈" },
            { t: "Personal Milestone Goals", d: "Set structural target weights, performance parameters, and trigger automated verification logs.", i: "🎯" },
            { t: "Global Hub Challenges", d: "Sync active tracking arrays with the community pipeline to claim verified leaderboard rankings.", i: "🏆" }
          ].map((f, index) => (
            <div key={index} style={{ backgroundColor: '#121826', padding: '30px', borderRadius: '16px', border: '1px solid #121826', boxShadow: '0 10px 20px rgba(0,0,0,0.2)', transition: 'transform 0.2s' }}>
              <div style={{ fontSize: '2rem', marginBottom: '15px' }}>{f.i}</div>
              <h3 style={{ fontFamily: '"Outfit", sans-serif', fontWeight: '800', color: '#F8FAFC', margin: '0 0 10px 0', fontSize: '1.2rem' }}>{f.t}</h3>
              <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: '1.5', margin: 0 }}>{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4 – FITNESS DASHBOARD SHOWCASE */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '50px', padding: '60px 0', alignItems: 'center' }}>
        <div>
          <span style={{ color: '#22C55E', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '0.8rem' }}>Live Telemetry Visualizer</span>
          <h2 style={{ fontFamily: '"Outfit", sans-serif', fontSize: '2.4rem', fontWeight: '900', color: '#F8FAFC', margin: '10px 0 15px 0', letterSpacing: '-1px' }}>Deep Analytics Infrastructure</h2>
          <p style={{ color: '#94A3B8', fontSize: '1rem', lineHeight: '1.6', marginBottom: '25px' }}>
            Our visualization environment compiles incoming data streams seamlessly. Monitor complex calorie trend loops, evaluate water intake index states, and audit historical performance records within a single responsive view grid.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {["Automated verification of macro boundaries", "Dynamic index generation tracking", "Real-time query outputs directly from server logs"].map((t, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#F8FAFC', fontSize: '0.95rem', fontWeight: '600' }}>
                <span style={{ color: '#22C55E' }}>✔</span> {t}
              </div>
            ))}
          </div>
        </div>
        <div>
          <div style={{ backgroundColor: '#121826', borderRadius: '24px', padding: '30px', border: '1px solid #121826', boxShadow: '0 20px 45px rgba(0,0,0,0.5)' }}>
            <h4 style={{ margin: '0 0 20px 0', fontFamily: '"Outfit", sans-serif', fontSize: '1.1rem', color: '#3B82F6', textTransform: 'uppercase', letterSpacing: '1px' }}>Operational Statistics Center</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div style={{ backgroundColor: '#0B0F19', padding: '20px', borderRadius: '14px', border: '1px solid #121826' }}>
                <span style={{ color: '#94A3B8', fontSize: '0.8rem', fontWeight: '700' }}>CALORIES BURNED</span>
                <h3 style={{ margin: '5px 0 0 0', color: '#F8FAFC', fontSize: '1.6rem', fontWeight: '800' }}>1,420 kcal</h3>
              </div>
              <div style={{ backgroundColor: '#0B0F19', padding: '20px', borderRadius: '14px', border: '1px solid #121826' }}>
                <span style={{ color: '#94A3B8', fontSize: '0.8rem', fontWeight: '700' }}>COMPLETION RATE</span>
                <h3 style={{ margin: '5px 0 0 0', color: '#8B5CF6', fontSize: '1.6rem', fontWeight: '800' }}>94.2%</h3>
              </div>
            </div>
            <div style={{ marginTop: '20px', backgroundColor: '#0B0F19', padding: '20px', borderRadius: '14px', height: '120px', border: '1px solid #121826', display: 'flex', alignItems: 'flex-end', justifyContents: 'space-between', gap: '15px' }}>
              {[40, 70, 55, 90, 65, 85, 100].map((h, i) => (
                <div key={i} style={{ flex: 1, height: `${h}%`, backgroundColor: '#3B82F6', borderRadius: '4px 4px 0 0' }}></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 – WORKOUT PROGRAMS */}
      <section style={{ padding: '60px 0' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span style={{ color: '#3B82F6', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '0.8rem' }}>Targeted Splitting Blocks</span>
          <h2 style={{ fontFamily: '"Outfit", sans-serif', fontSize: '2.4rem', fontWeight: '900', color: '#F8FAFC', margin: '10px 0 0 0', letterSpacing: '-1px' }}>Curated Physical Architecture</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
          {[
            { t: "Hypertrophic Muscle Gain", d: "Rigid programmatic progression frameworks optimized for maximum lean tissue synthesis loops.", img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=500&q=80", dur: "8 Weeks", diff: "Advanced" },
            { t: "Aggressive Mass Reduction", d: "High kinetic output schedules engineered to maximize raw thermodynamic daily calorie spending.", img: "https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?auto=format&fit=crop&w=500&q=80", dur: "6 Weeks", diff: "Intermediate" },
            { t: "Absolute Strength Scaling", d: "Neuromuscular threshold focus utilizing calculated compound mechanical adaptation matrices.", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=500&q=80", dur: "12 Weeks", diff: "Elite" }
          ].map((p, idx) => (
            <div key={idx} style={{ backgroundColor: '#121826', borderRadius: '20px', overflow: 'hidden', border: '1px solid #121826', boxShadow: '0 15px 30px rgba(0,0,0,0.3)' }}>
              <img src={p.img} alt={p.t} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ padding: '25px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <span style={{ color: '#3B82F6', fontSize: '0.8rem', fontWeight: '700' }}>⏱ {p.dur}</span>
                  <span style={{ backgroundColor: 'rgba(139,92,246,0.1)', color: '#8B5CF6', padding: '2px 10px', borderRadius: '10px', fontSize: '0.75rem', fontWeight: '700' }}>{p.diff}</span>
                </div>
                <h3 style={{ fontFamily: '"Outfit", sans-serif', fontWeight: '800', margin: '0 0 10px 0', fontSize: '1.3rem', color: '#F8FAFC' }}>{p.t}</h3>
                <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: '1.5', marginBottom: '20px' }}>{p.d}</p>
                <button onClick={() => triggerToast("Compiling pipeline access credentials for chosen split template...")} style={{ width: '100%', padding: '12px', backgroundColor: '#0B0F19', color: '#F8FAFC', border: '1px solid #121826', borderRadius: '10px', fontWeight: '700', cursor: 'pointer', transition: 'all 0.2s' }}>Initialize Routine Block</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6 – DIET PLANS */}
      <section style={{ padding: '60px 0' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span style={{ color: '#8B5CF6', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '0.8rem' }}>Macro Nutrient Allocation</span>
          <h2 style={{ fontFamily: '"Outfit", sans-serif', fontSize: '2.4rem', fontWeight: '900', color: '#F8FAFC', margin: '10px 0 0 0', letterSpacing: '-1px' }}>Premium Nutritional Formulations</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
          {[
            { t: "Clean Ketogenic Protocol", c: "2100", p: "145g", f: "160g", carb: "20g", img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=500&q=80" },
            { t: "High Protein Recomp Plan", c: "2400", p: "210g", f: "65g", carb: "180g", img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=500&q=80" },
            { t: "Plant-Based Performance Plan", c: "2250", p: "135g", f: "70g", carb: "245g", img: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=500&q=80" }
          ].map((d, i) => (
            <div key={i} style={{ backgroundColor: '#121826', borderRadius: '20px', border: '1px solid #121826', overflow: 'hidden', padding: '25px' }}>
              <img src={d.img} alt={d.t} style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: '14px', marginBottom: '20px' }} />
              <h3 style={{ fontFamily: '"Outfit", sans-serif', fontWeight: '800', color: '#F8FAFC', margin: '0 0 15px 0', fontSize: '1.3rem' }}>{d.t}</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', textAlign: 'center', marginBottom: '20px' }}>
                <div style={{ backgroundColor: '#0B0F19', padding: '10px', borderRadius: '10px' }}><span style={{ display: 'block', fontSize: '0.75rem', color: '#94A3B8' }}>CAL</span><strong style={{ color: '#3B82F6' }}>{d.c}</strong></div>
                <div style={{ backgroundColor: '#0B0F19', padding: '10px', borderRadius: '10px' }}><span style={{ display: 'block', fontSize: '0.75rem', color: '#94A3B8' }}>PRO</span><strong style={{ color: '#22C55E' }}>{d.p}</strong></div>
                <div style={{ backgroundColor: '#0B0F19', padding: '10px', borderRadius: '10px' }}><span style={{ display: 'block', fontSize: '0.75rem', color: '#94A3B8' }}>FAT</span><strong style={{ color: '#8B5CF6' }}>{d.f}</strong></div>
                <div style={{ backgroundColor: '#0B0F19', padding: '10px', borderRadius: '10px' }}><span style={{ display: 'block', fontSize: '0.75rem', color: '#94A3B8' }}>CARB</span><strong>{d.carb}</strong></div>
              </div>
              <button onClick={() => triggerToast("Parsing nutritional grid array specifications to node context...")} style={{ width: '100%', padding: '12px', backgroundColor: '#3B82F6', color: '#F8FAFC', border: 'none', fontWeight: '700', borderRadius: '10px', cursor: 'pointer' }}>Generate Grocery Manifest</button>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 7 – PROGRESS TRACKING */}
      <section style={{ padding: '60px 0', backgroundColor: '#121826', borderRadius: '24px', padding: '40px', border: '1px solid #121826', margin: '40px 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '35px', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <span style={{ color: '#22C55E', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '0.8rem' }}>Database Analytics Loop</span>
            <h2 style={{ fontFamily: '"Outfit", sans-serif', fontSize: '2.2rem', fontWeight: '900', color: '#F8FAFC', margin: '5px 0 0 0' }}>Serialized Historical Validation</h2>
          </div>
          <div style={{ backgroundColor: '#0B0F19', padding: '10px 20px', borderRadius: '12px', border: '1px solid #121826', color: '#94A3B8', fontSize: '0.85rem', fontWeight: '700' }}>
            Telemetry Pipeline: <span style={{ color: '#22C55E' }}>ACTIVE STREAMING</span>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '25px' }}>
          <div style={{ backgroundColor: '#0B0F19', padding: '25px', borderRadius: '16px', border: '1px solid #121826' }}>
            <span style={{ color: '#94A3B8', fontSize: '0.8rem', fontWeight: '700' }}>WEIGHT TRACKING LOGS</span>
            <h3 style={{ margin: '5px 0 15px 0', fontSize: '1.8rem', color: '#F8FAFC', fontWeight: '800' }}>-4.2 kg This Month</h3>
            <div style={{ height: '60px', backgroundColor: 'rgba(34,197,94,0.05)', borderRadius: '8px', border: '1px dashed #22C55E' }}></div>
          </div>
          <div style={{ backgroundColor: '#0B0F19', padding: '25px', borderRadius: '16px', border: '1px solid #121826' }}>
            <span style={{ color: '#94A3B8', fontSize: '0.8rem', fontWeight: '700' }}>FREQUENCY FACTOR</span>
            <h3 style={{ margin: '5px 0 15px 0', fontSize: '1.8rem', color: '#F8FAFC', fontWeight: '800' }}>5.2 Days / Wk</h3>
            <div style={{ height: '60px', backgroundColor: 'rgba(59,130,246,0.05)', borderRadius: '8px', border: '1px dashed #3B82F6' }}></div>
          </div>
          <div style={{ backgroundColor: '#0B0F19', padding: '25px', borderRadius: '16px', border: '1px solid #121826' }}>
            <span style={{ color: '#94A3B8', fontSize: '0.8rem', fontWeight: '700' }}>GOAL COMPLETION INDEX</span>
            <h3 style={{ margin: '5px 0 15px 0', fontSize: '1.8rem', color: '#F8FAFC', fontWeight: '800' }}>88.7% Operational</h3>
            <div style={{ height: '60px', backgroundColor: 'rgba(139,92,246,0.05)', borderRadius: '8px', border: '1px dashed #8B5CF6' }}></div>
          </div>
        </div>
      </section>

      {/* SECTION 8 – EXERCISE LIBRARY */}
      <section style={{ padding: '60px 0' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span style={{ color: '#3B82F6', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '0.8rem' }}>Kinetic Movement Datasets</span>
          <h2 style={{ fontFamily: '"Outfit", sans-serif', fontSize: '2.4rem', fontWeight: '900', color: '#F8FAFC', margin: '10px 0 0 0', letterSpacing: '-1px' }}>Biomechanical Vector Directory</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '20px' }}>
          {[
            { n: "Pectoral Core", c: "142 Vectors", img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=300&q=80" },
            { n: "Posterior Chain", c: "115 Vectors", img: "https://images.unsplash.com/photo-1603287634276-ae48de31a7f4?auto=format&fit=crop&w=300&q=80" },
            { n: "Quadriceps / Glutes", c: "168 Vectors", img: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=300&q=80" },
            { n: "Deltoid Matrix", c: "98 Vectors", img: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=300&q=80" },
            { n: "Arm Hypertrophy", c: "130 Vectors", img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=300&q=80" },
            { n: "Abdominal Stability", c: "84 Vectors", img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=300&q=80" }
          ].map((ex, i) => (
            <div key={i} style={{ backgroundColor: '#121826', borderRadius: '16px', overflow: 'hidden', border: '1px solid #121826', textAlign: 'center', boxShadow: '0 8px 16px rgba(0,0,0,0.2)' }}>
              <img src={ex.img} alt={ex.n} style={{ width: '100%', height: '120px', objectFit: 'cover' }} />
              <div style={{ padding: '15px' }}>
                <h4 style={{ margin: '0 0 5px 0', fontFamily: '"Outfit", sans-serif', color: '#F8FAFC', fontSize: '1rem' }}>{ex.n}</h4>
                <span style={{ fontSize: '0.8rem', color: '#94A3B8', display: 'block', marginBottom: '12px' }}>{ex.c}</span>
                <button onClick={() => triggerToast(`Pulling structural indices array for category node: ${ex.n}`)} style={{ padding: '6px 12px', width: '100%', backgroundColor: '#0B0F19', border: '1px solid #121826', color: '#3B82F6', borderRadius: '8px', fontSize: '0.75rem', fontWeight: '700', cursor: 'pointer' }}>Explore Library</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 9 – TRAINERS SECTION */}
      <section style={{ padding: '60px 0' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span style={{ color: '#8B5CF6', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '0.8rem' }}>Accredited Subject Matter Experts</span>
          <h2 style={{ fontFamily: '"Outfit", sans-serif', fontSize: '2.4rem', fontWeight: '900', color: '#F8FAFC', margin: '10px 0 0 0', letterSpacing: '-1px' }}>Elite Human Architecture Node Consultants</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
          {[
            { n: "Coach Raza Chaudhary", s: "Kinetic Hypertrophy & Bio-Mechanics", e: "8 Yrs Experience", r: "★ 4.95", img: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=400&q=80" },
            { n: "Sarah Jenkins, RD", s: "Clinical Endocrinology & Performance Diets", e: "6 Yrs Experience", r: "★ 4.91", img: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=400&q=80" },
            { n: "Marcus Vance", s: "Neuromuscular Threshold Strength Conditioning", e: "11 Yrs Experience", r: "★ 4.98", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=400&q=80" }
          ].map((t, i) => (
            <div key={i} style={{ backgroundColor: '#121826', borderRadius: '20px', overflow: 'hidden', border: '1px solid #121826', boxShadow: '0 12px 25px rgba(0,0,0,0.3)' }}>
              <img src={t.img} alt={t.n} style={{ width: '100%', height: '240px', objectFit: 'cover' }} />
              <div style={{ padding: '25px' }}>
                <span style={{ color: '#22C55E', fontSize: '0.75rem', fontWeight: '700' }}>{t.r}</span>
                <h3 style={{ fontFamily: '"Outfit", sans-serif', fontWeight: '800', margin: '5px 0', fontSize: '1.3rem', color: '#F8FAFC' }}>{t.n}</h3>
                <p style={{ color: '#3B82F6', fontSize: '0.85rem', margin: '0 0 8px 0', fontWeight: '700' }}>{t.s}</p>
                <p style={{ color: '#94A3B8', fontSize: '0.85rem', margin: '0 0 20px 0' }}>{t.e}</p>
                <button onClick={() => triggerToast(`Opening communication tunnel configuration with ${t.n}...`)} style={{ width: '100%', padding: '12px', backgroundColor: '#3B82F6', color: '#F8FAFC', border: 'none', fontWeight: '700', borderRadius: '10px', cursor: 'pointer' }}>Reserve Strategy Session</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 10 – TRANSFORMATION STORIES */}
      <section style={{ padding: '60px 0', backgroundColor: '#121826', borderRadius: '24px', padding: '40px', border: '1px solid #121826', margin: '40px 0' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span style={{ color: '#22C55E', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '0.8rem' }}>Empirical Verification Matrix</span>
          <h2 style={{ fontFamily: '"Outfit", sans-serif', fontSize: '2.4rem', fontWeight: '900', color: '#F8FAFC', margin: '10px 0 0 0', letterSpacing: '-1px' }}>Validation Success Case Studies</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '30px' }}>
          {[
            { name: "Ahmed R.", change: "96kg ➔ 81kg", time: "16 Weeks Loop", story: "By parsing routine generation parameters using the automated system splits, my absolute power output scales doubled while dropping body lipid count cleanly.", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80" },
            { name: "Mariam V.", change: "54kg ➔ 59kg Lean Mass", time: "24 Weeks Loop", story: "The dynamic micro nutrient serialization database records completely stabilized my structural energy levels. A pristine environment for final engineering presentation modeling.", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80" }
          ].map((st, i) => (
            <div key={i} style={{ backgroundColor: '#0B0F19', padding: '25px', borderRadius: '20px', border: '1px solid #121826', display: 'flex', gap: '20px', alignItems: 'center' }}>
              <img src={st.img} alt={st.name} style={{ width: '90px', height: '90px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #3B82F6' }} />
              <div>
                <h4 style={{ margin: 0, fontSize: '1.1rem', color: '#F8FAFC', fontFamily: '"Outfit", sans-serif' }}>{st.name}</h4>
                <span style={{ color: '#22C55E', fontSize: '0.8rem', fontWeight: '700', display: 'block', margin: '4px 0' }}>{st.change} ({st.time})</span>
                <p style={{ color: '#94A3B8', fontSize: '0.85rem', margin: 0, lineHeight: '1.4' }}>"{st.story}"</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 11 – FITNESS CHALLENGES */}
      <section style={{ padding: '60px 0' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span style={{ color: '#3B82F6', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '0.8rem' }}>Array Verification Synchronicity</span>
          <h2 style={{ fontFamily: '"Outfit", sans-serif', fontSize: '2.4rem', fontWeight: '900', color: '#F8FAFC', margin: '10px 0 0 0', letterSpacing: '-1px' }}>Active Synchronization Protocols</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px' }}>
          {[
            { t: "30-Day Lean Shred Loop", p: "12,420 Active", progress: "74%", c: "#3B82F6" },
            { t: "10K Kinetic Step Routine", p: "8,115 Active", progress: "42%", c: "#22C55E" },
            { t: "Alpha Compound Strength Matrix", p: "4,950 Active", progress: "91%", c: "#8B5CF6" }
          ].map((ch, i) => (
            <div key={i} style={{ backgroundColor: '#121826', padding: '30px', borderRadius: '20px', border: '1px solid #121826', boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}>
              <h3 style={{ fontFamily: '"Outfit", sans-serif', fontWeight: '800', color: '#F8FAFC', margin: '0 0 8px 0', fontSize: '1.2rem' }}>{ch.t}</h3>
              <span style={{ fontSize: '0.85rem', color: '#94A3B8', display: 'block', marginBottom: '20px' }}>⚡ {ch.p} Nodes Enrolled</span>
              <div style={{ width: '100%', height: '8px', backgroundColor: '#0B0F19', borderRadius: '4px', overflow: 'hidden', marginBottom: '10px' }}>
                <div style={{ width: ch.progress, height: '100%', backgroundColor: ch.c, borderRadius: '4px' }}></div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '15px' }}>
                <span style={{ fontSize: '0.8rem', color: '#94A3B8', fontWeight: '700' }}>Global Array Progression: {ch.progress}</span>
                <button onClick={() => triggerToast(`Syncing credentials to baseline tracking cluster for challenge: ${ch.t}`)} style={{ padding: '8px 16px', backgroundColor: 'transparent', color: '#F8FAFC', border: `1px solid ${ch.c}`, borderRadius: '8px', fontSize: '0.75rem', fontWeight: '700', cursor: 'pointer' }}>Sync Account</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 12 – MOBILE APP SHOWCASE */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '50px', padding: '60px 0', alignItems: 'center' }}>
        <div>
          <div style={{ position: 'relative', width: '280px', height: '560px', backgroundColor: '#121826', borderRadius: '40px', border: '4px solid #121826', margin: '0 auto', overflow: 'hidden', boxShadow: '0 30px 70px rgba(0,0,0,0.6)' }}>
            <div style={{ position: 'absolute', top: '0', left: '50%', transform: 'translateX(-50%)', width: '120px', height: '25px', backgroundColor: '#0B0F19', borderRadius: '0 0 15px 15px', zIndex: 10 }}></div>
            <img src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=400&q=80" alt="Mobile App UI View" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
        <div>
          <span style={{ color: '#8B5CF6', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '0.8rem' }}>Sub-Zero Latency Mobile Access</span>
          <h2 style={{ fontFamily: '"Outfit", sans-serif', fontSize: '2.4rem', fontWeight: '900', color: '#F8FAFC', margin: '10px 0 15px 0', letterSpacing: '-1px' }}>Native Telemetry Edge Nodes</h2>
          <p style={{ color: '#94A3B8', fontSize: '1rem', lineHeight: '1.6', marginBottom: '30px' }}>
            Compile incoming telemetry values even while completely offline. Our native system engine auto-serializes localized database logs, refreshing target cloud clusters instantly upon active data connection link up.
          </p>
          <div style={{ display: 'flex', gap: '15px' }}>
            <div onClick={() => triggerToast("Redirecting to App Store binary gateway...")} style={{ backgroundColor: '#121826', padding: '12px 24px', borderRadius: '12px', border: '1px solid #121826', display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
              <span style={{ fontSize: '1.5rem' }}>🍏</span>
              <div><span style={{ display: 'block', fontSize: '0.65rem', color: '#94A3B8' }}>DOWNLOAD ON</span><strong style={{ fontSize: '0.85rem', color: '#F8FAFC' }}>Apple App Store</strong></div>
            </div>
            <div onClick={() => triggerToast("Redirecting to Google Play repository bundle...")} style={{ backgroundColor: '#121826', padding: '12px 24px', borderRadius: '12px', border: '1px solid #121826', display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
              <span style={{ fontSize: '1.5rem' }}>🤖</span>
              <div><span style={{ display: 'block', fontSize: '0.65rem', color: '#94A3B8' }}>GET IT ON</span><strong style={{ fontSize: '0.85rem', color: '#F8FAFC' }}>Google Play Store</strong></div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 13 – TESTIMONIALS */}
      <section style={{ padding: '60px 0', textAlign: 'center' }}>
        <span style={{ color: '#3B82F6', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '0.8rem' }}>Consensus Array Metrics</span>
        <h2 style={{ fontFamily: '"Outfit", sans-serif', fontSize: '2.4rem', fontWeight: '900', color: '#F8FAFC', margin: '10px 0 45px 0', letterSpacing: '-1px' }}>User Environment Evaluations</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px', textAlign: 'left' }}>
          {[
            { u: "Zayn Malik", r: "The UI layout architecture of this telemetry tracker matches professional standards flawlessly. The data mapping pipeline updates without lag loops.", s: "★ ★ ★ ★ ★" },
            { u: "Ayesha Khan", r: "Highly recommended for engineering audits. The database serialization engine parses my macro targets flawlessly with zero validation exception failures.", s: "★ ★ ★ ★ ★" },
            { u: "Dr. Hamza Ali", r: "Clinical grade kinetic formulation. The biomechanical movement tracking modules outperform generic tracking applications completely.", s: "★ ★ ★ ★ ★" }
          ].map((te, idx) => (
            <div key={idx} style={{ backgroundColor: '#121826', padding: '30px', borderRadius: '16px', border: '1px solid #121826', boxShadow: '0 8px 16px rgba(0,0,0,0.2)' }}>
              <div style={{ color: '#22C55E', marginBottom: '12px', fontSize: '1.1rem' }}>{te.s}</div>
              <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: '1.6', margin: '0 0 20px 0', fontStyle: 'italic' }}>"{te.r}"</p>
              <h4 style={{ margin: 0, fontFamily: '"Outfit", sans-serif', color: '#F8FAFC', fontSize: '1rem' }}>{te.u}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 14 – FAQ SECTION */}
      <section style={{ padding: '60px 0', maxWidth: '750px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '45px' }}>
          <span style={{ color: '#8B5CF6', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '0.8rem' }}>Information Architecture Matrix</span>
          <h2 style={{ fontFamily: '"Outfit", sans-serif', fontSize: '2.4rem', fontWeight: '900', color: '#F8FAFC', margin: '10px 0 0 0', letterSpacing: '-1px' }}>Frequently Queried Exceptions</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {[
            { q: "How does the automated workout planning structure execute?", a: "The architecture reads parameters directly from your biometric target database, compiling structural split maps via automated algorithm execution layers." },
            { q: "Can I customize the structural macro constraints of target diets?", a: "Yes, you can inject explicit overriding calorie limits and specific gram requirements cleanly via the profile settings node interface." },
            { q: "Is heavy gym equipment mandatory to complete processing splits?", a: "No, our library contains over 80+ structural home weight vectors that parse efficiently using body mass variables exclusively." },
            { q: "Are performance parameters logged automatically to the cluster?", a: "All transactions pushed via the entry updates forms commit straight to local states and execute instantaneous synchronization to the cloud endpoint database loops." },
            { q: "Can completely unconditioned user profiles interface safely with the app?", a: "Yes, beginner baseline difficulty configuration keys are available on all main control vectors to securely scale progressive volume constraints." }
          ].map((f, i) => (
            <div key={i} style={{ backgroundColor: '#121826', borderRadius: '12px', border: '1px solid #121826', overflow: 'hidden' }}>
              <div onClick={() => toggleFaq(i)} style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', fontWeight: '700', color: '#F8FAFC', fontSize: '1.05rem' }}>
                <span>{f.q}</span>
                <span style={{ color: '#3B82F6' }}>{activeFaq === i ? '▲' : '▼'}</span>
              </div>
              {activeFaq === i && (
                <div style={{ padding: '0 20px 20px 20px', color: '#94A3B8', fontSize: '0.9rem', lineHeight: '1.5', borderTop: '1px solid #0B0F19', paddingTop: '15px' }}>
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 15 – NEWSLETTER SECTION */}
      <section style={{ background: 'linear-gradient(135deg, #121826 0%, #0B0F19 100%)', padding: '60px 5%', borderRadius: '24px', border: '1px solid #121826', margin: '60px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <span style={{ color: '#22C55E', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '0.8rem' }}>Array Broadcast Registration</span>
        <h2 style={{ fontFamily: '"Outfit", sans-serif', fontSize: '2.5rem', fontWeight: '900', color: '#F8FAFC', margin: '10px 0 15px 0', maxWidth: '600px', letterSpacing: '-1px' }}>Join Thousands Auditing Habits Explicitly</h2>
        <p style={{ color: '#94A3B8', fontSize: '1rem', maxWidth: '500px', marginBottom: '30px', lineHeight: '1.6' }}>Subscribe to the data broadcast stream to fetch weekly telemetry insights, structural script enhancements, and core routine templates.</p>
        <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '15px', width: '100%', maxWidth: '480px', flexWrap: 'wrap' }}>
          <input 
            type="email" 
            placeholder="Enter active secure email address node..." 
            value={newsletterEmail}
            onChange={e => setNewsletterEmail(e.target.value)}
            required 
            style={{ flex: 2, minWidth: '240px', padding: '16px 20px', borderRadius: '12px', border: '1px solid #334155', backgroundColor: '#0B0F19', color: '#F8FAFC', fontSize: '0.95rem' }} 
          />
          <button type="submit" style={{ flex: 1, minWidth: '140px', padding: '16px 25px', backgroundColor: '#3B82F6', color: '#F8FAFC', border: 'none', borderRadius: '12px', fontWeight: '700', fontSize: '0.95rem', cursor: 'pointer', fontFamily: '"Outfit", sans-serif' }}>Subscribe Node</button>
        </form>
      </section>

      {/* SECTION 16 – FINAL CTA BANNER */}
      <section style={{ background: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)', padding: '70px 5%', borderRadius: '24px', textAlign: 'center', margin: '40px 0 80px 0', boxShadow: '0 25px 50px -12px rgba(59,130,246,0.4)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.15)', zIndex: 1 }}></div>
        <div style={{ position: 'relative', zIndex: 2 }}>
          <h2 style={{ fontFamily: '"Outfit", sans-serif', fontSize: '2.8rem', fontWeight: '900', color: '#F8FAFC', margin: '0 0 12px 0', letterSpacing: '-1px' }}>Initialize Your Metric Journey Today</h2>
          <p style={{ color: 'rgba(248,250,252,0.85)', fontSize: '1.1rem', maxWidth: '580px', margin: '0 auto 35px auto', lineHeight: '1.5' }}>Synchronize your localized node setup blocks to begin profiling telemetry streams dynamically inside the unified analytics interface.</p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => triggerToast("Compiling master profile gateway configuration...")} style={{ padding: '16px 35px', backgroundColor: '#0B0F19', color: '#F8FAFC', border: 'none', borderRadius: '12px', fontWeight: '800', fontSize: '1rem', cursor: 'pointer', fontFamily: '"Outfit", sans-serif' }}>Get Started Instantly</button>
            <button style={{ padding: '16px 35px', backgroundColor: 'transparent', color: '#F8FAFC', border: '1px solid rgba(248,250,252,0.4)', borderRadius: '12px', fontWeight: '700', fontSize: '1rem', cursor: 'pointer' }}>View Tier Options</button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Dashboard;
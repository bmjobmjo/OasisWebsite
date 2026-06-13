import React, { useEffect } from 'react';
import { ArrowLeft, Server, ShieldCheck, Layers, Zap, Mail, Send, MessageCircle } from 'lucide-react';
import './index.css';

export default function WebSettings({ onBack }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="settings-page">
      <div className="container">
        <button className="btn btn-secondary" onClick={onBack} style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <ArrowLeft size={18} /> Back to Home
        </button>

        <div className="content-container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--text-main)' }}>Web Application Setup & Settings</h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
              Scale your systems for multi-user collaboration and full office automation. Deploy the full-fledged OASIS web application on any server for centralized, organization-wide access.
            </p>
          </div>

          <div style={{ background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.1) 0%, rgba(14, 165, 233, 0) 100%)', padding: '3rem', borderRadius: '1rem', border: '1px solid var(--border)', marginBottom: '3rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
               <div>
                <h3 style={{ marginBottom: '1rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Server size={24} color="var(--accent)" /> Web Deployment</h3>
                <p style={{ color: 'var(--text-muted)' }}>Deploy the full-fledged OASIS web application on any VPS or server for centralized, organization-wide access.</p>
              </div>
              <div>
                <h3 style={{ marginBottom: '1rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><ShieldCheck size={24} color="var(--accent)" /> Enterprise Security</h3>
                <p style={{ color: 'var(--text-muted)' }}>Create users, define granular permissions, and set up strict user-level access controls for the entire system.</p>
              </div>
              <div>
                <h3 style={{ marginBottom: '1rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Layers size={24} color="var(--accent)" /> Shared Workflows</h3>
                <p style={{ color: 'var(--text-muted)' }}>Transition from personal tools to multi-user office automation systems where your entire team can collaborate.</p>
              </div>
              <div>
                <h3 style={{ marginBottom: '1rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Zap size={24} color="var(--accent)" /> Recommended Path</h3>
                <p style={{ color: 'var(--text-muted)' }}><strong>Pro Tip:</strong> Develop and test your agents on the Desktop App first, then seamlessly port the proven workflows to your live Web App server.</p>
              </div>
            </div>
            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
              <div style={{ display: 'inline-block', background: 'rgba(245, 158, 11, 0.05)', color: '#f59e0b', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid rgba(245, 158, 11, 0.2)', textAlign: 'left', maxWidth: '800px', margin: '0 auto' }}>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: 0, marginBottom: '0.75rem', fontSize: '1.2rem', color: '#f59e0b' }}>
                  <Zap size={20} /> Releasing soon by the end of June 2026
                </h4>
                <p style={{ color: 'var(--text-main)', lineHeight: '1.6', fontSize: '1rem', marginBottom: '0.75rem' }}>
                  Meanwhile, we recommend playing with the desktop application and preparing your agents and system to get ready to host the real web application.
                </p>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '0.95rem', margin: 0 }}>
                  If you can't wait, you can just build it from the source as it is already there in the repository. I just want to test it on a server and make sure it is working smoothly on an Ubuntu machine, and I also want to set up a live demo site. <strong>Waiting for a sponsor!</strong>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

import React, { useEffect } from 'react';
import { ArrowLeft, Server, ShieldCheck, Layers, Zap, Mail, Send, MessageCircle, Download } from 'lucide-react';
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
            <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
              
              {/* Windows Web Release Card */}
              <div style={{ 
                width: '100%', 
                maxWidth: '800px', 
                background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(16, 185, 129, 0.02) 100%)', 
                border: '1px solid rgba(16, 185, 129, 0.2)', 
                borderRadius: '0.75rem', 
                padding: '2rem', 
                textAlign: 'left',
                boxShadow: '0 4px 20px rgba(0,0,0,0.15)'
              }}>
                <h4 style={{ color: '#10b981', display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: 0, marginBottom: '0.75rem', fontSize: '1.25rem', fontWeight: 'bold' }}>
                  <Server size={20} color="#10b981" /> Windows Web Release (v0.1.12)
                </h4>
                <p style={{ color: 'var(--text-main)', lineHeight: '1.6', fontSize: '1rem', marginBottom: '1.25rem' }}>
                  The Windows Web release is now available! Deploy the full-fledged OASIS web application on Windows environments to enable multi-user access, granular permissions, and organization-wide agent workflows.
                </p>
                <a 
                  href="https://github.com/bmjobmjo/DesktopAgenticSystem/releases/tag/windows_web_0.1.12" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary" 
                  style={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '0.5rem', 
                    textDecoration: 'none',
                    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                    border: 'none',
                    boxShadow: '0 4px 12px rgba(16, 185, 129, 0.2)'
                  }}
                >
                  <Download size={18} /> Download Windows Web Release
                </a>
              </div>

              {/* Ubuntu Release Card */}
              <div style={{ 
                width: '100%', 
                maxWidth: '800px', 
                background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.08) 0%, rgba(245, 158, 11, 0.02) 100%)', 
                border: '1px solid rgba(245, 158, 11, 0.2)', 
                borderRadius: '0.75rem', 
                padding: '2rem', 
                textAlign: 'left',
                boxShadow: '0 4px 20px rgba(0,0,0,0.15)'
              }}>
                <h4 style={{ color: '#f59e0b', display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: 0, marginBottom: '0.75rem', fontSize: '1.25rem', fontWeight: 'bold' }}>
                  <Zap size={20} color="#f59e0b" /> Ubuntu Release: Pending
                </h4>
                <p style={{ color: 'var(--text-main)', lineHeight: '1.6', fontSize: '1rem', marginBottom: '0.75rem' }}>
                  We are actively testing the server deployment setup to ensure it runs flawlessly on Ubuntu machines, and setting up a live demo site.
                </p>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '0.95rem', margin: 0 }}>
                  If you can't wait, you can build from source as it is already in the repository. <strong>Waiting for a sponsor!</strong>
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

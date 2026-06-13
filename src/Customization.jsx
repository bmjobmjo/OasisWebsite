import React, { useEffect } from 'react';
import { ArrowLeft, Code, Settings, PenTool, Database, Bot, Wrench, Layers } from 'lucide-react';
import './index.css';

export default function Customization({ onBack }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-main)' }}>
      {/* Navigation */}
      <nav className="navbar">
        <div className="container nav-content">
          <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }} onClick={onBack}>
            <ArrowLeft size={20} />
            <span>OASIS</span>
          </div>
          <div className="nav-links">
            <button onClick={onBack} className="btn btn-secondary">
              Back to Home
            </button>
          </div>
        </div>
      </nav>

      <header className="hero container" style={{ padding: '4rem 1rem 2rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(14, 165, 233, 0.1)', color: 'var(--primary-light)', padding: '0.5rem 1rem', borderRadius: '9999px', fontWeight: 600, marginBottom: '1rem' }}>
          <Code size={18} /> Open Source & Customization
        </div>
        <h1>How to Customize OASIS</h1>
        <p>Because OASIS is entirely open source, you have the ultimate flexibility to bend the system to your precise needs, ranging from simple prompting to deep code integration.</p>
      </header>

      <div className="container" style={{ paddingBottom: '4rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          
          <div style={{ background: 'var(--bg-card)', padding: '3rem', borderRadius: '1rem', border: '1px solid var(--border)' }}>
            
            <div style={{ marginBottom: '3rem' }}>
              <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: 'var(--text-main)' }}>
                <Bot size={28} color="var(--primary-light)" /> 
                1. The Most Natural Way: Creating Agents
              </h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                The absolute most natural way of customizing the system to fit your workflow is simply by <strong>creating agents</strong>. You don't need to write code. Just navigate to the Agent Creation section, describe the tasks you want automated in plain language, and the system's Agent Creation Engine will assemble the logic for you.
              </p>
              <div style={{ borderRadius: '0.5rem', overflow: 'hidden', border: '1px solid var(--border)', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
                <img src="/images/agent-creation.png" alt="Agent Creation Dialog" style={{ width: '100%', display: 'block' }} />
              </div>
            </div>

            <div style={{ marginBottom: '3rem' }}>
              <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: 'var(--text-main)' }}>
                <Wrench size={28} color="var(--primary-light)" /> 
                2. Expanding Capabilities: Adding Tools
              </h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '1.1rem' }}>
                The second best way to customize OASIS is by adding new tools. If the default tools don't cover your use case, simply add the required tools (e.g., custom API endpoints, internal database queries, custom scripts) and then create agents equipped to handle them. This dramatically expands what your agents can do without altering core architecture.
              </p>
            </div>

            <div>
              <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: 'var(--text-main)' }}>
                <Layers size={28} color="var(--primary-light)" /> 
                3. Core Integration & Deep Scaling
              </h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                Finally, if you require a core customization—such as a deep integration with an existing third-party enterprise system, unique scaling architectures, or massive UX overhauls—you have full freedom.
              </p>
              <div style={{ background: 'rgba(14, 165, 233, 0.05)', padding: '2rem', borderRadius: '1rem', border: '1px solid rgba(14, 165, 233, 0.2)' }}>
                <h4 style={{ marginBottom: '0.5rem', color: 'var(--primary-light)', fontSize: '1.2rem' }}>100% Open Source Advantage</h4>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '1.05rem', marginBottom: '1.5rem' }}>
                  If anybody wants large scale customization, the platform is entirely open source. You can just download the codebase and <strong>vibe code it</strong> with AI coding assistants like <em>Codex</em>, <em>Cursor</em>, or <em>Antigravity</em>. There are no locks, no obfuscation, and no limits on how you can reshape the code.
                </p>
                <a href="https://github.com/bmjobmjo/DesktopAgenticSystem" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', borderColor: 'var(--primary-light)', color: 'var(--primary-light)' }}>
                  <Code size={18} /> View GitHub Repository
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

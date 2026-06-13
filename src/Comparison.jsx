import React, { useEffect } from 'react';
import { ArrowLeft, Check, Box, Workflow, Cpu, Layers } from 'lucide-react';
import './index.css';

export default function Comparison({ onBack }) {
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

      <div style={{ padding: '8rem 1rem 4rem' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--text-main)' }}>Oasis vs OpenClaw</h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
              We often get asked: "Since this is an agentic system, why build this when OpenClaw already exists?" Here is why OASIS is completely different from OpenClaw.
            </p>
          </div>

          {/* Executive Summary */}
          <div className="guide-card" style={{ marginBottom: '3rem', borderLeft: '4px solid var(--primary)' }}>
            <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Box size={28} color="var(--primary)" /> Executive Summary
            </h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '1.05rem', margin: 0 }}>
              <strong>Oasis</strong> is a platform that generates complete conversational business software (like an ERP or attendance tracker) from plain-language descriptions. <strong>OpenClaw</strong> is a personal AI assistant that controls your computer and browser via chat apps. They serve completely different purposes.
            </p>
          </div>

          {/* Core Differences Table */}
          <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Layers size={28} color="var(--accent)" /> Core Differences
          </h2>
          <div style={{ overflowX: 'auto', marginBottom: '4rem', borderRadius: '0.5rem', border: '1px solid var(--border)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', background: 'var(--bg-card)' }}>
              <thead>
                <tr style={{ background: 'rgba(255, 255, 255, 0.05)', borderBottom: '1px solid var(--border)' }}>
                  <th style={{ padding: '1rem', color: 'var(--text-main)' }}>Feature</th>
                  <th style={{ padding: '1rem', color: 'var(--primary-light)', width: '35%' }}>Oasis-Easy.com</th>
                  <th style={{ padding: '1rem', color: '#f43f5e', width: '35%' }}>OpenClaw</th>
                </tr>
              </thead>
              <tbody style={{ color: 'var(--text-muted)' }}>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '1rem', fontWeight: 600 }}>Core Purpose</td>
                  <td style={{ padding: '1rem' }}>Build conversational, agentic business systems</td>
                  <td style={{ padding: '1rem' }}>A local-first AI assistant that executes actions</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '1rem', fontWeight: 600 }}>Main Method</td>
                  <td style={{ padding: '1rem' }}>"Describe → Generate → Use" via a Desktop or Web UI</td>
                  <td style={{ padding: '1rem' }}>Interact via WhatsApp, Telegram, or other chat apps</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '1rem', fontWeight: 600 }}>What It Creates</td>
                  <td style={{ padding: '1rem' }}>Fully functional apps with database tables, backend logic, and chat-based UI</td>
                  <td style={{ padding: '1rem' }}>Actions (e.g., sending emails, converting files, operating browsers)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '1rem', fontWeight: 600 }}>Target User</td>
                  <td style={{ padding: '1rem' }}>Businesses or individuals needing custom workflow systems without coding</td>
                  <td style={{ padding: '1rem' }}>Tech-savvy personal users who want to automate their own computer tasks</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '1rem', fontWeight: 600 }}>Deployment</td>
                  <td style={{ padding: '1rem' }}>One-click Windows installer (Desktop) or server-deployed Web app</td>
                  <td style={{ padding: '1rem' }}>Requires command-line installation (Node.js or Docker)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '1rem', fontWeight: 600 }}>Privacy</td>
                  <td style={{ padding: '1rem' }}>Depends on deployment (local or server)</td>
                  <td style={{ padding: '1rem' }}>Fully local – your data never leaves your machine</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '1rem', fontWeight: 600 }}>Project Status</td>
                  <td style={{ padding: '1rem' }}>Solo hobby project. Warning: "Very limited testing"</td>
                  <td style={{ padding: '1rem' }}>High-activity open source project with strong community</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '1rem', fontWeight: 600 }}>Output Example</td>
                  <td style={{ padding: '1rem', fontStyle: 'italic' }}>"Create an attendance system with monthly reports" <br/>→ Oasis builds the whole system</td>
                  <td style={{ padding: '1rem', fontStyle: 'italic' }}>"Convert the last 3 PDFs to Word and email the summary" <br/>→ OpenClaw executes the steps</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
            {/* Oasis Detailed Breakdown */}
            <div style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: '1rem', border: '1px solid var(--primary)', boxShadow: '0 4px 12px rgba(139, 92, 246, 0.1)' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--primary-light)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Workflow size={24} /> Oasis: Business System Generator
              </h3>
              <div style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
                <p style={{ marginBottom: '1rem' }}>
                  <strong style={{ color: 'var(--text-main)' }}>Philosophy:</strong> You don't create agents manually. An internal "Agent Creation Engine" builds the entire system for you, including database schemas, relationships, and workflows.
                </p>
                <p style={{ marginBottom: '1rem' }}>
                  <strong style={{ color: 'var(--text-main)' }}>Use Cases:</strong> Attendance tracking, expense management, inventory tracking, small ERP-like systems.
                </p>
                <p style={{ marginBottom: '1rem' }}>
                  <strong style={{ color: 'var(--text-main)' }}>Flexibility:</strong> Scales from personal task trackers to multi-user office automation with role-based access.
                </p>
                <p style={{ marginBottom: 0 }}>
                  <strong style={{ color: 'var(--text-main)' }}>Limitations:</strong> Solely for structured business applications. Not designed for general computer automation.
                </p>
              </div>
            </div>

            {/* OpenClaw Detailed Breakdown */}
            <div style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: '1rem', border: '1px solid #f43f5e', boxShadow: '0 4px 12px rgba(244, 63, 94, 0.1)' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#f43f5e', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Cpu size={24} /> OpenClaw: Personal Action Assistant
              </h3>
              <div style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
                <p style={{ marginBottom: '1rem' }}>
                  <strong style={{ color: 'var(--text-main)' }}>Philosophy:</strong> Acts as a gateway between chat apps and your local machine. You talk to it in WhatsApp, and it operates your desktop software.
                </p>
                <p style={{ marginBottom: '1rem' }}>
                  <strong style={{ color: 'var(--text-main)' }}>Use Cases:</strong> Automating repetitive tasks, controlling a browser, processing files locally, sending messages, or writing and running code.
                </p>
                <p style={{ marginBottom: '1rem' }}>
                  <strong style={{ color: 'var(--text-main)' }}>Strengths:</strong> Massive open-source ecosystem, privacy-focused (local execution), highly extensible via community "skills."
                </p>
                <p style={{ marginBottom: 0 }}>
                  <strong style={{ color: 'var(--text-main)' }}>Limitations:</strong> Requires technical setup (command line). Not designed to build persistent database-driven business apps.
                </p>
              </div>
            </div>
          </div>

          {/* Verdict Section */}
          <div style={{ background: 'var(--bg-card)', padding: '2.5rem', borderRadius: '1rem', border: '1px solid var(--border)' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--text-main)', textAlign: 'center' }}>Final Verdict</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              <div>
                <h4 style={{ fontSize: '1.25rem', color: 'var(--primary-light)', marginBottom: '1rem' }}>Choose Oasis if:</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-muted)' }}>
                  <li style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem' }}><Check color="var(--primary)" size={20} style={{ flexShrink: 0, marginTop: '2px' }} /> You need to build a business application (like a ticketing system or leave tracker) quickly.</li>
                  <li style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem' }}><Check color="var(--primary)" size={20} style={{ flexShrink: 0, marginTop: '2px' }} /> You want a visual, low-code approach.</li>
                  <li style={{ display: 'flex', gap: '0.5rem' }}><Check color="var(--primary)" size={20} style={{ flexShrink: 0, marginTop: '2px' }} /> You are aware it's a hobby project with limited testing for production use.</li>
                </ul>
              </div>
              <div>
                <h4 style={{ fontSize: '1.25rem', color: '#f43f5e', marginBottom: '1rem' }}>Choose OpenClaw if:</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-muted)' }}>
                  <li style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem' }}><Check color="#f43f5e" size={20} style={{ flexShrink: 0, marginTop: '2px' }} /> You want a personal AI robot that follows your commands via chat.</li>
                  <li style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem' }}><Check color="#f43f5e" size={20} style={{ flexShrink: 0, marginTop: '2px' }} /> You need to automate actions across different software on your own computer.</li>
                  <li style={{ display: 'flex', gap: '0.5rem' }}><Check color="#f43f5e" size={20} style={{ flexShrink: 0, marginTop: '2px' }} /> You value privacy and don't mind a technical setup.</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

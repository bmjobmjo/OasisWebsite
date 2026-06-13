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
              <a href="#download-web" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                <Server size={20} /> Download Web Application
              </a>
            </div>
          </div>

          <div style={{ marginTop: '3rem', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--text-main)', borderBottom: '2px solid var(--border)', paddingBottom: '0.5rem' }}>Configuration Screens</h2>
            <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>The following integrations are available and identical to the desktop application.</p>
          </div>

          {/* Email */}
          <section id="email" className="guide-card" style={{ borderLeft: '4px solid #f43f5e' }}>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', color: 'var(--text-main)' }}>
              <Mail size={28} color="#f43f5e" /> 
              Email Configuration
            </h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
              The <strong>Email</strong> tab integrates Gmail SMTP to allow your agents to automatically draft and send outbound emails.
            </p>
            <div style={{ marginBottom: '1.5rem', borderRadius: '0.5rem', overflow: 'hidden', border: '1px solid var(--border)', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
              <img src="/images/email.png" alt="Email Configuration" style={{ width: '100%', display: 'block' }} />
            </div>
            <div style={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid var(--border)' }}>
              <h4 style={{ marginBottom: '1rem', color: 'var(--primary-light)' }}>Key Settings</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-muted)' }}>
                <li style={{ marginBottom: '0.75rem' }}><strong>Gmail SMTP Integration:</strong> Toggle the integration on or off system-wide.</li>
                <li style={{ marginBottom: '0.75rem' }}><strong>Credentials:</strong> Securely enter your Sender Gmail Address, Display Name, and Google App Password.</li>
                <li style={{ marginBottom: '0.75rem' }}><strong>Built-in Testing:</strong> Instantly verify your credentials by sending a test email directly from the configuration screen.</li>
              </ul>

              <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
                <h4 style={{ marginBottom: '1rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>How to Obtain a Gmail App Password</h4>
                <ol style={{ paddingLeft: '1.25rem', margin: 0, color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  <li style={{ marginBottom: '0.5rem' }}>Go to your Google Account Settings.</li>
                  <li style={{ marginBottom: '0.5rem' }}>Navigate to the <strong>Security</strong> tab.</li>
                  <li style={{ marginBottom: '0.5rem' }}>Ensure <strong>2-Step Verification</strong> is enabled.</li>
                  <li style={{ marginBottom: '0.5rem' }}>Search for <strong>"App passwords"</strong> in the settings search bar.</li>
                  <li style={{ marginBottom: '0.5rem' }}>Create a new app password (select "Other" and name it "OASIS").</li>
                  <li style={{ marginBottom: '0.5rem' }}>Copy the generated 16-character password and paste it into the <strong>Gmail App Password</strong> field.</li>
                </ol>
              </div>
            </div>
          </section>

          {/* Telegram */}
          <section id="telegram" className="guide-card" style={{ borderLeft: '4px solid #3b82f6' }}>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', color: 'var(--text-main)' }}>
              <Send size={28} color="#3b82f6" /> 
              Telegram Integration
            </h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
              The <strong>Telegram</strong> tab allows you to connect a Telegram bot for conversational agent interaction directly through your phone.
            </p>
            <div style={{ marginBottom: '1.5rem', borderRadius: '0.5rem', overflow: 'hidden', border: '1px solid var(--border)', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
              <img src="/images/telegram.png" alt="Telegram Integration" style={{ width: '100%', display: 'block' }} />
            </div>
            <div style={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid var(--border)' }}>
              <h4 style={{ marginBottom: '1rem', color: 'var(--primary-light)' }}>Key Settings</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-muted)' }}>
                <li style={{ marginBottom: '0.75rem' }}><strong>Polling Engine:</strong> Connect to Telegram by providing your Bot Token. The system runs a local polling daemon.</li>
                <li style={{ marginBottom: '0.75rem' }}><strong>Tuning:</strong> Adjust the Poll Timeout and Retry Delays for performance and network stability.</li>
                <li style={{ marginBottom: '0.75rem' }}><strong>Daemon Control:</strong> Start, Restart, and Refresh the status of the background polling process.</li>
              </ul>

              <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
                <h4 style={{ marginBottom: '1rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>How to Create and Link a Telegram Bot</h4>
                <ol style={{ paddingLeft: '1.25rem', margin: 0, color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  <li style={{ marginBottom: '0.5rem' }}>Open Telegram and search for <strong>@BotFather</strong>.</li>
                  <li style={{ marginBottom: '0.5rem' }}>Send the command <code>/newbot</code> and follow the prompts to name your bot and choose a username.</li>
                  <li style={{ marginBottom: '0.5rem' }}>Once created, BotFather will give you an API token (e.g., <code>123456:ABC-DEF...</code>).</li>
                  <li style={{ marginBottom: '0.5rem' }}>Copy this token and paste it into the <strong>Bot Token</strong> field in OASIS.</li>
                  <li style={{ marginBottom: '0.5rem' }}>Click <strong>Save Apply Changes</strong>, then click <strong>Restart Polling</strong> to start the Telegram integration.</li>
                </ol>
              </div>
            </div>
          </section>

          {/* WhatsApp */}
          <section id="whatsapp" className="guide-card" style={{ borderLeft: '4px solid #22c55e' }}>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', color: 'var(--text-main)' }}>
              <MessageCircle size={28} color="#22c55e" /> 
              WhatsApp Integration
            </h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
              The <strong>WhatsApp</strong> tab provides an advanced phone-linking mechanism to interface your agents securely with WhatsApp via a folder bridge.
            </p>
            <div style={{ marginBottom: '1.5rem', borderRadius: '0.5rem', overflow: 'hidden', border: '1px solid var(--border)', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
              <img src="/images/whatsapp.png" alt="WhatsApp Integration" style={{ width: '100%', display: 'block' }} />
            </div>
            <div style={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid var(--border)' }}>
              <h4 style={{ marginBottom: '1rem', color: 'var(--primary-light)' }}>Key Settings</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-muted)' }}>
                <li style={{ marginBottom: '0.75rem' }}><strong>Phone Linking:</strong> Register your WhatsApp number using a Pairing Code generated by a local Node.js process (BAILEYS).</li>
                <li style={{ marginBottom: '0.75rem' }}><strong>Folder Bridge:</strong> Configure a Shared Folder Root (e.g., <code>D:\DAS_Exchange</code>) where the Python backend and Node.js WhatsApp client exchange inbound and outbound messages.</li>
                <li style={{ marginBottom: '0.75rem' }}><strong>Live Logs:</strong> Monitor both the Registration logs and the Background Daemon logs directly from the UI to ensure connectivity.</li>
              </ul>

              <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
                <h4 style={{ marginBottom: '1rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>How to Link WhatsApp using Pairing Code</h4>
                <ol style={{ paddingLeft: '1.25rem', margin: 0, color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  <li style={{ marginBottom: '0.5rem' }}>Enter your WhatsApp phone number (including country code, e.g., <code>919847760326</code>) into the <strong>WhatsApp Number</strong> field.</li>
                  <li style={{ marginBottom: '0.5rem' }}>Click <strong>Register</strong>. Wait for the registration logs to generate an 8-character <strong>Pairing Code</strong>.</li>
                  <li style={{ marginBottom: '0.5rem' }}>Open WhatsApp on your phone, go to <strong>Linked Devices</strong> &rarr; <strong>Link a device</strong> &rarr; <strong>Link with phone number instead</strong>.</li>
                  <li style={{ marginBottom: '0.5rem' }}>Enter the Pairing Code shown in OASIS into your phone.</li>
                  <li style={{ marginBottom: '0.5rem' }}>Once successfully linked, click <strong>Start Daemon</strong> to begin the folder bridge communication.</li>
                </ol>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

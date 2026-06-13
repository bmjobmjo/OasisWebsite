import React, { useEffect } from 'react';
import { ArrowLeft, Settings, Server, Users, Shield, Cpu, Wrench, Mail, Send, MessageCircle, Calendar, History as HistoryIcon, MessageSquare, Activity, Download, Key, Box, Bot } from 'lucide-react';
import './index.css';

export default function DesktopSettings({ onBack }) {
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
          <Settings size={18} /> Desktop Setup & Settings Documentation
        </div>
        <h1>Desktop Setup & Settings</h1>
        <p>The perfect environment to evaluate, build, and test your intelligent systems locally. Get started instantly with a one-click Windows installer.</p>
      </header>

      <div className="container" style={{ paddingBottom: '4rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          
          <div style={{ background: 'var(--bg-card)', padding: '3rem', borderRadius: '1rem', border: '1px solid var(--border)', marginBottom: '1rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
              <div>
                <h3 style={{ marginBottom: '1rem', color: 'var(--primary-light)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Download size={24} /> Simple Setup</h3>
                <p style={{ color: 'var(--text-muted)' }}>Get started instantly with a one-click Windows installer. No complex environment configurations needed.</p>
              </div>
              <div>
                <h3 style={{ marginBottom: '1rem', color: 'var(--primary-light)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Key size={24} /> Flexible LLM Integration</h3>
                <p style={{ color: 'var(--text-muted)' }}>Configure your preferred API keys effortlessly—whether it's OpenRouter, Gemini, or running a local LLM via LM Studio.</p>
              </div>
              <div>
                <h3 style={{ marginBottom: '1rem', color: 'var(--primary-light)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Box size={24} /> Personal Use Cases</h3>
                <p style={{ color: 'var(--text-muted)' }}>Build a personal expense manager, task tracker, or a local RAG document system to run privately on your machine.</p>
              </div>
              <div>
                <h3 style={{ marginBottom: '1rem', color: 'var(--primary-light)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Bot size={24} /> Develop & Port</h3>
                <p style={{ color: 'var(--text-muted)' }}>The ideal sandbox. Try out new agents and test workflows. Once you're confident, easily port them to the web application.</p>
              </div>
            </div>
            <div style={{ background: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.2)', borderRadius: '0.75rem', padding: '1.5rem', marginTop: '3rem', marginBottom: '2rem' }}>
              <h4 style={{ color: '#10b981', display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: 0, marginBottom: '0.75rem', fontSize: '1.2rem' }}>
                <Bot size={20} /> Included Templates (Agents & Tools)
              </h4>
              <p style={{ color: 'var(--text-main)', lineHeight: '1.6', fontSize: '1rem', marginBottom: '0.5rem' }}>
                The templates included in this desktop release are mainly for demonstrating a set of agents used for <strong>small office automation</strong>. 
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '0.95rem', margin: 0 }}>
                It can be used for managing the employee database, leaves, attendance, office expenses, tasks, project status, documents, etc. Users can interact with the system through WhatsApp or Telegram. You can evaluate this by running it on your desktop. Feel free to modify or add agents to meet your specific requirements.
              </p>
            </div>

            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
              <a href="https://github.com/bmjobmjo/DesktopAgenticSystem/releases/tag/desktop-v0.1.7" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                <Download size={20} /> Download Desktop App
              </a>
            </div>
          </div>

          <div style={{ marginTop: '1rem', marginBottom: '1rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--text-main)', borderBottom: '2px solid var(--border)', paddingBottom: '0.5rem' }}>Configuration Screens</h2>
            <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Detailed documentation on configuring the OASIS Desktop Application, including agent management, tool configuration, and integrations.</p>
          </div>

          {/* AI Config */}
          <section id="ai-config" className="guide-card" style={{ borderLeft: '4px solid #8b5cf6' }}>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', color: 'var(--text-main)' }}>
              <Cpu size={28} color="#8b5cf6" /> 
              AI Configuration
            </h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
              The <strong>AI Config</strong> tab allows you to configure the core intelligence of your agentic system. You can switch between different LLM providers like OpenRouter, Gemini, or local models.
            </p>
            <div style={{ marginBottom: '1.5rem', borderRadius: '0.5rem', overflow: 'hidden', border: '1px solid var(--border)', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
              <img src="/images/ai-config.png" alt="AI Config" style={{ width: '100%', display: 'block' }} />
            </div>
            <div style={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid var(--border)' }}>
              <h4 style={{ marginBottom: '1rem', color: 'var(--primary-light)' }}>Key Settings</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-muted)' }}>
                <li style={{ marginBottom: '0.75rem' }}><strong>Active LLM Provider:</strong> Select which API service powers your agents.</li>
                <li style={{ marginBottom: '0.75rem' }}><strong>Provider Settings:</strong> Configure your API Key, Model ID (e.g., <code>google/gemma-4-31b-it</code>), Temperature, and Top P to control response creativity and deterministic behavior.</li>
                <li style={{ marginBottom: '0.75rem' }}><strong>Embeddings Settings:</strong> Define the embedding model (e.g., <code>jinaai/jina-embeddings-v3</code>) used for local RAG consistency and document chunking.</li>
              </ul>
            </div>
          </section>

          {/* System Settings */}
          <section id="system-settings" className="guide-card" style={{ borderLeft: '4px solid #0ea5e9' }}>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', color: 'var(--text-main)' }}>
              <Server size={28} color="#0ea5e9" /> 
              System Settings
            </h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
              The <strong>System Settings</strong> tab manages internal storage, execution security, and sandboxing rules for the local environment.
            </p>
            <div style={{ marginBottom: '1.5rem', borderRadius: '0.5rem', overflow: 'hidden', border: '1px solid var(--border)', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
              <img src="/images/system-settings.png" alt="System Settings" style={{ width: '100%', display: 'block' }} />
            </div>
            <div style={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid var(--border)' }}>
              <h4 style={{ marginBottom: '1rem', color: 'var(--primary-light)' }}>Key Settings</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-muted)' }}>
                <li style={{ marginBottom: '0.75rem' }}><strong>Data Storage:</strong> Define the paths for your SQLite database and persistent file storage.</li>
                <li style={{ marginBottom: '0.75rem' }}><strong>Execution Debugging:</strong> Toggle "Enable debug approvals" to force the system to prompt for permission before taking any action. Set the Agent Activity Context level.</li>
                <li style={{ marginBottom: '0.75rem' }}><strong>Environment Constraints:</strong> Set a Default Working Directory and establish a list of Whitelisted Directories to restrict agent file access and create a secure sandbox.</li>
              </ul>
            </div>
          </section>

          {/* Agents */}
          <section id="agents" className="guide-card" style={{ borderLeft: '4px solid #10b981' }}>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', color: 'var(--text-main)' }}>
              <Settings size={28} color="#10b981" /> 
              Agents
            </h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
              The <strong>Agents</strong> tab is where you define and customize individual AI agents that perform automated tasks.
            </p>
            <div style={{ marginBottom: '1.5rem', borderRadius: '0.5rem', overflow: 'hidden', border: '1px solid var(--border)', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
              <img src="/images/agents.png" alt="Agents" style={{ width: '100%', display: 'block' }} />
            </div>
            <div style={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid var(--border)' }}>
              <h4 style={{ marginBottom: '1rem', color: 'var(--primary-light)' }}>Key Settings</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-muted)' }}>
                <li style={{ marginBottom: '0.75rem' }}><strong>Agent Selection:</strong> Browse and manage active agents like Expense Manager, Task Manager, or generic fallback agents.</li>
                <li style={{ marginBottom: '0.75rem' }}><strong>System Prompt:</strong> Edit the core directives, role, mission, and instructions that dictate the agent's behavior.</li>
                <li style={{ marginBottom: '0.75rem' }}><strong>Assigned Tools:</strong> Check the specific capabilities granted to the agent (e.g., <code>create_zip</code>, <code>execute_sql</code>, <code>export_file</code>) enforcing a strict principle of least privilege.</li>
              </ul>
            </div>
          </section>

          {/* Roles */}
          <section id="roles" className="guide-card" style={{ borderLeft: '4px solid #f59e0b' }}>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', color: 'var(--text-main)' }}>
              <Shield size={28} color="#f59e0b" /> 
              Roles
            </h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
              The <strong>Roles</strong> tab handles Role-Based Access Control (RBAC), allowing you to link organizational roles to specific agent availability.
            </p>
            <div style={{ marginBottom: '1.5rem', borderRadius: '0.5rem', overflow: 'hidden', border: '1px solid var(--border)', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
              <img src="/images/roles.png" alt="Roles" style={{ width: '100%', display: 'block' }} />
            </div>
            <div style={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid var(--border)' }}>
              <h4 style={{ marginBottom: '1rem', color: 'var(--primary-light)' }}>Key Settings</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-muted)' }}>
                <li style={{ marginBottom: '0.75rem' }}><strong>Access Control Policy:</strong> Define new roles like Admin, Employee, Manager, or Software Engineer.</li>
                <li style={{ marginBottom: '0.75rem' }}><strong>Authorized Agents:</strong> Explicitly grant access by selecting which agents users with this role are permitted to interact with (e.g., giving an Employee access to the <code>leave_manager</code> but restricting access to the <code>database_manager</code>).</li>
              </ul>
            </div>
          </section>

          {/* Users */}
          <section id="users" className="guide-card" style={{ borderLeft: '4px solid #ef4444' }}>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', color: 'var(--text-main)' }}>
              <Users size={28} color="#ef4444" /> 
              Users
            </h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
              The <strong>Users</strong> tab is your central directory for managing individuals accessing the OASIS platform, mapping their contact information to their system identities.
            </p>
            <div style={{ marginBottom: '1.5rem', borderRadius: '0.5rem', overflow: 'hidden', border: '1px solid var(--border)', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
              <img src="/images/users.png" alt="Users" style={{ width: '100%', display: 'block' }} />
            </div>
            <div style={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid var(--border)' }}>
              <h4 style={{ marginBottom: '1rem', color: 'var(--primary-light)' }}>Key Settings</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-muted)' }}>
                <li style={{ marginBottom: '0.75rem' }}><strong>Directory Listing:</strong> View all registered users alongside their Mobile, WhatsApp, Telegram handles, and Departments.</li>
                <li style={{ marginBottom: '0.75rem' }}><strong>Role Assignment:</strong> Assign pre-configured roles to specific users to automatically enforce access limits.</li>
                <li style={{ marginBottom: '0.75rem' }}><strong>Active Session Context:</strong> In the Desktop local runtime, you can instantly impersonate or switch the "Current Active User" to test behaviors based on different permission levels.</li>
              </ul>
            </div>
          </section>

          {/* System Tools */}
          <section id="system-tools" className="guide-card" style={{ borderLeft: '4px solid #6366f1' }}>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', color: 'var(--text-main)' }}>
              <Wrench size={28} color="#6366f1" /> 
              System Tools
            </h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
              The <strong>System Tools</strong> tab serves as a central registry for all available actions your agents can execute, from file operations to database queries.
            </p>
            <div style={{ marginBottom: '1.5rem', borderRadius: '0.5rem', overflow: 'hidden', border: '1px solid var(--border)', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
              <img src="/images/system-tools.png" alt="System Tools" style={{ width: '100%', display: 'block' }} />
            </div>
            <div style={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid var(--border)' }}>
              <h4 style={{ marginBottom: '1rem', color: 'var(--primary-light)' }}>Key Settings</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-muted)' }}>
                <li style={{ marginBottom: '0.75rem' }}><strong>Tool Registry:</strong> Browse all registered tools like <code>copy_file</code>, <code>execute_sql</code>, and <code>send_gmail_email</code> with their active status.</li>
                <li style={{ marginBottom: '0.75rem' }}><strong>Detailed Specifications:</strong> View the exact Input Schema, Output Schema, and an Example Call for any selected tool to understand how the LLM interacts with it.</li>
                <li style={{ marginBottom: '0.75rem' }}><strong>Tool Descriptions:</strong> Modify descriptions to help the LLM better understand when and how to utilize specific tools.</li>
              </ul>
            </div>
          </section>

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

          {/* Scheduler */}
          <section id="scheduler" className="guide-card" style={{ borderLeft: '4px solid #8b5cf6' }}>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', color: 'var(--text-main)' }}>
              <Calendar size={28} color="#8b5cf6" /> 
              Scheduler
            </h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
              The <strong>Scheduler</strong> tab is a powerful feature that allows you to automate repetitive tasks based on time intervals. You can configure prompts to execute automatically on a schedule.
            </p>
            <div style={{ marginBottom: '1.5rem', borderRadius: '0.5rem', overflow: 'hidden', border: '1px solid var(--border)', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
              <img src="/images/scheduler.png" alt="Scheduler Interface" style={{ width: '100%', display: 'block' }} />
            </div>
            <div style={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid var(--border)' }}>
              <h4 style={{ marginBottom: '1rem', color: 'var(--primary-light)' }}>Key Features</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-muted)' }}>
                <li style={{ marginBottom: '0.75rem' }}><strong>Automated Reporting:</strong> For example, you can create a schedule with the prompt <em>"Send me a lateness report for employees every Friday"</em>. The system will automatically run the prompt, compile the data, and deliver it via your preferred channel.</li>
                <li style={{ marginBottom: '0.75rem' }}><strong>Execution Control:</strong> Enable or disable the background Scheduler Service globally and set the exact polling frequency (e.g., 1 minute).</li>
                <li style={{ marginBottom: '0.75rem' }}><strong>Schedule Management:</strong> View, create, edit, or delete individual scheduled tasks. Easily check when a task is scheduled to run next.</li>
              </ul>
            </div>
          </section>

          {/* --- OPERATIONS SECTION --- */}
          <div style={{ marginTop: '3rem', marginBottom: '2rem' }}>
            <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--text-main)', borderBottom: '2px solid var(--border)', paddingBottom: '0.5rem' }}>Operations</h1>
            <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Core interaction and monitoring screens for your agentic environment.</p>
          </div>

          {/* Agent Console */}
          <section id="agent-console" className="guide-card" style={{ borderLeft: '4px solid #14b8a6' }}>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', color: 'var(--text-main)' }}>
              <MessageSquare size={28} color="#14b8a6" /> 
              Agent Console
            </h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
              The <strong>Agent Console</strong> provides a direct chat interface and real-time execution trace, letting you interact with your agents and monitor their internal thought processes step-by-step.
            </p>
            <div style={{ marginBottom: '1.5rem', borderRadius: '0.5rem', overflow: 'hidden', border: '1px solid var(--border)', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
              <img src="/images/agent-console.png" alt="Agent Console" style={{ width: '100%', display: 'block' }} />
            </div>
            <div style={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid var(--border)' }}>
              <h4 style={{ marginBottom: '1rem', color: 'var(--primary-light)' }}>Key Features</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-muted)' }}>
                <li style={{ marginBottom: '0.75rem' }}><strong>Chat Transcript:</strong> Communicate directly with the active agent using natural language.</li>
                <li style={{ marginBottom: '0.75rem' }}><strong>Runtime Trace:</strong> View detailed background steps and tool executions the agent is performing to fulfill your requests.</li>
              </ul>
            </div>
          </section>

          {/* History */}
          <section id="history" className="guide-card" style={{ borderLeft: '4px solid #f59e0b' }}>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', color: 'var(--text-main)' }}>
              <HistoryIcon size={28} color="#f59e0b" /> 
              Chat History
            </h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
              The <strong>History</strong> tab logs all previous conversations and tasks executed by the system.
            </p>
            <div style={{ marginBottom: '1.5rem', borderRadius: '0.5rem', overflow: 'hidden', border: '1px solid var(--border)', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
              <img src="/images/history.png" alt="Chat History" style={{ width: '100%', display: 'block' }} />
            </div>
            <div style={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid var(--border)' }}>
              <h4 style={{ marginBottom: '1rem', color: 'var(--primary-light)' }}>Key Features</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-muted)' }}>
                <li style={{ marginBottom: '0.75rem' }}><strong>Audit Trail:</strong> Review past interactions, prompts, and timestamps.</li>
                <li style={{ marginBottom: '0.75rem' }}><strong>Context Resumption:</strong> Easily locate specific historical data tasks executed by your agents.</li>
              </ul>
            </div>
          </section>

          {/* Sessions */}
          <section id="sessions" className="guide-card" style={{ borderLeft: '4px solid #06b6d4' }}>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', color: 'var(--text-main)' }}>
              <Activity size={28} color="#06b6d4" /> 
              Active Sessions
            </h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
              The <strong>Sessions</strong> tab provides a bird's-eye view of all currently active connections across different interaction channels.
            </p>
            <div style={{ marginBottom: '1.5rem', borderRadius: '0.5rem', overflow: 'hidden', border: '1px solid var(--border)', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
              <img src="/images/sessions.png" alt="Active Sessions" style={{ width: '100%', display: 'block' }} />
            </div>
            <div style={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid var(--border)' }}>
              <h4 style={{ marginBottom: '1rem', color: 'var(--primary-light)' }}>Key Features</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-muted)' }}>
                <li style={{ marginBottom: '0.75rem' }}><strong>Multi-Channel Monitoring:</strong> Track ongoing interactions occurring via UI, WhatsApp, and Telegram simultaneously.</li>
                <li style={{ marginBottom: '0.75rem' }}><strong>Live Status:</strong> See the last message transmitted and monitor active in-memory sessions for performance and troubleshooting.</li>
              </ul>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

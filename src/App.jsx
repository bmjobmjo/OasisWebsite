import React, { useState, useEffect } from 'react';
import { 
  Bot, 
  Database, 
  MessageSquare, 
  Download, 
  Server, 
  CheckCircle2, 
  Zap, 
  Layers, 
  ShieldCheck, 
  Globe, 
  Box,
  BrainCircuit,
  FileText,
  Key,
  Cpu,
  Terminal,
  Sparkles,
  Award,
  ShieldAlert,
  User,
  Sun,
  Moon
} from 'lucide-react';
import './index.css';

function App() {
  const [activeTab, setActiveTab] = useState('desktop');
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.className = theme === 'dark' ? '' : 'light-theme';
  }, [theme]);

  return (
    <>
      {/* Navigation */}
      <nav className="navbar">
        <div className="container nav-content">
          <div className="logo">OASIS</div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#architecture">Architecture</a>
            <a href="#comparison">Comparison</a>
            <a href="#setup">Setup Guide</a>
            <a href="#about">About</a>
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="btn btn-secondary"
              style={{ padding: '0.5rem', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', border: '1px solid var(--border)' }}
              title={theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a href="#download" className="btn btn-primary">
              <Download size={18} /> Get OASIS
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero container">
        <h1>Build Conversational Agentic Systems<br/>with Plain Language</h1>
        <p>
          Build personal workflows, office automation systems, or local file management tools. Implement them easily using simple plain text requirements and let OASIS automatically build your own agents to perform those tasks.
        </p>
        <div className="hero-buttons">
          <a href="#download" className="btn btn-primary">
            <Download size={20} /> Download Desktop App
          </a>
          <a href="#download" className="btn btn-primary">
            <Server size={20} /> Get Web Application
          </a>
        </div>
      </header>

      {/* The Core Innovation */}
      <section className="section container" id="innovation">
        <div className="section-header">
          <h2 className="section-title">Describe &rarr; Generate &rarr; Use</h2>
          <p className="section-subtitle">
            You don't create agents manually — OASIS creates them for you using an internal Agent Creation Engine. Just tell it what you need.
          </p>
        </div>
        <div className="innovation-grid">
          <div className="innovation-card">
            <div className="innovation-icon">
              <MessageSquare size={36} />
            </div>
            <h3>1. Describe</h3>
            <p>"Create an attendance system with monthly reports" or "Build a ticketing system for maintenance."</p>
          </div>
          <div className="innovation-card">
            <div className="innovation-icon">
              <Bot size={36} />
            </div>
            <h3>2. Generate</h3>
            <p>OASIS automatically creates the agents, database tables, backend logic, and connects the workflows.</p>
          </div>
          <div className="innovation-card">
            <div className="innovation-icon">
              <Zap size={36} />
            </div>
            <h3>3. Use</h3>
            <p>Interact instantly through a chat-based UI, WhatsApp, or Telegram. Fully functional and conversational.</p>
          </div>
        </div>
      </section>

      {/* Extreme Flexibility */}
      <section className="section container" id="features">
        <div className="section-header">
          <h2 className="section-title">Extreme Flexibility & Scalability</h2>
          <p className="section-subtitle">
            From a simple database application to a complete office automation system—OASIS scales based on your needs.
          </p>
        </div>
        <div className="features-grid">
          <div className="feature-item">
            <div className="icon"><CheckCircle2 size={28} /></div>
            <div>
              <h3>Simple Use Cases</h3>
              <p>Attendance tracking, expense management, personal task trackers, and local system search assistants.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="icon"><Layers size={28} /></div>
            <div>
              <h3>Medium-Level Apps</h3>
              <p>Inventory tracking, lead management systems, maintenance tracking, and custom data collection tools.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="icon"><Globe size={28} /></div>
            <div>
              <h3>Full Office Automation</h3>
              <p>Small ERP-like systems, multi-user workflow platforms, and comprehensive reporting & analytics.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="icon"><Database size={28} /></div>
            <div>
              <h3>Automatic Infrastructure</h3>
              <p>OASIS auto-creates database schemas, relationships, and backend logic instantly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* OASIS Desktop Application */}
      <section className="section container" id="desktop">
        <div className="section-header">
          <h2 className="section-title">OASIS Desktop Application</h2>
          <p className="section-subtitle">
            The perfect environment to evaluate, build, and test your intelligent systems locally.
          </p>
        </div>
        <div style={{ background: 'var(--bg-card)', padding: '3rem', borderRadius: '1rem', border: '1px solid var(--border)', marginBottom: '2rem' }}>
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
        </div>
      </section>

      {/* OASIS Web Application */}
      <section className="section container" id="web" style={{ paddingTop: '0' }}>
        <div className="section-header">
          <h2 className="section-title">OASIS Web Application</h2>
          <p className="section-subtitle">
            Scale your systems for multi-user collaboration and full office automation.
          </p>
        </div>
        <div style={{ background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.1) 0%, rgba(14, 165, 233, 0) 100%)', padding: '3rem', borderRadius: '1rem', border: '1px solid var(--border)' }}>
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
        </div>
      </section>

      {/* OASIS Application Templates */}
      <section className="section container" id="templates" style={{ paddingTop: '0' }}>
        <div className="section-header">
          <h2 className="section-title">OASIS Application Templates</h2>
          <p className="section-subtitle">
            Pre-packaged sets of agents built for specific domains. Available for both Desktop and Web deployments, allowing you to easily evaluate, customize, and deploy them for your exact needs.
          </p>
        </div>
        <div style={{ background: 'var(--bg-card)', padding: '3rem', borderRadius: '1rem', border: '1px solid var(--border)', marginBottom: '2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary-light)', fontSize: '1.5rem' }}>Small Office Automation Template (Available Now)</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                A ready-to-use template designed specifically for managing a small office. It comes pre-configured with a suite of agents to handle your core operations out of the box.
              </p>
              <ul style={{ listStyle: 'none', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}><CheckCircle2 size={18} color="var(--accent)" /> Project Management</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}><CheckCircle2 size={18} color="var(--accent)" /> Task Management</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}><CheckCircle2 size={18} color="var(--accent)" /> Expense Management</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}><CheckCircle2 size={18} color="var(--accent)" /> Leave & Holiday Management</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(14, 165, 233, 0.05)', padding: '2rem', borderRadius: '1rem', border: '1px solid rgba(14, 165, 233, 0.2)' }}>
              <h4 style={{ marginBottom: '1rem', color: 'var(--text-main)', fontSize: '1.2rem' }}>Build & Promote Your Own</h4>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', fontSize: '0.95rem' }}>
                As OASIS matures, we will continuously release more templates covering various industries and application domains. 
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                <strong>Are you a developer or domain expert?</strong> We strongly encourage the community to build their own OASIS templates. Package your agentic workflows and promote them to users who share similar operational needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture & Agent Creator Section */}
      <section className="section container" id="architecture">
        <div className="section-header">
          <h2 className="section-title">Architecture & Agent Creator</h2>
          <p className="section-subtitle">
            A secure, template-driven orchestration platform that empowers organizations to build, run, and continuously evolve AI agents without writing code.
          </p>
        </div>

        {/* 1. Intro: A New Approach */}
        <div className="architecture-intro-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          <div className="guide-card" style={{ borderLeft: '4px solid #ef4444' }}>
            <h4 style={{ color: '#ef4444', display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: 0 }}><ShieldAlert size={20} /> Traditional AI Agents</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              Requires developers to build, code, and maintain individual agents for every business process. This creates complexity, increases maintenance costs, and limits flexibility.
            </p>
          </div>
          <div className="guide-card" style={{ borderLeft: '4px solid var(--accent)', background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.05) 0%, var(--bg-card) 100%)' }}>
            <h4 style={{ color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: 0 }}><CheckCircle2 size={20} /> OASIS Template-Driven Agents</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              Agents are defined as simple, text-based <strong>Agent Templates</strong> containing purpose, behavior, inputs, outputs, permissions, and available tools. Create, modify, and deploy new agents in minutes without code changes.
            </p>
          </div>
        </div>

        {/* 2. Template-Driven Agent Architecture & Dynamic Creation */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          <div className="guide-card">
            <h3 style={{ fontSize: '1.3rem', color: 'var(--primary-light)', marginTop: 0, marginBottom: '1rem' }}>Template-Driven Agent Architecture</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              An agent in OASIS is not a compiled program. It is a structured script containing:
            </p>
            <ul style={{ paddingLeft: '1.25rem', marginTop: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
              <li>Agent name and description</li>
              <li>Expected inputs and output format</li>
              <li>Required user role permissions</li>
              <li>Allowed tools and whitelisted environments</li>
              <li>Detailed step-by-step execution instructions</li>
            </ul>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '1rem' }}>
              When a user submits a request, the system automatically analyzes the intent, selects the most appropriate agent template, and executes it within a secure environment. No recompilation, no code deployment, and no software modification.
            </p>
          </div>

          <div className="guide-card">
            <h3 style={{ fontSize: '1.3rem', color: 'var(--primary-light)', marginTop: 0, marginBottom: '1rem' }}>Dynamic Agent Creation & Growth</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              One of the platform's most powerful capabilities is the ability for organizations to continuously expand the system without developer intervention:
            </p>
            <ul style={{ paddingLeft: '1.25rem', marginTop: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
              <li><strong>Create</strong> new agents instantly by writing structured text templates.</li>
              <li><strong>Modify</strong> existing agents on the fly as business logic changes.</li>
              <li><strong>Define</strong> new workflows by combining existing instructions.</li>
              <li><strong>Reuse</strong> existing tools for database, file system, or communication.</li>
              <li><strong>Deploy</strong> new business processes instantly.</li>
            </ul>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '1rem' }}>
              Because agents are configuration-driven, new departments, workflows, and integrations are introduced by simply adding new template files. The platform grows with the organization instead of requiring constant redevelopment.
            </p>
          </div>
        </div>

        {/* 3. Centralized Agent Orchestration Engine */}
        <h3 style={{ fontSize: '1.8rem', textAlign: 'center', marginBottom: '2rem' }}>Centralized Agent Orchestration Components</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '0.75rem', padding: '1.5rem', textAlign: 'center' }}>
            <div style={{ color: 'var(--primary-light)', marginBottom: '0.75rem' }}><Globe size={32} style={{ margin: '0 auto' }} /></div>
            <h4 style={{ marginTop: 0, marginBottom: '0.5rem', color: 'var(--text-main)' }}>Controller</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Manages execution flow, state management, logging, validation, and lifecycle control.</p>
          </div>
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '0.75rem', padding: '1.5rem', textAlign: 'center' }}>
            <div style={{ color: 'var(--primary-light)', marginBottom: '0.75rem' }}><Layers size={32} style={{ margin: '0 auto' }} /></div>
            <h4 style={{ marginTop: 0, marginBottom: '0.5rem', color: 'var(--text-main)' }}>Router</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Analyzes user intent dynamically and selects the most suitable agent template.</p>
          </div>
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '0.75rem', padding: '1.5rem', textAlign: 'center' }}>
            <div style={{ color: 'var(--primary-light)', marginBottom: '0.75rem' }}><Bot size={32} style={{ margin: '0 auto' }} /></div>
            <h4 style={{ marginTop: 0, marginBottom: '0.5rem', color: 'var(--text-main)' }}>Agent Templates</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Text-based structured definitions that describe agent behavior and constraints.</p>
          </div>
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '0.75rem', padding: '1.5rem', textAlign: 'center' }}>
            <div style={{ color: 'var(--primary-light)', marginBottom: '0.75rem' }}><Zap size={32} style={{ margin: '0 auto' }} /></div>
            <h4 style={{ marginTop: 0, marginBottom: '0.5rem', color: 'var(--text-main)' }}>Executor</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Runs the agentic loop, invokes whitelisted tools, and enforces permissions.</p>
          </div>
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '0.75rem', padding: '1.5rem', textAlign: 'center' }}>
            <div style={{ color: 'var(--primary-light)', marginBottom: '0.75rem' }}><Database size={32} style={{ margin: '0 auto' }} /></div>
            <h4 style={{ marginTop: 0, marginBottom: '0.5rem', color: 'var(--text-main)' }}>Common Data Area</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Shared memory, state tracking, and secure SQLite registry used across the platform.</p>
          </div>
        </div>

        {/* 4. Controlled Autonomy & Security */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          <div className="guide-card">
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.4rem' }}><ShieldCheck size={24} color="var(--primary-light)" /> Agentic, Yet Controlled</h3>
            <p style={{ color: 'var(--text-muted)' }}>
              Many systems focus on autonomy but sacrifice governance, control, and security. OASIS combines agentic reasoning with strict operational governance:
            </p>
            <ul style={{ paddingLeft: '1.25rem', marginTop: '1rem', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              <li style={{ marginBottom: '0.5rem' }}>Agents interpret requests, chain tools, and access shared contexts.</li>
              <li style={{ marginBottom: '0.5rem' }}>Every action is executed within a controlled framework.</li>
              <li style={{ marginBottom: '0.5rem' }}>Provides the benefits of agentic systems without the risks of unrestricted autonomous execution.</li>
            </ul>
          </div>

          <div className="guide-card">
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.4rem' }}><Key size={24} color="var(--primary-light)" /> Enterprise-Grade RBAC Security</h3>
            <p style={{ color: 'var(--text-muted)' }}>
              Security is built into the architecture from the ground up:
            </p>
            <ul style={{ paddingLeft: '1.25rem', marginTop: '1rem', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <strong>Agent-Level:</strong> Users can only execute agents authorized for their role (e.g., HR personnel run HR agents; administrators run all agents).
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <strong>Tool-Level:</strong> Tool access is validated independently (e.g., viewing records vs. modifying them).
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <strong>Operation-Level:</strong> Enforced down to database tables, CRUD operations, whitelisted file paths, and external APIs.
              </li>
            </ul>
          </div>
        </div>

        {/* 5. AI-Powered Agent Creator */}
        <div style={{ background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(14, 165, 233, 0.05) 100%)', border: '1px solid rgba(168, 85, 247, 0.3)', borderRadius: '1rem', padding: '3rem', marginBottom: '4rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(168, 85, 247, 0.2)', color: '#c084fc', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '1rem' }}>
                <Sparkles size={14} /> AI-POWERED AGENT CREATOR
              </div>
              <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-main)' }}>Create New Agents Simply by Describing What You Need</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                OASIS features a built-in <strong>Agent Creator</strong>. Users do not need to understand prompt engineering, agent scripting, or software development to create new agents. Describe what the agent should do in natural language:
              </p>
              <blockquote style={{ color: 'var(--primary-light)', paddingLeft: '1rem', borderLeft: '3px solid var(--primary)', fontStyle: 'italic', marginBottom: '1rem', fontSize: '0.95rem' }}>
                "Create an agent that reads incoming support emails, categorizes them, creates tickets in our helpdesk system, and sends a summary to the support manager."
              </blockquote>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                The Agent Creator analyzes the requirement and automatically generates a complete agent template—including name, description, inputs/outputs, tools, instructions, and permissions. The new agent is immediately available.
              </p>
              <p style={{ color: 'var(--text-muted)' }}>
                <strong>Refine Through Conversation:</strong> Continuously improve agents via direct feedback: <em>"Add approval workflow before creating tickets"</em> or <em>"Send notifications through WhatsApp instead of email"</em>. The Creator automatically rebuilds the template based on instructions while preserving existing features.
              </p>
            </div>

            <div style={{ background: '#020617', borderRadius: '0.75rem', padding: '1.5rem', border: '1px solid var(--border)' }}>
              <div style={{ color: '#94a3b8', fontSize: '0.8rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Terminal size={14} /> Agent Creator Sandbox
              </div>
              
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ background: '#1e293b', padding: '0.75rem 1rem', borderRadius: '0.75rem 0.75rem 0.75rem 0', color: '#cbd5e1', fontSize: '0.9rem', maxWidth: '90%' }}>
                  "Create an HR onboarding agent that collects employee information, generates required documents, and notifies the HR team."
                </div>
                <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.25rem', paddingLeft: '0.25rem' }}>User Prompt</div>
              </div>

              <div>
                <div style={{ background: 'rgba(14, 165, 233, 0.15)', border: '1px solid rgba(14, 165, 233, 0.3)', padding: '0.75rem 1rem', borderRadius: '0.75rem 0.75rem 0 0.75rem', color: '#38bdf8', fontSize: '0.9rem', maxWidth: '90%', marginLeft: 'auto' }}>
                  <strong>✓ Agent Template Generated:</strong><br />
                  • Name: HROnboardingAgent<br />
                  • Required Tools: Filesystem, DocumentGenerator, Email<br />
                  • Inputs: employee_data<br />
                  • Permissions: onboarding_folder write, HR role
                </div>
                <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.25rem', textAlign: 'right', paddingRight: '0.25rem' }}>OASIS Agent Creator</div>
              </div>
            </div>
          </div>
        </div>

        {/* 6. Tool Ecosystem & Key Benefits */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          <div className="guide-card">
            <h4 style={{ color: 'var(--primary-light)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: 0 }}><Box size={20} /> Reusable Tool Ecosystem</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              The platform includes a modular tool framework representing database CRUD, file management, email systems, ERP/CRM integrations, APIs, and custom automation modules. Agents do not need to implement functionality themselves; instead, they orchestrate existing tools, making the system highly reusable and extensible.
            </p>
          </div>

          <div className="guide-card">
            <h4 style={{ color: 'var(--primary-light)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: 0 }}><Award size={20} /> Key Benefits at a Glance</h4>
            <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
              <li>No hardcoded business agents (configuration-driven)</li>
              <li>Agent templates written in a simple text format</li>
              <li>Rapid conversational agent creation & refinement</li>
              <li>Modular, reusable tool ecosystem</li>
              <li>Enterprise-grade security with multi-layer RBAC</li>
              <li>Dynamic routing and controlled execution</li>
            </ul>
          </div>
        </div>

        {/* 7. Vision Statement */}
        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '1rem', padding: '2.5rem', textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginBottom: '1rem' }}><Cpu size={24} style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '0.5rem' }} /> The Vision</h3>
          <p style={{ color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto', fontSize: '1rem', lineHeight: '1.6' }}>
            Our goal is to democratize agent creation. Instead of building custom software every time a new workflow is needed, organizations can create intelligent agents by writing structured templates that leverage existing tools and permissions. The result is a secure, scalable, and highly adaptable agentic platform that empowers users to build and evolve their own AI-powered automation systems.
          </p>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="section container" id="comparison">
        <div className="section-header">
          <h2 className="section-title">How OASIS Compares</h2>
          <p className="section-subtitle">
            Most platforms today help you automate tasks. OASIS goes beyond that—it builds complete intelligent systems.
          </p>
        </div>
        <div className="comparison-wrapper">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Feature / Platform</th>
                <th className="highlight">OASIS</th>
                <th>Base44</th>
                <th>Kovaion AI Builder</th>
                <th>SeaTable (AI)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Natural Language System Creation</td>
                <td className="highlight">Full (core feature)</td>
                <td>Yes</td>
                <td>Yes</td>
                <td>Partial</td>
              </tr>
              <tr>
                <td>Agent-Based Architecture</td>
                <td className="highlight">Yes (multi-agent)</td>
                <td>Limited</td>
                <td>Limited</td>
                <td>No</td>
              </tr>
              <tr>
                <td>Full System Generation</td>
                <td className="highlight">Yes (Agents + DB + Logic)</td>
                <td>Partial</td>
                <td>Partial</td>
                <td>No</td>
              </tr>
              <tr>
                <td>Office Automation Focus</td>
                <td className="highlight">Strong focus (ERP-like)</td>
                <td>General apps</td>
                <td>General apps</td>
                <td>Data-centric</td>
              </tr>
              <tr>
                <td>Database Auto-Creation</td>
                <td className="highlight">Yes</td>
                <td>Yes</td>
                <td>Yes</td>
                <td>Table-based only</td>
              </tr>
              <tr>
                <td>Pricing</td>
                <td className="highlight">Open-source (Free)</td>
                <td>Proprietary</td>
                <td>Subscription</td>
                <td>Subscription</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Installation & Setup Guide Section */}
      <section className="section setup-section" id="setup">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Installation & Setup Guide</h2>
            <p className="section-subtitle">
              Get OASIS running locally as a desktop cockpit or deploy it as a hostable web application.
            </p>
          </div>

          <div className="setup-tabs">
            <button 
              className={`tab-btn ${activeTab === 'desktop' ? 'active' : ''}`} 
              onClick={() => setActiveTab('desktop')}
            >
              Desktop App
            </button>
            <button 
              className={`tab-btn ${activeTab === 'web' ? 'active' : ''}`} 
              onClick={() => setActiveTab('web')}
            >
              Web / Server
            </button>
            <button 
              className={`tab-btn ${activeTab === 'llm' ? 'active' : ''}`} 
              onClick={() => setActiveTab('llm')}
            >
              LLM & Settings
            </button>
            <button 
              className={`tab-btn ${activeTab === 'telegram' ? 'active' : ''}`} 
              onClick={() => setActiveTab('telegram')}
            >
              Telegram Setup
            </button>
            <button 
              className={`tab-btn ${activeTab === 'whatsapp' ? 'active' : ''}`} 
              onClick={() => setActiveTab('whatsapp')}
            >
              WhatsApp Setup
            </button>
          </div>

          <div className="guide-container">
            {activeTab === 'desktop' && (
              <div className="guide-card">
                <h3>OASIS Desktop App Installation & Setup</h3>
                <h4>1. Installation Steps</h4>
                <ul className="guide-step-list">
                  <li className="guide-step-item">
                    <span className="guide-step-number">1</span>
                    <strong>Download the Installer:</strong> Download the latest <code>oasis-desktop-setup.exe</code> one-click installer.
                  </li>
                  <li className="guide-step-item">
                    <span className="guide-step-number">2</span>
                    <strong>Run Setup:</strong> Double-click the installer. It will automatically set up Python, PySide6, and the required local runtime components.
                  </li>
                  <li className="guide-step-item">
                    <span className="guide-step-number">3</span>
                    <strong>Launch OASIS:</strong> Open the application from the desktop shortcut to launch the PyQt6 Modern UI interface.
                  </li>
                </ul>

                <h4>2. First Launch Setup</h4>
                <p style={{ color: 'var(--text-muted)' }}>
                  On first launch, navigate to the <strong>Settings</strong> panel from the sidebar menu to configure your default workspace directory, database path, and LLM preferences (recommended: Gemini 2.5 Flash).
                </p>
              </div>
            )}

            {activeTab === 'web' && (
              <div className="guide-card">
                <h3>OASIS Web Server Deployment (Windows & Ubuntu)</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                  Deploy the full-featured, multi-user OASIS web application using our pre-packaged, non-Docker distribution packs (<code>oasis-release-pack-*.zip</code>). No Docker or local Node.js compilation is required on the server.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                  <div>
                    <h4 style={{ color: 'var(--primary-light)', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Ubuntu Server Setup</h4>
                    <ul className="guide-step-list">
                      <li className="guide-step-item">
                        <span className="guide-step-number">1</span>
                        <strong>Prerequisites:</strong> Install Python 3.11+, <code>python3-venv</code>, and <code>python3-pip</code>:
                        <div className="code-snippet">
                          sudo apt update<br />
                          sudo apt install -y python3 python3-venv python3-pip
                        </div>
                      </li>
                      <li className="guide-step-item">
                        <span className="guide-step-number">2</span>
                        <strong>Extract Release:</strong> Unzip the release pack to your target deployment folder:
                        <div className="code-snippet">
                          unzip oasis-release-pack-*.zip<br />
                          cd oasis-release-pack-*
                        </div>
                      </li>
                      <li className="guide-step-item">
                        <span className="guide-step-number">3</span>
                        <strong>Run Setup:</strong> Set script permissions and execute setup:
                        <div className="code-snippet">
                          chmod +x setup.sh start-api.sh start-ui.sh start-all.sh<br />
                          ./setup.sh
                        </div>
                      </li>
                      <li className="guide-step-item">
                        <span className="guide-step-number">4</span>
                        <strong>Configure & Launch:</strong> Review <code>instance-config.json</code> to update the ports or default admin password. Then start the stack:
                        <div className="code-snippet">
                          ./start-all.sh
                        </div>
                        <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Default Web UI runs on <code>http://127.0.0.1:8080</code>; API runs on <code>8787</code>.</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 style={{ color: 'var(--primary-light)', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Windows Server Setup</h4>
                    <ul className="guide-step-list">
                      <li className="guide-step-item">
                        <span className="guide-step-number">1</span>
                        <strong>Prerequisites:</strong> Ensure Python 3.11+ is installed and available in system <code>PATH</code>, and PowerShell is available.
                      </li>
                      <li className="guide-step-item">
                        <span className="guide-step-number">2</span>
                        <strong>Extract Release:</strong> Extract the <code>oasis-release-pack-*.zip</code> to your target installation directory.
                      </li>
                      <li className="guide-step-item">
                        <span className="guide-step-number">3</span>
                        <strong>Run Setup:</strong> Open PowerShell as Administrator in the folder and execute setup:
                        <div className="code-snippet">
                          .\setup.ps1
                        </div>
                      </li>
                      <li className="guide-step-item">
                        <span className="guide-step-number">4</span>
                        <strong>Configure & Launch:</strong> Review <code>instance-config.json</code> (update paths/ports if needed). Start the services via PowerShell:
                        <div className="code-snippet">
                          .\start-all.ps1
                        </div>
                        <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Default Web UI runs on <code>http://127.0.0.1:8080</code>.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'llm' && (
              <div className="guide-card">
                <h3>LLM Configuration & Settings Tabs</h3>
                <h4>1. Setup LLM Providers</h4>
                <p style={{ color: 'var(--text-muted)' }}>
                  In Settings under the <strong>AI Settings / LLM</strong> tab, choose from multiple API backends:
                </p>

                <div className="recommend-box">
                  <div className="recommend-title">
                    <Zap size={18} /> Recommended Choice: Google Gemini 2.5 Flash
                  </div>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-main)' }}>
                    We recommend <strong>Gemini 2.5 Flash</strong> as the optimum model. It offers the fastest latency and token-processing speed necessary for multi-step agent planning loops, combined with high-tier reasoning intelligence.
                  </p>
                </div>

                <div className="compromise-box">
                  <div className="compromise-title">
                    <Layers size={18} /> Local Alternative: Ollama / Local LLM
                  </div>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-main)' }}>
                    If you want 100% data privacy and can <strong>compromise on execution speed</strong>, configure <strong>Ollama</strong> as your local provider. Connect to local models (e.g. Llama 3 or Qwen) via:
                    <code style={{ display: 'block', marginTop: '0.5rem', color: '#f59e0b' }}>http://127.0.0.1:11434/v1</code>
                  </p>
                </div>

                <p style={{ color: 'var(--text-muted)', marginTop: '1.5rem' }}>
                  OASIS also natively supports **Groq** (e.g., Llama-3.3-70b) and **OpenRouter** (e.g., step-3.5-flash) for cloud alternatives.
                </p>

                <h4>2. Other Settings Tabs Explained</h4>
                <ul className="guide-step-list">
                  <li className="guide-step-item">
                    <span className="guide-step-number">1</span>
                    <strong>System Settings:</strong> Set your SQLite database path (defaults to <code>backend.db</code>), workspace folder, whitelisted folders for sandbox security, and choose embedding models (e.g. <code>Qwen/Qwen3-Embedding-0.6B</code>) for local RAG indexing.
                  </li>
                  <li className="guide-step-item">
                    <span className="guide-step-number">2</span>
                    <strong>Email (Gmail) Settings:</strong> Enable automatic emailing by providing your Gmail sender address and a secure Google <strong>App Password</strong>.
                  </li>
                  <li className="guide-step-item">
                    <span className="guide-step-number">3</span>
                    <strong>Scheduler Settings:</strong> Toggle the background scheduler service to automate agent tasks (e.g. weekly reports) using plain English schedule descriptions.
                  </li>
                </ul>
              </div>
            )}

            {activeTab === 'telegram' && (
              <div className="guide-card">
                <h3>Setting Up Telegram Integration</h3>
                <h4>1. Creating the Telegram Bot</h4>
                <ul className="guide-step-list">
                  <li className="guide-step-item">
                    <span className="guide-step-number">1</span>
                    <strong>Talk to BotFather:</strong> Open Telegram, search for <code>@BotFather</code>, and start a conversation.
                  </li>
                  <li className="guide-step-item">
                    <span className="guide-step-number">2</span>
                    <strong>Create Bot:</strong> Send <code>/newbot</code>, give it a name and a unique username ending in "bot".
                  </li>
                  <li className="guide-step-item">
                    <span className="guide-step-number">3</span>
                    <strong>Copy Token:</strong> BotFather will output an <strong>HTTP API Token</strong> (e.g., <code>123456789:ABCdefGhI...</code>). Copy this token.
                  </li>
                  <li className="guide-step-item">
                    <span className="guide-step-number">4</span>
                    <strong>Enable Polling:</strong> In your OASIS Desktop UI Settings under the <strong>Telegram</strong> tab, check "Enable Telegram polling integration", paste the token, and click Save. Restart the service to start polling.
                  </li>
                </ul>

                <h4>2. Connecting and Verifying Users</h4>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
                  OASIS maintains secure access by verifying users against the database:
                </p>
                <ul className="guide-step-list">
                  <li className="guide-step-item">
                    <span className="guide-step-number">1</span>
                    <strong>First Chat:</strong> When a user sends a message to your bot, they will receive: <br />
                    <em style={{ color: 'var(--primary-light)' }}>"Please provide your registered email ID to verify your account."</em>
                  </li>
                  <li className="guide-step-item">
                    <span className="guide-step-number">2</span>
                    <strong>Email Lookup:</strong> The user replies with their email. The system looks up this email in the database's <code>Users</code> table.
                  </li>
                  <li className="guide-step-item">
                    <span className="guide-step-number">3</span>
                    <strong>Account Binding:</strong> If found, the bot binds the user's Telegram chat ID in the database and welcomes them: <br />
                    <em style={{ color: 'var(--primary-light)' }}>"Welcome [Name]. Your Telegram chat is now linked."</em>
                  </li>
                </ul>
              </div>
            )}

            {activeTab === 'whatsapp' && (
              <div className="guide-card">
                <h3>Setting Up WhatsApp Integration</h3>
                <h4>1. How the Shared Folder Bridge Works</h4>
                <p style={{ color: 'var(--text-muted)' }}>
                  Unlike direct APIs, OASIS uses a highly reliable <strong>shared-folder bridge</strong> mechanism. A background headless Node.js daemon (<code>daemon.js</code>) communicates directly with a WhatsApp Web session, writing incoming messages into a <code>received</code> directory and reading outgoing messages from a <code>send</code> directory inside your configured WhatsApp exchange path.
                </p>

                <h4>2. Linking Your WhatsApp Number</h4>
                <ul className="guide-step-list">
                  <li className="guide-step-item">
                    <span className="guide-step-number">1</span>
                    <strong>Web UI Registration:</strong> Navigate to the <strong>Settings &gt; WhatsApp</strong> tab in the OASIS dashboard, check the enable box, enter your phone number (including country code, e.g. <code>919876543210</code>), and click <strong>Register</strong>.
                  </li>
                  <li className="guide-step-item">
                    <span className="guide-step-number">2</span>
                    <strong>Pairing Code:</strong> The system will generate an 8-character pairing code.
                  </li>
                  <li className="guide-step-item">
                    <span className="guide-step-number">3</span>
                    <strong>WhatsApp Linking:</strong> Open WhatsApp on your phone, go to <strong>Linked Devices &gt; Link with phone number</strong>, and enter the pairing code.
                  </li>
                  <li className="guide-step-item">
                    <span className="guide-step-number">4</span>
                    <strong>Start Daemon:</strong> In the dashboard settings, click <strong>Start Daemon</strong> (or run <code>node daemon.js</code> in CLI) to start active communication.
                  </li>
                </ul>

                <h4>3. User Registration via WhatsApp</h4>
                <ul className="guide-step-list">
                  <li className="guide-step-item">
                    <span className="guide-step-number">1</span>
                    <strong>Trigger Registration:</strong> If an unregistered number messages the bot, it replies: <br />
                    <em style={{ color: 'var(--primary-light)' }}>"You have reached Oasis, but you are not a registered user. Initiate registration by sending /register"</em>
                  </li>
                  <li className="guide-step-item">
                    <span className="guide-step-number">2</span>
                    <strong>Provide Phone Number:</strong> The user sends <code>/register</code>, then inputs their phone number when prompted.
                  </li>
                  <li className="guide-step-item">
                    <span className="guide-step-number">3</span>
                    <strong>OTP Verification:</strong> If the phone number exists in the <code>Users</code> database table, OASIS generates a secure 6-digit OTP and sends it to that number. The user enters this OTP to complete the bind.
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section container" id="about">
        <div className="section-header">
          <h2 className="section-title">About the Project</h2>
          <p className="section-subtitle">
            The origin, testing disclaimer, and future roadmap of the OASIS Platform.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {/* Creator & Story Card */}
          <div className="guide-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-main)', fontSize: '1.5rem', marginTop: 0 }}>
                <User size={24} color="var(--primary-light)" /> Solo Hobby Project
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '1rem', lineHeight: '1.6' }}>
                OASIS is developed as a solo hobby project by <strong>Bijumon Janardhanan</strong>. It was inspired by real-world internal organization requirements and a quest to build a highly flexible platform that can be easily modified and configured by users to match their exact needs.
              </p>
              
              <div style={{ background: 'var(--danger-bg)', border: '1px solid var(--danger-border)', borderRadius: '0.5rem', padding: '1rem', marginTop: '1.5rem' }}>
                <p style={{ color: 'var(--danger-text)', fontSize: '0.85rem', margin: 0, lineHeight: '1.5' }}>
                  <strong>⚠️ Testing Disclaimer:</strong> Because this is a personal project, please be aware that <strong>very limited testing</strong> has been carried out. Use with care in production environments.
                </p>
              </div>

              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '1.5rem', lineHeight: '1.6' }}>
                If you are looking for an enterprise-ready solution built on top of this architecture, you are welcome to customize the open-source code yourself. Alternatively, **we are fully willing to undertake such custom development and implementation tasks** for your organization.
              </p>
            </div>

            <div style={{ marginTop: '2rem', borderTop: '1px solid var(--border)', paddingTop: '1.5rem' }}>
              <a 
                href="https://www.linkedin.com/in/bijumonjanardhanan/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary" 
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', borderColor: '#0077b5', color: '#0077b5', background: 'transparent' }}
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" style={{ verticalAlign: 'middle' }}>
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg> Connect on LinkedIn
              </a>
            </div>
          </div>

          {/* Roadmap & Next Milestone Card */}
          <div className="guide-card" style={{ background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.08) 0%, var(--bg-card) 100%)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-main)', fontSize: '1.5rem', marginTop: 0 }}>
                <Cpu size={24} color="var(--primary-light)" /> Next Big Milestone
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '1rem', lineHeight: '1.6' }}>
                The next major objective on the OASIS product roadmap is to introduce native **Web Page & Code-Behind Generation**.
              </p>
              
              <ul style={{ paddingLeft: '1.25rem', marginTop: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
                <li>
                  <strong>Dynamic UI Building:</strong> Enable agents to dynamically output fully functioning web pages with user-interactive controls.
                </li>
                <li>
                  <strong>Code-Behind Generation:</strong> Generate corresponding backend code blocks to power the interactive pages.
                </li>
                <li>
                  <strong>Extensibility:</strong> Empower business users to add advanced app features conversationally.
                </li>
                <li>
                  <strong>Token Optimization:</strong> Run code directly on the client/server side, drastically reducing model call latency and token consumption.
                </li>
              </ul>
            </div>

            <div style={{ background: 'rgba(14, 165, 233, 0.1)', border: '1px solid rgba(14, 165, 233, 0.2)', borderRadius: '0.5rem', padding: '1rem', marginTop: '2rem' }}>
              <p style={{ color: 'var(--primary-light)', fontSize: '0.85rem', margin: 0, fontWeight: 500 }}>
                💡 Self-expanding UI + minimized tokens = hyper-efficient operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer & Download */}
      <footer className="footer" id="download">
        <div className="container">
          <div className="footer-content">
            <div className="footer-col">
              <h4>OASIS Platform</h4>
              <p>A Flexible, Conversational Agentic Platform for Building Smart Systems. Open source, zero licensing cost, no vendor lock-in.</p>
            </div>
            <div className="footer-col">
              <h4>Desktop Deployment</h4>
              <p style={{ marginBottom: '1rem', fontSize: '0.9rem' }}>Ideal for offline environments and individual users. One-step Windows installer with auto dependencies.</p>
              <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                <Download size={18} /> Download for Windows
              </button>
            </div>
            <div className="footer-col">
              <h4>Server / Cloud Deployment</h4>
              <p style={{ marginBottom: '1rem', fontSize: '0.9rem' }}>For multi-user access and centralized control. Set up easily on your own server or VPS environment.</p>
              <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                <Box size={18} /> Get Web Application
              </button>
            </div>
            <div className="footer-col">
              <h4>Security Built-In</h4>
              <ul className="footer-links">
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><ShieldCheck size={16} /> Role-Based Access Control</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><ShieldCheck size={16} /> Tool-level permissions</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><ShieldCheck size={16} /> Controlled execution</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            &copy; {new Date().getFullYear()} OASIS Platform. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;

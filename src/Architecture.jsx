import React, { useEffect } from 'react';
import { ShieldAlert, CheckCircle2, Globe, Layers, Bot, Zap, Database, ShieldCheck, Key, Sparkles, Terminal, Box, Award, Cpu, ArrowLeft } from 'lucide-react';
import './index.css';

export default function Architecture({ onBack }) {
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
          <div className="nav-actions">
            <button onClick={onBack} className="btn btn-secondary">
              Back to Home
            </button>
          </div>
        </div>
      </nav>
      
      <div style={{ padding: '4rem 0' }}>
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

        {/* Architecture Deep Dive – Runtime Request Flow */}
        <div style={{ marginTop: '4rem', marginBottom: '4rem' }}>
          <h3 style={{ fontSize: '1.8rem', textAlign: 'center', marginBottom: '1rem', color: 'var(--text-main)' }}>Architecture Deep Dive – Runtime Request Flow</h3>
          <p style={{ color: 'var(--text-muted)', textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem auto', lineHeight: '1.6', fontSize: '1.05rem' }}>
            The framework follows a layered request-processing architecture. Every user interaction, regardless of the communication channel, enters a common runtime layer where routing, authorization, agent execution, and tool access are centrally managed.
          </p>

          <div style={{ background: 'var(--bg-card)', padding: '2rem', borderRadius: '1rem', border: '1px solid var(--border)', marginBottom: '3rem', textAlign: 'center' }}>
            <img src="/images/architecture-flow.png" alt="Architecture Request Flow" style={{ maxWidth: '100%', height: 'auto', borderRadius: '0.5rem' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {/* 1. User Interaction Layer */}
            <div className="guide-card">
              <h4 style={{ color: 'var(--primary-light)', fontSize: '1.2rem', marginBottom: '1rem' }}>1. User Interaction Layer</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1rem' }}>
                Users interact with the system through one of the supported communication channels (Chat Interface, WhatsApp, Telegram). Future channels can be added without modifying agent logic.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                Each channel acts only as an entry point and is responsible for receiving user messages and forwarding them to the runtime.
              </p>
            </div>

            {/* 2. Runtime Layer */}
            <div className="guide-card">
              <h4 style={{ color: 'var(--primary-light)', fontSize: '1.2rem', marginBottom: '1rem' }}>2. Runtime Layer</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1rem' }}>
                The Runtime serves as the central execution environment, acting as the bridge between user-facing interfaces and the internal agent ecosystem.
              </p>
              <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                <li>Receiving requests from channels</li>
                <li>Maintaining session context</li>
                <li>Performing authentication</li>
                <li>Loading user roles and permissions</li>
                <li>Managing execution state & audit logs</li>
                <li>Forwarding requests to the Router</li>
              </ul>
            </div>

            {/* 3. Router Layer */}
            <div className="guide-card">
              <h4 style={{ color: 'var(--primary-light)', fontSize: '1.2rem', marginBottom: '1rem' }}>3. Router Layer</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1rem' }}>
                The Router analyzes incoming requests and determines which agent is best suited to handle them, ensuring only the most relevant agent receives the request.
              </p>
              <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                <li>Intent analysis & Agent selection</li>
                <li>Context preparation</li>
                <li>Validation of agent availability</li>
              </ul>
              <div style={{ marginTop: '1rem', background: 'rgba(14, 165, 233, 0.05)', padding: '0.75rem', borderRadius: '0.5rem', fontSize: '0.85rem' }}>
                <strong>Example Mapping:</strong><br/>
                Apply leave → Leave Agent<br/>
                Query database → Data Access Agent
              </div>
            </div>

            {/* 4. Agent Layer */}
            <div className="guide-card">
              <h4 style={{ color: 'var(--primary-light)', fontSize: '1.2rem', marginBottom: '1rem' }}>4. Agent Layer</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1rem' }}>
                Agents are independent execution units built from configurable templates. The framework supports any number of agents without changing the runtime architecture.
              </p>
              <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                <li>Purpose and description</li>
                <li>Allowed tools & Required permissions</li>
                <li>Prompt template & Output structure</li>
              </ul>
            </div>

            {/* 5. Tool Layer */}
            <div className="guide-card">
              <h4 style={{ color: 'var(--primary-light)', fontSize: '1.2rem', marginBottom: '1rem' }}>5. Tool Layer</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1rem' }}>
                Tools perform operational tasks on behalf of agents (e.g. Database Access, File System, Email). Agents never directly access resources.
              </p>
              <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                <li>Ensures Security & Auditing</li>
                <li>Permission enforcement</li>
                <li>Extensibility</li>
              </ul>
            </div>

            {/* Key Design Principle */}
            <div className="guide-card" style={{ background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.08) 0%, var(--bg-card) 100%)', borderLeft: '4px solid var(--accent)' }}>
              <h4 style={{ color: 'var(--text-main)', fontSize: '1.2rem', marginBottom: '1rem' }}>Key Design Principle</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1rem' }}>
                The architecture intentionally separates responsibilities: Channels handle communication, Runtime handles orchestration, Router selects agents, Agents perform business reasoning, and Tools execute operations.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                This enables easy addition of new channels, dynamic agent creation, strong security boundaries, and scalable enterprise deployments.
              </p>
            </div>
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

            </div>
    </div>
  );
}

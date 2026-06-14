import React, { useEffect } from 'react';
import { ArrowLeft, Briefcase, Headphones, TrendingUp, Database, Calendar, Users, HardDrive, User, Home } from 'lucide-react';
import './index.css';

export default function UseCases({ onBack }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const useCases = [
    {
      icon: <Briefcase size={32} color="#0ea5e9" />,
      title: "Complete Office Automation",
      description: "Transform your workplace with a suite of agents designed to handle daily operations. Create and manage employee databases, track attendance and leaves, implement project information systems and project management. Build tools to post office expenses and track them, and allow employees to post daily task statuses and generate comprehensive daily reports.",
      borderColor: "#0ea5e9"
    },
    {
      icon: <Headphones size={32} color="#f43f5e" />,
      title: "Customer Support & Ticketing System",
      description: "Deploy intelligent agents to act as your frontline support. Automatically log and route customer support tickets, assign them to support persons, and allow them to communicate with customers while maintaining complete records.",
      borderColor: "#f43f5e"
    },
    {
      icon: <TrendingUp size={32} color="#10b981" />,
      title: "Marketing Leads & Quote Generation",
      description: "Streamline your sales pipeline. Capture and qualify marketing leads, automatically generate customized quotes, and track follow-ups, ensuring no opportunity slips through the cracks.",
      borderColor: "#10b981"
    },
    {
      icon: <Database size={32} color="#8b5cf6" />,
      title: "Project RAG (Retrieval-Augmented Generation)",
      description: "Create a deeply knowledgeable project assistant. Ingest all your project documentation, specifications, and meeting notes, allowing your team to instantly query and retrieve exact information from the project's entire knowledge base.",
      borderColor: "#8b5cf6"
    },
    {
      icon: <Calendar size={32} color="#f59e0b" />,
      title: "Intelligent Event Management",
      description: "Run seamless events by deploying an agent as your central communication hub. Guests can interact with the system to instantly retrieve venue directions, sub-event timings, and registration details, while you manage broad announcements effortlessly.",
      borderColor: "#f59e0b"
    },
    {
      icon: <Users size={32} color="#ec4899" />,
      title: "Membership & Community Management",
      description: "Build and maintain robust member databases for clubs or organizations. Communicate updates, automatically track fee collections and issue receipts, and provide members with a 24/7 on-demand information portal.",
      borderColor: "#ec4899"
    },
    {
      icon: <HardDrive size={32} color="#64748b" />,
      title: "Local IT & File System Assistant",
      description: "Let OASIS manage your local machine. Use agents to clean up your operating system, logically organize chaotic file directories, and build a local RAG system to chat directly with your local files and documents.",
      borderColor: "#64748b"
    },
    {
      icon: <User size={32} color="#14b8a6" />,
      title: "Advanced Personal Assistant",
      description: "Run the OASIS Desktop application on your laptop or a Raspberry Pi to act as your ultimate life organizer. Manage personal documents, track daily tasks, and log personal expenses on the go by simply messaging your assistant via WhatsApp or Telegram.",
      borderColor: "#14b8a6"
    },
    {
      icon: <Home size={32} color="#84cc16" />,
      title: "Family Information & Knowledge Hub",
      description: "Host OASIS on a local machine or Raspberry Pi to serve as a centralized family vault. Securely save, organize, and share important family documents, records, or schedules, accessible to all family members instantly via their preferred messaging app.",
      borderColor: "#84cc16"
    }
  ];

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
      
      <div style={{ padding: '8rem 1rem 4rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--text-main)' }}>OASIS Use Cases</h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
              Explore the versatile ways you can deploy OASIS templates and agents. From complete office automation to personal assistants, the possibilities are endless.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {useCases.map((useCase, index) => (
              <div key={index} style={{ 
                background: 'var(--bg-card)', 
                padding: '2rem', 
                borderRadius: '1rem', 
                border: '1px solid var(--border)',
                borderTop: `4px solid ${useCase.borderColor}`,
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  {useCase.icon}
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--text-main)', margin: 0 }}>{useCase.title}</h3>
                </div>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '0.95rem', margin: 0 }}>
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

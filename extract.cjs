const fs = require('fs');
const appFile = 'src/App.jsx';
let content = fs.readFileSync(appFile, 'utf8');

const startStr = '{/* Architecture & Agent Creator Section */}';
const endStr = '{/* Comparison Section */}';

const startIndex = content.indexOf(startStr);
const endIndex = content.indexOf(endStr);

if (startIndex !== -1 && endIndex !== -1) {
    const sectionContent = content.substring(startIndex, endIndex);
    
    const archCode = `import React, { useEffect } from 'react';
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
          <div className="nav-links">
            <button onClick={onBack} className="btn btn-secondary">
              Back to Home
            </button>
          </div>
        </div>
      </nav>
      
      <div style={{ padding: '4rem 0' }}>
${sectionContent}      </div>
    </div>
  );
}
`;
    fs.writeFileSync('src/Architecture.jsx', archCode);

    const newAppContent = content.substring(0, startIndex) + content.substring(endIndex);
    fs.writeFileSync(appFile, newAppContent);
    console.log("Successfully extracted Architecture.jsx and updated App.jsx");
} else {
    console.log("Could not find start or end strings.");
}

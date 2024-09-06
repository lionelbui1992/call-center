import React, { useState } from 'react';
import AgentList from './components/AgentList';
import CallLogs from './components/CallLogs';
import CallControl from './components/CallControl';
import './App.css';

function App() {
  const [activeCall, setActiveCall] = useState(null);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Call Center Dashboard</h1>
      </header>
      <main className="app-main">
        <section className="agent-list-section">
          <AgentList onCallInitiate={(call) => setActiveCall(call)} />
        </section>
        <section className="call-control-section">
          <CallControl activeCall={activeCall} onEndCall={() => setActiveCall(null)} />
        </section>
        <section className="call-logs-section">
          <CallLogs />
        </section>
      </main>
    </div>
  );
}

export default App;

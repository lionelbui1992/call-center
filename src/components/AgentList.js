import React from 'react';

const agents = [
  { id: 1, name: 'Agent 1', status: 'Available' },
  { id: 2, name: 'Agent 2', status: 'Busy' },
  { id: 3, name: 'Agent 3', status: 'Available' },
];

const AgentList = ({ onCallInitiate }) => {
  const initiateCall = (agent) => {
    if (agent.status === 'Available') {
      onCallInitiate({ agentName: agent.name, time: new Date().toLocaleTimeString() });
    } else {
      alert('Agent is currently busy');
    }
  };

  return (
    <div className="agent-list">
      <h2>Agent List</h2>
      <ul>
        {agents.map((agent) => (
          <li key={agent.id}>
            {agent.name} - {agent.status}
            <button onClick={() => initiateCall(agent)} disabled={agent.status !== 'Available'}>
              Call
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AgentList;

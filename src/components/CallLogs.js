import React, { useState } from 'react';

const CallLogs = () => {
  const [logs, setLogs] = useState([]);

  // Mock function to add a log for demonstration purposes
  const addLog = () => {
    setLogs([...logs, `Call made at ${new Date().toLocaleTimeString()}`]);
  };

  return (
    <div className="call-logs">
      <h2>Call Logs</h2>
      <button onClick={addLog}>Add Log</button>
      <ul>
        {logs.map((log, index) => (
          <li key={index}>{log}</li>
        ))}
      </ul>
    </div>
  );
};

export default CallLogs;

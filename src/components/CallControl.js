import React from 'react';

const CallControl = ({ activeCall, onEndCall }) => {
  return (
    <div className="call-control">
      <h2>Call Control</h2>
      {activeCall ? (
        <div>
          <p>Calling: {activeCall.agentName}</p>
          <p>Time: {activeCall.time}</p>
          <button onClick={onEndCall}>End Call</button>
        </div>
      ) : (
        <p>No active call</p>
      )}
    </div>
  );
};

export default CallControl;

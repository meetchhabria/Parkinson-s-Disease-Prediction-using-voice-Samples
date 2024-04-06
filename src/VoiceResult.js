// VoiceResult.js
import React from 'react';

const VoiceResult = ({ result }) => {
  return (
    <div>
      <h2>Analysis Result</h2>
      <p>{result}</p>
    </div>
  );
};

export default VoiceResult;

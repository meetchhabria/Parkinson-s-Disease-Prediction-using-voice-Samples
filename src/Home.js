import React, { useState } from 'react';
import VoiceUpload from './VoiceUpload';

const Home = () => {
  const [showVoiceUpload, setShowVoiceUpload] = useState(false);

  const handleGetStarted = () => {
    setShowVoiceUpload(true);
  };

  return (
    <div className="home">
      {/* Include your Navbar component */}
      <div className="home-content">
        <div className="text-content">
          <h1>Welcome to VoicePD</h1>
          {showVoiceUpload ? (
            <VoiceUpload /> /* Show VoiceUpload component if showVoiceUpload is true */
          ) : (
            <>
              <p>
                Your Voice Matters: Detect Parkinson's Disease Early with VoicePD. Empower yourself with knowledge
                through our innovative platform that analyzes voice recordings for potential signs of Parkinson's disease.
              </p>
              <p>
                <strong>How It Works</strong>
              </p>
              <ol>
                <li>Record Your Voice: Upload a voice file through our intuitive interface.</li>
                <li>Advanced Analysis: Our algorithms analyze voice recordings for patterns associated with Parkinson's disease.</li>
                <li>Instant Results: Receive clear and understandable results indicating the likelihood of Parkinson's disease.</li>
              </ol>
              <p>
                <strong>Take Control of Your Health</strong>
              </p>
              <p>
                Whether you're seeking peace of mind or exploring early intervention options, VoicePD is here for you.
              </p>
              <button onClick={handleGetStarted}>Get Started</button>
            </>
          )}
        </div>
        <div className="image-content">
          <img src="../image1.jpg" alt="Image1" />
        </div>
      </div>
    </div>
  );
};

export default Home;

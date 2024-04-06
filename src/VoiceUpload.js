import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAudio, faUpload, faSpinner } from '@fortawesome/free-solid-svg-icons';

const VoiceUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState(null);
  const [prediction, setPrediction] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log('Selected file:', file);
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    console.log('Upload button clicked');
    if (!selectedFile) {
      alert('Please select a file to upload.');
      return;
    }

    setAnalyzing(true);
    
    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await fetch('http://localhost:5000/api/upload', {
        method: 'POST',
        body: formData,
      });

      console.log('Response:', response);
      if (!response.ok) {
        throw new Error('Failed to upload file');
      }

      const data = await response.json();
      console.log('Data:', data);
      setResult(data.result);
      setPrediction(data.prediction); // Set the prediction value
    } catch (error) {
      console.error('Error uploading file:', error);
      setResult('Error analyzing voice.');
    } finally {
      setAnalyzing(false);
    }
  };

  return (
    <div className="voice-upload-container">
      <label htmlFor="voice-upload" className="upload-label">
        <FontAwesomeIcon icon={faFileAudio} className="icon" />
        <input
          type="file"
          id="voice-upload"
          accept="audio/*"
          onChange={handleFileChange}
        />
        <span>Choose a voice file</span>
      </label>
      <button className="upload-button" onClick={handleUpload} disabled={analyzing}>
        {analyzing ? <FontAwesomeIcon icon={faSpinner} spin className="icon" /> : <FontAwesomeIcon icon={faUpload} className="icon" />}
        {analyzing ? 'Analyzing...' : 'Upload'}
      </button>
      {result && <div>{result}</div>}
      {prediction !== null}
    </div>
  );
};

export default VoiceUpload;

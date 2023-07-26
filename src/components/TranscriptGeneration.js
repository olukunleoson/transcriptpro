import React, { useState } from 'react';

const TranscriptGeneration = () => {
  // State to store the student ID for transcript generation
  const [studentID, setStudentID] = useState('');

  // Function to handle transcript generation
  const handleGenerateTranscript = () => {
    // Implement the logic to generate the transcript based on the studentID
    // For now, we'll use a placeholder message
    alert(`Transcript generated for student with ID: ${studentID}`);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h2>Generate Transcript</h2>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter student ID"
              value={studentID}
              onChange={(e) => setStudentID(e.target.value)}
            />
            <div className="input-group-append">
              <button
                className="btn btn-primary"
                onClick={handleGenerateTranscript}
              >
                Generate
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TranscriptGeneration;

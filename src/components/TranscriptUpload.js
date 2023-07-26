// src/components/TranscriptUpload.js
import React, { useState } from 'react';

const TranscriptUpload = () => {
  // State to control the visibility of the transcript upload modal
  const [showModal, setShowModal] = useState(false);

  // Function to toggle the modal visibility
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  // Function to handle the form submission for transcript upload
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement the logic to upload the transcript
    // For now, we'll just log a message to the console
    console.log('Transcript uploaded successfully!');
    // Close the modal after successful upload
    toggleModal();
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h2>Transcript Upload</h2>
          <button
            className="btn btn-primary mb-3"
            onClick={toggleModal}
          >
            Upload Transcript
          </button>
        </div>
      </div>

      {/* Transcript upload modal */}
      <div
        className="modal"
        style={{ display: showModal ? 'block' : 'none' }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Upload Transcript</h5>
              <button
                type="button"
                className="close"
                onClick={toggleModal}
              >
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                {/* Implement the form to upload transcripts */}
                <div className="form-group">
                  <label htmlFor="transcriptFile">Select Transcript File:</label>
                  <input
                    type="file"
                    className="form-control"
                    id="transcriptFile"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Upload
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TranscriptUpload;

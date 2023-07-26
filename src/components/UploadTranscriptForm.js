// src/components/UploadTranscriptForm.js
import React, { useState } from 'react';

const UploadTranscriptForm = ({ onCloseModal }) => {
  const [file, setFile] = useState(null);

  // Function to handle file input change
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Implement the logic to upload the transcript file to the backend
    // You can use a library like axios to make the API call
    // Once the upload is successful, you can display a success message or close the modal
    // For now, we'll just log the file object
    console.log(file);

    // Close the modal after submitting the form
    onCloseModal();
  };

  return (
    <div className="modal" style={{ display: 'block' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Upload Transcript</h5>
            <button type="button" className="close" onClick={onCloseModal}>
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="transcriptFile">Select Transcript File:</label>
                <input type="file" className="form-control-file" id="transcriptFile" onChange={handleFileChange} />
              </div>
              <button type="submit" className="btn btn-primary">Upload</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadTranscriptForm;

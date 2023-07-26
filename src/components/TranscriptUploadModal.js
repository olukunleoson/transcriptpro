import React from 'react';

const TranscriptUploadModal = ({ showModal, toggleModal }) => {
  return (
    <div className="modal" style={{ display: showModal ? 'block' : 'none' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Upload Transcript</h5>
            <button type="button" className="close" onClick={toggleModal}>
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {/* Implement the form to upload transcripts */}
            <form>
              {/* Add form fields and submit button */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TranscriptUploadModal;

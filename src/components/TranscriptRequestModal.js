import React, { useState } from 'react';
import StudentCopyForm from './StudentCopyForm';
import OfficialCopyForm from './OfficialCopyForm';
import PaymentForm from './PaymentForm';

const TranscriptRequestModal = ({ studentInfo, onClose, onApply }) => {
  const [step, setStep] = useState(1);
  const [transcriptType, setTranscriptType] = useState('student');
  const [showPaymentForm, setShowPaymentForm] = useState(false);

  const handleTranscriptTypeSelection = (event) => {
    setTranscriptType(event.target.value);
  };

  const handleNextStep = () => {
    if (step === 1) {
      setStep(2); // Move to step 2 when the user clicks "Apply for Transcript"
    } else if (step === 2) {
      setStep(3); // Move to step 3 when the user selects the transcript type
    } else if (step === 3) {
      setShowPaymentForm(true); // Display payment form when the user clicks "Next" in step 3
    }
  };

  const handleClose = () => {
    onClose();
  };

  const handleApply = () => {
    onApply();
    handleClose();
  };

  return (
    <div className="modal" style={{ display: 'block', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1050 }}>
      <div className="modal-dialog" style={{ maxWidth: '600px', margin: '30px auto' }}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Transcript Request</h5>
            <button type="button" className="close" onClick={handleClose}>
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {step === 1 && (
              <>
                {/* Student Details */}
                <h6>Student Details</h6>
                <p>Name: {studentInfo.name}</p>
                <p>ID: {studentInfo.id}</p>
                <p>Faculty: {studentInfo.faculty}</p>
                <p>Department: {studentInfo.department}</p>
                <p>Level: {studentInfo.level}</p>

                {/* Apply for Transcript Button */}
                <button className="btn btn-primary mt-2" onClick={handleNextStep}>
                  Apply for Transcript
                </button>
              </>
            )}

            {step === 2 && (
              <>
                {/* Transcript Type Selection */}
                <h6>Select Transcript Type</h6>
                <select
                  className="form-control"
                  value={transcriptType}
                  onChange={handleTranscriptTypeSelection}
                >
                  <option value="student">Student Copy</option>
                  <option value="official">Official Copy</option>
                </select>
                <button className="btn btn-primary mt-2" onClick={handleNextStep}>
                  Next
                </button>
              </>
            )}

            {step === 3 && !showPaymentForm && (
              <>
                {/* Transcript Request Form */}
                <h6>Transcript Request Form</h6>
                {transcriptType === 'student' ? <StudentCopyForm /> : <OfficialCopyForm />}
                <button className="btn btn-primary mt-2" onClick={handleNextStep}>
                  Next
                </button>
              </>
            )}

            {step === 3 && showPaymentForm && (
              <>
                {/* Payment Form */}
                <h6>Payment Form</h6>
                <PaymentForm /> {/* Replace with your PaymentForm component */}
                <button className="btn btn-primary mt-2" onClick={handleApply}>
                  Make Payment
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TranscriptRequestModal;

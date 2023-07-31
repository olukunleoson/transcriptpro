// ModalTest.js
import React from 'react';
import TranscriptRequestModal from './components/TranscriptRequestModal';
import './styles.css'; // Import your custom styles


// ModalTest.js
const ModalTest = () => {
    // Dummy data for studentInfo
    const studentInfo = {
      name: 'John Doe',
      id: '12345',
      faculty: 'Science and Engineering',
      department: 'Computer Science',
      level: '400',
    };
  
    return (
      <div>
        {/* Render the TranscriptRequestModal */}
        <TranscriptRequestModal
          studentInfo={studentInfo}
          onClose={() => {}}
          onApply={() => {}}
        />
      </div>
    );
  };
  
  export default ModalTest;
  
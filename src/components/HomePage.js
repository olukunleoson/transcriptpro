import React, { useState } from 'react';
import Footer from './Footer';
import SearchSection from './SearchSection';
import TranscriptRequestModal from './TranscriptRequestModal';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [studentInfo, setStudentInfo] = useState(null);
  const [showModal, setShowModal] = useState(false); // State to control the pop-up visibility

  const handleSearch = () => {
    console.log("searchQuery:", searchQuery);
    console.log("studentInfo:", studentInfo);
    // Implement the logic to search for students based on the searchQuery
    // For now, we'll use a placeholder student info
    setStudentInfo({
      name: 'John Doe',
      id: '12345',
      faculty: 'Science and Engineering',
      department: 'Computer Science',
      level: '400',
    });

    // Show the pop-up
    setShowModal(true);
  };

  const handleApplyForTranscript = () => {
    // Implement the logic to handle the student's transcript request
    // For now, we'll just log a message to the console
    console.log('Transcript requested for student:', studentInfo.name);

    // Close the pop-up
    setShowModal(false);
  };

  return (
    <div>
      <div className="container mt-4" style={{ color: 'white' }}>
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <h1>Welcome to TranscriptPro</h1>
            <p>Search for students and manage their records with ease.</p>

            <SearchSection
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              handleSearch={handleSearch}
            />
          </div>
        </div>
      </div>
      <Footer />

      {/* Pop-up for transcript request */}
      {showModal && (
        <TranscriptRequestModal
          studentInfo={studentInfo}
          onClose={() => setShowModal(false)}
          onApply={handleApplyForTranscript}
        />
      )}
    </div>
  );
};

export default HomePage;

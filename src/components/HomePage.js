import React, { useState } from 'react';
import Footer from './Footer';
import SearchSection from './SearchSection';

const HomePage = () => {
  // State to store the search query
  const [searchQuery, setSearchQuery] = useState('');
  // State to store the student information (this can be replaced with actual data later)
  const [studentInfo, setStudentInfo] = useState(null);

  // Function to handle the search
  const handleSearch = () => {
    // Implement the logic to search for students based on the searchQuery
    // For now, we'll use a placeholder student info
    setStudentInfo({
      name: 'John Doe',
      id: '12345',
      department: 'Computer Science',
      level: '400',
      gpa: '4.0',
    });
  };

  return (
    <div>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <h1>Welcome to TranscriptPro</h1>
            <p>Search for students and manage their transcripts with ease.</p>

            {/* Search section */}
            <SearchSection
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              handleSearch={handleSearch}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;

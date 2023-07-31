import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import StudentInfoCard from './StudentInfoCard';
import TranscriptUpload from './TranscriptUpload';

const Sidebar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [studentInfo, setStudentInfo] = useState(null);

  // Function to handle form submission for querying student information
  const handleSearch = (e) => {
    e.preventDefault();
    // Implement the logic to query student information based on searchQuery
    // For now, we'll use a simple example with hard-coded data
    const studentData = {
      name: 'John Doe',
      id: '12345',
      department: 'Computer Science',
      level: 'Senior',
      gpa: '3.8',
    };
    setStudentInfo(studentData);
  };

  return (
    <ul className="list-group">
      <li className="list-group-item">
        <h5>Search Student</h5>
        <form onSubmit={handleSearch}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter student ID or name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Search
          </button>
        </form>
      </li>
      {studentInfo && (
        <li className="list-group-item">
          <h5>Student Card Info</h5>
          <StudentInfoCard studentInfo={studentInfo} />
        </li>
      )}
      <li className="list-group-item">
        <h5>Transcript Upload</h5>
        <TranscriptUpload />
      </li>
      {/* Add more list items for other sections */}
    </ul>
  );
};

export default Sidebar;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StudentTable from './StudentTable';

const StudentManagement = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch student data from API or your data source
    axios.get('/api/students')
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.error('Error fetching student data:', error);
      });
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h2>Student Management</h2>
          <StudentTable students={students} setStudents={setStudents} />
        </div>
      </div>
    </div>
  );
};

export default StudentManagement;

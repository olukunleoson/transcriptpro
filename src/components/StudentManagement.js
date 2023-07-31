import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StudentTable from './StudentTable';

const StudentManagement = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Get the access token from localStorage
    const token = localStorage.getItem('authToken');

    // Set the Authorization header with the access token
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    // Fetch student data using the authenticated API request
    axios
      .get('http://127.0.0.1:8000/api/students/')
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.error('Error fetching students:', error);
      });
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h2>Student List</h2>
          <StudentTable students={students} setStudents={setStudents} />
        </div>
      </div>
    </div>
  );
};

export default StudentManagement;

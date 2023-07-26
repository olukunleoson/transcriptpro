import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const StudentDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    // Fetch student data from API or your data source
    axios.get(`/api/students/${id}`)
      .then((response) => {
        setStudent(response.data);
      })
      .catch((error) => {
        console.error('Error fetching student data:', error);
      });
  }, [id]);

  const handleEdit = () => {
    // Redirect to the edit student page
    navigate(`/students/${id}/edit`);
  };

  const handleDelete = () => {
    // Send a request to delete the student data from API or your data source
    axios.delete(`/api/students/${id}`)
      .then((response) => {
        // Redirect back to the student list page after successful deletion
        navigate('/students');
      })
      .catch((error) => {
        console.error('Error deleting student:', error);
      });
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          {student ? (
            <div>
              <h2>Student Details</h2>
              <p>ID: {student.id}</p>
              <p>Name: {student.name}</p>
              <p>Department: {student.department}</p>
              <p>Level: {student.level}</p>
              <p>GPA: {student.gpa}</p>
              <div>
                <button className="btn btn-primary mr-2" onClick={handleEdit}>
                  Edit
                </button>
                <button className="btn btn-danger" onClick={handleDelete}>
                  Delete
                </button>
              </div>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentDetails;

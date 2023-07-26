import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddStudent = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    department: '',
    level: '',
    gpa: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the student data to the API or your data source
    axios.post('/api/students', formData)
      .then((response) => {
        // Redirect back to the student list page after successful submission
        navigate('/students');
      })
      .catch((error) => {
        console.error('Error adding student:', error);
      });
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h2>Add Student</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="department">Department</label>
              <input
                type="text"
                className="form-control"
                id="department"
                name="department"
                value={formData.department}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="level">Level</label>
              <input
                type="text"
                className="form-control"
                id="level"
                name="level"
                value={formData.level}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="gpa">GPA</label>
              <input
                type="text"
                className="form-control"
                id="gpa"
                name="gpa"
                value={formData.gpa}
                onChange={handleInputChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Add Student
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;

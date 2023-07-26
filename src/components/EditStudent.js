import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditStudent = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    department: '',
    level: '',
    gpa: '',
  });

  useEffect(() => {
    // Fetch student data from API or your data source
    axios.get(`/api/students/${id}`)
      .then((response) => {
        setFormData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching student data:', error);
      });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the updated student data to the API or your data source
    axios.put(`/api/students/${id}`, formData)
      .then((response) => {
        // Redirect back to the student details page after successful update
        navigate(`/students/${id}`);
      })
      .catch((error) => {
        console.error('Error updating student:', error);
      });
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h2>Edit Student</h2>
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
              Update Student
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditStudent;

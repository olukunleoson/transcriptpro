import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const StudentInfoCard = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState({
    studentId: '',
    department: '',
    level: '',
    gpa: '',
  });

  // Function to handle form submission for searching student information
  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the onSearch function passed from the parent component
    // with the searchQuery object as an argument
    onSearch(searchQuery);
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Student Info</h5>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Matric no"
              value={searchQuery.studentId}
              onChange={(e) =>
                setSearchQuery({ ...searchQuery, studentId: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Department"
              value={searchQuery.department}
              onChange={(e) =>
                setSearchQuery({ ...searchQuery, department: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Level"
              value={searchQuery.level}
              onChange={(e) =>
                setSearchQuery({ ...searchQuery, level: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Year"
              value={searchQuery.gpa}
              onChange={(e) =>
                setSearchQuery({ ...searchQuery, gpa: e.target.value })
              }
            />
          </div>
        </form>
        <button className="btn btn-secondary mt-2">
          <Link className="dropdown-item" to="/details">
                      View details
                    </Link>
        </button>
        <button className="btn btn-secondary mt-2">
          <Link className="dropdown-item" to="/generate-transcript">
                      Print
                    </Link>
        </button>
      </div>
    </div>
  );
};

export default StudentInfoCard;

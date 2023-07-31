import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import { Link } from 'react-router-dom';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const studentsPerPage = 10;
  const [showModal, setShowModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

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

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  // Get current page's students
  const offset = currentPage * studentsPerPage;
  const paginatedStudents = students.slice(offset, offset + studentsPerPage);

  const handleDelete = (studentId) => {
    setSelectedStudent(studentId);
    setShowModal(true);
  };

  const confirmDelete = () => {
    axios
      .delete(`http://127.0.0.1:8000/api/students/${selectedStudent}`)
      .then((response) => {
        setSelectedStudent(null);
        axios
          .get('http://127.0.0.1:8000/api/students/')
          .then((response) => {
            setStudents(response.data);
          })
          .catch((error) => {
            console.error('Error fetching student data:', error);
          });
      })
      .catch((error) => {
        console.error('Error deleting student:', error);
      });
  };

  return (
    <div className="container mt-4" style={{ color: 'white' }}>
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h2>Manage Student</h2>
          <Link to="/add-student" className="btn btn-secondary mb-3">
            Add
          </Link>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Matric number</th>
                <th>Name</th>
                <th>Department</th>
                <th>Level</th>
                <th>GPA</th>
              </tr>
            </thead>
            <tbody>
              {paginatedStudents.map((student) => (
                <tr key={student.id}>
                  <td>
                    <Link to={`/students/${student.id}`}>{student.name}</Link>
                  </td>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.department}</td>
                  <td>{student.level}</td>
                  <td>{student.gpa}</td>
                  <td>
                    <Link to={`/students/${student.id}`} className="btn btn-primary btn-sm">
                      View Details
                    </Link>
                  </td>
                  <td>
                    {/* Delete button */}
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(student.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <ReactPaginate
            previousLabel="Previous"
            nextLabel="Next"
            pageCount={Math.ceil(students.length / studentsPerPage)}
            onPageChange={handlePageChange}
            containerClassName="pagination"
            activeClassName="active"
          />
        </div>
      </div>
    </div>
  );
};

export default StudentList;

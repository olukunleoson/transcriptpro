import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ConfirmationModal from './ConfirmationModal';


const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const studentsPerPage = 10;

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

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  // Get current page's students
  const offset = currentPage * studentsPerPage;
  const paginatedStudents = students.slice(offset, offset + studentsPerPage);

  // State for showing the confirmation modal
  const [showModal, setShowModal] = useState(false);
  // State for the student to be deleted
  const [studentToDelete, setStudentToDelete] = useState(null);

  // Function to handle delete student
  const handleDelete = () => {
    // Implement the logic to delete the student from the backend
    // After successful deletion, you can fetch the updated student list
    // and update the 'students' state to re-render the student list
    console.log('Student deleted:', studentToDelete);
    setShowModal(false);
  };

  // Function to show the confirmation modal
  const showConfirmationModal = (student) => {
    setStudentToDelete(student);
    setShowModal(true);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h2>Student List</h2>
          <Link to="/add-student" className="btn btn-primary mb-3">
            Add Student
          </Link>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
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
                      onClick={() => showConfirmationModal(student)}
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

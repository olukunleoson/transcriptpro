import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const StudentTable = ({ students, setStudents }) => {
  const handleDelete = (id) => {
    // Send a request to delete the student with the given id
    axios.delete(`/api/students/${id}`)
      .then((response) => {
        // Filter out the deleted student from the students state
        setStudents(students.filter((student) => student.id !== id));
      })
      .catch((error) => {
        console.error('Error deleting student:', error);
      });
  };

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Department</th>
          <th>Level</th>
          <th>GPA</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.id}>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.department}</td>
            <td>{student.level}</td>
            <td>{student.gpa}</td>
            <td>
              <Link to={`/students/${student.id}/edit`} className="btn btn-primary btn-sm mr-2">Edit</Link>
              <button onClick={() => handleDelete(student.id)} className="btn btn-danger btn-sm">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentTable;

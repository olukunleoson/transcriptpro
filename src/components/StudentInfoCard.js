import React from 'react';

const StudentInfoCard = ({ studentInfo }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{studentInfo.name}</h5>
        <p className="card-text">
          Student ID: {studentInfo.id}
          <br />
          Department: {studentInfo.department}
          <br />
          Level: {studentInfo.level}
          <br />
          GPA: {studentInfo.gpa}
        </p>
        <button className="btn btn-primary">Print Transcript</button>
      </div>
    </div>
  );
};

export default StudentInfoCard;

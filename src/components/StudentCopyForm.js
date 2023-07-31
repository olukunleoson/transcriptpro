// StudentCopyForm.js
import React from 'react';

const StudentCopyForm = () => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="purpose">Purpose:</label>
        <input type="text" className="form-control" id="purpose" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" className="form-control" id="email" required />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone:</label>
        <input type="text" className="form-control" id="phone" required />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default StudentCopyForm;

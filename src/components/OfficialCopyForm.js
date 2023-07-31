// OfficialCopyForm.js
import React from 'react';

const OfficialCopyForm = () => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="orgName">Organization Name:</label>
        <input type="text" className="form-control" id="orgName" required />
      </div>
      <div className="form-group">
        <label htmlFor="orgEmail">Email:</label>
        <input type="email" className="form-control" id="orgEmail" required />
      </div>
      <div className="form-group">
        <label htmlFor="address">Address:</label>
        <input type="text" className="form-control" id="address" required />
      </div>
      <div className="form-group">
        <label htmlFor="state">State:</label>
        <input type="text" className="form-control" id="state" required />
      </div>
      <div className="form-group">
        <label htmlFor="country">Country:</label>
        <input type="text" className="form-control" id="country" required />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default OfficialCopyForm;

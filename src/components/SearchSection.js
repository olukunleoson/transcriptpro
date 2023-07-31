import React from 'react';

const SearchSection = ({ searchQuery, setSearchQuery, handleSearch }) => {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Enter matric number"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="input-group-append">
        <button className="btn btn-secondary" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchSection;

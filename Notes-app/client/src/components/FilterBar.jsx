import React from 'react';
import './FilterBar.css';

const FilterBar = ({ searchQuery, setSearchQuery, selectedTag, setSelectedTag }) => {
  return (
    <div className="filter-bar">
      <input
        type="text"
        placeholder="Search by title or content..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <select
        value={selectedTag}
        onChange={(e) => setSelectedTag(e.target.value)}
      >
        <option value="">All Tags</option>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
      </select>
    </div>
  );
};

export default FilterBar;

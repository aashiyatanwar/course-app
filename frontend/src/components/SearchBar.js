import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="flex items-center mb-6 bg-white shadow-md rounded-lg overflow-hidden">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border border-gray-300 rounded-l-lg p-3 flex-grow placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
        placeholder="Search by course name or instructor"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white p-3 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;

import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';

export function SearchBar() {
  const [query, setQuery] = useState('');
//   const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    // history.push(`/companies?search=${encodeURIComponent(query)}`);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-1 flex rounded-md shadow-sm">
      <input
        type="text"
        name="company"
        id="company"
        className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300"
        placeholder="Search for a company"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="submit"
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-r-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Search
      </button>
    </form>
  );
}
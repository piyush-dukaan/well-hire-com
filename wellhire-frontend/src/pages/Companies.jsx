import React from 'react';
import { Link } from 'react-router-dom';
import { companies } from '../utils/mockData';
import { SearchBar } from '../components/Searchbar';

export function Companies() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Companies</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Find interview questions by company
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Browse our extensive collection of interview questions from top tech companies
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto">
          < SearchBar/>
        </div>
        <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
          {companies.map((company) => (
            <div key={company.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-contain" src={company.logo} alt={company.name} />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <Link to={`/companies/${company.id}`} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">{company.name}</p>
                  </Link>
                </div>
                <div className="mt-6">
                  <Link
                    to={`/companies/${company.id}`}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    View Questions
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
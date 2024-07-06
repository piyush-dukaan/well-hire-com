import React from 'react';
import { Link } from 'react-router-dom';

export function CompanyCard({ company }) {
  return (
    <Link to={`/companies/${company.id}`} className="group">
      <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
        <img
          src={company.logo}
          alt={company.name}
          className="w-full h-full object-center object-cover group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{company.name}</h3>
    </Link>
  );
}
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { companies, colleges, questions } from '../utils/mockData';

export function CompanyDetail() {
  const { companyId } = useParams();
  const company = companies.find(c => c.id === parseInt(companyId));
  const companyQuestions = questions.filter(q => q.companyId === parseInt(companyId));

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">{company.name}</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Interview Questions
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Browse interview questions for {company.name} by college
          </p>
        </div>
        <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
          {colleges.map((college) => {
            const questionSet = companyQuestions.find(q => q.collegeId === college.id);
            return (
              <div key={college.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-xl font-semibold text-gray-900">{college.name}</p>
                    {questionSet && (
                      <p className="mt-3 text-base text-gray-500">
                        Last updated: {new Date(questionSet.visitDate).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                  <div className="mt-6">
                    {questionSet ? (
                      <Link
                        to={`/companies/${companyId}/${college.id}`}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        View Questions
                      </Link>
                    ) : (
                      <span className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100">
                        No questions available
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
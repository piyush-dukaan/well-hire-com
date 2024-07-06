import React from 'react';
import { useParams } from 'react-router-dom';
import { Document, Page } from 'react-pdf';
import { questions } from '../utils/mockData';

export function PDFViewer() {
  const { companyId, collegeId } = useParams();
  const questionSet = questions.find(
    q => q.companyId === parseInt(companyId) && q.collegeId === parseInt(collegeId)
  );

  if (!questionSet) {
    return <div>Question set not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        {questionSet.companyName} - {questionSet.collegeName} Interview Questions
      </h2>
      <p className="mt-4 text-gray-500">Last updated: {new Date(questionSet.visitDate).toLocaleDateString()}</p>
      <div className="mt-8">
        <Document file={questionSet.pdfUrl}>
          <Page pageNumber={1} />
        </Document>
      </div>
    </div>
  );
}
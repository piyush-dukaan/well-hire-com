import React, { useState } from 'react';
import axios from 'axios';

function QuestionUpload() {
  const [formData, setFormData] = useState({
    companyName: '',
    collegeName: '',
    visitDate: '',
    pdf: null,
  });

  const handleChange = (e) => {
    if (e.target.name === 'pdf') {
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    try {
      await axios.post('http://localhost:3000/api/questions', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      alert('Question uploaded successfully!');
      setFormData({ companyName: '', collegeName: '', visitDate: '', pdf: null });
    } catch (error) {
      console.error('Error uploading question:', error);
      alert('Error uploading question. Please try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16">
      <div className="py-4 px-8 mt-3">
        <div className="text-center mb-4">
          <h2 className="text-2xl font-semibold text-gray-700">Upload Question</h2>
          <p className="text-gray-500">Share your interview experience</p>
        </div>
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="my-5">
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Company Name"
              className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
              required
            />
          </div>
          <div className="my-5">
            <input
              type="text"
              name="collegeName"
              value={formData.collegeName}
              onChange={handleChange}
              placeholder="College Name"
              className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
              required
            />
          </div>
          <div className="my-5">
            <input
              type="date"
              name="visitDate"
              value={formData.visitDate}
              onChange={handleChange}
              className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
              required
            />
          </div>
          <div className="my-5">
            <label className="block text-sm font-medium text-gray-700">Upload PDF</label>
            <input
              type="file"
              name="pdf"
              onChange={handleChange}
              accept=".pdf"
              className="mt-1 block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-primary file:text-white
                hover:file:bg-primary-dark"
              required
            />
          </div>
          <div className="my-5">
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
            >
              Upload Question
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default QuestionUpload;
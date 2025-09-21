import React, { useState } from 'react';
import { BookOpen, Download, Search, GraduationCap } from 'lucide-react';
import PDFViewer from './PDFViewer';
import CourseGuidesTab from './CourseGuidesTab';

const HandbooksTab = () => {
  const [activeHandbook, setActiveHandbook] = useState('student');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('overview'); // 'overview' or 'viewer'

  const handbooks = {
    student: {
      title: 'Student Handbook',
      filename: 'Starz_Student_Handbook_BIT_Semester_I_2023.pdf',
      description: 'Complete guide for students including academic rules, regulations, course information, and university policies.',
      sections: [
        'University History',
        'Academic Programs',
        'Registration Procedures',
        'Academic Rules & Regulations',
        'Grading System',
        'Graduation Requirements',
        'Student Affairs',
        'Financial Requirements',
        'Student Behavior Rules',
        'Grievance Procedures',
        'Course Guides'
      ]
    },
    employee: {
      title: 'Employee Handbook',
      filename: 'staff_handbookapproved.pdf',
      description: 'Comprehensive guide for faculty and staff including employment policies, benefits, and professional conduct guidelines.',
      sections: [
        'Employment Policies',
        'Work Schedules & Attendance',
        'Performance Reviews',
        'Professional Conduct',
        'Health & Safety',
        'Equal Opportunity',
        'Corrective Actions',
        'Benefits & Compensation',
        'Resignation & Termination'
      ]
    },
    courses: {
      title: 'Course Guides',
      filename: null,
      description: 'Detailed course information organized by college: BIT, Business, and Cybersecurity programs.',
      sections: [
        'BIT College Programs',
        'Business College Programs',
        'Cybersecurity College Programs',
        'Course Prerequisites',
        'Credit Hours Information',
        'Program Requirements'
      ]
    }
  };

  const currentHandbook = handbooks[activeHandbook];

  const handleDownload = (filename) => {
    if (!filename) return;
    // In a real implementation, this would download the PDF
    const link = document.createElement('a');
    link.href = `/src/assets/${filename}`;
    link.download = filename;
    link.click();
  };

  const handleViewDocument = () => {
    if (activeHandbook === 'courses') {
      // Course guides don't need PDF viewer, they have their own component
      return;
    }
    setViewMode('viewer');
  };

  const handleBackToOverview = () => {
    setViewMode('overview');
  };

  const filteredSections = currentHandbook.sections.filter(section =>
    section.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // If in viewer mode, show the PDF viewer
  if (viewMode === 'viewer' && currentHandbook.filename) {
    return (
      <div className="handbook-container">
        <div className="mb-4">
          <button
            onClick={handleBackToOverview}
            className="starz-accent starz-accent-hover px-4 py-2 rounded-lg font-medium transition-colors"
          >
            ← Back to Overview
          </button>
        </div>
        <PDFViewer 
          pdfPath={currentHandbook.filename} 
          title={currentHandbook.title}
        />
      </div>
    );
  }

  return (
    <div className="handbook-container">
      {/* Header */}
      <div className="starz-primary p-4 mb-6 rounded-lg">
        <div className="flex items-center gap-3 mb-4">
          <BookOpen size={28} className="starz-text-gold" />
          <h1 className="starz-font-serif text-2xl font-bold text-white">
            University Handbooks
          </h1>
        </div>
        <p className="starz-font-sans text-gray-300">
          Access official university handbooks and documentation
        </p>
      </div>

      {/* Handbook Tabs */}
      <div className="handbook-tabs mb-6">
        <div className="flex">
          <button
            onClick={() => {setActiveHandbook('student'); setViewMode('overview');}}
            className={`handbook-tab flex-1 starz-font-sans font-medium ${
              activeHandbook === 'student' ? 'active' : ''
            }`}
          >
            Student Handbook
          </button>
          <button
            onClick={() => {setActiveHandbook('employee'); setViewMode('overview');}}
            className={`handbook-tab flex-1 starz-font-sans font-medium ${
              activeHandbook === 'employee' ? 'active' : ''
            }`}
          >
            Employee Handbook
          </button>
          <button
            onClick={() => {setActiveHandbook('courses'); setViewMode('overview');}}
            className={`handbook-tab flex-1 starz-font-sans font-medium ${
              activeHandbook === 'courses' ? 'active' : ''
            }`}
          >
            <GraduationCap size={16} className="inline mr-1" />
            Course Guides
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search handbook sections..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-input pl-10 w-full"
          />
        </div>
      </div>

      {/* Handbook Content */}
      <div className="bg-white rounded-lg shadow-md p-6">
        {activeHandbook === 'courses' ? (
          // Show Course Guides content
          <div>
            <div className="mb-6">
              <h2 className="starz-font-serif text-xl font-bold text-gray-800 mb-2">
                {currentHandbook.title}
              </h2>
              <p className="starz-font-sans text-gray-600">
                {currentHandbook.description}
              </p>
            </div>
            <CourseGuidesTab />
          </div>
        ) : (
          // Show regular handbook content
          <div>
            {/* Handbook Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="starz-font-serif text-xl font-bold text-gray-800 mb-2">
                  {currentHandbook.title}
                </h2>
                <p className="starz-font-sans text-gray-600">
                  {currentHandbook.description}
                </p>
              </div>
              <div className="flex gap-2">
                {currentHandbook.filename && (
                  <button
                    onClick={handleViewDocument}
                    className="starz-accent starz-accent-hover px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors"
                  >
                    <BookOpen size={18} />
                    View Document
                  </button>
                )}
                {currentHandbook.filename && (
                  <button
                    onClick={() => handleDownload(currentHandbook.filename)}
                    className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors"
                  >
                    <Download size={18} />
                    Download PDF
                  </button>
                )}
              </div>
            </div>

            {/* Handbook Sections */}
            <div className="space-y-3">
              <h3 className="starz-font-serif text-lg font-semibold text-gray-800 mb-4">
                Table of Contents
              </h3>
              {filteredSections.map((section, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <span className="starz-font-sans text-gray-700">{section}</span>
                  <span className="text-sm text-gray-500">Page {index + 1}</span>
                </div>
              ))}
            </div>

            {/* Help Section */}
            <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <h4 className="starz-font-serif font-semibold text-gray-800 mb-2">
                Need Help?
              </h4>
              <p className="starz-font-sans text-sm text-gray-600">
                For questions about handbook content or university policies, contact the{' '}
                <a href="mailto:info@starzit.com" className="starz-text-gold font-medium">
                  Student Affairs Office
                </a>{' '}
                or visit the main office during business hours.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HandbooksTab;


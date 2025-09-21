import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Download, FileText } from 'lucide-react';

const PDFViewer = ({ pdfPath, title }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [zoom, setZoom] = useState(100);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  // For demonstration, we'll show a text-based view of the handbook content
  // In a real implementation, you would use a library like react-pdf
  const handbookContent = {
    'Starz_Student_Handbook_BIT_Semester_I_2023.pdf': {
      title: 'Student Handbook - BIT Semester I 2023',
      pages: [
        {
          title: 'Table of Contents',
          content: `
STARZ HISTORY
ABOUT PROGRAMS  
CHAIRMAN'S MESSAGE
THE PROCEDURE IN REGISTRATION
ACADEMIC RULES AND REGULATIONS GOVERNING STUDENTS
DEFINITION OF CREDIT HOURS & GRADING SYSTEM
GRADUATION REQUIREMENTS
THE OFFICE OF STUDENT AFFAIRS
FINANCIAL REQUIREMENTS
RULES GOVERNING STUDENT BEHAVIOR
GRIEVANCE PROCEDURES
CHANGE OF GRADES
STARZ ODE
COURSE GUIDE—INFORMATION TECHNOLOGY
COURSE GUIDE—TELECOMMUNICATIONS ENGINEERING
COURSE GUIDE—MANAGEMENT INFORMATION SYSTEMS
COURSE GUIDE—COMMUNICATIONS
PERSONAL INFORMATION
          `
        },
        {
          title: 'Starz History',
          content: `
Starz University was established in the U.S.A. 2007 and incorporated in Monrovia July of 2009; with the objectives of addressing the IT needs of Liberia and being the best in IT Education, Networking, and Software development.

Starz also provides IT services for schools, businesses, and customers throughout Liberia.

The mission of Starz is to provide effective capacity building services, thus, enhancing business efficiencies, schools productivities, and community services in Liberia.

The University is a Certified International Microsoft IT Academy in Liberia, and a registered partner of Cisco and IBM.

Starz operates as a tertiary and a technical technology skills development institution. It also offers Certification examinations through the Pearson-VUE Testing Center.
          `
        },
        {
          title: 'About Programs',
          content: `
The Degree Programs in Information Technology (BIT), Telecommunications & Engineering (BEng) and Management Information Systems (MIS) offer an interdisciplinary curricula focusing on both information technology and Business Management/Administration with concentration in project management.

The overarching goal of our programs is to prepare students with broad, integrated Information Technology knowledge including Communications, Computer Networking, Computer-based systems, Database Management, Software Development, Website Development, Digital Media and Electronic Publishing.

Students learn how to evaluate current and emerging technologies; identify user needs; design user-friendly interfaces; apply, configure and manage technologies; and assess the impact of technologies on individuals, organizations, and society.
          `
        },
        {
          title: 'Registration Procedures',
          content: `
Students are required to register for courses before attending classes. The counseling and guidance services of the office of student affairs, (with the help of peer advisors), is responsible for guidance during orientation which prepares students for the subsequent registration process.

Students may also complete the registration process online via student online platform by connecting through Starz official website (www.starzit.com).

REGULAR FRESHMAN PROCESS:
STEP I. Apply for enrollment category as regular freshman student
STEP II. & STEP III. Register for Entrance and Placement Examinations and write the exams on the specified date designed by the College.
STEP IV. Based upon the results of the Entrance and Placement Examinations, you will be admitted into the College as Regular freshman, Remedial or College Preparatory student.
STEP V. Students will be required to provide copies of required document as specified below and collect admissions letter from the Admissions and Records Office and proceed to registration for the semester.

Required documents:
- High School Diploma
- Valid WAEC certificate/results
- High school transcript
- Letter of Recommendation
- Passport size picture
- Medical Certificate (Current)
          `
        },
        {
          title: 'Academic Rules & Regulations',
          content: `
ATTENDANCE AND ABSENCE
It shall be the duty of each student of the college to attend regular classes at Starz College of Science and Technology and adhere to punctually at all college assemblies, classes exercise.

Absence Without Penalty:
A student may be absent without penalty in a semester as follows:
1. From a course meeting one time weekly- two times;
2. From a course meeting two times weekly-three times;
3. From course meeting three times weekly –five times;

Absence with Penalty:
A student who exceeds that limit of permissible absence from a course shall be dropped from the course and may not receive score for credit. Final report will be considered as failure and requires student to repeat course before graduation.
          `
        }
      ]
    },
    'staff_handbookapproved.pdf': {
      title: 'Staff Handbook',
      pages: [
        {
          title: 'Table of Contents',
          content: `
MESSAGE FROM THE PRESIDENT
INTRODUCTION
HISTORY
MISSION OF STARZ COLLEGE OF SCIENCE AND TECHNOLOGY
EQUAL OPPORTUNITY
CLASSIFICATIONS OF EMPLOYEES, WORK SCHEDULE
ATTENDANCE AND PAY
RESIGNATION AND TERMINATION
CORRECTIVE ACTION AND PROBLEM-SOLVING PROCEDURES
PROFESSIONAL CONDUCT
HEALTH AND SAFETY
          `
        },
        {
          title: 'President\'s Message',
          content: `
We are pleased to provide you with a copy of the Starz College of Science and Technology Staff Handbook. The handbook is intended to serve as both a guide and a reference source.

The strength and resiliency of Starz College of Science and Technology community is directly related to the dedication shown by its most valuable resource, the faculty and staff. Each of you plays a vital role in the teaching and learning mission of this institution, and it is a joy and privilege to join with you in this important work.

Sincerely,
Amb Latim Dathong
Latim Dathong, MBA.
President
          `
        },
        {
          title: 'Employment Policies',
          content: `
Employment at Starz College of Science and Technology is legally entered into or voluntary in nature. Employees can be considered Fulltime, Part time, Student Intern or volunteer.

Part time employee can resign with or without cause if a 30 days' notice is communicated to avoid legal penalties. Full time employees will have to follow the terms of their contract or any arrangements they have with the college.

The college may terminate the employment relationship at will at any time, with or without cause, and with or without notice.
          `
        },
        {
          title: 'Professional Conduct',
          content: `
DRESS CODE
All employees are expected to dress in a manner that is professional and appropriate for their position and work environment.

ANTI-HARASSMENT POLICY
The college does not discriminate in employment, educational programs, and activities on the basis of age, color, creed, disability, gender identity, genetic information, national origin, race, religion, sex, sexual orientation, or any other basis protected by law.

Any employee who believes that he or she has been unlawfully discriminated against should contact his or her supervisor or the VP of Administration.
          `
        }
      ]
    }
  };

  const currentHandbook = handbookContent[pdfPath] || { title: title, pages: [] };
  const totalPages = currentHandbook.pages.length;

  const handlePrevPage = () => {
    setCurrentPage(prev => Math.max(1, prev - 1));
  };

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(totalPages, prev + 1));
  };

  const handleZoomIn = () => {
    setZoom(prev => Math.min(200, prev + 25));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(50, prev - 25));
  };

  const handleDownload = () => {
    // In a real implementation, this would download the actual PDF
    const link = document.createElement('a');
    link.href = `/src/assets/${pdfPath}`;
    link.download = pdfPath;
    link.click();
  };

  if (currentHandbook.pages.length === 0) {
    return (
      <div className="flex items-center justify-center h-64 bg-gray-50 rounded-lg">
        <div className="text-center">
          <FileText size={48} className="mx-auto text-gray-400 mb-4" />
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Document Not Available</h3>
          <p className="text-gray-600">The requested document could not be loaded.</p>
        </div>
      </div>
    );
  }

  const currentPageData = currentHandbook.pages[currentPage - 1];

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* PDF Viewer Header */}
      <div className="bg-gray-100 p-4 border-b flex items-center justify-between">
        <div>
          <h3 className="starz-font-serif text-lg font-semibold text-gray-800">
            {currentHandbook.title}
          </h3>
          <p className="text-sm text-gray-600">
            Page {currentPage} of {totalPages}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleZoomOut}
            className="p-2 rounded hover:bg-gray-200 transition-colors"
            title="Zoom Out"
          >
            <ZoomOut size={18} />
          </button>
          <span className="text-sm text-gray-600 min-w-[60px] text-center">
            {zoom}%
          </span>
          <button
            onClick={handleZoomIn}
            className="p-2 rounded hover:bg-gray-200 transition-colors"
            title="Zoom In"
          >
            <ZoomIn size={18} />
          </button>
          <div className="w-px h-6 bg-gray-300 mx-2"></div>
          <button
            onClick={handleDownload}
            className="p-2 rounded hover:bg-gray-200 transition-colors"
            title="Download PDF"
          >
            <Download size={18} />
          </button>
        </div>
      </div>

      {/* PDF Content */}
      <div className="p-6" style={{ fontSize: `${zoom}%` }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="starz-font-serif text-2xl font-bold text-gray-800 mb-6">
            {currentPageData.title}
          </h2>
          <div className="starz-font-sans text-gray-700 leading-relaxed whitespace-pre-line">
            {currentPageData.content}
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="bg-gray-100 p-4 border-t flex items-center justify-between">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`flex items-center gap-2 px-4 py-2 rounded transition-colors ${
            currentPage === 1
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'starz-accent starz-accent-hover text-black'
          }`}
        >
          <ChevronLeft size={18} />
          Previous
        </button>

        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Page</span>
          <input
            type="number"
            min="1"
            max={totalPages}
            value={currentPage}
            onChange={(e) => {
              const page = parseInt(e.target.value);
              if (page >= 1 && page <= totalPages) {
                setCurrentPage(page);
              }
            }}
            className="w-16 px-2 py-1 text-center border border-gray-300 rounded"
          />
          <span className="text-sm text-gray-600">of {totalPages}</span>
        </div>

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`flex items-center gap-2 px-4 py-2 rounded transition-colors ${
            currentPage === totalPages
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'starz-accent starz-accent-hover text-black'
          }`}
        >
          Next
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default PDFViewer;


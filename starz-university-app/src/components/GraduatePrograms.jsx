import React, { useState } from 'react';
import { GraduationCap, BookOpen, Users, Award, Star, Clock, DollarSign, Globe, Briefcase, TrendingUp, Database, Shield, Package, BarChart3, Building, UserCheck, Lightbulb, Target, Zap } from 'lucide-react';

const GraduatePrograms = () => {
  const [activeProgram, setActiveProgram] = useState('mba');

  const graduatePrograms = {
    mba: {
      title: "Master of Business Administration (MBA)",
      icon: <Briefcase className="w-8 h-8" />,
      description: "A comprehensive graduate program designed to prepare students for success in management careers with 8 specialized streams.",
      duration: "15-20 months",
      credits: "42 credits",
      costPerCredit: "$50.00",
      registrationFee: "$150.00",
      applicationFee: "$100.00",
      format: "Blended (Online & Classroom)",
      schedule: "One course per month",
      color: "from-blue-600 to-blue-800",
      specializations: [
        {
          name: "MBA – Management & Administration",
          code: "MBM",
          icon: <Building className="w-5 h-5" />,
          description: "Focus on general management and administrative leadership"
        },
        {
          name: "MBA – Entrepreneurship & Innovation",
          code: "MEI", 
          icon: <Lightbulb className="w-5 h-5" />,
          description: "Develop entrepreneurial skills and innovation management"
        },
        {
          name: "MBA – Procurement & Logistics Management",
          code: "MPL",
          icon: <Package className="w-5 h-5" />,
          description: "Master supply chain and procurement strategies"
        },
        {
          name: "MBA – Management of International Organisations",
          code: "IOM",
          icon: <Globe className="w-5 h-5" />,
          description: "International business and organizational leadership"
        },
        {
          name: "MBA – Project Management",
          code: "MPM",
          icon: <Target className="w-5 h-5" />,
          description: "Advanced project management methodologies and practices"
        },
        {
          name: "MBA – Human Resource Management",
          code: "MHRM",
          icon: <UserCheck className="w-5 h-5" />,
          description: "Strategic human resource management and organizational behavior"
        },
        {
          name: "MBA – Finance & Accounting",
          code: "MFM",
          icon: <DollarSign className="w-5 h-5" />,
          description: "Corporate finance, investment, and financial management"
        },
        {
          name: "MBA – Education Management & Supervision",
          code: "MEMS",
          icon: <GraduationCap className="w-5 h-5" />,
          description: "Educational leadership and institutional management"
        }
      ],
      coreCourses: {
        semesterOne: [
          { code: "MBA 507", title: "Corporate Governance and Business Ethics", credits: 3 },
          { code: "MBA 501", title: "Financial Accounting", credits: 3 },
          { code: "MBA 509", title: "Human Resource Management & Organizational Behavior", credits: 3 },
          { code: "MBA 511", title: "Research Methodology and Project", credits: 3 }
        ],
        semesterTwo: [
          { code: "MBA 502", title: "Economics & Statistics for Managers", credits: 3 },
          { code: "MBA 503", title: "Business Communication Skills", credits: 3 },
          { code: "MBA 506", title: "Strategic Management", credits: 3 },
          { code: "MBA 508", title: "Managerial Accounting & Operations Management", credits: 3 }
        ]
      }
    },
    mit: {
      title: "Master of Information Technology (MIT)",
      icon: <Database className="w-8 h-8" />,
      description: "Advanced IT program focusing on engineering principles and business context for technology solutions.",
      duration: "15-20 months",
      credits: "37 credits",
      costPerCredit: "$55.00",
      registrationFee: "$150.00",
      applicationFee: "$100.00",
      format: "On Campus",
      schedule: "One course per month",
      color: "from-green-600 to-green-800",
      requirements: "5 years work experience in related area OR first degree in related area with Certified International Certificate in ICT",
      courses: {
        semesterOne: [
          { code: "MIT 501", title: "E-Business Technologies and Management", credits: 3 },
          { code: "MIT 502", title: "Cloud Computing and Data Analytics", credits: 3 },
          { code: "MIT 537", title: "Risks and Information System Control", credits: 3 },
          { code: "MIT 547", title: "Information Security Management", credits: 3 },
          { code: "MIT 562", title: "Research Methodology", credits: 3 }
        ],
        semesterTwo: [
          { code: "MIT 570", title: "Programming and Applications Development", credits: 3 },
          { code: "MIT 588", title: "Information Technology Project Management", credits: 3 },
          { code: "MIT 602", title: "Network and Servers Technologies Management", credits: 3 },
          { code: "MIT 622", title: "Software Development and Management", credits: 3 }
        ],
        semesterThree: [
          { code: "MIT 710", title: "ITIL Service Oriented Architecture", credits: 3 },
          { code: "MIT 721", title: "Strategic Management Information Systems", credits: 3 },
          { code: "MIT 731", title: "Thesis/Project work", credits: 4 },
          { code: "MIT 730", title: "Experiential Learning/Internship", credits: 3 }
        ]
      }
    }
  };

  const admissionRequirements = [
    "Relevant WASSCE/WAEC requirement",
    "Bachelor degree or equivalent with CGPA not less than 2.50 (4.00 scale) or 3.00 (5.00 scale)",
    "Certificates from recognized and accredited higher institution",
    "Detailed curriculum vitae (CV)",
    "Letter of motivation and research proposal",
    "2 passport sized photographs",
    "2 File Jackets (one Hanging, one Transparent folder)",
    "2 reference letters (Academic & Professional OR Academic & Religious/Community Leader)",
    "Attend Interview and collect Letter of Admission if successful"
  ];

  const programObjectives = [
    "Comprehensive and integrated knowledge of management functions",
    "Technical business skills application in new circumstances",
    "Integration of management function areas into strategic whole",
    "Analytical decision-making capabilities",
    "Effective communication skills for business audiences",
    "Leadership techniques for business environments",
    "Global perspective understanding and application"
  ];

  const currentProgram = graduatePrograms[activeProgram];

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Graduate Programs</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Starz University offers two comprehensive graduate programs designed to prepare future leaders 
          for success in the contemporary business and technology environment.
        </p>
      </div>

      {/* Program Selection */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        {Object.entries(graduatePrograms).map(([key, program]) => (
          <button
            key={key}
            onClick={() => setActiveProgram(key)}
            className={`flex-1 p-6 rounded-xl border-2 transition-all duration-300 ${
              activeProgram === key
                ? 'border-yellow-400 bg-yellow-50 shadow-lg'
                : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
            }`}
          >
            <div className="flex items-center justify-center mb-3">
              <div className={`p-3 rounded-full bg-gradient-to-r ${program.color} text-white`}>
                {program.icon}
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{program.title}</h3>
            <p className="text-sm text-gray-600">{program.description}</p>
          </button>
        ))}
      </div>

      {/* Program Details */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center mb-6">
          <div className={`p-4 rounded-full bg-gradient-to-r ${currentProgram.color} text-white mr-4`}>
            {currentProgram.icon}
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800">{currentProgram.title}</h2>
            <p className="text-gray-600 mt-2">{currentProgram.description}</p>
          </div>
        </div>

        {/* Program Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-50 p-4 rounded-lg">
            <Clock className="w-6 h-6 text-blue-600 mb-2" />
            <h4 className="font-semibold text-gray-800">Duration</h4>
            <p className="text-gray-600">{currentProgram.duration}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <BookOpen className="w-6 h-6 text-green-600 mb-2" />
            <h4 className="font-semibold text-gray-800">Total Credits</h4>
            <p className="text-gray-600">{currentProgram.credits}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <DollarSign className="w-6 h-6 text-yellow-600 mb-2" />
            <h4 className="font-semibold text-gray-800">Cost per Credit</h4>
            <p className="text-gray-600">{currentProgram.costPerCredit}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <Globe className="w-6 h-6 text-purple-600 mb-2" />
            <h4 className="font-semibold text-gray-800">Format</h4>
            <p className="text-gray-600">{currentProgram.format}</p>
          </div>
        </div>

        {/* MBA Specializations */}
        {activeProgram === 'mba' && (
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">MBA Specializations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentProgram.specializations.map((spec, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200">
                  <div className="flex items-center mb-2">
                    <div className="p-2 bg-blue-600 text-white rounded-lg mr-3">
                      {spec.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{spec.name}</h4>
                      <span className="text-sm text-blue-600 font-medium">({spec.code})</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">{spec.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Course Structure */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Course Structure</h3>
          
          {activeProgram === 'mba' ? (
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Semester One (12 Credits)</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentProgram.coreCourses.semesterOne.map((course, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg border">
                      <div className="flex justify-between items-start">
                        <div>
                          <h5 className="font-semibold text-gray-800">{course.code}</h5>
                          <p className="text-gray-600 text-sm">{course.title}</p>
                        </div>
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">
                          {course.credits} Credits
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Semester Two (12 Credits)</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentProgram.coreCourses.semesterTwo.map((course, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg border">
                      <div className="flex justify-between items-start">
                        <div>
                          <h5 className="font-semibold text-gray-800">{course.code}</h5>
                          <p className="text-gray-600 text-sm">{course.title}</p>
                        </div>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
                          {course.credits} Credits
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Final Stage</h4>
                <p className="text-gray-600">
                  Students complete their final year based on their chosen area of specialty, 
                  including specialized courses, thesis/project work, and experiential learning.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {Object.entries(currentProgram.courses).map(([semester, courses]) => (
                <div key={semester} className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-gray-800 mb-4 capitalize">
                    {semester.replace(/([A-Z])/g, ' $1').trim()}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {courses.map((course, index) => (
                      <div key={index} className="bg-white p-4 rounded-lg border">
                        <div className="flex justify-between items-start">
                          <div>
                            <h5 className="font-semibold text-gray-800">{course.code}</h5>
                            <p className="text-gray-600 text-sm">{course.title}</p>
                          </div>
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
                            {course.credits} Credits
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Special Requirements for MIT */}
        {activeProgram === 'mit' && (
          <div className="mb-8 bg-green-50 p-6 rounded-lg border border-green-200">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Special Requirements</h3>
            <p className="text-gray-700">{currentProgram.requirements}</p>
          </div>
        )}
      </div>

      {/* Admission Requirements */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Admission Requirements</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {admissionRequirements.map((requirement, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">{requirement}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Program Objectives */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Program Learning Objectives</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {programObjectives.map((objective, index) => (
            <div key={index} className="flex items-start space-x-3">
              <Star className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
              <p className="text-gray-700">{objective}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl p-8">
        <h3 className="text-2xl font-bold mb-6">Contact Graduate School</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-2">Address</h4>
            <p className="text-gray-300">
              Starz University Graduate School<br />
              Cheeseman Avenue Airfield, Sinkor<br />
              P.O. Box 1040, Monrovia, Liberia
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Contact</h4>
            <p className="text-gray-300">
              Phone: (+231) 886-248-210 / (+231) 777-271-313<br />
              Email: contact@starzit.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraduatePrograms;


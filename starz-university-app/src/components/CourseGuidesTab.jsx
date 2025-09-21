import React, { useState } from 'react';
import { ExternalLink, BookOpen, GraduationCap, Users, Award, Star, Trophy, Monitor, Database, Wifi, Megaphone, Shield, DollarSign, TrendingUp, Briefcase, Package, BarChart3, Search } from 'lucide-react';

const CourseGuidesTab = () => {
  const [activeCollege, setActiveCollege] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // BIT College Programs - Exactly as specified
  const bitCollegePrograms = [
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "BIT Systems Administration",
      description: "Learn system management, network administration, and IT infrastructure",
      college: "BIT",
      color: "from-blue-500 to-blue-700",
      url: "https://starzit.com/programs/bit-systems-administration",
      credits: 128,
      semesters: 8,
      years: 4,
      course_details: {
        "First Year": {
          "First Semester": [
            {"course_no": "ENGL 101", "course_title": "Freshman English I", "credit_hours": 3},
            {"course_no": "FO 100", "course_title": "Freshman Orientation - STEP", "credit_hours": 1},
            {"course_no": "FREN 101", "course_title": "French Grammar I", "credit_hours": 3},
            {"course_no": "INFO 101", "course_title": "Computer Introduction", "credit_hours": 3},
            {"course_no": "MATH 107", "course_title": "Pre-Calculus", "credit_hours": 4},
            {"course_no": "PHYS 101", "course_title": "Applied Physics", "credit_hours": 3}
          ],
          "Second Semester": [
            {"course_no": "ENGL 102", "course_title": "Freshman English II", "credit_hours": 3},
            {"course_no": "MATH 108", "course_title": "Math for Decision-Making", "credit_hours": 4},
            {"course_no": "FREN 102", "course_title": "French Grammar II", "credit_hours": 3},
            {"course_no": "GEOG 101", "course_title": "Global Issues in Technology", "credit_hours": 3},
            {"course_no": "ART 277", "course_title": "Introduction to Digital Media I", "credit_hours": 3}
          ]
        },
        "Second Year": {
          "First Semester": [
            {"course_no": "ART 205", "course_title": "Digital Media II", "credit_hours": 3},
            {"course_no": "ENGL 201", "course_title": "Sophomore English I", "credit_hours": 3},
            {"course_no": "INFO 278", "course_title": "Operating Systems", "credit_hours": 3},
            {"course_no": "INFO 201", "course_title": "Computer Concepts & Hardware", "credit_hours": 4},
            {"course_no": "MATH 203", "course_title": "Calculus for Business Students", "credit_hours": 4}
          ],
          "Second Semester": [
            {"course_no": "ENGL 202", "course_title": "Sophomore English II", "credit_hours": 3},
            {"course_no": "NET 207", "course_title": "Introduction to Networking", "credit_hours": 3},
            {"course_no": "BEN 201", "course_title": "Ethics / Morals and Customer Relation", "credit_hours": 3},
            {"course_no": "ENGR 286", "course_title": "Introduction to Database", "credit_hours": 3},
            {"course_no": "ENT 266", "course_title": "Leadership", "credit_hours": 3}
          ]
        },
        "Third Year": {
          "First Semester": [
            {"course_no": "INFO 301", "course_title": "Computer Programming Concept", "credit_hours": 3},
            {"course_no": "INFO 306", "course_title": "Web Design & Management", "credit_hours": 3},
            {"course_no": "INFO 307", "course_title": "Communication System/labs", "credit_hours": 4},
            {"course_no": "RSR 300", "course_title": "Research Methods", "credit_hours": 3},
            {"course_no": "INFO 341", "course_title": "Cloud Technology", "credit_hours": 3}
          ],
          "Second Semester": [
            {"course_no": "INFO 343", "course_title": "Enterprise Resource Planning", "credit_hours": 4},
            {"course_no": "INFO 344", "course_title": "IT & Risk Management", "credit_hours": 3},
            {"course_no": "INFO 355", "course_title": "e-Information Technology", "credit_hours": 3},
            {"course_no": "TMS 377", "course_title": "Technology Service Management", "credit_hours": 3},
            {"course_no": "INFO 400", "course_title": "Cyber & Virtual Concept", "credit_hours": 3}
          ]
        },
        "Fourth Year": {
          "First Semester": [
            {"course_no": "INFO 465", "course_title": "Network Information Security", "credit_hours": 3},
            {"course_no": "MNGT 480", "course_title": "Project Management", "credit_hours": 3},
            {"course_no": "INFO 411", "course_title": "Computer Network I MCSA 2008", "credit_hours": 4},
            {"course_no": "INFO 483", "course_title": "Technical Report Writing", "credit_hours": 3},
            {"course_no": "INFO 412", "course_title": "Computer Network II -Switching and Routing", "credit_hours": 4}
          ],
          "Second Semester": [
            {"course_no": "INFO 491", "course_title": "IT Capstone/Research Final Project", "credit_hours": 4},
            {"course_no": "INFO 421", "course_title": "Internship", "credit_hours": 6},
            {"course_no": "MIS 478", "course_title": "Management Information System", "credit_hours": 3}
          ]
        }
      }
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "BIT Database Administration",
      description: "Master database design, management, and optimization techniques",
      college: "BIT",
      color: "from-green-500 to-green-700",
      url: "https://starzit.com/programs/bit-database-administration",
      credits: 130,
      semesters: 8,
      years: 4,
      course_details: {
        "First Year": {
            "First Semester": [
                {"course_no": "ENGL 101", "course_title": "Freshman English I", "credit_hours": 3},
                {"course_no": "FO 100", "course_title": "Freshman Orientation - STEP", "credit_hours": 1},
                {"course_no": "FREN 101", "course_title": "French Grammar I", "credit_hours": 3},
                {"course_no": "INFO 101", "course_title": "Computer Introduction", "credit_hours": 3},
                {"course_no": "MATH 107", "course_title": "Pre-Calculus", "credit_hours": 4},
                {"course_no": "PHYS 101", "course_title": "Applied Physics", "credit_hours": 3}
            ],
            "Second Semester": [
                {"course_no": "ENGL 102", "course_title": "Freshman English II", "credit_hours": 3},
                {"course_no": "MATH 108", "course_title": "Math for Decision-Making", "credit_hours": 4},
                {"course_no": "FREN 102", "course_title": "French Grammar II", "credit_hours": 3},
                {"course_no": "GEOG 101", "course_title": "Global Issues in Technology", "credit_hours": 3},
                {"course_no": "INFO 102", "course_title": "Database Fundamentals", "credit_hours": 3}
            ]
        },
        "Second Year": {
            "First Semester": [
                {"course_no": "ENGL 201", "course_title": "Sophomore English I", "credit_hours": 3},
                {"course_no": "INFO 201", "course_title": "Computer Concepts & Hardware", "credit_hours": 4},
                {"course_no": "MATH 203", "course_title": "Calculus for Business Students", "credit_hours": 4},
                {"course_no": "ENGR 286", "course_title": "Introduction to Database", "credit_hours": 3},
                {"course_no": "INFO 278", "course_title": "Operating Systems", "credit_hours": 3}
            ],
            "Second Semester": [
                {"course_no": "ENGL 202", "course_title": "Sophomore English II", "credit_hours": 3},
                {"course_no": "ENGR 368", "course_title": "Database II", "credit_hours": 3},
                {"course_no": "BEN 201", "course_title": "Ethics / Morals and Customer Relation", "credit_hours": 3},
                {"course_no": "ENT 266", "course_title": "Leadership", "credit_hours": 3},
                {"course_no": "NET 207", "course_title": "Introduction to Networking", "credit_hours": 3}
            ]
        },
        "Third Year": {
            "First Semester": [
                {"course_no": "INFO 301", "course_title": "Computer Programming Concept", "credit_hours": 3},
                {"course_no": "INFO 306", "course_title": "Web Design & Management", "credit_hours": 3},
                {"course_no": "RSR 300", "course_title": "Research Methods", "credit_hours": 3},
                {"course_no": "INFO 341", "course_title": "Cloud Technology", "credit_hours": 3},
                {"course_no": "DB 301", "course_title": "Advanced Database Design", "credit_hours": 4}
            ],
            "Second Semester": [
                {"course_no": "INFO 343", "course_title": "Enterprise Resource Planning", "credit_hours": 4},
                {"course_no": "INFO 344", "course_title": "IT & Risk Management", "credit_hours": 3},
                {"course_no": "DB 302", "course_title": "Database Administration", "credit_hours": 4},
                {"course_no": "INFO 355", "course_title": "e-Information Technology", "credit_hours": 3},
                {"course_no": "TMS 377", "course_title": "Technology Service Management", "credit_hours": 3}
            ]
        },
        "Fourth Year": {
            "First Semester": [
                {"course_no": "DB 401", "course_title": "Database Performance Tuning", "credit_hours": 4},
                {"course_no": "MNGT 480", "course_title": "Project Management", "credit_hours": 3},
                {"course_no": "INFO 483", "course_title": "Technical Report Writing", "credit_hours": 3},
                {"course_no": "DB 402", "course_title": "Data Warehousing", "credit_hours": 4},
                {"course_no": "INFO 465", "course_title": "Network Information Security", "credit_hours": 3}
            ],
            "Second Semester": [
                {"course_no": "INFO 491", "course_title": "IT Capstone/Research Final Project", "credit_hours": 4},
                {"course_no": "INFO 421", "course_title": "Internship", "credit_hours": 6},
                {"course_no": "MIS 478", "course_title": "Management Information System", "credit_hours": 3}
            ]
        }
      }
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "BIT Telecommunications",
      description: "Study telecommunications systems, networks, and communication technologies",
      college: "BIT",
      color: "from-purple-500 to-purple-700",
      url: "https://starzit.com/programs/bit-telecommunications",
      credits: 120,
      semesters: 8,
      years: 4,
      course_details: {
        "First Year": {
            "First Semester": [
                {"course_no": "ENGL 101", "course_title": "Freshman English I", "credit_hours": 3},
                {"course_no": "MATH 107", "course_title": "Pre-Calculus", "credit_hours": 4},
                {"course_no": "FREN 101", "course_title": "French Grammar I", "credit_hours": 3},
                {"course_no": "INFO 101", "course_title": "Computer Introduction", "credit_hours": 3},
                {"course_no": "PHYS 101", "course_title": "Applied Physics", "credit_hours": 3}
            ],
            "Second Semester": [
                {"course_no": "ENGL 102", "course_title": "Freshman English II", "credit_hours": 3},
                {"course_no": "MATH 108", "course_title": "Math for Decision-Making", "credit_hours": 4},
                {"course_no": "FREN 102", "course_title": "French Grammar II", "credit_hours": 3},
                {"course_no": "GEOG 101", "course_title": "Global Issues in Technology", "credit_hours": 3},
                {"course_no": "TELE 101", "course_title": "Introduction to Telecommunications", "credit_hours": 3}
            ]
        },
        "Second Year": {
            "First Semester": [
                {"course_no": "ENGL 201", "course_title": "Sophomore English I", "credit_hours": 3},
                {"course_no": "INFO 201", "course_title": "Computer Concepts & Hardware", "credit_hours": 4},
                {"course_no": "MATH 203", "course_title": "Calculus for Business Students", "credit_hours": 4},
                {"course_no": "TELE 201", "course_title": "Digital Communications", "credit_hours": 3},
                {"course_no": "NET 207", "course_title": "Introduction to Networking", "credit_hours": 3}
            ],
            "Second Semester": [
                {"course_no": "ENGL 202", "course_title": "Sophomore English II", "credit_hours": 3},
                {"course_no": "TELE 202", "course_title": "Wireless Communications", "credit_hours": 3},
                {"course_no": "BEN 201", "course_title": "Ethics / Morals and Customer Relation", "credit_hours": 3},
                {"course_no": "ENT 266", "course_title": "Leadership", "credit_hours": 3},
                {"course_no": "TELE 203", "course_title": "Signal Processing", "credit_hours": 4}
            ]
        },
        "Third Year": {
            "First Semester": [
                {"course_no": "TELE 301", "course_title": "Advanced Telecommunications", "credit_hours": 4},
                {"course_no": "INFO 306", "course_title": "Web Design & Management", "credit_hours": 3},
                {"course_no": "RSR 300", "course_title": "Research Methods", "credit_hours": 3},
                {"course_no": "TELE 302", "course_title": "Fiber Optic Communications", "credit_hours": 3},
                {"course_no": "INFO 341", "course_title": "Cloud Technology", "credit_hours": 3}
            ],
            "Second Semester": [
                {"course_no": "TELE 303", "course_title": "Satellite Communications", "credit_hours": 3},
                {"course_no": "INFO 344", "course_title": "IT & Risk Management", "credit_hours": 3},
                {"course_no": "TELE 304", "course_title": "Mobile Communications", "credit_hours": 4},
                {"course_no": "INFO 355", "course_title": "e-Information Technology", "credit_hours": 3},
                {"course_no": "TMS 377", "course_title": "Technology Service Management", "credit_hours": 3}
            ]
        },
        "Fourth Year": {
            "First Semester": [
                {"course_no": "TELE 401", "course_title": "Telecommunications Network Design", "credit_hours": 4},
                {"course_no": "MNGT 480", "course_title": "Project Management", "credit_hours": 3},
                {"course_no": "INFO 483", "course_title": "Technical Report Writing", "credit_hours": 3},
                {"course_no": "TELE 402", "course_title": "Network Security", "credit_hours": 3},
                {"course_no": "INFO 465", "course_title": "Network Information Security", "credit_hours": 3}
            ],
            "Second Semester": [
                {"course_no": "INFO 491", "course_title": "IT Capstone/Research Final Project", "credit_hours": 4},
                {"course_no": "INFO 421", "course_title": "Internship", "credit_hours": 6},
                {"course_no": "MIS 478", "course_title": "Management Information System", "credit_hours": 3}
            ]
        }
      }
    },
    {
      icon: <Megaphone className="w-6 h-6" />,
      title: "BIT Communication and Media Studies",
      description: "Explore digital media, communication strategies, and content creation",
      college: "BIT",
      color: "from-pink-500 to-pink-700",
      url: "https://starzit.com/programs/bit-communication-and-media-studies",
      credits: 120,
      semesters: 8,
      years: 4,
      course_details: {
        "First Year": {
            "First Semester": [
                {"course_no": "ENGL 101", "course_title": "Freshman English I", "credit_hours": 3},
                {"course_no": "FO 100", "course_title": "Freshman Orientation (STEP)", "credit_hours": 1},
                {"course_no": "FREN 101", "course_title": "French Grammar I", "credit_hours": 3},
                {"course_no": "INFO 101", "course_title": "Computer Introduction", "credit_hours": 3},
                {"course_no": "MATH 107", "course_title": "Pre-Calculus", "credit_hours": 4},
                {"course_no": "ART 101", "course_title": "Introduction to Digital Arts", "credit_hours": 3}
            ],
            "Second Semester": [
                {"course_no": "ENGL 102", "course_title": "Freshman English II", "credit_hours": 3},
                {"course_no": "MATH 108", "course_title": "Math for Decision-Making", "credit_hours": 4},
                {"course_no": "FREN 102", "course_title": "French Grammar II", "credit_hours": 3},
                {"course_no": "GEOG 101", "course_title": "Global Issues in Technology", "credit_hours": 3},
                {"course_no": "ART 277", "course_title": "Introduction to Digital Media I", "credit_hours": 3}
            ]
        },
        "Second Year": {
            "First Semester": [
                {"course_no": "ART 205", "course_title": "Digital Media II", "credit_hours": 3},
                {"course_no": "ENGL 201", "course_title": "Sophomore English I", "credit_hours": 3},
                {"course_no": "INFO 201", "course_title": "Computer Concepts & Hardware", "credit_hours": 4},
                {"course_no": "MATH 203", "course_title": "Calculus for Business Students", "credit_hours": 4},
                {"course_no": "COMM 201", "course_title": "Communication Theory", "credit_hours": 3}
            ],
            "Second Semester": [
                {"course_no": "ENGL 202", "course_title": "Sophomore English II", "credit_hours": 3},
                {"course_no": "COMM 202", "course_title": "Media Production", "credit_hours": 3},
                {"course_no": "BEN 201", "course_title": "Ethics / Morals and Customer Relation", "credit_hours": 3},
                {"course_no": "ENT 266", "course_title": "Leadership", "credit_hours": 3},
                {"course_no": "ART 278", "course_title": "Advanced Digital Media", "credit_hours": 3}
            ]
        },
        "Third Year": {
            "First Semester": [
                {"course_no": "COMM 301", "course_title": "Mass Communication", "credit_hours": 3},
                {"course_no": "INFO 306", "course_title": "Web Design & Management", "credit_hours": 3},
                {"course_no": "RSR 300", "course_title": "Research Methods", "credit_hours": 3},
                {"course_no": "COMM 302", "course_title": "Broadcast Journalism", "credit_hours": 3},
                {"course_no": "ART 301", "course_title": "Multimedia Design", "credit_hours": 4}
            ],
            "Second Semester": [
                {"course_no": "COMM 303", "course_title": "Public Relations", "credit_hours": 3},
                {"course_no": "INFO 344", "course_title": "IT & Risk Management", "credit_hours": 3},
                {"course_no": "COMM 304", "course_title": "Social Media Management", "credit_hours": 3},
                {"course_no": "INFO 355", "course_title": "e-Information Technology", "credit_hours": 3},
                {"course_no": "ART 302", "course_title": "Video Production", "credit_hours": 4}
            ]
        },
        "Fourth Year": {
            "First Semester": [
                {"course_no": "COMM 401", "course_title": "Media Ethics and Law", "credit_hours": 3},
                {"course_no": "MNGT 480", "course_title": "Project Management", "credit_hours": 3},
                {"course_no": "INFO 483", "course_title": "Technical Report Writing", "credit_hours": 3},
                {"course_no": "COMM 402", "course_title": "Digital Marketing", "credit_hours": 3},
                {"course_no": "ART 401", "course_title": "Portfolio Development", "credit_hours": 4}
            ],
            "Second Semester": [
                {"course_no": "INFO 491", "course_title": "IT Capstone/Research Final Project", "credit_hours": 4},
                {"course_no": "INFO 421", "course_title": "Internship", "credit_hours": 6},
                {"course_no": "COMM 491", "course_title": "Media Capstone Project", "credit_hours": 3}
            ]
        }
      }
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "BIT Cybersecurity and MIS",
      description: "Focus on information security, risk management, and management information systems",
      college: "BIT",
      color: "from-red-500 to-red-700",
      url: "https://starzit.com/programs/bit-cybersecurity-and-mis",
      credits: 120,
      semesters: 8,
      years: 4,
      course_details: {
        "First Year": {
            "First Semester": [
                {"course_no": "ENGL 101", "course_title": "Freshman English I", "credit_hours": 3},
                {"course_no": "MATH 107", "course_title": "Pre-Calculus", "credit_hours": 4},
                {"course_no": "FREN 101", "course_title": "French Grammar I", "credit_hours": 3},
                {"course_no": "INFO 101", "course_title": "Computer Introduction", "credit_hours": 3},
                {"course_no": "PHYS 101", "course_title": "Applied Physics", "credit_hours": 3},
                {"course_no": "CYB 101", "course_title": "Introduction to Cybersecurity", "credit_hours": 3}
            ],
            "Second Semester": [
                {"course_no": "ENGL 102", "course_title": "Freshman English II", "credit_hours": 3},
                {"course_no": "MATH 108", "course_title": "Math for Decision-Making", "credit_hours": 4},
                {"course_no": "FREN 102", "course_title": "French Grammar II", "credit_hours": 3},
                {"course_no": "GEOG 101", "course_title": "Global Issues in Technology", "credit_hours": 3},
                {"course_no": "CYB 102", "course_title": "Network Security Fundamentals", "credit_hours": 3}
            ]
        },
        "Second Year": {
            "First Semester": [
                {"course_no": "ENGL 201", "course_title": "Sophomore English I", "credit_hours": 3},
                {"course_no": "INFO 201", "course_title": "Computer Concepts & Hardware", "credit_hours": 4},
                {"course_no": "MATH 203", "course_title": "Calculus for Business Students", "credit_hours": 4},
                {"course_no": "CYB 201", "course_title": "Ethical Hacking", "credit_hours": 3},
                {"course_no": "NET 207", "course_title": "Introduction to Networking", "credit_hours": 3}
            ],
            "Second Semester": [
                {"course_no": "ENGL 202", "course_title": "Sophomore English II", "credit_hours": 3},
                {"course_no": "CYB 202", "course_title": "Digital Forensics", "credit_hours": 3},
                {"course_no": "BEN 201", "course_title": "Ethics / Morals and Customer Relation", "credit_hours": 3},
                {"course_no": "ENT 266", "course_title": "Leadership", "credit_hours": 3},
                {"course_no": "MIS 201", "course_title": "Management Information Systems", "credit_hours": 3}
            ]
        },
        "Third Year": {
            "First Semester": [
                {"course_no": "CYB 301", "course_title": "Advanced Cybersecurity", "credit_hours": 4},
                {"course_no": "INFO 306", "course_title": "Web Design & Management", "credit_hours": 3},
                {"course_no": "RSR 300", "course_title": "Research Methods", "credit_hours": 3},
                {"course_no": "CYB 302", "course_title": "Incident Response", "credit_hours": 3},
                {"course_no": "MIS 301", "course_title": "Systems Analysis and Design", "credit_hours": 3}
            ],
            "Second Semester": [
                {"course_no": "CYB 303", "course_title": "Risk Assessment", "credit_hours": 3},
                {"course_no": "INFO 344", "course_title": "IT & Risk Management", "credit_hours": 3},
                {"course_no": "CYB 304", "course_title": "Cryptography", "credit_hours": 4},
                {"course_no": "INFO 355", "course_title": "e-Information Technology", "credit_hours": 3},
                {"course_no": "MIS 302", "course_title": "Database Management Systems", "credit_hours": 3}
            ]
        },
        "Fourth Year": {
            "First Semester": [
                {"course_no": "CYB 401", "course_title": "Security Policy and Governance", "credit_hours": 3},
                {"course_no": "MNGT 480", "course_title": "Project Management", "credit_hours": 3},
                {"course_no": "INFO 483", "course_title": "Technical Report Writing", "credit_hours": 3},
                {"course_no": "CYB 402", "course_title": "Advanced Threat Detection", "credit_hours": 4},
                {"course_no": "INFO 465", "course_title": "Network Information Security", "credit_hours": 3}
            ],
            "Second Semester": [
                {"course_no": "INFO 491", "course_title": "IT Capstone/Research Final Project", "credit_hours": 4},
                {"course_no": "INFO 421", "course_title": "Internship", "credit_hours": 6},
                {"course_no": "MIS 478", "course_title": "Management Information System", "credit_hours": 3}
            ]
        }
      }
    }
  ];

  // Business College Programs - Exactly as specified
  const businessCollegePrograms = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "BBA Banking and Finance",
      description: "Study financial markets, banking operations, and investment strategies",
      college: "Business",
      color: "from-emerald-500 to-emerald-700",
      url: "https://starzit.com/programs/bba-banking-and-finance",
      credits: 120,
      semesters: 8,
      years: 4,
      course_details: {
        "First Year": {
            "First Semester": [
                {"course_no": "ENGL-101", "course_title": "Freshman English-I", "credit_hours": 3},
                {"course_no": "Math-107", "course_title": "Pre-Calculus-I", "credit_hours": 4},
                {"course_no": "Acct - 101", "course_title": "Introduction to Accounting", "credit_hours": 3},
                {"course_no": "FREN-101", "course_title": "French Grammar-I", "credit_hours": 3},
                {"course_no": "PHYS 101", "course_title": "Applied Physics", "credit_hours": 3},
                {"course_no": "INFO 101", "course_title": "Computer Introduction", "credit_hours": 3}
            ],
            "Second Semester": [
                {"course_no": "ENGL-102", "course_title": "Freshman English-II", "credit_hours": 3},
                {"course_no": "Math-108", "course_title": "Math for Decision-Making", "credit_hours": 4},
                {"course_no": "Acct - 102", "course_title": "Financial Accounting", "credit_hours": 3},
                {"course_no": "FREN-102", "course_title": "French Grammar-II", "credit_hours": 3},
                {"course_no": "ECON 101", "course_title": "Principles of Economics", "credit_hours": 3}
            ]
        },
        "Second Year": {
            "First Semester": [
                {"course_no": "ENGL-201", "course_title": "Sophomore English-I", "credit_hours": 3},
                {"course_no": "Math-203", "course_title": "Calculus for Business Students", "credit_hours": 4},
                {"course_no": "Acct - 201", "course_title": "Managerial Accounting", "credit_hours": 3},
                {"course_no": "ECON 201", "course_title": "Microeconomics", "credit_hours": 3},
                {"course_no": "FIN 201", "course_title": "Principles of Finance", "credit_hours": 3}
            ],
            "Second Semester": [
                {"course_no": "ENGL-202", "course_title": "Sophomore English-II", "credit_hours": 3},
                {"course_no": "ECON 202", "course_title": "Macroeconomics", "credit_hours": 3},
                {"course_no": "FIN 202", "course_title": "Corporate Finance", "credit_hours": 3},
                {"course_no": "BEN 201", "course_title": "Ethics / Morals and Customer Relation", "credit_hours": 3},
                {"course_no": "STAT 201", "course_title": "Business Statistics", "credit_hours": 3}
            ]
        },
        "Third Year": {
            "First Semester": [
                {"course_no": "FIN 301", "course_title": "Investment Analysis", "credit_hours": 3},
                {"course_no": "FIN 302", "course_title": "Banking Operations", "credit_hours": 3},
                {"course_no": "RSR 300", "course_title": "Research Methods", "credit_hours": 3},
                {"course_no": "FIN 303", "course_title": "Financial Markets", "credit_hours": 3},
                {"course_no": "MNGT 301", "course_title": "Principles of Management", "credit_hours": 3}
            ],
            "Second Semester": [
                {"course_no": "FIN 304", "course_title": "International Finance", "credit_hours": 3},
                {"course_no": "FIN 305", "course_title": "Risk Management", "credit_hours": 3},
                {"course_no": "FIN 306", "course_title": "Portfolio Management", "credit_hours": 3},
                {"course_no": "MNGT 302", "course_title": "Organizational Behavior", "credit_hours": 3},
                {"course_no": "MKT 301", "course_title": "Principles of Marketing", "credit_hours": 3}
            ]
        },
        "Fourth Year": {
            "First Semester": [
                {"course_no": "FIN 401", "course_title": "Advanced Financial Analysis", "credit_hours": 3},
                {"course_no": "FIN 402", "course_title": "Financial Planning", "credit_hours": 3},
                {"course_no": "MNGT 480", "course_title": "Project Management", "credit_hours": 3},
                {"course_no": "FIN 403", "course_title": "Banking Law and Regulation", "credit_hours": 3},
                {"course_no": "BUS 483", "course_title": "Business Report Writing", "credit_hours": 3}
            ],
            "Second Semester": [
                {"course_no": "BUS 491", "course_title": "Business Capstone/Research Final Project", "credit_hours": 4},
                {"course_no": "BUS 421", "course_title": "Internship", "credit_hours": 6},
                {"course_no": "FIN 491", "course_title": "Finance Seminar", "credit_hours": 3}
            ]
        }
      }
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "BBA Marketing",
      description: "Learn marketing strategies, consumer behavior, and brand management",
      college: "Business",
      color: "from-orange-500 to-orange-700",
      url: "https://starzit.com/programs/bba-marketing",
      credits: 120,
      semesters: 8,
      years: 4,
      course_details: {
        "First Year": {
            "First Semester": [
                {"course_no": "ENGL-101", "course_title": "Freshman English-I", "credit_hours": 3},
                {"course_no": "Math-107", "course_title": "Pre-Calculus-I", "credit_hours": 4},
                {"course_no": "Acct - 101", "course_title": "Introduction to Accounting I", "credit_hours": 3},
                {"course_no": "FREN-101", "course_title": "French Grammar-I", "credit_hours": 3},
                {"course_no": "PHYS", "course_title": "Applied Physics", "credit_hours": 3},
                {"course_no": "INFO 101", "course_title": "Computer Introduction", "credit_hours": 3}
            ],
            "Second Semester": [
                {"course_no": "ENGL-102", "course_title": "Freshman English-II", "credit_hours": 3},
                {"course_no": "Math-108", "course_title": "Math for Decision-Making", "credit_hours": 4},
                {"course_no": "Acct - 102", "course_title": "Financial Accounting", "credit_hours": 3},
                {"course_no": "FREN-102", "course_title": "French Grammar-II", "credit_hours": 3},
                {"course_no": "ECON 101", "course_title": "Principles of Economics", "credit_hours": 3}
            ]
        },
        "Second Year": {
            "First Semester": [
                {"course_no": "ENGL-201", "course_title": "Sophomore English-I", "credit_hours": 3},
                {"course_no": "Math-203", "course_title": "Calculus for Business Students", "credit_hours": 4},
                {"course_no": "MKT 201", "course_title": "Principles of Marketing", "credit_hours": 3},
                {"course_no": "ECON 201", "course_title": "Microeconomics", "credit_hours": 3},
                {"course_no": "PSYC 201", "course_title": "Consumer Psychology", "credit_hours": 3}
            ],
            "Second Semester": [
                {"course_no": "ENGL-202", "course_title": "Sophomore English-II", "credit_hours": 3},
                {"course_no": "MKT 202", "course_title": "Consumer Behavior", "credit_hours": 3},
                {"course_no": "MKT 203", "course_title": "Marketing Research", "credit_hours": 3},
                {"course_no": "BEN 201", "course_title": "Ethics / Morals and Customer Relation", "credit_hours": 3},
                {"course_no": "STAT 201", "course_title": "Business Statistics", "credit_hours": 3}
            ]
        },
        "Third Year": {
            "First Semester": [
                {"course_no": "MKT 301", "course_title": "Brand Management", "credit_hours": 3},
                {"course_no": "MKT 302", "course_title": "Digital Marketing", "credit_hours": 3},
                {"course_no": "RSR 300", "course_title": "Research Methods", "credit_hours": 3},
                {"course_no": "MKT 303", "course_title": "Sales Management", "credit_hours": 3},
                {"course_no": "MNGT 301", "course_title": "Principles of Management", "credit_hours": 3}
            ],
            "Second Semester": [
                {"course_no": "MKT 304", "course_title": "International Marketing", "credit_hours": 3},
                {"course_no": "MKT 305", "course_title": "Advertising and Promotion", "credit_hours": 3},
                {"course_no": "MKT 306", "course_title": "Retail Marketing", "credit_hours": 3},
                {"course_no": "MNGT 302", "course_title": "Organizational Behavior", "credit_hours": 3},
                {"course_no": "FIN 201", "course_title": "Principles of Finance", "credit_hours": 3}
            ]
        },
        "Fourth Year": {
            "First Semester": [
                {"course_no": "MKT 401", "course_title": "Strategic Marketing", "credit_hours": 3},
                {"course_no": "MKT 402", "course_title": "Marketing Analytics", "credit_hours": 3},
                {"course_no": "MNGT 480", "course_title": "Project Management", "credit_hours": 3},
                {"course_no": "MKT 403", "course_title": "Social Media Marketing", "credit_hours": 3},
                {"course_no": "BUS 483", "course_title": "Business Report Writing", "credit_hours": 3}
            ],
            "Second Semester": [
                {"course_no": "BUS 491", "course_title": "Business Capstone/Research Final Project", "credit_hours": 4},
                {"course_no": "BUS 421", "course_title": "Internship", "credit_hours": 6},
                {"course_no": "MKT 491", "course_title": "Marketing Seminar", "credit_hours": 3}
            ]
        }
      }
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "BBA Business Administration",
      description: "Develop core business skills in management, finance, and marketing",
      college: "Business",
      color: "from-blue-500 to-blue-700",
      url: "https://starzit.com/programs/bba-business-administration",
      credits: 120,
      semesters: 8,
      years: 4,
      course_details: {
        "First Year": {
            "First Semester": [
                {"course_no": "ENGL-101", "course_title": "Freshman English-I", "credit_hours": 3},
                {"course_no": "Math-107", "course_title": "Pre-Calculus-I", "credit_hours": 4},
                {"course_no": "Acct - 101", "course_title": "Introduction to Accounting I", "credit_hours": 3},
                {"course_no": "FREN-101", "course_title": "French Grammar-I", "credit_hours": 3},
                {"course_no": "PHYS 101", "course_title": "Applied Physics", "credit_hours": 3},
                {"course_no": "INFO 101", "course_title": "Computer Introduction", "credit_hours": 3}
            ],
            "Second Semester": [
                {"course_no": "ENGL-102", "course_title": "Freshman English-II", "credit_hours": 3},
                {"course_no": "Math-108", "course_title": "Math for Decision-Making", "credit_hours": 4},
                {"course_no": "Acct - 102", "course_title": "Financial Accounting", "credit_hours": 3},
                {"course_no": "FREN-102", "course_title": "French Grammar-II", "credit_hours": 3},
                {"course_no": "ECON 101", "course_title": "Principles of Economics", "credit_hours": 3}
            ]
        },
        "Second Year": {
            "First Semester": [
                {"course_no": "ENGL-201", "course_title": "Sophomore English-I", "credit_hours": 3},
                {"course_no": "Math-203", "course_title": "Calculus for Business Students", "credit_hours": 4},
                {"course_no": "MNGT 201", "course_title": "Principles of Management", "credit_hours": 3},
                {"course_no": "ECON 201", "course_title": "Microeconomics", "credit_hours": 3},
                {"course_no": "MKT 201", "course_title": "Principles of Marketing", "credit_hours": 3}
            ],
            "Second Semester": [
                {"course_no": "ENGL-202", "course_title": "Sophomore English-II", "credit_hours": 3},
                {"course_no": "MNGT 202", "course_title": "Organizational Behavior", "credit_hours": 3},
                {"course_no": "FIN 201", "course_title": "Principles of Finance", "credit_hours": 3},
                {"course_no": "BEN 201", "course_title": "Ethics / Morals and Customer Relation", "credit_hours": 3},
                {"course_no": "STAT 201", "course_title": "Business Statistics", "credit_hours": 3}
            ]
        },
        "Third Year": {
            "First Semester": [
                {"course_no": "MNGT 301", "course_title": "Human Resource Management", "credit_hours": 3},
                {"course_no": "MNGT 302", "course_title": "Operations Management", "credit_hours": 3},
                {"course_no": "RSR 300", "course_title": "Research Methods", "credit_hours": 3},
                {"course_no": "MNGT 303", "course_title": "Business Law", "credit_hours": 3},
                {"course_no": "ECON 301", "course_title": "Managerial Economics", "credit_hours": 3}
            ],
            "Second Semester": [
                {"course_no": "MNGT 304", "course_title": "Strategic Management", "credit_hours": 3},
                {"course_no": "MNGT 305", "course_title": "International Business", "credit_hours": 3},
                {"course_no": "MNGT 306", "course_title": "Entrepreneurship", "credit_hours": 3},
                {"course_no": "FIN 301", "course_title": "Investment Analysis", "credit_hours": 3},
                {"course_no": "MKT 301", "course_title": "Brand Management", "credit_hours": 3}
            ]
        },
        "Fourth Year": {
            "First Semester": [
                {"course_no": "MNGT 401", "course_title": "Organizational Development", "credit_hours": 3},
                {"course_no": "MNGT 402", "course_title": "Leadership and Change Management", "credit_hours": 3},
                {"course_no": "MNGT 480", "course_title": "Project Management", "credit_hours": 3},
                {"course_no": "MNGT 403", "course_title": "Supply Chain Management", "credit_hours": 3},
                {"course_no": "BUS 483", "course_title": "Business Report Writing", "credit_hours": 3}
            ],
            "Second Semester": [
                {"course_no": "BUS 491", "course_title": "Business Capstone/Research Final Project", "credit_hours": 4},
                {"course_no": "BUS 421", "course_title": "Internship", "credit_hours": 6},
                {"course_no": "MNGT 491", "course_title": "Business Administration Seminar", "credit_hours": 3}
            ]
        }
      }
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "BBA Procurement & Logistics",
      description: "Manage supply chains, logistics, and procurement processes efficiently",
      college: "Business",
      color: "from-indigo-500 to-indigo-700",
      url: "https://starzit.com/programs/bba-procurement-and-logistics",
      credits: 120,
      semesters: 8,
      years: 4,
      course_details: {
        "First Year": {
            "First Semester": [
                {"course_no": "ENGL-101", "course_title": "Freshman English-I", "credit_hours": 3},
                {"course_no": "Math-107", "course_title": "Pre-Calculus-I", "credit_hours": 4},
                {"course_no": "Acct - 101", "course_title": "Introduction to Accounting I", "credit_hours": 3},
                {"course_no": "FREN-101", "course_title": "French Grammar-I", "credit_hours": 3},
                {"course_no": "PHYS 101", "course_title": "Applied Physics", "credit_hours": 3},
                {"course_no": "INFO 101", "course_title": "Computer Introduction", "credit_hours": 3}
            ],
            "Second Semester": [
                {"course_no": "ENGL-102", "course_title": "Freshman English-II", "credit_hours": 3},
                {"course_no": "Math-108", "course_title": "Math for Decision-Making", "credit_hours": 4},
                {"course_no": "Acct - 102", "course_title": "Financial Accounting", "credit_hours": 3},
                {"course_no": "FREN-102", "course_title": "French Grammar-II", "credit_hours": 3},
                {"course_no": "ECON 101", "course_title": "Principles of Economics", "credit_hours": 3}
            ]
        },
        "Second Year": {
            "First Semester": [
                {"course_no": "ENGL-201", "course_title": "Sophomore English-I", "credit_hours": 3},
                {"course_no": "Math-203", "course_title": "Calculus for Business Students", "credit_hours": 4},
                {"course_no": "LOG 201", "course_title": "Introduction to Logistics", "credit_hours": 3},
                {"course_no": "ECON 201", "course_title": "Microeconomics", "credit_hours": 3},
                {"course_no": "MNGT 201", "course_title": "Principles of Management", "credit_hours": 3}
            ],
            "Second Semester": [
                {"course_no": "ENGL-202", "course_title": "Sophomore English-II", "credit_hours": 3},
                {"course_no": "LOG 202", "course_title": "Supply Chain Management", "credit_hours": 3},
                {"course_no": "PUR 201", "course_title": "Principles of Procurement", "credit_hours": 3},
                {"course_no": "BEN 201", "course_title": "Ethics / Morals and Customer Relation", "credit_hours": 3},
                {"course_no": "STAT 201", "course_title": "Business Statistics", "credit_hours": 3}
            ]
        },
        "Third Year": {
            "First Semester": [
                {"course_no": "LOG 301", "course_title": "Transportation Management", "credit_hours": 3},
                {"course_no": "PUR 301", "course_title": "Strategic Sourcing", "credit_hours": 3},
                {"course_no": "RSR 300", "course_title": "Research Methods", "credit_hours": 3},
                {"course_no": "LOG 302", "course_title": "Warehouse Management", "credit_hours": 3},
                {"course_no": "MNGT 301", "course_title": "Human Resource Management", "credit_hours": 3}
            ],
            "Second Semester": [
                {"course_no": "LOG 303", "course_title": "Global Logistics", "credit_hours": 3},
                {"course_no": "PUR 302", "course_title": "Contract Management", "credit_hours": 3},
                {"course_no": "LOG 304", "course_title": "Inventory Management", "credit_hours": 3},
                {"course_no": "MNGT 302", "course_title": "Organizational Behavior", "credit_hours": 3},
                {"course_no": "FIN 201", "course_title": "Principles of Finance", "credit_hours": 3}
            ]
        },
        "Fourth Year": {
            "First Semester": [
                {"course_no": "LOG 401", "course_title": "Supply Chain Analytics", "credit_hours": 3},
                {"course_no": "PUR 401", "course_title": "Supplier Relationship Management", "credit_hours": 3},
                {"course_no": "MNGT 480", "course_title": "Project Management", "credit_hours": 3},
                {"course_no": "LOG 402", "course_title": "Logistics Technology", "credit_hours": 3},
                {"course_no": "BUS 483", "course_title": "Business Report Writing", "credit_hours": 3}
            ],
            "Second Semester": [
                {"course_no": "BUS 491", "course_title": "Business Capstone/Research Final Project", "credit_hours": 4},
                {"course_no": "BUS 421", "course_title": "Internship", "credit_hours": 6},
                {"course_no": "LOG 491", "course_title": "Procurement & Logistics Seminar", "credit_hours": 3}
            ]
        }
      }
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "BBA Project Management",
      description: "Project planning, execution, and management methodologies",
      college: "Business",
      color: "from-cyan-500 to-cyan-700",
      url: "https://starzit.com/programs/bba-project-management",
      credits: 120,
      semesters: 8,
      years: 4
    }
  ];

  // Master College Programs
  const masterCollegePrograms = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Master of Information Technology",
      description: "Advanced studies in IT management, cybersecurity, and data science",
      college: "Master",
      color: "from-gray-700 to-gray-900",
      url: "https://starzit.com/programs/master-of-information-technology",
      credits: 60,
      semesters: 4,
      years: 2,
      course_details: {
        "First Year": {
            "First Semester": [
                {"course_no": "MIT 601", "course_title": "Advanced Information Systems", "credit_hours": 3},
                {"course_no": "MIT 602", "course_title": "IT Strategy and Governance", "credit_hours": 3},
                {"course_no": "MIT 603", "course_title": "Advanced Database Systems", "credit_hours": 3},
                {"course_no": "MIT 604", "course_title": "Enterprise Architecture", "credit_hours": 3},
                {"course_no": "MIT 605", "course_title": "Research Methods in IT", "credit_hours": 3}
            ],
            "Second Semester": [
                {"course_no": "MIT 606", "course_title": "Advanced Network Security", "credit_hours": 3},
                {"course_no": "MIT 607", "course_title": "Cloud Computing and Virtualization", "credit_hours": 3},
                {"course_no": "MIT 608", "course_title": "Data Analytics and Business Intelligence", "credit_hours": 3},
                {"course_no": "MIT 609", "course_title": "IT Project Management", "credit_hours": 3},
                {"course_no": "MIT 610", "course_title": "Emerging Technologies", "credit_hours": 3}
            ]
        },
        "Second Year": {
            "First Semester": [
                {"course_no": "MIT 701", "course_title": "Advanced Cybersecurity", "credit_hours": 3},
                {"course_no": "MIT 702", "course_title": "Machine Learning and AI", "credit_hours": 3},
                {"course_no": "MIT 703", "course_title": "Digital Transformation", "credit_hours": 3},
                {"course_no": "MIT 704", "course_title": "IT Leadership and Management", "credit_hours": 3},
                {"course_no": "MIT 705", "course_title": "Elective Course", "credit_hours": 3}
            ],
            "Second Semester": [
                {"course_no": "MIT 799", "course_title": "Master's Thesis/Capstone Project", "credit_hours": 6},
                {"course_no": "MIT 798", "course_title": "Professional Internship", "credit_hours": 6},
                {"course_no": "MIT 797", "course_title": "Seminar in IT", "credit_hours": 3}
            ]
        }
      }
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Master of Business Administration (MBA)",
      description: "Develop advanced leadership and management skills for the global business environment",
      college: "Master",
      color: "from-gray-700 to-gray-900",
      url: "https://starzit.com/programs/master-of-business-administration",
      credits: 60,
      semesters: 4,
      years: 2,
      course_details: {
        "First Year": {
            "First Semester": [
                {"course_no": "MBA 601", "course_title": "Strategic Management", "credit_hours": 3},
                {"course_no": "MBA 602", "course_title": "Advanced Financial Management", "credit_hours": 3},
                {"course_no": "MBA 603", "course_title": "Marketing Strategy", "credit_hours": 3},
                {"course_no": "MBA 604", "course_title": "Operations and Supply Chain Management", "credit_hours": 3},
                {"course_no": "MBA 605", "course_title": "Research Methods in Business", "credit_hours": 3}
            ],
            "Second Semester": [
                {"course_no": "MBA 606", "course_title": "Organizational Leadership", "credit_hours": 3},
                {"course_no": "MBA 607", "course_title": "International Business", "credit_hours": 3},
                {"course_no": "MBA 608", "course_title": "Business Analytics", "credit_hours": 3},
                {"course_no": "MBA 609", "course_title": "Entrepreneurship and Innovation", "credit_hours": 3},
                {"course_no": "MBA 610", "course_title": "Business Ethics and Corporate Governance", "credit_hours": 3}
            ]
        },
        "Second Year": {
            "First Semester": [
                {"course_no": "MBA 701", "course_title": "Advanced Strategic Planning", "credit_hours": 3},
                {"course_no": "MBA 702", "course_title": "Change Management", "credit_hours": 3},
                {"course_no": "MBA 703", "course_title": "Digital Business Strategy", "credit_hours": 3},
                {"course_no": "MBA 704", "course_title": "Executive Leadership", "credit_hours": 3},
                {"course_no": "MBA 705", "course_title": "Elective Course", "credit_hours": 3}
            ],
            "Second Semester": [
                {"course_no": "MBA 799", "course_title": "Master's Thesis/Capstone Project", "credit_hours": 6},
                {"course_no": "MBA 798", "course_title": "Professional Internship", "credit_hours": 6},
                {"course_no": "MBA 797", "course_title": "Business Seminar", "credit_hours": 3}
            ]
        }
      }
    }
  ];

  // Combine all programs
  const allPrograms = [...bitCollegePrograms, ...businessCollegePrograms, ...masterCollegePrograms];

  // Filter programs based on active college
  const filteredPrograms = activeCollege === 'all' 
    ? allPrograms 
    : allPrograms.filter(program => program.college.toLowerCase() === activeCollege.toLowerCase());

  const ProgramCard = ({ program }) => {
    const [showCourses, setShowCourses] = useState(false);

    const renderCourseDetails = () => {
      if (!program.course_details) return null;

      return (
        <div className="mt-4 border-t pt-4">
          <h4 className="font-semibold text-gray-800 mb-3">Course Details</h4>
          {Object.entries(program.course_details).map(([year, semesters]) => (
            <div key={year} className="mb-4">
              <h5 className="font-medium text-gray-700 mb-2">{year}</h5>
              {Object.entries(semesters).map(([semester, courses]) => (
                <div key={semester} className="mb-3 ml-4">
                  <h6 className="text-sm font-medium text-gray-600 mb-2">{semester}</h6>
                  <div className="text-xs text-gray-500 mb-1">
                    {courses.reduce((total, course) => total + course.credit_hours, 0)} Credits
                  </div>
                  <div className="space-y-1">
                    {courses.map((course, index) => (
                      <div key={index} className="flex justify-between items-center text-xs bg-gray-50 p-2 rounded">
                        <div>
                          <span className="font-medium text-gray-700">{course.course_no}</span>
                          <span className="ml-2 text-gray-600">{course.course_title}</span>
                        </div>
                        <span className="text-gray-500">{course.credit_hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      );
    };

    return (
      <div className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-200 hover:border-gray-300">
        <a 
          href={program.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="block"
        >
          <div className={`bg-gradient-to-r ${program.color} text-white p-4 rounded-lg mb-4`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {program.icon}
                <h3 className="text-lg font-semibold">{program.title}</h3>
              </div>
              <ExternalLink className="w-5 h-5" />
            </div>
          </div>
          <p className="text-gray-600 mb-4">{program.description}</p>
          
          {/* Program Details */}
          <div className="grid grid-cols-3 gap-4 mb-4 p-3 bg-gray-50 rounded-lg">
            <div className="text-center">
              <div className="text-lg font-bold text-blue-600">{program.credits}</div>
              <div className="text-xs text-gray-500">Credits</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-green-600">{program.semesters}</div>
              <div className="text-xs text-gray-500">Semesters</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-purple-600">{program.years}</div>
              <div className="text-xs text-gray-500">Years</div>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              program.college === 'BIT' ? 'bg-blue-100 text-blue-800' :
              program.college === 'Business' ? 'bg-green-100 text-green-800' :
              'bg-purple-100 text-purple-800'
            }`}>
              {program.college} College
            </span>
            <span className="text-sm text-gray-500">Click to learn more</span>
          </div>
        </a>
        
        {/* Course Details Toggle */}
        {program.course_details && (
          <div className="mt-4 border-t pt-4">
            <button
              onClick={() => setShowCourses(!showCourses)}
              className="w-full text-left text-sm font-medium text-blue-600 hover:text-blue-800 flex items-center justify-between"
            >
              <span>{showCourses ? 'Hide' : 'Show'} Course Details</span>
              <span className={`transform transition-transform ${showCourses ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>
            {showCourses && renderCourseDetails()}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Course Guide</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive academic programs across three colleges: BIT, Business, and Master programs.
            Each program is designed to provide industry-relevant skills and knowledge.
          </p>
        </div>

        {/* College Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveCollege('all')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeCollege === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            All Programs
          </button>
          <button
            onClick={() => setActiveCollege('bit')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeCollege === 'bit'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            BIT College
          </button>
          <button
            onClick={() => setActiveCollege('business')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeCollege === 'business'
                ? 'bg-green-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Business College
          </button>
          <button
            onClick={() => setActiveCollege('master')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeCollege === 'master'
                ? 'bg-purple-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Master College
          </button>
        </div>

        {/* College Sections */}
        {activeCollege === 'all' && (
          <div className="space-y-12">
            {/* BIT College Section */}
            <div>
              <div className="flex items-center mb-6">
                <Monitor className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">BIT College</h2>
                <span className="ml-4 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  {bitCollegePrograms.length} Programs
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {bitCollegePrograms.map((program, index) => (
                  <ProgramCard key={index} program={program} />
                ))}
              </div>
            </div>

            {/* Business College Section */}
            <div>
              <div className="flex items-center mb-6">
                <Briefcase className="w-8 h-8 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Business College</h2>
                <span className="ml-4 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  {businessCollegePrograms.length} Programs
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {businessCollegePrograms.map((program, index) => (
                  <ProgramCard key={index} program={program} />
                ))}
              </div>
            </div>

            {/* Master College Section */}
            <div>
              <div className="flex items-center mb-6">
                <GraduationCap className="w-8 h-8 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Master College</h2>
                <span className="ml-4 px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                  {masterCollegePrograms.length} Programs
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {masterCollegePrograms.map((program, index) => (
                  <ProgramCard key={index} program={program} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Filtered Programs */}
        {activeCollege !== 'all' && (
          <div>
            <div className="flex items-center mb-6">
              {activeCollege === 'bit' && <Monitor className="w-8 h-8 text-blue-600 mr-3" />}
              {activeCollege === 'business' && <Briefcase className="w-8 h-8 text-green-600 mr-3" />}
              {activeCollege === 'master' && <GraduationCap className="w-8 h-8 text-purple-600 mr-3" />}
              <h2 className="text-2xl font-bold text-gray-900">
                {activeCollege.charAt(0).toUpperCase() + activeCollege.slice(1)} College Programs
              </h2>
              <span className={`ml-4 px-3 py-1 rounded-full text-sm font-medium ${
                activeCollege === 'bit' ? 'bg-blue-100 text-blue-800' :
                activeCollege === 'business' ? 'bg-green-100 text-green-800' :
                'bg-purple-100 text-purple-800'
              }`}>
                {filteredPrograms.length} Programs
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPrograms.map((program, index) => (
                <ProgramCard key={index} program={program} />
              ))}
            </div>
          </div>
        )}

        {/* Summary Statistics */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Program Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">{bitCollegePrograms.length}</div>
              <div className="text-gray-600">BIT Programs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">{businessCollegePrograms.length}</div>
              <div className="text-gray-600">Business Programs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">{masterCollegePrograms.length}</div>
              <div className="text-gray-600">Master Programs</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseGuidesTab;


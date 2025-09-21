import React, { useState } from 'react';
import { ExternalLink, BookOpen, GraduationCap, Users, Award, Star, Trophy, Monitor, Database, Wifi, Megaphone, Shield, DollarSign, TrendingUp, Briefcase, Package, BarChart3 } from 'lucide-react';
import GraduatePrograms from './GraduatePrograms';

const BrowseProgramsTab = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  // BIT College Programs - Exactly as specified
  const bitCollegePrograms = [
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "BIT Systems Administration",
      description: "Learn system management, network administration, and IT infrastructure",
      college: "BIT",
      color: "from-blue-500 to-blue-700",
      url: "https://starzit.com/bit-systems-administration",
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
      url: "https://starzit.com/bit-database-administration",
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
      url: "https://starzit.com/bit-telecommunications",
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
      url: "https://starzit.com/bit-communication-and-media-studies",
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
                {"course_no": "COMM 101", "course_title": "Introduction to Communication", "credit_hours": 3}
            ]
        },
        "Second Year": {
            "First Semester": [
                {"course_no": "ENGL 201", "course_title": "Sophomore English I", "credit_hours": 3},
                {"course_no": "INFO 201", "course_title": "Computer Concepts & Hardware", "credit_hours": 4},
                {"course_no": "MATH 203", "course_title": "Calculus for Business Students", "credit_hours": 4},
                {"course_no": "COMM 201", "course_title": "Media Ethics", "credit_hours": 3},
                {"course_no": "ART 277", "course_title": "Introduction to Digital Media I", "credit_hours": 3}
            ],
            "Second Semester": [
                {"course_no": "ENGL 202", "course_title": "Sophomore English II", "credit_hours": 3},
                {"course_no": "COMM 202", "course_title": "Interpersonal Communication", "credit_hours": 3},
                {"course_no": "BEN 201", "course_title": "Ethics / Morals and Customer Relation", "credit_hours": 3},
                {"course_no": "ENT 266", "course_title": "Leadership", "credit_hours": 3},
                {"course_no": "ART 205", "course_title": "Digital Media II", "credit_hours": 3}
            ]
        },
        "Third Year": {
            "First Semester": [
                {"course_no": "COMM 301", "course_title": "Public Relations", "credit_hours": 3},
                {"course_no": "INFO 306", "course_title": "Web Design & Management", "credit_hours": 3},
                {"course_no": "RSR 300", "course_title": "Research Methods", "credit_hours": 3},
                {"course_no": "COMM 302", "course_title": "Journalism and Reporting", "credit_hours": 3},
                {"course_no": "COMM 303", "course_title": "Visual Communication", "credit_hours": 3}
            ],
            "Second Semester": [
                {"course_no": "COMM 304", "course_title": "Digital Marketing", "credit_hours": 3},
                {"course_no": "INFO 344", "course_title": "IT & Risk Management", "credit_hours": 3},
                {"course_no": "COMM 305", "course_title": "Broadcasting and Production", "credit_hours": 4},
                {"course_no": "INFO 355", "course_title": "e-Information Technology", "credit_hours": 3},
                {"course_no": "TMS 377", "course_title": "Technology Service Management", "credit_hours": 3}
            ]
        },
        "Fourth Year": {
            "First Semester": [
                {"course_no": "COMM 401", "course_title": "Media Law and Policy", "credit_hours": 3},
                {"course_no": "MNGT 480", "course_title": "Project Management", "credit_hours": 3},
                {"course_no": "INFO 483", "course_title": "Technical Report Writing", "credit_hours": 3},
                {"course_no": "COMM 402", "course_title": "Advanced Media Production", "credit_hours": 4},
                {"course_no": "COMM 403", "course_title": "Global Communication", "credit_hours": 3}
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
      icon: <Shield className="w-6 h-6" />,
      title: "BIT Cybersecurity",
      description: "Comprehensive cybersecurity education covering network security, ethical hacking, digital forensics, and security management",
      college: "BIT",
      color: "from-red-500 to-red-700",
      url: "https://starzit.com/bit-cybersecurity",
      credits: 132,
      semesters: 8,
      years: 4,
      course_details: {
        "First Year": {
          "First Semester": [
            {"course_no": "FO 100", "course_title": "Freshman Orientation", "credit_hours": 1},
            {"course_no": "FREN 101", "course_title": "French Grammar 1", "credit_hours": 3},
            {"course_no": "PHYS 101", "course_title": "Applied Physics", "credit_hours": 3},
            {"course_no": "INFO101", "course_title": "Introduction to Computer", "credit_hours": 3},
            {"course_no": "STH 110", "course_title": "Introduction to System Thinking", "credit_hours": 3},
            {"course_no": "MATH 107", "course_title": "Pre-Calculus", "credit_hours": 4},
            {"course_no": "ENGL 101", "course_title": "Freshman English I", "credit_hours": 3}
          ],
          "Second Semester": [
            {"course_no": "ENGL 102", "course_title": "Freshman English II", "credit_hours": 3},
            {"course_no": "FREN 102", "course_title": "French Grammar I", "credit_hours": 3},
            {"course_no": "NET 207", "course_title": "Introduction to Networking", "credit_hours": 3},
            {"course_no": "MATH 109", "course_title": "Calculus I", "credit_hours": 4},
            {"course_no": "CS-104", "course_title": "Data Structures and Algorithms", "credit_hours": 3},
            {"course_no": "CS-101", "course_title": "Introduction to Cyber security", "credit_hours": 3}
          ]
        },
        "Second Year": {
          "First Semester": [
            {"course_no": "ENGL 201", "course_title": "Sophomore English I", "credit_hours": 3},
            {"course_no": "INFO 278/CS-201", "course_title": "Operating Systems", "credit_hours": 3},
            {"course_no": "CS-202", "course_title": "Introduction to Cryptography", "credit_hours": 3},
            {"course_no": "CS-203", "course_title": "Discrete Mathematics", "credit_hours": 4},
            {"course_no": "ENGR 286", "course_title": "Introduction to Database Systems", "credit_hours": 3},
            {"course_no": "INFO 201", "course_title": "Computer Concepts & Hardware", "credit_hours": 3}
          ],
          "Second Semester": [
            {"course_no": "INFO-210", "course_title": "Scripting and Programing Fundamentals", "credit_hours": 3},
            {"course_no": "MATH -205", "course_title": "Probability and Statistics", "credit_hours": 4},
            {"course_no": "INFO 217", "course_title": "Introduction to Programing in Python", "credit_hours": 3},
            {"course_no": "CS 207", "course_title": "Managing Information Security", "credit_hours": 3},
            {"course_no": "CS 208", "course_title": "Cyber Defense and Countermeasures", "credit_hours": 4}
          ]
        },
        "Third Year": {
          "First Semester": [
            {"course_no": "CS-301", "course_title": "Network Security", "credit_hours": 3},
            {"course_no": "CS-302", "course_title": "Secure Coding", "credit_hours": 3},
            {"course_no": "CS-303", "course_title": "Web Application Security", "credit_hours": 3},
            {"course_no": "CS-304", "course_title": "Incident Response and Recovery", "credit_hours": 3},
            {"course_no": "INFO-309", "course_title": "Introduction to Programing in Java", "credit_hours": 3},
            {"course_no": "CS-305", "course_title": "Cyber Law and Ethics", "credit_hours": 3}
          ],
          "Second Semester": [
            {"course_no": "CS-306", "course_title": "Digital Forensics", "credit_hours": 3},
            {"course_no": "CS-307", "course_title": "Security Policy and Management", "credit_hours": 3},
            {"course_no": "CS-308", "course_title": "Mobile Security", "credit_hours": 3},
            {"course_no": "CS-309", "course_title": "Security in Cloud Computing", "credit_hours": 3},
            {"course_no": "CS-311", "course_title": "Shell Scripting (Linux)", "credit_hours": 3},
            {"course_no": "CS-310", "course_title": "Malware Analysis and Reverse Engineering", "credit_hours": 3}
          ]
        },
        "Fourth Year": {
          "First Semester": [
            {"course_no": "CS-401", "course_title": "Advanced Cryptography", "credit_hours": 3},
            {"course_no": "CS-402", "course_title": "Ethical Hacking/Penetration Testing", "credit_hours": 4},
            {"course_no": "CS-403", "course_title": "Security Architecture and Design", "credit_hours": 3},
            {"course_no": "CS-404", "course_title": "Cybersecurity Project", "credit_hours": 3},
            {"course_no": "CS-405", "course_title": "Cybersecurity Risk Management", "credit_hours": 3},
            {"course_no": "INFO 483/CS-483", "course_title": "Technical Report Writing", "credit_hours": 3}
          ],
          "Second Semester": [
            {"course_no": "CS-491", "course_title": "Cybersecurity Capstone Project", "credit_hours": 4},
            {"course_no": "CS407", "course_title": "Emerging Threats and Countermeasures", "credit_hours": 3},
            {"course_no": "CS-421", "course_title": "Cybersecurity Internship", "credit_hours": 6},
            {"course_no": "CS408", "course_title": "Cyber-Physical Systems Security", "credit_hours": 3},
            {"course_no": "CS-409", "course_title": "Information Systems Security", "credit_hours": 3}
          ]
        }
      }
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "BIT Management Information Systems (MIS)",
      description: "Focus on business information systems, database management, enterprise resource planning, and IT management",
      college: "BIT",
      color: "from-purple-500 to-purple-700",
      url: "https://starzit.com/bit-management-information-systems",
      credits: 130,
      semesters: 8,
      years: 4,
      course_details: {
        "First Year": {
          "First Semester": [
            {"course_no": "ENGL 101", "course_title": "Freshman English I", "credit_hours": 3},
            {"course_no": "FO 100", "course_title": "Freshman Orientation", "credit_hours": 1},
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
            {"course_no": "ENGR 368", "course_title": "Database II", "credit_hours": 3},
            {"course_no": "BIS 100", "course_title": "Introduction to Business", "credit_hours": 3},
            {"course_no": "INFO 301", "course_title": "Computer Programming Concept", "credit_hours": 3},
            {"course_no": "INFO 306", "course_title": "Web Design & Management", "credit_hours": 3},
            {"course_no": "INFO 307", "course_title": "Communication System/labs", "credit_hours": 4},
            {"course_no": "RSR 300", "course_title": "Research Methods", "credit_hours": 3}
          ],
          "Second Semester": [
            {"course_no": "INFO 341", "course_title": "Cloud Technology", "credit_hours": 3},
            {"course_no": "INFO 343", "course_title": "Enterprise Resource Planning", "credit_hours": 4},
            {"course_no": "INFO 344", "course_title": "IT & Risk Management", "credit_hours": 3},
            {"course_no": "INFO 355", "course_title": "e-Information Technology", "credit_hours": 3},
            {"course_no": "TMS 377", "course_title": "Technology Service Management", "credit_hours": 3}
          ]
        },
        "Fourth Year": {
          "First Semester": [
            {"course_no": "INFO 400", "course_title": "Cyber & Virtual Concept", "credit_hours": 3},
            {"course_no": "INFO 465", "course_title": "Network Information Security", "credit_hours": 3},
            {"course_no": "MNGT 480", "course_title": "Project Management", "credit_hours": 3},
            {"course_no": "INFO 411", "course_title": "Computer Network I MCSA 2008", "credit_hours": 4},
            {"course_no": "INFO 483", "course_title": "Technical Report Writing", "credit_hours": 3}
          ],
          "Second Semester": [
            {"course_no": "INFO 412", "course_title": "Computer Network II -Switching and Routing", "credit_hours": 4},
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
      description: "Learn financial management, banking operations, and investment strategies",
      college: "Business",
      color: "from-emerald-500 to-emerald-700",
      url: "https://starzit.com/bba-banking-and-finance",
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
                {"course_no": "FIN 201", "course_title": "Principles of Finance", "credit_hours": 3},
                {"course_no": "ECON 201", "course_title": "Microeconomics", "credit_hours": 3},
                {"course_no": "ACCTG 201", "course_title": "Intermediate Accounting I", "credit_hours": 3}
            ],
            "Second Semester": [
                {"course_no": "ENGL-202", "course_title": "Sophomore English-II", "credit_hours": 3},
                {"course_no": "FIN 202", "course_title": "Financial Markets and Institutions", "credit_hours": 3},
                {"course_no": "BEN 201", "course_title": "Ethics / Morals and Customer Relation", "credit_hours": 3},
                {"course_no": "ENT 266", "course_title": "Leadership", "credit_hours": 3},
                {"course_no": "STAT 201", "course_title": "Business Statistics", "credit_hours": 3}
            ]
        },
        "Third Year": {
            "First Semester": [
                {"course_no": "FIN 301", "course_title": "Investment Analysis", "credit_hours": 3},
                {"course_no": "FIN 302", "course_title": "Corporate Finance", "credit_hours": 3},
                {"course_no": "RSR 300", "course_title": "Research Methods", "credit_hours": 3},
                {"course_no": "FIN 303", "course_title": "International Finance", "credit_hours": 3},
                {"course_no": "ECON 301", "course_title": "Monetary Economics", "credit_hours": 3}
            ],
            "Second Semester": [
                {"course_no": "FIN 304", "course_title": "Risk Management", "credit_hours": 3},
                {"course_no": "FIN 305", "course_title": "Financial Modeling", "credit_hours": 3},
                {"course_no": "FIN 306", "course_title": "Banking Operations", "credit_hours": 3},
                {"course_no": "MNGT 302", "course_title": "Organizational Behavior", "credit_hours": 3},
                {"course_no": "MKT 301", "course_title": "Principles of Marketing", "credit_hours": 3}
            ]
        },
        "Fourth Year": {
            "First Semester": [
                {"course_no": "FIN 401", "course_title": "Portfolio Management", "credit_hours": 3},
                {"course_no": "FIN 402", "course_title": "Financial Derivatives", "credit_hours": 3},
                {"course_no": "MNGT 480", "course_title": "Project Management", "credit_hours": 3},
                {"course_no": "FIN 403", "course_title": "Financial Regulations", "credit_hours": 3},
                {"course_no": "BUS 483", "course_title": "Business Report Writing", "credit_hours": 3}
            ],
            "Second Semester": [
                {"course_no": "BUS 491", "course_title": "Business Capstone/Research Final Project", "credit_hours": 4},
                {"course_no": "BUS 421", "course_title": "Internship", "credit_hours": 6},
                {"course_no": "FIN 491", "course_title": "Banking and Finance Seminar", "credit_hours": 3}
            ]
        }
      }
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "BBA Marketing",
      description: "Master marketing strategies, consumer behavior, and brand management",
      college: "Business",
      color: "from-orange-500 to-orange-700",
      url: "https://starzit.com/bba-marketing",
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
                {"course_no": "MKT 201", "course_title": "Principles of Marketing", "credit_hours": 3},
                {"course_no": "ECON 201", "course_title": "Microeconomics", "credit_hours": 3},
                {"course_no": "MNGT 201", "course_title": "Principles of Management", "credit_hours": 3}
            ],
            "Second Semester": [
                {"course_no": "ENGL-202", "course_title": "Sophomore English-II", "credit_hours": 3},
                {"course_no": "MKT 202", "course_title": "Consumer Behavior", "credit_hours": 3},
                {"course_no": "BEN 201", "course_title": "Ethics / Morals and Customer Relation", "credit_hours": 3},
                {"course_no": "ENT 266", "course_title": "Leadership", "credit_hours": 3},
                {"course_no": "STAT 201", "course_title": "Business Statistics", "credit_hours": 3}
            ]
        },
        "Third Year": {
            "First Semester": [
                {"course_no": "MKT 301", "course_title": "Marketing Research", "credit_hours": 3},
                {"course_no": "MKT 302", "course_title": "Digital Marketing", "credit_hours": 3},
                {"course_no": "RSR 300", "course_title": "Research Methods", "credit_hours": 3},
                {"course_no": "MKT 303", "course_title": "Brand Management", "credit_hours": 3},
                {"course_no": "MNGT 301", "course_title": "Human Resource Management", "credit_hours": 3}
            ],
            "Second Semester": [
                {"course_no": "MKT 304", "course_title": "Integrated Marketing Communications", "credit_hours": 3},
                {"course_no": "MKT 305", "course_title": "Sales Management", "credit_hours": 3},
                {"course_no": "MKT 306", "course_title": "International Marketing", "credit_hours": 3},
                {"course_no": "MNGT 302", "course_title": "Organizational Behavior", "credit_hours": 3},
                {"course_no": "FIN 201", "course_title": "Principles of Finance", "credit_hours": 3}
            ]
        },
        "Fourth Year": {
            "First Semester": [
                {"course_no": "MKT 401", "course_title": "Strategic Marketing", "credit_hours": 3},
                {"course_no": "MKT 402", "course_title": "Product Development and Innovation", "credit_hours": 3},
                {"course_no": "MNGT 480", "course_title": "Project Management", "credit_hours": 3},
                {"course_no": "MKT 403", "course_title": "Services Marketing", "credit_hours": 3},
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
      description: "Comprehensive business management, leadership, and organizational skills",
      college: "Business",
      color: "from-indigo-500 to-indigo-700",
      url: "https://starzit.com/bba-business-administration",
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
      description: "Supply chain management, procurement strategies, and logistics optimization",
      college: "Business",
      color: "from-teal-500 to-teal-700",
      url: "https://starzit.com/bba-procurement-logistics",
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
      description: "Project planning, execution, risk management, and team leadership",
      college: "Business",
      color: "from-cyan-500 to-cyan-700",
      url: "https://starzit.com/bba-project-management",
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
                {"course_no": "PM 201", "course_title": "Introduction to Project Management", "credit_hours": 3}
            ],
            "Second Semester": [
                {"course_no": "ENGL-202", "course_title": "Sophomore English-II", "credit_hours": 3},
                {"course_no": "PM 202", "course_title": "Project Planning and Scheduling", "credit_hours": 3},
                {"course_no": "FIN 201", "course_title": "Principles of Finance", "credit_hours": 3},
                {"course_no": "BEN 201", "course_title": "Ethics / Morals and Customer Relation", "credit_hours": 3},
                {"course_no": "STAT 201", "course_title": "Business Statistics", "credit_hours": 3}
            ]
        },
        "Third Year": {
            "First Semester": [
                {"course_no": "PM 301", "course_title": "Project Risk Management", "credit_hours": 3},
                {"course_no": "PM 302", "course_title": "Project Quality Management", "credit_hours": 3},
                {"course_no": "RSR 300", "course_title": "Research Methods", "credit_hours": 3},
                {"course_no": "PM 303", "course_title": "Project Cost Management", "credit_hours": 3},
                {"course_no": "MNGT 301", "course_title": "Human Resource Management", "credit_hours": 3}
            ],
            "Second Semester": [
                {"course_no": "PM 304", "course_title": "Project Procurement Management", "credit_hours": 3},
                {"course_no": "PM 305", "course_title": "Agile Project Management", "credit_hours": 3},
                {"course_no": "PM 306", "course_title": "Project Leadership", "credit_hours": 3},
                {"course_no": "MNGT 302", "course_title": "Organizational Behavior", "credit_hours": 3},
                {"course_no": "MKT 301", "course_title": "Principles of Marketing", "credit_hours": 3}
            ]
        },
        "Fourth Year": {
            "First Semester": [
                {"course_no": "PM 401", "course_title": "Project Portfolio Management", "credit_hours": 3},
                {"course_no": "PM 402", "course_title": "Project Management Software", "credit_hours": 3},
                {"course_no": "MNGT 480", "course_title": "Project Management", "credit_hours": 3},
                {"course_no": "PM 403", "course_title": "Global Project Management", "credit_hours": 3},
                {"course_no": "BUS 483", "course_title": "Business Report Writing", "credit_hours": 3}
            ],
            "Second Semester": [
                {"course_no": "BUS 491", "course_title": "Business Capstone/Research Final Project", "credit_hours": 4},
                {"course_no": "BUS 421", "course_title": "Internship", "credit_hours": 6},
                {"course_no": "PM 491", "course_title": "Project Management Seminar", "credit_hours": 3}
            ]
        }
      }
    }
  ];

  // Master College Programs
  const masterCollegePrograms = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Master of Information Technology (MIT)",
      description: "Advanced information technology, system architecture, and IT leadership",
      college: "Master",
      color: "from-violet-500 to-violet-700",
      url: "https://starzit.com/master-programs/mit",
      credits: 60,
      semesters: 4,
      years: 2,
      course_details: {
        "First Year": {
            "First Semester": [
                {"course_no": "MIT 501", "course_title": "Advanced Database Systems", "credit_hours": 3},
                {"course_no": "MIT 502", "course_title": "Software Engineering", "credit_hours": 3},
                {"course_no": "MIT 503", "course_title": "Network Security", "credit_hours": 3},
                {"course_no": "MIT 504", "course_title": "Research Methodology", "credit_hours": 3},
                {"course_no": "MIT 505", "course_title": "Advanced Programming", "credit_hours": 3}
            ],
            "Second Semester": [
                {"course_no": "MIT 506", "course_title": "Data Mining and Analytics", "credit_hours": 3},
                {"course_no": "MIT 507", "course_title": "Cloud Computing", "credit_hours": 3},
                {"course_no": "MIT 508", "course_title": "Mobile Application Development", "credit_hours": 3},
                {"course_no": "MIT 509", "course_title": "IT Project Management", "credit_hours": 3},
                {"course_no": "MIT 510", "course_title": "Artificial Intelligence", "credit_hours": 3}
            ]
        },
        "Second Year": {
            "First Semester": [
                {"course_no": "MIT 601", "course_title": "Machine Learning", "credit_hours": 3},
                {"course_no": "MIT 602", "course_title": "Cybersecurity Management", "credit_hours": 3},
                {"course_no": "MIT 603", "course_title": "Enterprise Architecture", "credit_hours": 3},
                {"course_no": "MIT 604", "course_title": "Digital Transformation", "credit_hours": 3},
                {"course_no": "MIT 605", "course_title": "IT Governance", "credit_hours": 3}
            ],
            "Second Semester": [
                {"course_no": "MIT 701", "course_title": "Master's Thesis", "credit_hours": 6},
                {"course_no": "MIT 702", "course_title": "Advanced Seminar in IT", "credit_hours": 3},
                {"course_no": "MIT 703", "course_title": "Professional Internship", "credit_hours": 6}
            ]
        }
      }
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Master of Business Administration (MBA)",
      description: "Advanced business leadership, strategic management, and executive skills",
      college: "Master",
      color: "from-amber-500 to-amber-700",
      url: "https://starzit.com/master-programs/mba",
      credits: 60,
      semesters: 4,
      years: 2,
      course_details: {
        "First Year": {
            "First Semester": [
                {"course_no": "MBA 501", "course_title": "Strategic Management", "credit_hours": 3},
                {"course_no": "MBA 502", "course_title": "Financial Management", "credit_hours": 3},
                {"course_no": "MBA 503", "course_title": "Marketing Management", "credit_hours": 3},
                {"course_no": "MBA 504", "course_title": "Organizational Behavior", "credit_hours": 3},
                {"course_no": "MBA 505", "course_title": "Research Methods", "credit_hours": 3}
            ],
            "Second Semester": [
                {"course_no": "MBA 506", "course_title": "Operations Management", "credit_hours": 3},
                {"course_no": "MBA 507", "course_title": "Human Resource Management", "credit_hours": 3},
                {"course_no": "MBA 508", "course_title": "International Business", "credit_hours": 3},
                {"course_no": "MBA 509", "course_title": "Business Ethics", "credit_hours": 3},
                {"course_no": "MBA 510", "course_title": "Managerial Economics", "credit_hours": 3}
            ]
        },
        "Second Year": {
            "First Semester": [
                {"course_no": "MBA 601", "course_title": "Leadership and Change Management", "credit_hours": 3},
                {"course_no": "MBA 602", "course_title": "Corporate Finance", "credit_hours": 3},
                {"course_no": "MBA 603", "course_title": "Digital Business Strategy", "credit_hours": 3},
                {"course_no": "MBA 604", "course_title": "Innovation Management", "credit_hours": 3},
                {"course_no": "MBA 605", "course_title": "Business Analytics", "credit_hours": 3}
            ],
            "Second Semester": [
                {"course_no": "MBA 701", "course_title": "Master's Thesis", "credit_hours": 6},
                {"course_no": "MBA 702", "course_title": "Executive Seminar", "credit_hours": 3},
                {"course_no": "MBA 703", "course_title": "Management Internship", "credit_hours": 6}
            ]
        }
      }
    }
  ];

  const getAllPrograms = () => {
    return [...bitCollegePrograms, ...businessCollegePrograms, ...masterCollegePrograms];
  };

  const getFilteredPrograms = () => {
    switch (activeCategory) {
      case 'bit':
        return bitCollegePrograms;
      case 'business':
        return businessCollegePrograms;
      case 'master':
        return masterCollegePrograms;
      default:
        return getAllPrograms();
    }
  };

  const ProgramCard = ({ program }) => {
    const [showCourses, setShowCourses] = useState(false);
    
    return (
      <div className={`bg-gradient-to-br ${program.color} rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300`}>
        <div className="flex items-start space-x-4">
          <div className="bg-white/20 rounded-xl p-3">
            {program.icon}
          </div>
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <h3 className="text-lg font-bold">{program.title}</h3>
            </div>
            <p className="text-white/90 text-sm mb-3">{program.description}</p>
            
            {/* Program Details */}
            <div className="grid grid-cols-3 gap-2 mb-3 p-2 bg-white/10 rounded-lg">
              <div className="text-center">
                <div className="text-sm font-bold">{program.credits}</div>
                <div className="text-xs text-white/80">Credits</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-bold">{program.semesters}</div>
                <div className="text-xs text-white/80">Semesters</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-bold">{program.years}</div>
                <div className="text-xs text-white/80">Years</div>
              </div>
            </div>
            
            <div className="flex items-center justify-between mb-3">
              <span className="bg-white/20 px-3 py-1 rounded-full text-xs">{program.college} College</span>
              <button 
                onClick={() => setShowCourses(!showCourses)}
                className="bg-white/20 px-3 py-1 rounded-full text-xs hover:bg-white/30 transition-colors"
              >
                {showCourses ? 'Hide Courses' : 'View Courses'}
              </button>
            </div>
            
            {/* Course Details */}
            {showCourses && program.course_details && (
              <div className="mt-4 p-4 bg-white/10 rounded-lg max-h-96 overflow-y-auto">
                {Object.entries(program.course_details).map(([year, yearData]) => (
                  <div key={year} className="mb-4">
                    <h4 className="font-bold text-sm mb-2 text-yellow-200">{year}</h4>
                    {Object.entries(yearData).map(([semester, courses]) => (
                      <div key={semester} className="mb-3">
                        <h5 className="font-semibold text-xs mb-2 text-white/90">{semester}</h5>
                        <div className="space-y-1">
                          {courses.map((course, index) => (
                            <div key={index} className="flex justify-between items-center text-xs bg-white/5 p-2 rounded">
                              <div>
                                <span className="font-medium">{course.course_no}</span>
                                <span className="ml-2 text-white/80">{course.course_title}</span>
                              </div>
                              <span className="text-yellow-200 font-bold">{course.credit_hours} cr</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}
            
            <a 
              href={program.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block mt-3 bg-white/20 px-4 py-2 rounded-lg text-sm hover:bg-white/30 transition-colors"
            >
              Learn More →
            </a>
          </div>
        </div>
      </div>
    );
  };

  const CollegeSection = ({ title, programs, icon, description }) => (
    <div className="mb-8">
      <div className="flex items-center space-x-3 mb-6">
        <div className="bg-yellow-400 rounded-xl p-3">
          {icon}
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {programs.map((program, index) => (
          <ProgramCard key={index} program={program} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="h-full bg-gray-50 overflow-y-auto">
      {/* Header */}
      <div className="starz-primary p-6 m-4 rounded-lg">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="starz-font-serif text-2xl font-bold text-white mb-2">
              Course Guide
            </h1>
            <p className="text-gray-300 text-sm">
              Explore our three colleges: BIT, Business, and Master
            </p>
          </div>
          <button
            onClick={() => window.open('https://starzit.com/browse-programs/', '_blank')}
            className="starz-accent starz-accent-hover px-4 py-2 rounded-lg font-medium flex items-center space-x-2 transition-colors"
          >
            <ExternalLink size={16} />
            <span>View All</span>
          </button>
        </div>
      </div>

      {/* College Filter */}
      <div className="p-6 bg-white border-b mx-4 rounded-lg mb-4">
        <div className="flex flex-wrap gap-3">
          {[
            { key: 'all', label: 'All Colleges', icon: <BookOpen className="w-4 h-4" /> },
            { key: 'bit', label: 'BIT College', icon: <Monitor className="w-4 h-4" /> },
            { key: 'business', label: 'Business College', icon: <Briefcase className="w-4 h-4" /> },
            { key: 'master', label: 'Master College', icon: <GraduationCap className="w-4 h-4" /> }
          ].map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                activeCategory === category.key
                  ? 'bg-yellow-400 text-black shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.icon}
              <span>{category.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Programs Display */}
      <div className="p-6 mx-4">
        {activeCategory === 'all' ? (
          <div>
            <CollegeSection 
              title="BIT College" 
              programs={bitCollegePrograms}
              icon={<Monitor className="w-6 h-6 text-black" />}
              description="Bachelor of Information Technology programs including Cybersecurity and MIS"
            />
            <CollegeSection 
              title="Business College" 
              programs={businessCollegePrograms}
              icon={<Briefcase className="w-6 h-6 text-black" />}
              description="Bachelor of Business Administration programs"
            />
            <div className="mb-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-yellow-400 rounded-xl mr-4">
                  <GraduationCap className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Graduate Programs</h2>
                  <p className="text-gray-600">Master's degree programs</p>
                </div>
              </div>
              <GraduatePrograms />
            </div>
          </div>
        ) : activeCategory === 'master' ? (
          <GraduatePrograms />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getFilteredPrograms().map((program, index) => (
              <ProgramCard key={index} program={program} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BrowseProgramsTab;


import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Search, DollarSign, GraduationCap, Clock, Phone, Mail, MapPin } from 'lucide-react';

const FAQTab = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedItems, setExpandedItems] = useState(new Set());

  const faqData = [
    {
      id: 1,
      category: 'Fees & Costs',
      icon: <DollarSign className="w-5 h-5" />,
      question: 'How much is the entrance fee?',
      answer: 'The entrance fee is $20 USD or its equivalent in LRD (Liberian Dollars). This is a one-time fee paid during the application process.',
      keywords: ['entrance', 'fee', 'cost', 'application', 'admission']
    },
    {
      id: 2,
      category: 'Fees & Costs',
      icon: <DollarSign className="w-5 h-5" />,
      question: 'How much does each credit cost?',
      answer: 'Credit costs vary by college: BIT College and Master College programs cost $20 USD per credit. Business College programs cost $15 USD per credit. For example, a 3-credit Business course would cost $45 USD, while a 3-credit BIT course would cost $60 USD. Payment plans and financial aid options may be available.',
      keywords: ['credit', 'cost', 'tuition', 'payment', 'course', 'business', 'bit', 'master']
    },
    {
      id: 3,
      category: 'Academic Programs',
      icon: <GraduationCap className="w-5 h-5" />,
      question: 'What programs does Starz University offer?',
      answer: 'We offer programs in three colleges: BIT College (5 programs including Systems Administration, Database Administration, Telecommunications, Communication & Media Studies, and Cybersecurity & MIS), Business College (5 programs including Banking & Finance, Marketing, Business Administration, Procurement & Logistics, and Project Management), and Master College (2 programs: MIT and MBA).',
      keywords: ['programs', 'courses', 'degrees', 'majors', 'colleges', 'bit', 'business', 'master']
    },
    {
      id: 4,
      category: 'Academic Programs',
      icon: <Clock className="w-5 h-5" />,
      question: 'How long do the programs take to complete?',
      answer: 'BIT and Business College programs typically take 4 years (8 semesters) to complete with 120-130 credit hours. Master\'s programs take 2 years (4 semesters) with 60 credit hours.',
      keywords: ['duration', 'time', 'years', 'semesters', 'completion', 'length']
    },
    {
      id: 5,
      category: 'Admission',
      icon: <GraduationCap className="w-5 h-5" />,
      question: 'What are the admission requirements?',
      answer: 'Admission requirements include a completed application form, high school diploma or equivalent, and entrance fee payment. Additional requirements may vary by program.',
      keywords: ['admission', 'requirements', 'application', 'diploma', 'prerequisites']
    },
    {
      id: 6,
      category: 'Academic Programs',
      icon: <GraduationCap className="w-5 h-5" />,
      question: 'What is the difference between BIT and Business College programs?',
      answer: 'BIT College focuses on technology-related fields including computer systems, databases, telecommunications, and cybersecurity. Business College focuses on business administration, finance, marketing, logistics, and project management. Both offer 4-year bachelor\'s degree programs.',
      keywords: ['bit', 'business', 'difference', 'technology', 'computer', 'administration']
    },
    {
      id: 7,
      category: 'Fees & Costs',
      icon: <DollarSign className="w-5 h-5" />,
      question: 'Are there any additional fees besides tuition?',
      answer: 'Besides the $20 entrance fee and $20 per credit tuition, there may be additional fees for laboratory courses, technology fees, library fees, and graduation fees. Specific fees vary by program and will be communicated during enrollment.',
      keywords: ['additional', 'fees', 'laboratory', 'technology', 'library', 'graduation']
    },
    {
      id: 8,
      category: 'Academic Programs',
      icon: <Clock className="w-5 h-5" />,
      question: 'Can I study part-time?',
      answer: 'Yes, Starz University offers flexible scheduling options including part-time study. Part-time students can take fewer credits per semester, which may extend the program duration but allows for better work-life balance.',
      keywords: ['part-time', 'flexible', 'schedule', 'work', 'balance', 'evening']
    },
    {
      id: 9,
      category: 'Technology',
      icon: <GraduationCap className="w-5 h-5" />,
      question: 'What technology resources are available to students?',
      answer: 'Students have access to computer labs, high-speed internet, online learning platforms, digital libraries, and specialized software for their programs. We also provide technical support and training.',
      keywords: ['technology', 'computer', 'internet', 'online', 'software', 'labs']
    },
    {
      id: 10,
      category: 'Support Services',
      icon: <HelpCircle className="w-5 h-5" />,
      question: 'What support services are available for students?',
      answer: 'We offer academic advising, tutoring services, career counseling, financial aid assistance, technical support, and student life activities. Our goal is to support your success throughout your academic journey.',
      keywords: ['support', 'advising', 'tutoring', 'counseling', 'financial', 'career']
    },
    {
      id: 11,
      category: 'Admission',
      icon: <GraduationCap className="w-5 h-5" />,
      question: 'How do I apply for admission?',
      answer: 'To apply, complete the online registration form in our student portal, pay the $20 entrance fee, and submit required documents. Our admissions team will guide you through the process.',
      keywords: ['apply', 'application', 'registration', 'documents', 'process', 'online']
    },
    {
      id: 12,
      category: 'Academic Programs',
      icon: <GraduationCap className="w-5 h-5" />,
      question: 'Are the programs accredited?',
      answer: 'Starz University is committed to maintaining high academic standards. Our programs are designed to meet industry requirements and prepare students for successful careers in their chosen fields.',
      keywords: ['accredited', 'accreditation', 'standards', 'quality', 'recognition']
    }
  ];

  const categories = [...new Set(faqData.map(item => item.category))];

  const toggleExpanded = (id) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  const filteredFAQs = faqData.filter(item => {
    if (!searchTerm) return true;
    const searchLower = searchTerm.toLowerCase();
    return (
      item.question.toLowerCase().includes(searchLower) ||
      item.answer.toLowerCase().includes(searchLower) ||
      item.keywords.some(keyword => keyword.toLowerCase().includes(searchLower)) ||
      item.category.toLowerCase().includes(searchLower)
    );
  });

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Fees & Costs':
        return <DollarSign className="w-5 h-5 text-green-600" />;
      case 'Academic Programs':
        return <GraduationCap className="w-5 h-5 text-blue-600" />;
      case 'Admission':
        return <GraduationCap className="w-5 h-5 text-purple-600" />;
      case 'Technology':
        return <GraduationCap className="w-5 h-5 text-orange-600" />;
      case 'Support Services':
        return <HelpCircle className="w-5 h-5 text-teal-600" />;
      default:
        return <HelpCircle className="w-5 h-5 text-gray-600" />;
    }
  };

  return (
    <div className="faq-container">
      {/* Header */}
      <div className="starz-primary p-6">
        <div className="flex items-center gap-3 mb-4">
          <HelpCircle size={32} className="starz-text-gold" />
          <div>
            <h1 className="starz-font-serif text-2xl font-bold text-white">
              Frequently Asked Questions
            </h1>
            <p className="starz-font-sans text-gray-300">
              Find answers to common questions about Starz University
            </p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search FAQs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
          />
        </div>
      </div>

      {/* Quick Stats */}
      <div className="p-6 bg-gradient-to-r from-yellow-50 to-orange-50 border-b">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
            <DollarSign className="w-8 h-8 text-green-600" />
            <div>
              <div className="text-2xl font-bold text-gray-800">$20</div>
              <div className="text-sm text-gray-600">Entrance Fee</div>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
            <DollarSign className="w-8 h-8 text-blue-600" />
            <div>
              <div className="text-2xl font-bold text-gray-800">$20</div>
              <div className="text-sm text-gray-600">Per Credit</div>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
            <GraduationCap className="w-8 h-8 text-purple-600" />
            <div>
              <div className="text-2xl font-bold text-gray-800">12</div>
              <div className="text-sm text-gray-600">Programs Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="p-6">
        {searchTerm && (
          <div className="mb-6">
            <p className="text-gray-600">
              Found {filteredFAQs.length} result{filteredFAQs.length !== 1 ? 's' : ''} for "{searchTerm}"
            </p>
          </div>
        )}

        {/* Category Sections */}
        {categories.map(category => {
          const categoryFAQs = filteredFAQs.filter(item => item.category === category);
          if (categoryFAQs.length === 0) return null;

          return (
            <div key={category} className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                {getCategoryIcon(category)}
                <h2 className="starz-font-serif text-xl font-bold text-gray-800">
                  {category}
                </h2>
                <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-sm">
                  {categoryFAQs.length}
                </span>
              </div>

              <div className="space-y-3">
                {categoryFAQs.map(item => (
                  <div key={item.id} className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                    <button
                      onClick={() => toggleExpanded(item.id)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                    >
                      <div className="flex items-center gap-3">
                        {item.icon}
                        <span className="starz-font-sans font-semibold text-gray-800">
                          {item.question}
                        </span>
                      </div>
                      {expandedItems.has(item.id) ? (
                        <ChevronUp className="w-5 h-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      )}
                    </button>
                    
                    {expandedItems.has(item.id) && (
                      <div className="px-6 pb-4 border-t border-gray-100">
                        <p className="starz-font-sans text-gray-700 leading-relaxed pt-4">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        {filteredFAQs.length === 0 && (
          <div className="text-center py-12">
            <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No FAQs found</h3>
            <p className="text-gray-500">
              Try adjusting your search terms or browse all categories above.
            </p>
          </div>
        )}
      </div>

      {/* Contact Information */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
        <h3 className="starz-font-serif text-xl font-bold mb-4">
          Still have questions?
        </h3>
        <p className="starz-font-sans mb-4">
          Our support team is here to help! Contact us through any of these channels:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5" />
            <div>
              <div className="font-semibold">Phone</div>
              <div className="text-blue-100">+231-886-248-210, +231-777-271-313</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5" />
            <div>
              <div className="font-semibold">Email</div>
              <div className="text-blue-100">contact@starzit.com</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5" />
            <div>
              <div className="font-semibold">Visit Us</div>
              <div className="text-blue-100">Main Campus Airfield, Sinkor (Opposite Sharks), Montserrado Co. Liberia</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQTab;


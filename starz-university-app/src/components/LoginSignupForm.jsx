import React, { useState, useEffect } from 'react';
import { User, Mail, Lock, Eye, EyeOff, GraduationCap, Users, BookOpen } from 'lucide-react';
import { sendToGoogleSheets, validateStudentData, storeUserData, getUserData } from '../utils/googleSheets';


const LoginSignupForm = ({ onLoginSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const [animationPhase, setAnimationPhase] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    studentId: '',
    email: '',
    password: '',
    gender: '',
    level: '',
    college: ''
  });

  // Animation loop for Starz University text
  useEffect(() => {
    const animationInterval = setInterval(() => {
      setAnimationPhase(prev => (prev + 1) % 4); // 4 phases: 0, 1, 2, 3, then back to 0
    }, 2000); // Change phase every 2 seconds

    return () => {
      clearInterval(animationInterval);
    };
  }, []);

  const getAnimationClass = (phase) => {
    switch (phase) {
      case 0:
        return 'animate-pulse';
      case 1:
        return 'animate-bounce';
      case 2:
        return 'animate-pulse scale-110';
      case 3:
        return 'animate-bounce scale-105';
      default:
        return 'animate-pulse';
    }
  };

  const colleges = [
    // BIT College Programs
    'BIT Systems Administration',
    'BIT Database Administration',
    'BIT Telecommunications',
    'BIT Communication and Media Studies',
    'BIT Cybersecurity and MIS',
    // Business College Programs
    'BBA Banking and Finance',
    'BBA Marketing',
    'BBA Business Administration',
    'BBA Procurement & Logistics',
    'BBA Project Management',
    // Graduate Programs
    'Master of Information Technology (MIT)',
    'Master of Business Administration - Management & Administration',
    'Master of Business Administration - Entrepreneurship & Innovation',
    'Master of Business Administration - Procurement & Logistics Management',
    'Master of Business Administration - Management of International Organisations',
    'Master of Business Administration - Project Management',
    'Master of Business Administration - Human Resource Management',
    'Master of Business Administration - Finance & Accounting',
    'Master of Business Administration - Education Management & Supervision'
  ];

  const levels = [
    'Freshman',
    'Sophomore', 
    'Junior',
    'Senior',
    'Graduate'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Special validation for studentId
    if (name === 'studentId') {
      // Only allow numeric input for student ID
      const numericValue = value.replace(/\D/g, '');
      setFormData({
        ...formData,
        [name]: numericValue
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
    
    // Clear errors when user starts typing
    if (errors.length > 0) {
      setErrors([]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors([]);

    try {
      if (!isLogin) {
        // Validate form data
        const validation = validateStudentData(formData);
        if (!validation.isValid) {
          setErrors(validation.errors);
          setIsLoading(false);
          return;
        }

        // Send data to Google Sheets
        await sendToGoogleSheets(formData);
        
        // Store user data locally
        storeUserData({
          name: formData.name,
          studentId: formData.studentId,
          email: formData.email,
          gender: formData.gender,
          level: formData.level,
          college: formData.college
        });

        // Show success message
        alert('Registration successful! Welcome to Starz University.');
        
      } else {
        // For login, check if user exists in localStorage
        const userData = getUserData();
        if (!userData) {
          setErrors(['No account found. Please sign up first.']);
          setIsLoading(false);
          return;
        }

        // Simple email check for login
        if (userData.email !== formData.email) {
          setErrors(['Invalid email address.']);
          setIsLoading(false);
          return;
        }
      }

      // Simulate API call delay for better UX
      setTimeout(() => {
        setIsLoading(false);
        onLoginSuccess();
      }, 1000);

    } catch (error) {
      console.error('Error:', error);
      setIsLoading(false);
      setErrors(['An error occurred. Please try again.']);
    }
  };

  const handleGoogleSuccess = async (userData) => {
    setIsLoading(true);
    setErrors([]);

    try {
      if (isLogin) {
        // For login, check if user exists
        const existingUser = getUserData(userData.email);
        if (!existingUser) {
          setErrors(['No account found with this Google account. Please sign up first.']);
          setIsLoading(false);
          return;
        }
      } else {
        // For signup, store the Google user data
        const completeUserData = {
          name: userData.name,
          email: userData.email,
          studentId: `GOOGLE_${userData.googleId.slice(-6)}`, // Generate a student ID
          gender: '', // Will need to be filled later
          level: '', // Will need to be filled later
          college: '', // Will need to be filled later
          isGoogleAuth: true,
          picture: userData.picture
        };

        // Store user data locally
        storeUserData(completeUserData);

        // Send to Google Sheets
        await sendToGoogleSheets(completeUserData);
      }

      setTimeout(() => {
        setIsLoading(false);
        onLoginSuccess();
      }, 1000);

    } catch (error) {
      console.error('Google Auth Error:', error);
      setIsLoading(false);
      setErrors(['Google authentication failed. Please try again.']);
    }
  };

  const handleGoogleError = (error) => {
    setErrors([error]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center p-6">
      <div className="w-full max-w-md mx-auto">
        {/* Logo and Header */}
        <div className="text-center mb-8">
          <div className="mb-6">
            <h1 
              className={`text-4xl font-bold text-yellow-400 mb-2 transition-all duration-1000 ${getAnimationClass(animationPhase)}`}
            >
              STARZ
            </h1>
            <h2 
              className={`text-3xl font-bold text-white mb-3 transition-all duration-1000 ${getAnimationClass((animationPhase + 1) % 4)}`}
            >
              UNIVERSITY
            </h2>
          </div>
          <div className="space-y-1">
            <p 
              className={`text-yellow-400 text-sm font-medium transition-all duration-1000 ${getAnimationClass((animationPhase + 2) % 4)}`}
            >
              TECHNOLOGY IS OUR PASSION
            </p>
            <p 
              className={`text-white text-sm transition-all duration-1000 ${getAnimationClass((animationPhase + 3) % 4)}`}
            >
              EDUCATION IS OUR LIFE
            </p>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20">
          {/* Toggle Buttons */}
          <div className="flex bg-black/20 rounded-xl p-1 mb-6">
            <button
              type="button"
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                isLogin 
                  ? 'bg-yellow-400 text-black shadow-lg' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              LOGIN
            </button>
            <button
              type="button"
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                !isLogin 
                  ? 'bg-yellow-400 text-black shadow-lg' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              SIGN UP
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Error Messages */}
            {errors.length > 0 && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 mb-4">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">!</span>
                  </div>
                  <span className="text-red-400 font-medium text-sm">Please fix the following errors:</span>
                </div>
                <ul className="text-red-300 text-sm space-y-1 ml-7">
                  {errors.map((error, index) => (
                    <li key={index}>• {error}</li>
                  ))}
                </ul>
              </div>
            )}
            {!isLogin && (
              <>
                {/* Full Name */}
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                  />
                </div>

                {/* Student ID */}
                <div className="relative">
                  <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    name="studentId"
                    placeholder="Student ID"
                    value={formData.studentId}
                    onChange={handleInputChange}
                    required={!isLogin}
                    className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                  />
                </div>

                {/* Gender */}
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    required={!isLogin}
                    className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 appearance-none"
                  >
                    <option value="" className="bg-gray-800">Select Gender</option>
                    <option value="Male" className="bg-gray-800">Male</option>
                    <option value="Female" className="bg-gray-800">Female</option>
                    <option value="Other" className="bg-gray-800">Other</option>
                  </select>
                </div>

                {/* Level */}
                <div className="relative">
                  <BookOpen className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <select
                    name="level"
                    value={formData.level}
                    onChange={handleInputChange}
                    required={!isLogin}
                    className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 appearance-none"
                  >
                    <option value="" className="bg-gray-800">Select Level</option>
                    {levels.map(level => (
                      <option key={level} value={level} className="bg-gray-800">{level}</option>
                    ))}
                  </select>
                </div>

                {/* College */}
                <div className="relative">
                  <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <select
                    name="college"
                    value={formData.college}
                    onChange={handleInputChange}
                    required={!isLogin}
                    className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 appearance-none"
                  >
                    <option value="" className="bg-gray-800">Select Program/College</option>
                    <optgroup label="BIT College">
                      <option value="BIT Systems Administration" className="bg-gray-800">BIT Systems Administration</option>
                      <option value="BIT Database Administration" className="bg-gray-800">BIT Database Administration</option>
                      <option value="BIT Telecommunications" className="bg-gray-800">BIT Telecommunications</option>
                      <option value="BIT Communication and Media Studies" className="bg-gray-800">BIT Communication and Media Studies</option>
                      <option value="BIT Cybersecurity and MIS" className="bg-gray-800">BIT Cybersecurity and MIS</option>
                    </optgroup>
                    <optgroup label="Business College">
                      <option value="BBA Banking and Finance" className="bg-gray-800">BBA Banking and Finance</option>
                      <option value="BBA Marketing" className="bg-gray-800">BBA Marketing</option>
                      <option value="BBA Business Administration" className="bg-gray-800">BBA Business Administration</option>
                      <option value="BBA Procurement & Logistics" className="bg-gray-800">BBA Procurement & Logistics</option>
                      <option value="BBA Project Management" className="bg-gray-800">BBA Project Management</option>
                    </optgroup>
                    <optgroup label="Graduate Programs">
                      <option value="Master of Information Technology (MIT)" className="bg-gray-800">Master of Information Technology (MIT)</option>
                      <option value="Master of Business Administration - Management & Administration" className="bg-gray-800">MBA - Management & Administration</option>
                      <option value="Master of Business Administration - Entrepreneurship & Innovation" className="bg-gray-800">MBA - Entrepreneurship & Innovation</option>
                      <option value="Master of Business Administration - Procurement & Logistics Management" className="bg-gray-800">MBA - Procurement & Logistics Management</option>
                      <option value="Master of Business Administration - Management of International Organisations" className="bg-gray-800">MBA - Management of International Organisations</option>
                      <option value="Master of Business Administration - Project Management" className="bg-gray-800">MBA - Project Management</option>
                      <option value="Master of Business Administration - Human Resource Management" className="bg-gray-800">MBA - Human Resource Management</option>
                      <option value="Master of Business Administration - Finance & Accounting" className="bg-gray-800">MBA - Finance & Accounting</option>
                      <option value="Master of Business Administration - Education Management & Supervision" className="bg-gray-800">MBA - Education Management & Supervision</option>
                    </optgroup>
                  </select>
                </div>
              </>
            )}

            {/* Email */}
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                required
                className="w-full pl-12 pr-12 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-200"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold py-3 px-4 rounded-xl hover:from-yellow-500 hover:to-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin mr-2"></div>
                  {isLogin ? 'Signing In...' : 'Creating Account...'}
                </div>
              ) : (
                isLogin ? 'Sign In' : 'Create Account'
              )}
            </button>


          </form>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-gray-400 text-sm">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-yellow-400 hover:text-yellow-300 font-medium transition-colors duration-200"
              >
                {isLogin ? 'Sign up here' : 'Sign in here'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignupForm;



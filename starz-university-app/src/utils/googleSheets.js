// Google Sheets Integration Utility
// This utility handles sending student registration data to Google Sheets

const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbxYourScriptIdHere/exec';

/**
 * Sends student registration data to Google Sheets
 * @param {Object} studentData - The student data to send
 * @returns {Promise} - Promise that resolves when data is sent
 */
export const sendToGoogleSheets = async (studentData) => {
  try {
    const response = await fetch(GOOGLE_SHEETS_URL, {
      method: 'POST',
      mode: 'no-cors', // Required for Google Apps Script
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: studentData.name,
        studentId: studentData.studentId,
        email: studentData.email,
        gender: studentData.gender || 'Not specified',
        level: studentData.level || 'Not specified',
        college: studentData.college || 'Not specified',
        timestamp: new Date().toISOString(),
        authMethod: studentData.isGoogleAuth ? 'Google' : 'Email',
        profilePicture: studentData.picture || '',
        action: 'register'
      })
    });

    // Note: With no-cors mode, we can't read the response
    // We assume success if no error is thrown
    return { success: true };
  } catch (error) {
    console.error('Error sending data to Google Sheets:', error);
    throw error;
  }
};

/**
 * Validates student data before sending
 * @param {Object} studentData - The student data to validate
 * @returns {Object} - Validation result
 */
export const validateStudentData = (studentData) => {
  const errors = [];

  if (!studentData.name || studentData.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters long');
  }

  if (!studentData.studentId || studentData.studentId.trim().length < 4) {
    errors.push('Student ID must be at least 4 digits');
  } else {
    const studentIdNum = parseInt(studentData.studentId);
    if (isNaN(studentIdNum) || studentIdNum < 1 || studentIdNum > 14000) {
      errors.push('Student ID must be a number between 0001 and 14000');
    }
    
    // Check if it's 4 or 5 digits
    const studentIdStr = studentData.studentId.trim();
    if (studentIdStr.length < 4 || studentIdStr.length > 5) {
      errors.push('Student ID must be 4 or 5 digits long');
    }
  }

  if (!studentData.email || !isValidEmail(studentData.email)) {
    errors.push('Please enter a valid email address');
  }

  if (!studentData.gender) {
    errors.push('Please select a gender');
  }

  if (!studentData.level) {
    errors.push('Please select your academic level');
  }

  if (!studentData.college) {
    errors.push('Please select your college');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};

/**
 * Validates email format
 * @param {string} email - Email to validate
 * @returns {boolean} - Whether email is valid
 */
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Stores user data in localStorage for session management
 * @param {Object} userData - User data to store
 */
export const storeUserData = (userData) => {
  try {
    localStorage.setItem('starzUserData', JSON.stringify({
      ...userData,
      loginTime: new Date().toISOString()
    }));
  } catch (error) {
    console.error('Error storing user data:', error);
  }
};

/**
 * Retrieves user data from localStorage
 * @returns {Object|null} - User data or null if not found
 */
export const getUserData = () => {
  try {
    const userData = localStorage.getItem('starzUserData');
    return userData ? JSON.parse(userData) : null;
  } catch (error) {
    console.error('Error retrieving user data:', error);
    return null;
  }
};

/**
 * Clears user data from localStorage (logout)
 */
export const clearUserData = () => {
  try {
    localStorage.removeItem('starzUserData');
  } catch (error) {
    console.error('Error clearing user data:', error);
  }
};

/**
 * Checks if user is logged in
 * @returns {boolean} - Whether user is logged in
 */
export const isUserLoggedIn = () => {
  const userData = getUserData();
  return userData !== null;
};


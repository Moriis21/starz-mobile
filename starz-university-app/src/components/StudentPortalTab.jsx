import React from 'react';
import { ExternalLink, Globe, Lock, User, GraduationCap } from 'lucide-react';

const StudentPortalTab = () => {
  const handlePortalAccess = () => {
    window.open('https://starzportal.net', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center p-6">
      <div className="w-full max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mx-auto flex items-center justify-center mb-4">
              <Globe className="w-10 h-10 text-black" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-2">Student Portal</h1>
            <p className="text-gray-300 text-lg">Access your academic information and services</p>
          </div>
        </div>

        {/* Portal Access Card */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <Lock className="w-8 h-8 text-yellow-400 mr-3" />
              <h2 className="text-2xl font-bold text-white">Secure Portal Access</h2>
            </div>
            <p className="text-gray-300 mb-6">
              Click the button below to access the official Starz University student portal. 
              You will be redirected to a secure login page where you can access your:
            </p>
          </div>

          {/* Features List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-black/20 rounded-xl p-4 border border-yellow-400/20">
              <div className="flex items-center mb-2">
                <GraduationCap className="w-5 h-5 text-yellow-400 mr-2" />
                <h3 className="text-white font-semibold">Academic Records</h3>
              </div>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Grades and transcripts</li>
                <li>• Course schedules</li>
                <li>• Academic progress</li>
              </ul>
            </div>

            <div className="bg-black/20 rounded-xl p-4 border border-yellow-400/20">
              <div className="flex items-center mb-2">
                <User className="w-5 h-5 text-yellow-400 mr-2" />
                <h3 className="text-white font-semibold">Student Services</h3>
              </div>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Registration and enrollment</li>
                <li>• Financial information</li>
                <li>• Student forms and documents</li>
              </ul>
            </div>
          </div>

          {/* Portal Access Button */}
          <div className="text-center">
            <button
              onClick={handlePortalAccess}
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-3 mx-auto"
            >
              <Globe className="w-6 h-6" />
              <span className="text-lg">Go to Starz Portal</span>
              <ExternalLink className="w-5 h-5" />
            </button>
            <p className="text-gray-400 text-sm mt-4">
              Opens in a new tab • Secure connection to starzportal.net
            </p>
          </div>

          {/* Security Notice */}
          <div className="mt-8 p-4 bg-yellow-400/10 rounded-xl border border-yellow-400/30">
            <div className="flex items-start space-x-3">
              <Lock className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="text-yellow-400 font-semibold mb-1">Security Notice</h4>
                <p className="text-gray-300 text-sm">
                  Always ensure you are on the official starzportal.net domain when entering your login credentials. 
                  Never share your login information with others.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-6 text-center">
          <p className="text-gray-400 text-sm">
            Need help accessing your account? Contact IT Support at{' '}
            <span className="text-yellow-400">support@starzuniversity.edu.lr</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentPortalTab;


import React, { useState, useEffect } from 'react';
import { User, LogOut, Settings, GraduationCap, Mail, Users, BookOpen, ChevronDown } from 'lucide-react';
import { getUserData, clearUserData } from '../utils/googleSheets';

const AccountIcon = ({ onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const data = getUserData();
      setUserData(data);
    } catch (err) {
      console.error('Error loading user data:', err);
      setError(err);
    }
  }, []);

  const handleLogout = () => {
    try {
      clearUserData();
      setIsOpen(false);
      onLogout();
    } catch (err) {
      console.error('Error during logout:', err);
    }
  };

  const getInitials = (name) => {
    if (!name) return 'U';
    try {
      return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
    } catch (err) {
      return 'U';
    }
  };

  const getGenderColor = (gender) => {
    try {
      switch (gender?.toLowerCase()) {
        case 'male': return 'from-blue-400 to-blue-600';
        case 'female': return 'from-pink-400 to-pink-600';
        default: return 'from-purple-400 to-purple-600';
      }
    } catch (err) {
      return 'from-purple-400 to-purple-600';
    }
  };

  if (error) {
    console.error('AccountIcon error:', error);
    return null;
  }

  if (!userData) return null;

  return (
    <div className="fixed top-6 right-6 z-50">
      <div className="relative">
        {/* Account Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full p-2 pr-3 hover:bg-white/20 transition-all duration-300 shadow-lg"
        >
          {/* Avatar */}
          <div className={`w-8 h-8 bg-gradient-to-br ${getGenderColor(userData.gender)} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
            {getInitials(userData.name)}
          </div>
          
          {/* Name and Chevron */}
          <div className="hidden sm:flex items-center space-x-1">
            <span className="text-white font-medium text-sm">{userData.name.split(' ')[0]}</span>
            <ChevronDown 
              size={12} 
              className={`text-white transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
            />
          </div>
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 z-40" 
              onClick={() => setIsOpen(false)}
            />
            
            {/* Menu */}
            <div className="absolute top-full right-0 mt-2 w-80 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden z-50 animate-in slide-in-from-top-2 duration-200">
              {/* Header */}
              <div className="bg-gradient-to-r from-black to-gray-800 p-4 text-white">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 bg-gradient-to-br ${getGenderColor(userData.gender)} rounded-full flex items-center justify-center text-white font-bold shadow-lg`}>
                    {getInitials(userData.name)}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{userData.name}</h3>
                    <p className="text-yellow-400 text-sm font-medium">Student</p>
                  </div>
                </div>
              </div>

              {/* User Information */}
              <div className="p-4 space-y-3">
                <div className="grid grid-cols-1 gap-3">
                  {/* Student ID */}
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <GraduationCap size={16} className="text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">Student ID</p>
                      <p className="text-sm font-semibold text-gray-800">{userData.studentId}</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <Mail size={16} className="text-green-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-500 font-medium">Email</p>
                      <p className="text-sm font-semibold text-gray-800 truncate">{userData.email}</p>
                    </div>
                  </div>

                  {/* Gender & Level */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-xl">
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Users size={16} className="text-purple-600" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 font-medium">Gender</p>
                        <p className="text-sm font-semibold text-gray-800">{userData.gender}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-xl">
                      <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                        <BookOpen size={16} className="text-orange-600" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 font-medium">Level</p>
                        <p className="text-sm font-semibold text-gray-800">{userData.level}</p>
                      </div>
                    </div>
                  </div>

                  {/* College */}
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                    <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                      <GraduationCap size={16} className="text-yellow-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-500 font-medium">College</p>
                      <p className="text-sm font-semibold text-gray-800">{userData.college}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="border-t border-gray-200 p-4 space-y-2">
                <button className="w-full flex items-center space-x-3 p-3 text-gray-700 hover:bg-gray-100 rounded-xl transition-colors duration-200">
                  <Settings size={18} />
                  <span className="font-medium">Account Settings</span>
                </button>
                
                <button 
                  onClick={handleLogout}
                  className="w-full flex items-center space-x-3 p-3 text-red-600 hover:bg-red-50 rounded-xl transition-colors duration-200"
                >
                  <LogOut size={18} />
                  <span className="font-medium">Sign Out</span>
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AccountIcon;


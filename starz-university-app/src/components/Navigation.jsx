import React from 'react';
import { Home, Users, BookOpen, GraduationCap, HelpCircle, Mail } from 'lucide-react';

const Navigation = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'portal', icon: Users, label: 'Student Portal' },
    { id: 'handbooks', icon: BookOpen, label: 'Handbooks' },
    { id: 'programs', icon: GraduationCap, label: 'Programs' },
    { id: 'faq', icon: HelpCircle, label: 'FAQ' },
    { id: 'contact', icon: Mail, label: 'Contact' }
  ];

  return (
    <nav className="bottom-nav">
      <div className="flex justify-around items-center py-3 px-2">
        {navItems.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`nav-item flex flex-col items-center p-3 min-w-0 rounded-lg transition-all duration-200 ${
              activeTab === id ? 'active bg-yellow-400/20' : 'text-white hover:bg-white/10'
            }`}
          >
            <Icon size={20} className="mb-1" />
            <span className="text-xs font-medium truncate">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;


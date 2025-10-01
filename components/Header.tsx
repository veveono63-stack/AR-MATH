
import React from 'react';
import { Tab } from '../types';

interface HeaderProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: Tab.Profile, label: 'Profil Guru' },
    { id: Tab.Portfolio, label: 'Portofolio Guru' },
    { id: Tab.Implementation, label: 'Bukti Implementasi' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between py-4">
          <div className="text-center sm:text-left mb-4 sm:mb-0">
            <h1 className="text-2xl font-bold text-slate-800">ASNADI KUNCORO</h1>
            <p className="text-sm text-slate-500">Portofolio Digital Guru</p>
          </div>
          <nav>
            <ul className="flex space-x-2 sm:space-x-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveTab(item.id)}
                    className={`px-3 py-2 text-sm sm:text-base font-medium rounded-md transition-colors duration-200 ${
                      activeTab === item.id
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

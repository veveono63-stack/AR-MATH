
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-white mt-12 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-slate-500">
        <p>&copy; {currentYear} Asnadi Kuncoro. All rights reserved.</p>
        <p className="text-sm mt-1">Dibuat dengan ❤️ untuk Pendidikan Indonesia.</p>
      </div>
    </footer>
  );
};

export default Footer;

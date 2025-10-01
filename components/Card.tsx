
import React from 'react';

interface CardProps {
  title?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children, icon }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden p-6 sm:p-8">
      {title && (
        <div className="flex items-center mb-4">
          {icon && <span className="text-blue-600 mr-3">{icon}</span>}
          <h2 className="text-xl font-bold text-slate-800">{title}</h2>
        </div>
      )}
      <div>{children}</div>
    </div>
  );
};

export default Card;

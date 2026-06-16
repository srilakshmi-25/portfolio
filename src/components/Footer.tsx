import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-slate-50 dark:bg-[#0b0f19] border-t border-slate-100 dark:border-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              &copy; {currentYear} Polumuru Sri Lakshmi. All rights reserved.
            </p>
          </div>
          <div>
            <p className="text-xs text-slate-400 dark:text-slate-500">
              Designed &amp; Engineered with React · TypeScript · Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

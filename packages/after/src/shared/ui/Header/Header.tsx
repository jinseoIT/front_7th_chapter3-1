import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="shadow-sm sticky top-0 z-modal transition-colors" style={{
      backgroundColor: 'var(--color-bg-secondary)',
      borderBottom: '1px solid var(--color-border-secondary)'
    }}>
      <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
            L
          </div>
          <div>
            <h1 className="text-lg font-bold m-0 leading-none" style={{ color: 'var(--color-text-heading)' }}>
              Hanghae Company
            </h1>
            <p className="text-[11px] m-0 leading-none mt-0.5" style={{ color: 'var(--color-text-muted)' }}>
              Design System Migration Project
            </p>
          </div>
        </div>


        {/* User Info and Theme Toggle */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
            style={{
              backgroundColor: 'var(--color-bg-tertiary)'
            }}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <svg className="w-5 h-5" style={{ color: 'var(--color-text-heading)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            )}
          </button>

          <div className="text-right">
            <div className="text-sm font-semibold" style={{ color: 'var(--color-text-heading)' }}>
              Demo User
            </div>
            <div className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
              demo@example.com
            </div>
          </div>
          <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900 flex items-center justify-center text-blue-500 dark:text-blue-300 font-semibold text-base">
            DU
          </div>
        </div>
      </div>
    </header>
  );
};

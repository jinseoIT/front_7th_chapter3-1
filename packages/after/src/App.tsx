import React from 'react'
import { Header } from './components/organisms'
import { ManagementPage } from './pages/ManagementPage'
import './styles/globals.css'

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <ManagementPage />
      </main>
    </div>
  );
};

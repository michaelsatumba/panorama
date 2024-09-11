import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'; // Correct import paths for Heroicons v2
import CompanyView from './views/CompanyView';
import TeamView from './views/TeamView';
import IndividualView from './views/IndividualView';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <Router>
      <div className="App min-h-screen flex flex-col dark:bg-gray-900 dark:text-white">
        <header className="App-header dark:bg-gray-800">
          <button
            className="rounded-md bg-gray-300 text-black px-4 py-2 m-2 hover:bg-gray-500 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-900 flex items-center"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? (
              <SunIcon className="h-6 w-6 text-yellow-500" />
            ) : (
              <MoonIcon className="h-6 w-6 text-gray-800" />
            )}
            <span className="ml-2">{darkMode ? 'Light' : 'Dark'} Mode</span>
          </button>
          <nav className="mt-4">
            <Link to="/company">
              <button className="rounded-md bg-blue-300 text-white px-4 py-2 m-2 hover:bg-blue-500 dark:bg-blue-700 dark:hover:bg-blue-900">
                Company View
              </button>
            </Link>
            <Link to="/team">
              <button className="rounded-md bg-blue-300 text-white px-4 py-2 m-2 hover:bg-blue-500 dark:bg-blue-700 dark:hover:bg-blue-900">
                Team View
              </button>
            </Link>
            <Link to="/individual">
              <button className="rounded-md bg-blue-300 text-white px-4 py-2 m-2 hover:bg-blue-500 dark:bg-blue-700 dark:hover:bg-blue-900">
                Individual View
              </button>
            </Link>
          </nav>
        </header>
        <main className="flex-grow p-4 dark:bg-gray-800 dark:text-white">
          <Routes>
            <Route path="/" element={<Navigate to="/company" />} />
            <Route path="/company" element={<CompanyView />} />
            <Route path="/team" element={<TeamView />} />
            <Route path="/individual" element={<IndividualView />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
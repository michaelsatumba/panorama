import React, { useEffect, useRef } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const CompanyView = ({ darkMode }) => {

  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    chartInstanceRef.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['May', 'Jun', 'Jul', 'Aug'],
        datasets: [{
          label: 'Daily Active Users',
          data: [1, 1.2, 1.5, 1.8], // Example data in millions
          borderColor: '#4a5568', // Line color
          backgroundColor: '#4a5568', // Semi-transparent background color
 
          fill: false,
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: function(value) {
                return value + 'm';
              }
            }
          }
        }
      }
    });

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);
  return (
    <div className="p-4 mx-52 flex flex-col items-center">
      {/* Title */}
      <div className="flex items-center justify-center mb-4">
        <svg className="w-4 h-4 text-green-700 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <circle cx="10" cy="10" r="10" />
        </svg>
        <h1 className="text-2xl font-bold">A Better Company, Inc</h1>
      </div>

      {/* Flex */}
      <div className="flex items-center justify-center space-x-4 mb-4">
        {/* Rounded Buttons */}
        <button className="rounded-full bg-black text-white px-4 py-2 hover:bg-black flex items-center dark:hover:bg-gray-700 bg-gray-700">
          Today
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        <button className="rounded-full text-gray-500 px-4 py-2 hover:bg-black dark:hover:text-white">Roadmap</button>
        <button className="rounded-full text-gray-500 px-4 py-2 hover:bg-black dark:hover:text-white">Celebrations</button>
        <button className="rounded-full text-gray-500 px-4 py-2 hover:bg-black dark:hover:text-white">All-Hands Notes</button>
      </div>

      {/* Flex */}
      <div className="flex space-x-4 mb-4">
        {/* Medium Square */}
        <div className="flex-grow bg-white dark:bg-gray-700 flex items-center justify-center rounded-lg shadow flex-col px-8 py-10 space-y-4">
            <svg className="w-16 h-16 text-green-700 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="10" />
            </svg>
            <div className="font-bold">A Better Company, Inc</div>
            <div className="text-gray-500 text-sm">
                <p>"We make companies better"</p>
                <p>San Francisco, CA</p>
            </div>
        </div>
        {/* Big Rectangle */}
        <div className="bg-white dark:bg-gray-700 p-4 shadow flex flex-col rounded-lg">
          <ul className="list-none mb-2 text-left font-semibold">
            <li className="relative pl-3 mb-4">
              <span className="absolute left-0 top-0 text-gray-300">•</span>
              The engineering team worked on #oauth-inactive-user and #dashboard-revamp
            </li>
            <li className="relative pl-3 mb-4">
              <span className="absolute left-0 top-0 text-gray-300">•</span>
              The engineering team and the product team spent 75 minutes roadmap planning
            </li>
            <li className="relative pl-3 mb-4">
              <span className="absolute left-0 top-0 text-gray-300">•</span>
              The Landing Page design is ready for engineers
            </li>
            <li className="relative pl-3 mb-4">
              <span className="absolute left-0 top-0 text-gray-300">•</span>
              The sales team revised the sales forecast for Q4 2024
            </li>
            <li className="relative pl-3 mb-4">
              <span className="absolute left-0 top-0 text-gray-300">•</span>
              The monthly active user grew 33% month over month
            </li>
          </ul>
        </div>
      </div>

      {/* Flex */}
      <div className="flex space-x-4 mb-4">
        {/* Medium Rectangle */}
        <div className="flex-grow bg-white dark:bg-gray-700 p-4 shadow rounded-lg">
          <div className="flex items-center space-x-2 mb-2">
          <div className="inline-block bg-gray-300 rounded-full p-2 h-10 w-10">
    <i className="fas fa-cat"></i>
</div>
            <h2 className="font-bold">Engineering</h2>
          </div>
          <ul className="list-none mb-2 text-left font-semibold">
            <li className="relative pl-3 mb-4">
              <span className="absolute left-0 top-0 text-yellow-500">•</span>
              Worked on #oauth-inactive-user and #dashboard-revamp
            </li>
            <li className="relative pl-3 mb-4">
              <span className="absolute left-0 top-0 text-yellow-500">•</span>
              Did the roadmap planning with the product team
            </li>
            <li className="relative pl-3 mb-4">
              <span className="absolute left-0 top-0 text-yellow-500">•</span>
              <u>Michael</u> received a shout out for debugging the prod bug for failed to fetch data
            </li>
          </ul>
        <div className="flex space-x-4 font-semibold">
          <p><i class="fab fa-github"></i> 44</p>
          <p><i class="fab fa-slack"></i> 456</p>
          <p><i class="fas fa-video"></i> 789</p>
        </div>
        </div>
        {/* Small Square */}
        <div className="flex-grow bg-white dark:bg-gray-700 shadow rounded-lg pl-6 pr-12 py-6">
          <div className="flex flex-col items-start space-y-6">
            <div className="flex items-center space-x-2">
            <div className="inline-block bg-gray-300 rounded-full p-2 h-10 w-10">
              <i class="fas fa-square-root-alt"></i>
            </div>
              <h2 className="font-bold">Pulse&nbsp;Stats</h2>
            </div>
            <div className="flex flex-col items-start space-y-2 font-semibold">
            <p><i class="fab fa-github"></i> <span className="ml-2">67</span></p>
            <p><i class="fab fa-slack"></i> <span className="ml-2">770</span></p>
            <p><i class="fas fa-video"></i> <span className="ml-2">1245</span></p>
            </div>
          </div>
        </div>
        {/* Small Square */}
        <div className="flex-grow bg-white dark:bg-gray-700 p-4 shadow rounded-lg">
        <div className="flex flex-col items-start space-y-6">
        <div className="flex items-center space-x-2">
        <div className="inline-block bg-gray-300 rounded-full p-2 h-10 w-10">
          <i class="fas fa-chart-line"></i>
        </div>
          <h2 className="font-bold">DAU</h2>
        </div>
        <div className="flex flex-col items-center">
            {/* graph */}
            <canvas ref={chartRef} className="w-auto h-20"></canvas>
            {/* text daily active users */}
            <p className="font-bold mt-2 text-xs">Daily Active Users</p>
        </div>
        </div>
        </div>
      </div>

      {/* Flex */}
      <div className="flex space-x-4 mb-4">
        {/* Large Square */}
        <div className="flex-grow bg-white dark:bg-gray-700 p-4 shadow rounded-lg">
        <div className="flex items-center space-x-2 mb-2">
        <div className="inline-block bg-gray-300 rounded-full p-2 h-10 w-10">
          <i class="fas fa-user"></i>
          </div>
          <h2 className="font-bold">Design</h2>
        </div>
          <ul className="list-none mb-2 text-left gray-text font-semibold">
          <li className="relative pl-3 mb-4">
          <span className="absolute left-0 top-0 text-gray-300">•</span>
          Landing Page is 'Ready for Eng'</li>
          <li className="relative pl-3 mb-4">
          <span className="absolute left-0 top-0 text-gray-300">•</span>
          Published 15 Design System updates</li>
          </ul>
          <div className="flex space-x-4 font-semibold">
            <p><i class="fab fa-figma"></i> <span>33</span></p>
            <p><i class="fab fa-github"></i> <span>1</span></p>
            <p><i class="fab fa-slack"></i> <span>45</span></p>
            <p><i class="fas fa-video"></i> <span>45m</span></p>
          </div>
        </div>
        {/* Large Square */}
        <div className="flex-grow bg-white dark:bg-gray-700 p-4 shadow rounded-lg">
        <div className="flex items-center space-x-2 mb-2">
        <div className="inline-block bg-gray-300 rounded-full p-2 h-10 w-10"> 
          <i class="fas fa-dollar-sign"></i>
            </div>
          <h2 className="font-bold">Sales</h2>
          </div>
          <ul className="list-none mb-2 text-left font-semibold">
            <li className="relative pl-3 mb-4">
            <span className="absolute left-0 top-0 text-gray-300">•</span>
            Had 10 lead gen calls</li>
            <li className="relative pl-3 mb-4">
            <span className="absolute left-0 top-0 text-gray-300">•</span>
            Had 2 account management calls</li>
            <li className="relative pl-3 mb-4">
            <span className="absolute left-0 top-0 text-gray-300">•</span>
            Revised the sales forecast for Q4 2024</li>
          </ul>
          <div className="flex space-x-4 font-semibold">
            <p><i class="fab fa-salesforce"></i> <span>123</span></p>
            <p><i class="fab fa-slack"></i> <span>456</span></p>
            <p><i class="fas fa-video"></i> <span>789</span></p>
          </div>
        </div>
        {/* Large Square */}
        <div className="bg-white dark:bg-gray-700 p-4 shadow rounded-lg">
        <div className="flex items-center space-x-2 mb-2">
        <div className="inline-block bg-gray-300 rounded-full p-2 h-10 w-10">
        <i class="fas fa-user-friends"></i>
        </div>
          <h2 className="font-bold">Product</h2>
        </div>
          <ul className="list-none mb-2 text-left font-semibold">
            <li className="relative pl-3 mb-4">
            <span className="absolute left-0 top-0 text-gray-300">•</span>
            Did the roadmap planning with 3 engineering teams</li>
            <li className="relative pl-3 mb-4">
            <span className="absolute left-0 top-0 text-gray-300">•</span>
            Reviewed the landing page design <br/> with <u>Kyle</u> and the design is now <br/> ready for the engineering team</li>
          </ul>
          <div className="flex space-x-4 font-semibold">
            <p><i class="fab fa-slack"></i> <span>136</span></p>
            <p><i class="fas fa-video"></i> <span>185m</span></p>
            <i class="fas fa-user"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyView;
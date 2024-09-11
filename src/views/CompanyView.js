import React from 'react';

function CompanyView() {
  return (
    <div className="p-4 flex flex-col items-center">
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
        <button className="rounded-full text-gray-500 px-4 py-2 hover:bg-black dark:hover:bg-gray-700">Roadmap</button>
        <button className="rounded-full text-gray-500 px-4 py-2 hover:bg-black dark:hover:bg-gray-700">Celebrations</button>
        <button className="rounded-full text-gray-500 px-4 py-2 hover:bg-black dark:hover:bg-gray-700">All-Hands Notes</button>
      </div>

      {/* Flex */}
      <div className="flex space-x-4 mb-4">
        {/* Medium Square */}
        <div className="w-64 h-64 bg-white dark:bg-gray-700 flex items-center justify-center rounded-lg shadow flex-col justify-evenly">
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
          <div className="text-left text-gray-500 flex-grow flex flex-col justify-between">
            <p className="text-black before:content-['•'] before:text-gray-300 before:mr-2 before:text-lg">The engineering team worked on #oauth-inactive-user and #dashboard-revamp</p>
            <p className="text-black before:content-['•'] before:text-gray-300 before:mr-2 before:text-lg">The engineering team and the product team spent 75 minutes roadmap planning</p>
            <p className="text-black before:content-['•'] before:text-gray-300 before:mr-2 before:text-lg">The Landing Page design is ready for engineers</p>
            <p className="text-black before:content-['•'] before:text-gray-300 before:mr-2 before:text-lg">The sales team revised the sales forecast for Q4 2024</p>
            <p className="text-black before:content-['•'] before:text-gray-300 before:mr-2 before:text-lg">The monthly active user grew 33% month over month</p>
          </div>
        </div>
      </div>

      {/* Flex */}
      <div className="flex space-x-4 mb-4">
        {/* Medium Rectangle */}
        <div className="flex-grow bg-white dark:bg-gray-700 p-4 shadow rounded-lg">
          <img src="path/to/image.jpg" alt="Engineering" className="mb-2" />
          <h2 className="font-bold mb-2">Engineering</h2>
          <ul className="list-disc list-inside mb-2">
            <li>Bullet point 1</li>
            <li>Bullet point 2</li>
            <li>Bullet point 3</li>
          </ul>
          <p>GitHub: 123</p>
          <p>Slack: 456</p>
          <p>Zoom: 789</p>
        </div>
        {/* Small Square */}
        <div className="w-32 h-32 bg-white dark:bg-gray-700 p-2 shadow rounded-lg">
          <img src="path/to/image.jpg" alt="Pulse Stats" className="mb-2" />
          <h2 className="font-bold mb-2">Pulse Stats</h2>
          <p>GitHub: 123</p>
          <p>Slack: 456</p>
          <p>Zoom: 789</p>
        </div>
        {/* Small Square */}
        <div className="w-32 h-32 bg-white dark:bg-gray-700 p-2 shadow rounded-lg">
          <img src="path/to/image.jpg" alt="DAU" className="mb-2" />
          <h2 className="font-bold mb-2">DAU</h2>
          <p>Graph</p>
        </div>
      </div>

      {/* Flex */}
      <div className="flex space-x-4 mb-4">
        {/* Large Square */}
        <div className="w-48 h-48 bg-white dark:bg-gray-700 p-4 shadow rounded-lg">
          <img src="path/to/image.jpg" alt="Design" className="mb-2" />
          <h2 className="font-bold mb-2">Design</h2>
          <ul className="list-disc list-inside mb-2">
            <li>Bullet point 1</li>
            <li>Bullet point 2</li>
          </ul>
          <p>Figma: 123</p>
          <p>GitHub: 456</p>
          <p>Slack: 789</p>
          <p>Zoom: 101</p>
        </div>
        {/* Large Square */}
        <div className="w-48 h-48 bg-white dark:bg-gray-700 p-4 shadow rounded-lg">
          <img src="path/to/image.jpg" alt="Sales" className="mb-2" />
          <h2 className="font-bold mb-2">Sales</h2>
          <ul className="list-disc list-inside mb-2">
            <li>Bullet point 1</li>
            <li>Bullet point 2</li>
            <li>Bullet point 3</li>
          </ul>
          <p>Salesforce: 123</p>
          <p>Slack: 456</p>
          <p>Zoom: 789</p>
        </div>
        {/* Large Square */}
        <div className="w-48 h-48 bg-white dark:bg-gray-700 p-4 shadow rounded-lg">
          <img src="path/to/image.jpg" alt="Product" className="mb-2" />
          <h2 className="font-bold mb-2">Product</h2>
          <ul className="list-disc list-inside mb-2">
            <li>Bullet point 1</li>
            <li>Bullet point 2</li>
            <li>Bullet point 3</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CompanyView;
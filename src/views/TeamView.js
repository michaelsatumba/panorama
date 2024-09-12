import React from 'react';

function TeamView() {


return (
<div className="p-4 mx-52 flex flex-col items-center">
{/* Title */}
<div className="flex items-center justify-center mb-4">
<svg className="w-4 h-4 text-gray-700 mr-2" fill="currentColor" viewBox="0 0 20 20">
<circle cx="10" cy="10" r="10" />
</svg>
<div className="flex">
<h1 className="text-2xl font-bold text-gray-600">A Better Company, Inc /&nbsp;</h1>
<h1 className="text-2xl font-bold text-gray-600"><i className="fas fa-cat mr-2"></i> Engineering /&nbsp;</h1>
<h1 className="text-2xl font-bold"><i className="fas fa-rainbow mr-2"></i> Auth</h1>
</div>
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
<button className="rounded-full text-gray-500 px-4 py-2 hover:bg-black dark:hover:text-white">Scope</button>
<button className="rounded-full text-gray-500 px-4 py-2 hover:bg-black dark:hover:text-white">Acievements</button>
<button className="rounded-full text-gray-500 px-4 py-2 hover:bg-black dark:hover:text-white"><i className="fas fa-lock"></i>&nbsp;&nbsp;Notes</button>
</div>

{/* Flex */}
<div className="flex space-x-4 mb-4">
{/* Medium Square */}
<div className="flex-grow bg-white dark:bg-gray-700 flex items-center justify-center rounded-lg shadow flex-col px-8 py-10 space-y-4">
    <i className="fas fa-rainbow text-2xl"></i>
    <div className="font-bold">Auth</div>
    <div className="text-gray-500 text-sm">
        <p>Software Engineering Team</p>
        <p>San Francisco, CA</p>
    </div>
</div>
{/* Big Rectangle */}
<div className="bg-white dark:bg-gray-700 py-4 pl-6 pr-8 shadow flex flex-col rounded-lg">
<ul className="list-none text-left gray-text font-semibold text-sm">
<li className="relative pl-3 mb-4">
<span className="absolute left-0 top-0 text-gray-300">•</span>
Worked on #oauth-inactive-user and #dashboard-revamp</li>
<li className="relative pl-3 mb-4">
<span className="absolute left-0 top-0 text-gray-300">•</span>
<u>Michael</u> recieved a shout out for debugging the prod bug for failed to fetch data</li>
<li className="relative pl-3 mb-4">
<span className="absolute left-0 top-0 text-gray-300">•</span>
<u>Christine</u>,<u>Aaron</u>, and <u>Alexey</u> closed discussion on storage plan for inactive user&nbsp;with</li>
<li className="relative pl-3 mb-4">
<span className="absolute left-0 top-0 text-gray-300">•</span>
<u>Christine</u> helped 4 engineers from 3 teams</li>
<li className="relative pl-3 mb-4">
<span className="absolute left-0 top-0 text-gray-300">•</span>
<u>Christopher</u> led roadmap planning</li>
</ul>
</div>
</div>

{/* Flex */}
<div className="flex space-x-4 mb-4">
{/* Medium Rectangle */}
<div className="flex-grow bg-white dark:bg-gray-700 p-4 shadow rounded-lg">
<div className="flex items-center mb-2">
    <i className="fas fa-user mr-4"></i>
    <div className="flex flex-col items-start">
    <p className="font-bold">Aaron Jones</p>
    <p className="text-gray-500 text-sm">Software Engineer</p>
    </div>
</div>
<ul className="list-none mb-2 text-left font-semibold text-sm">
    <li className="relative pl-3 mb-4">
    <span className="absolute left-0 top-0 text-gray-500">•</span>
    Added alert on failed fetch data error
    </li>
    <li className="relative pl-3 mb-4">
    <span className="absolute left-0 top-0 text-gray-500">•</span>
    Updated runbook for failed fetch data alert
    </li>
    <li className="relative pl-3 mb-4">
    <span className="absolute left-0 top-0 text-gray-500">•</span>
    Attended #auth-api meeting to provide context for the front-end teams
    </li>
    <li className="relative pl-3 mb-4">
    <span className="absolute left-0 top-0 text-gray-500">•</span>
    Updated the auth API documentation
    </li>
</ul>
<div className="flex space-x-4">
<p><i class="fab fa-github"></i> 4</p>
<p><i class="fab fa-slack"></i> 45</p>
<p><i class="fas fa-video"></i> 45m</p>
<p><i class="fas fa-user-friends"></i></p>
</div>
</div>
{/* Medium Rectangle */}
<div className="flex-grow bg-white dark:bg-gray-700 p-4 shadow rounded-lg">
<div className="flex items-center mb-2">
    <i className="fas fa-user mr-4"></i>
    <div className="flex flex-col items-start">
    <p className="font-bold">Christine Li</p>
    <p className="text-gray-500 text-sm">Staff Software Engineer</p>
    </div>
</div>
<ul className="list-none mb-2 text-left font-semibold text-sm">
    <li className="relative pl-3 mb-4">
    <span className="absolute left-0 top-0 text-yellow-500">•</span>
    Facilitated the Inactive user token and storage discussion meeting
    </li>
    <li className="relative pl-3 mb-4">
    <span className="absolute left-0 top-0 text-yellow-500">•</span>
    Gave a shoutout to <u>Michael</u> for his work on debugging the prod bug for failed to fetch data
    </li>
    <li className="relative pl-3 mb-4">
    <span className="absolute left-0 top-0 text-yellow-500">•</span>
    Closed discussion on storage plan for inactive user with <u>Aaron</u> and <u>Alexey</u>
    </li>
</ul>
<div className="flex space-x-4">
<p><i class="fab fa-github"></i> 13</p>
<p><i class="fab fa-slack"></i> 36</p>
<p><i class="fas fa-video"></i> 75m</p>
<p><i class="fas fa-user-friends"></i></p>
</div>
</div>
</div>

{/* Flex */}
<div className="flex space-x-4 mb-4">
{/* Medium Rectangle */}
<div className="flex-grow bg-white dark:bg-gray-700 p-4 shadow rounded-lg">
<div className="flex items-center mb-2">
    <i className="fas fa-user mr-4"></i>
    <div className="flex flex-col items-start">
    <p className="font-bold">Christopher Downs</p>
    <p className="text-gray-500 text-sm">Engineering Manager</p>
    </div>
</div>
<ul className="list-none mb-2 text-left font-semibold text-sm">
    <li className="relative pl-3 mb-4">
    <span className="absolute left-0 top-0 text-gray-500">•</span>
    Facilitated the Inactive user token and storage discussion meeting
    </li>
    <li className="relative pl-3 mb-4">
    <span className="absolute left-0 top-0 text-gray-500">•</span>
    Did roadmap planning with 3 teams to sync the pace
    </li>
</ul>
<div className="flex space-x-4">
<p><i class="fab fa-github"></i> 2</p>
<p><i class="fab fa-slack"></i> 170</p>
<p><i class="fas fa-video"></i> 165m</p><br/>
</div>
<div className="text-left mt-2">
  <i className="fas fa-user-friends block"></i>
</div>
</div>

{/* Medium Rectangle */}
<div className="flex-grow bg-white dark:bg-gray-700 px-6 py-4 shadow rounded-lg">
<div className="flex items-center mb-2">
    <i className="fas fa-user mr-4"></i>
    <div className="flex flex-col items-start">
    <p className="font-bold">Michael Berger</p>
    <p className="text-gray-500 text-sm">Senior Software Engineer</p>
    </div>
</div>
<ul className="list-none mb-2 text-left font-semibold text-sm">
    <li className="relative pl-3 mb-4">
    <span className="absolute left-0 top-0 text-gray-500">•</span>
    Resolved high priority prod bug for failed to fetch data
    </li>
    <li className="relative pl-3 mb-4">
    <span className="absolute left-0 top-0 text-gray-500">•</span>
    Changed the timestamp field on #auth-api with Faye
    </li>
</ul>
<div className="flex space-x-4">
<p><i class="fab fa-github"></i> 2</p>
<p><i class="fab fa-slack"></i> 70</p>
<p><i class="fas fa-video"></i> 45m</p>
</div>
<div className="text-left mt-2">
  <i className="fas fa-user-friends block"></i>
</div>
</div>

{/*Picture */}
<div className="w-1/3">
  <img src="https://picsum.photos/200" alt="Random" className="w-full h-auto rounded-lg" />
</div>

</div>

</div>
);
}

export default TeamView;
import React from 'react';

function IndividualView() {


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
<h1 className="text-2xl font-bold text-gray-600"><i className="fas fa-rainbow mr-2"></i> Auth /&nbsp;</h1>
<h1 className="text-2xl font-bold "><i className="fas fa-user"></i>Christine Li</h1>
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
<button className="rounded-full text-gray-500 px-4 py-2 hover:bg-black dark:hover:text-white">Acievements</button>
<button className="rounded-full text-gray-500 px-4 py-2 hover:bg-black dark:hover:text-white"><i className="fas fa-lock"></i>&nbsp;&nbsp;Notes</button>
</div>

{/* Flex */}
<div className="flex space-x-4 mb-4">
{/* Medium Square */}
<div className="flex-grow bg-white dark:bg-gray-700 flex items-center justify-center rounded-lg shadow flex-col px-8 py-10 space-y-4">
<div className="inline-block bg-gray-300 dark:bg-gray-600 rounded-full p-4 h-16 w-16">
    <i className="fas fa-user text-2xl"></i>
</div>
    <div className="font-bold">Christine Li</div>
    <div className="text-gray-500 text-sm">
        <p>Staff Software Engineering</p>
        <p>San Francisco, CA</p>
    </div>
</div>
{/* Big Rectangle */}
<div className="bg-white dark:bg-gray-700 py-4 pl-6 pr-8 shadow flex flex-col rounded-lg">
<ul className="list-none text-left gray-text font-semibold text-sm">
<li className="relative pl-3 mb-4">
<span className="absolute left-0 top-0 text-gray-300">•</span>
Worked on #oauth-inactive-user and #dashboard-revamp today</li>
<li className="relative pl-3 mb-4">
<span className="absolute left-0 top-0 text-gray-300">•</span>
Gave a shoutout to Michael for his work on debugging the prod bug for failed to fetch data</li>
<li className="relative pl-3 mb-4">
<span className="absolute left-0 top-0 text-gray-300">•</span>
Closed discussion on storage plan for inactive user with <u>Aaron</u> and <u>Alexey</u></li>
<li className="relative pl-3 mb-4">
<span className="absolute left-0 top-0 text-gray-300">•</span>
Attended inactive user storage management strategy meetings</li>
<li className="relative pl-3 mb-4">
<span className="absolute left-0 top-0 text-gray-300">•</span>
Contributed to the offsite idea for H2 2024</li>
</ul>
</div>
</div>

{/* Flex */}
<div className="flex space-x-4 mb-4">

{/* Medium Rectangle */}
<div className="flex-grow bg-white dark:bg-gray-700 p-4 shadow rounded-lg">
    <div className="flex items-center justify-between mb-2">
    <div className="inline-block bg-gray-300 dark:bg-gray-600 rounded-full p-2 h-10 w-10">
        <i className="fab fa-github"></i>
    </div>
        <div>
            <p>+5</p>
        </div>
    </div>
    <p className="flex font-bold">oauth</p>
    <p className="text-gray-500 text-left text-xs">Changes on inactive user storage management</p>
    <br/>
    <div className="flex space-x-4 text-xs mb-2">
        <p><i class="fas fa-arrow-up pr-1"></i>1</p>
        <p><i class="fas fa-arrow-down pr-1"></i>2</p>
        <p><i class="fas fa-arrow-left pr-1"></i>3</p>
        <p><i class="fas fa-arrow-right pr-1"></i>1</p>
    </div>
    <div className="flex space-x-4">
        <p><i class="fas fa-user-friends"></i></p>
        <p classname="text-sm text-gray-500">60m ago</p>
    </div>

</div>
{/* Medium Rectangle */}
<div className="w-1/4 pl-12">
 <img src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg" alt="Dog" className="w-full h-auto rounded-lg" />
</div>


</div>

{/* Flex */}
<div className="flex space-x-4 mb-4">

{/* Medium Rectangle */}
<div className="flex-grow bg-white dark:bg-gray-700 p-4 shadow rounded-lg">
<div className="flex mb-2">
<div className="inline-block bg-gray-300 dark:bg-gray-600 rounded-full p-2 h-10 w-10">
    <i className="fab fa-github"></i>
</div>
</div>
<p className="flex font-bold">13 issues</p>
<p className="text-gray-500 text-left text-xs mb-2">Making progress in updating the oauth system</p>
<div className="flex space-x-4 mb-2">
<p><i class="fas fa-circle"></i> 2</p>
<p><i class="fas fa-check"></i> 2</p>
<p><i class="fas fa-times"></i> 3</p>
</div>
<div className="flex space-x-4">
        <p><i class="fas fa-user-friends"></i></p>
        <p classname="text-sm text-gray-500">17m ago</p>
    </div>
</div>

{/* Medium Rectangle */}
<div className="flex-grow bg-white dark:bg-gray-700 p-4 shadow rounded-lg">
<div className="flex mb-2">
<div className="inline-block bg-gray-300 dark:bg-gray-600 rounded-full p-2 h-10 w-10">
    <i className="fas fa-video"></i>
</div>
</div>
<p className="flex font-bold">2 meetings</p>
<p className="text-gray-500 text-left text-xs mb-2">Discussed inactive user storage management strategy</p>
<div className="flex space-x-4 mb-2">
<p><i class="fas fa-clock"></i> 120m</p>
</div>
<div className="flex space-x-4">
        <p><i class="fas fa-user-friends"></i></p>
        <p classname="text-sm text-gray-500">13m ago</p>
    </div>
</div>

{/* Medium Rectangle */}
<div className="flex-grow bg-white dark:bg-gray-700 p-4 shadow rounded-lg">
<div className="flex mb-2">
<div className="inline-block bg-gray-300 dark:bg-gray-600 rounded-full p-2 h-10 w-10">
    <i className="fab fa-slack"></i>
</div>
</div>
<p className="flex font-bold">125 messages</p>
<p className="text-gray-500 text-left text-xs mb-2">Discussed inactive user storage management strategy</p>
<div className="flex space-x-4 mb-2">
<p><i class="fas fa-message"></i> 3 channels</p>
</div>
<div className="flex space-x-4">
        <p><i class="fas fa-user-friends"></i></p>
        <p classname="text-sm text-gray-500">1m ago</p>
    </div>
</div>
</div>

{/* buttons */}
<div className="flex space-x-4 bg-white dark:bg-gray-700 p-4 shadow rounded-lg">
    {/* Plus Icon Button */}
    <button className="bg-orange-500 hover:bg-orange-500 dark:hover:bg-orange-500 dark:bg-orange-700 p-2 shadow rounded-lg">
        <i className="fas fa-plus"></i>
    </button>
    {/* Horizontal Line */}
    <p className="text-3xl text-gray-300">|</p>
    {/* Search Icon Button */}
    <button className="bg-gray-200 hover:bg-orange-500 dark:hover:bg-orange-500 dark:bg-gray-500 p-2 shadow rounded-lg">
        <i className="fas fa-search"></i>
    </button>
    {/* Star Icon Button */}
    <button className="bg-gray-200 hover:bg-orange-500 dark:hover:bg-orange-500 dark:bg-gray-500 p-2 shadow rounded-lg">
        <i className="fas fa-star"></i>
    </button>
    {/* Jigsaws Icon Button */}
    <button className="bg-gray-200 hover:bg-orange-500 dark:hover:bg-orange-500 dark:bg-gray-500 p-2 shadow rounded-lg">
        <i className="fas fa-puzzle-piece"></i>
    </button>
        {/* Horizontal Line */}
        <p className="text-3xl text-gray-300">|</p>
    {/* Scale Icon Button */}
    <button className="bg-gray-200 hover:bg-orange-500 dark:hover:bg-orange-500 dark:bg-gray-500 p-2 shadow rounded-lg">
        <i className="fas fa-balance-scale"></i>
    </button>
</div>


</div>
);
}

export default IndividualView;
// Navbar.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    // Navigate to the signup page when the "Sign Up" button is clicked
    navigate('/signup');
  };

  return (
    <nav className="bg-black dark:bg-black fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://media.licdn.com/dms/image/C560BAQFEmJRV-RMTEw/company-logo_200_200/0/1675482910935?e=1708560000&v=beta&t=O2JhBVXCeKoXb3C5dMEI9sYNjZNveZ8W5z3K12mCofo" className="h-12" alt="CrowdUps Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"> CrowdUpss</span>
        </Link>
        <div className="hidden md:flex md:order-2 space-x-3 md:space-x-8 rtl:space-x-reverse">
          <Link to="/" className="text-white hover:text-blue-500">Home</Link>
          <Link to="/about" className="text-white hover:text-blue-500">About Us</Link>
          <Link to="/events" className="text-white hover:text-blue-500">Events</Link>
          <Link to="/resources" className="text-white hover:text-blue-500">Resources</Link>
        </div>
        <div className="flex md:order-3 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            onClick={handleSignUpClick}  // Call the handleSignUpClick function
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Sign up
          </button>
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div
          className={`${
            navbarOpen ? 'block' : 'hidden'
          } md:hidden items-center justify-between w-full md:flex md:w-auto md:order-1`}
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className="block py-3 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li className="relative group">
              <Link
                to="/about"
                className="block py-3 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About Us
              </Link>
              <ul className="absolute hidden bg-white dark:bg-gray-800 mt-2 space-y-2 rounded-md shadow-lg">
                <li>
                  <Link
                    to="/about/our-story"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700"
                  >
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about/team"
                    className="block px-8 py-2 text-gray-700 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700"
                  >
                    Team
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                to="/events"
                className="block py-3 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                to="/resources"
                className="block py-3 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Resources
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

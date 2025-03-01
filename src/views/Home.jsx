import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <>
      <nav className="bg-slate-50 flex justify-between items-center p-5 sticky top-0 z-50 shadow-md w-full">
        <Link to={'/'}>
          <h1 className="text-2xl font-semibold" style={{ color: '#000080'}}>SkillUp Academy</h1>
        </Link>
        <div></div>
      </nav>

      <div className="min-h-screen flex flex-col justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 py-6 px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Card 1: Fetch API */}
          <Link to={'/fetchmethod'}>
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Fetch API</h2>
              <p className="text-gray-600 mb-4">
                This card demonstrates how to integrate APIs using the native `fetch` method in JavaScript.
              </p>
              <button className="bg-blue-500 text-white rounded px-4 py-2 transition hover:bg-blue-600 focus:outline-none">
                Learn More
              </button>
            </div>
          </Link>

          {/* Card 2: Axios API */}
          <Link to={'/usingaxios'}>
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Axios API</h2>
              <p className="text-gray-600 mb-4">
                This card shows how to integrate APIs using the Axios library for more flexible requests.
              </p>
              <button className="bg-green-500 text-white rounded px-4 py-2 transition hover:bg-green-600 focus:outline-none">
                Learn More
              </button>
            </div>
          </Link>

          {/* Card 3: Axios Instance */}
          <Link to={'/usingaxiosinstance'}>
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Axios Instance</h2>
              <p className="text-gray-600 mb-4">
                This card covers how to configure and use Axios instances for more efficient API calls.
              </p>
              <button className="bg-red-500 text-white rounded px-4 py-2 transition hover:bg-red-600 focus:outline-none">
                Learn More
              </button>
            </div>
          </Link>

          {/* Card 4: Fetch with Async/Await */}
          <Link to={'/'}>
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Fetch with Async/Await</h2>
              <p className="text-gray-600 mb-4">
                Learn how to use `async/await` for cleaner, more readable asynchronous code with `fetch`.
              </p>
              <button className="bg-purple-500 text-white rounded px-4 py-2 transition hover:bg-purple-600 focus:outline-none">
                Learn More
              </button>
            </div>
          </Link>

          {/* Card 5: Axios GET Request */}
          <Link to={'/'}>
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Axios GET Request</h2>
              <p className="text-gray-600 mb-4">
                This card shows how to use Axios to perform GET requests to fetch data from an API.
              </p>
              <button className="bg-teal-500 text-white rounded px-4 py-2 transition hover:bg-teal-600 focus:outline-none">
                Learn More
              </button>
            </div>
          </Link>

          {/* Card 6: Axios POST Request */}
          <Link to={'/'}>
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Axios POST Request</h2>
              <p className="text-gray-600 mb-4">
                This card demonstrates how to use Axios to send data via POST requests.
              </p>
              <button className="bg-orange-500 text-white rounded px-4 py-2 transition hover:bg-orange-600 focus:outline-none">
                Learn More
              </button>
            </div>
          </Link>

          {/* Card 7: Axios PUT Request */}
          <Link to={'/'}>
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Axios PUT Request</h2>
              <p className="text-gray-600 mb-4">
                Here, you'll learn how to use Axios to perform PUT requests to update data.
              </p>
              <button className="bg-indigo-500 text-white rounded px-4 py-2 transition hover:bg-indigo-600 focus:outline-none">
                Learn More
              </button>
            </div>
          </Link>

          {/* Card 8: Axios DELETE Request */}
          <Link to={'/#'}>
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Axios DELETE Request</h2>
              <p className="text-gray-600 mb-4">
                This card explains how to use Axios to perform DELETE requests for removing data.
              </p>
              <button className="bg-yellow-500 text-white rounded px-4 py-2 transition hover:bg-yellow-600 focus:outline-none">
                Learn More
              </button>
            </div>
          </Link>

          {/* Card 9: Handling Errors with Axios */}
          <Link to={'/#'}>
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Handling Errors with Axios</h2>
              <p className="text-gray-600 mb-4">
                Learn how to properly handle errors when working with Axios API requests.
              </p>
              <button className="bg-pink-500 text-white rounded px-4 py-2 transition hover:bg-pink-600 focus:outline-none">
                Learn More
              </button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;

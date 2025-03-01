import React, { useState, useEffect } from 'react';

function Fetchmethod() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from the API when the component mounts
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
        alert('There was an error fetching the data.');
      });
  }, []);

  return (
    <div className="container mx-auto p-6">
      {/* Navbar */}
      <nav className="bg-blue-600text-white flex justify-between items-center">
        <h1 className="text-xl font-semibold">User Data</h1>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
          onClick={() => window.location.href = '/'}
        >
          Back to Home
        </button>
      </nav>

      <div className="text-center">
        {loading ? (
          // Modern spinner
          <div className="flex justify-center items-center">
            <div className="spinner-border animate-spin border-t-4 border-blue-500 border-solid rounded-full w-16 h-16"></div>
          </div>
        ) : (
          <table className="min-w-full table-auto border-collapse shadow-md rounded-lg overflow-hidden mt-6">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="px-6 py-3 text-left">Name</th>
                <th className="px-6 py-3 text-left">Email</th>
                <th className="px-6 py-3 text-left">Phone</th>
                <th className="px-6 py-3 text-left">Website</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b hover:bg-gray-100">
                  <td className="px-6 py-4">{user.name}</td>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4">{user.phone}</td>
                  <td className="px-6 py-4">{user.website}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Fetchmethod;

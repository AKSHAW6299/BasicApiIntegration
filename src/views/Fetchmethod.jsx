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
    <div className="container mx-auto p-6 text-center">
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-md mb-6 hover:bg-blue-600 transition duration-300"
        onClick={() => window.location.href = '/'}
      >
        Back to Home
      </button>

      <h1 className="text-3xl font-semibold text-gray-800 mb-4">Users List</h1>

      {loading ? (
        <div className="text-blue-500 text-xl font-bold animate-spin">
          Loading...
        </div>
      ) : (
        <table className="min-w-full table-auto border-collapse shadow-md rounded-lg overflow-hidden">
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
  );
}

export default Fetchmethod;

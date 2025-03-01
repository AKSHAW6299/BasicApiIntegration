import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Fetchmethod() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(9); // You can change the number of users per page
  const [filterText, setFilterText] = useState("");

  console.log('users :', users);
  

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

  // Filter the users based on filterText
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(filterText.toLowerCase())
  );

  // Get the current users for the current page
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handle filter text change
  const handleFilterChange = (e) => setFilterText(e.target.value);

  // Calculate total pages
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  return (
    <div className="container mx-auto p-5">
      {/* Navbar */}
      <nav className="text-white flex justify-between items-center">
        <Link to={'/'}>
          <h1 className="text-2xl font-semibold" style={{ color: '#000080' }}>SkillUp Academy</h1>
        </Link>

        <div className='flex justify-between gap-2'>
          {/* Filter Input */}
          <div className="">
            <input
              type="text"
              value={filterText}
              onChange={handleFilterChange}
              placeholder="Filter by name"
              className="px-6 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md transition duration-300 ease-in-out hover:border-blue-400"

            />
          </div>
          <button
            className="text-white py-2 px-4 rounded-md transition duration-300"
            style={{ backgroundColor: '#000080'}}
            onClick={() => window.location.href = '/'}
          >
            Back
          </button>
        </div>
      </nav>

      <div className="text-center mt-6">
        {loading ? (
          // Modern spinner
          <div className="flex justify-center items-center" style={{ height: '100vh' }}>
            <div className="spinner-border animate-spin border-t-4 border-blue-500 border-solid rounded-full w-16 h-16"></div>
          </div>
        ) : (
          <>
            {/* Table */}
            <table className="min-w-full table-auto border-collapse shadow-md rounded-lg overflow-hidden">
              <thead className="text-center">
                <tr className="text-white" style={{ backgroundColor: '#000080'}}>
                  <th className="px-6 py-3">Name</th>
                  <th className="px-6 py-3">Email</th>
                  <th className="px-6 py-3">Phone</th>
                  <th className="px-6 py-3">Website</th>
                </tr>
              </thead>
              <tbody>
                {currentUsers.map((user) => (
                  <tr key={user.id} className="border-b hover:bg-gray-100">
                    <td className="px-6 py-4">{user.name}</td>
                    <td className="px-6 py-4">{user.email}</td>
                    <td className="px-6 py-4">{user.phone}</td>
                    <td className="px-6 py-4">{user.website}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="mt-4">
              <ul className="flex justify-end space-x-2">
                {Array.from({ length: totalPages }, (_, index) => (
                  <li key={index + 1}>
                    <button
                      onClick={() => paginate(index + 1)}
                      className={`px-4 py-2 rounded-md ${currentPage === index + 1 ? 'bg-blue-900 text-white' : 'bg-gray-300'}`}
                    >
                      {index + 1}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Fetchmethod;

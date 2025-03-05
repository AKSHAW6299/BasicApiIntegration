import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';

function UsingAxiosLibrary() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filterText, setFilterText] = useState('');

  // Dummy API endpoint
  const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  useEffect(() => {
    // Fetch data using axios
    axios.get(apiUrl)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Error fetching data');
        setLoading(false);
      });
  }, []);

  // Filter the posts based on filterText (Search filter)
  const filteredPosts = data?.filter((post) =>
    post.title.toLowerCase().includes(filterText.toLowerCase()) ||
    post.id.toString().includes(filterText)
  );

  // Define columns for DataTable
  const columns = [
    {
      name: 'Post ID',
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: 'Title',
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: 'Body',
      selector: (row) => row.body,
    },
  ];

  // Handle filter text change
  const handleFilterChange = (e) => setFilterText(e.target.value);

  if (loading) {
    return (
      <div className="flex justify-center items-center" style={{ height: '100vh' }}>
        <div className="spinner-border animate-spin border-t-4 border-blue-500 border-solid rounded-full w-16 h-16"></div>
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      {/* Navbar */}
      <nav className="flex justify-between items-center">
        <Link to={'/'}>
          <h1 className="text-2xl font-semibold" style={{ color: '#000080' }}>React JS</h1>
        </Link>

        <div className='flex justify-between gap-2'>
          {/* Filter Input */}
          <div>
            <input
              type="text"
              value={filterText}
              onChange={handleFilterChange}
              placeholder="Filter by title or ID"
              className="px-6 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md transition duration-300 ease-in-out hover:border-blue-400"
            />
          </div>
          <button
            className="text-white py-2 px-4 rounded-md transition duration-300"
            style={{ backgroundColor: '#000080' }}
            onClick={() => window.location.href = '/'}
          >
            Back
          </button>
        </div>
      </nav>

      <div className="text-center mt-6">
        <h1 className="text-2xl font-semibold mb-4">API integration : (axios) package</h1>
        <h1 className='text-xl font-semibold'>Table : (react-data-table-component) package</h1>

        {/* DataTable without pagination */}
        <DataTable
          columns={columns}
          data={filteredPosts}
          selectableRows
          persistTableHead
          customStyles={{
            headCells: {
              style: {
                padding: '10px', // Reducing padding between the header cells
                fontWeight: 'bold',
                color: '#000080',
              },
            },
            cells: {
              style: {
                padding: '8px', // Reducing padding between the data cells
              },
            },
          }}
        />
      </div>
    </div>
  );
}

export default UsingAxiosLibrary;

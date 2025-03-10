import React, { useState, useEffect } from 'react';
import { apiGetDummyData } from '../services/DummyApi';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UsingAxiosInstance() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDummyData();
  }, []);

  const fetchDummyData = async () => {
    try {
      const response = await apiGetDummyData();
      console.log('response :', response?.data);

      setData(response?.data);
      setLoading(false);
      
      // Show success toast
      toast.success('Data loaded successfully!', { position: 'top-right', autoClose: 3000 });
    } catch (error) {
      setLoading(false);

      // Show error toast instead of rendering error message
      toast.error('Failed to load data!', { position: 'top-right', autoClose: 3000 });
    }
  };

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

  if (loading) {
    return (
      <div className="flex justify-center items-center" style={{ height: '100vh' }}>
        <div className="spinner-border animate-spin border-t-4 border-blue-500 border-solid rounded-full w-16 h-16"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      {/* Toast Container */}
      <ToastContainer />

      {/* Navbar */}
      <nav className="flex justify-between items-center">
        <Link to={'/'}>
          <h1 className="text-2xl font-semibold" style={{ color: '#000080' }}>React JS</h1>
        </Link>

        <button
          className="text-white py-2 px-4 rounded-md transition duration-300"
          style={{ backgroundColor: '#000080' }}
          onClick={() => window.location.href = '/'}
        >
          Back
        </button>
      </nav>

      <div className="text-center mt-6">
        <h1 className="text-2xl font-semibold mb-4">3) Direct API Integration: (Axios Instance) - Used Many Times</h1>
        {/* DataTable */}
        {data && (
          <DataTable
            columns={columns}
            data={data}
            selectableRows
            persistTableHead
            pagination
          />
        )}
      </div>
    </div>
  );
}

export default UsingAxiosInstance;

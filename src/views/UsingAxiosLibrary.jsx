import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UsingAxiosLibrary() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Dummy API endpoint
  const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  useEffect(() => {
    // Fetch data using axios
    axios.get(apiUrl)
      .then((response) => {
        console.log('respomse :', response);

        setData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Error fetching data');
        setLoading(false);
      });
  }, []); // Empty dependency array means it runs once when the component is mounted

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Fetched Data:</h1>
      <ul>
        {data && data.map(item => (
          <li key={item.id}>
            <strong>Post ID:</strong> {item.id}<br />
            <strong>Title:</strong> {item.title}<br />
            <strong>Body:</strong> {item.body}<br />
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsingAxiosLibrary;

import React, { useEffect} from 'react'
import { apiGetDummyData } from '../services/DummyApi';

function UsingAxiosInstance() {

  useEffect (() => {
    fetchDummyData();
  }, [])

  const fetchDummyData = async () => {
    try {
      const response = await apiGetDummyData();
      // console.log('response :', response);
        
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>UsingAxiosInstance</div>
  )
}

export default UsingAxiosInstance
// useAxios.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxiosApi = (url, method, requestData = null) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;

        if (method === 'get') {
          response = await axios.get(url);
        } else if (method === 'post') {
          response = await axios.post(url, requestData);
        } else if (method === 'patch') {
          response = await axios.patch(url, requestData);
        } else if (method === 'delete') {
          response = await axios.delete(url, requestData);
        }

        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, method, requestData]);

  return { data, loading, error };
};

export default  useAxiosApi;

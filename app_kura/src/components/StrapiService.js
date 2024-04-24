// StrapiService.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StrapiService = ({ endpoint }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(endpoint);
        setData(response.data.data);
        console.log(response.data.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      // Cleanup code if needed
    };
  }, [endpoint]);

  return { data, loading, error };
};

export default StrapiService;

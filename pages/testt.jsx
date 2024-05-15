// components/TraDetailList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function TraDetailList() {
  const [traDetails, setTraDetails] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('/api/traDetail');
        setTraDetails(response.data);
      } catch (error) {
        console.error('Error fetching traDetail:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>traDetail List</h1>
      <ul>
        {traDetails.map((traDetail) => (
          <li key={traDetail.traDetail_id}>
            <p>Intro: {traDetail.traIntro}</p>
            <p>Schedule: {traDetail.traSchedule}</p>
            <p>Necessary: {traDetail.traNecessary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import "./Scores.css";
import axios from 'axios';

const Scores = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    await axios.get('/pengci/getScores')
      .then((res) => {
        setData(res.data.scores.scores.sort((a, b) => b.score - a.score));
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  useEffect(() => {
    fetchData();
    const intervalId = setInterval(() => {
      fetchData();
    }, 5 * 60 * 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const renderTableRows = () => {
    return data.map((row, index) => (
      <tr key={index+1}>
        <td>{index+1}</td>
        <td>{row.username}</td>
        <td>{row.score}</td>
      </tr>
    ));
  };

  return (
    <div className="bg">
      <div className="title-container">
      <div className="alignment_h1">
        
          <h1 className="homePage_typography">Scoreboard</h1>
        </div>
        <div className="scontainer">
          <table className="score-table">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Username</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>{renderTableRows()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Scores;

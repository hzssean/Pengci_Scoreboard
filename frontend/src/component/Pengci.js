// 


import React, { useState, useEffect } from "react";
import "./Pengci.css";
import logo from './logouci.png';
import axios from 'axios';
import ReactPlayer from 'react-player';

const Pengci = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const rowsPerPage = 10;

  const fetchData = async () => {
    try {
      const response = await axios.get('/pengci/getScores');
      setData(response.data.scores.scores.sort((a, b) => b.score - a.score));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
    const intervalId = setInterval(fetchData, 5 * 60 * 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const renderTableRows = () => {
    return data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
      <tr key={index}>
        <td>{index + 1 + page * rowsPerPage}</td>
        <td>{row.username}</td>
        <td>{row.score}</td>
      </tr>
    ));
  };

  const displayScores = () => {
    return (
      <div className="leaderboard-container">
        <h3>Leaderboard</h3>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Username</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>{renderTableRows()}</tbody>
        </table>
        <div>
          <button  onClick={() => handleChangePage(null, page - 1)} disabled={page === 0}>Previous</button>
          <button  onClick={() => handleChangePage(null, page + 1)} disabled={page >= Math.ceil(data.length / rowsPerPage) - 1}>Next</button>
        </div>
      </div>
    );
  };

  return (
    <div className="bg">
      <div className="alignment">
        <div className="info-container">
        <div className="logo">
            <img src={logo} alt="Trickster Roads Logo" />
          </div>

          <h1>Trickster Roads</h1>
          <div className="video-container">
            <ReactPlayer
              url="Video_demo.mp4"
              width="100%"
              height="100%"
              controls={true}
            />
          </div>
          <p>
            The ultimate game that puts you in the driver's seat of an Autonomous Vehicle (AV) simulation. In this cutting-edge experience, you will delve into the world of AVs and learn how simulation can be used to test their robustness in handling challenging traffic scenarios. Strap yourself in for an adrenaline-pumping adventure where you'll encounter various traffic events designed to push your AV's capabilities to the limit. Can you outwit other AVs that attempt to trick you into making mistakes? By mastering these events, you'll unlock the secrets to navigate through tricky situations and gain the skills to potentially outsmart your rivals. So, gear up for the ride of a lifetime on Trickster Roads, where you'll embark on an exhilarating journey of discovery and strategy in the realm of Autonomous Vehicles!
          </p>
          <p>
            <a href="/pengci/instructions" style={{ color: "#848D62" }}>Instructions to play</a>
          </p>
        </div>
        <div className="scores-container">
          {displayScores()}
          <p>
            <a href="/pengci/all_scores" style={{ color: "#848D62" }}>View Scores List</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pengci;

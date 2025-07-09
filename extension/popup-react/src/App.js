//import logo from './logo.svg';
//import './App.css';


import React, { useEffect, useState } from "react";

function App() {
   const [report, setReport] = useState(null);

  

     useEffect(() => {
        // const fetchReport = async () => {
           //   const res = await fetch("http://localhost:4000/api/report/today");
          //   const data = await res.json();
           //   setReport(data);
        // };

        // fetchReport();
       //       }, []);

   // Replace this with actual fetch or chrome.storage
    const dummyData = {
     date: "2025-07-07",
     totalTime: 120,
     apps: [
       { name: "YouTube", time: 60 },
       { name: "Facebook", time: 30 },
       { name: "Instagram", time: 30 }
      ]
   };
   setReport(dummyData);
 }, []);

 return (
  <div style={{ padding: "16px", fontFamily: "sans-serif", width: 300 }}>
    <h3>📊 Daily App Report</h3>

    {report ? (
      <>
        <p><strong>Date:</strong> {report.date}</p>
        <p><strong>Total Time:</strong> {report.totalTime} min</p>

        {report.apps && report.apps.length > 0 ? (
          <ul>
            {report.apps.map((app, index) => (
              <li key={index}>
                {app.name}: {app.time} min
              </li>
            ))}
          </ul>
        ) : (
          <p>No apps tracked today.</p>
        )}
      </>
    ) : (
      <p>Loading report...</p>
    )}
  </div>
);
}

export default App;

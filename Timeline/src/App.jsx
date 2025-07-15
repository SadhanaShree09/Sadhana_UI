import { useState } from "react";
import './App.css'

function App() {
 
  const logs=[
    {
      day : "Day 1",
      date : "30.06.2025",
      task : ["Deployed the E-connect website and Faced the login error"]
    },
    {
      day : "Day 2",
      date : "01.07.2025",
      task : ["Cleared the Error and logged in the E-connect Website"]
    },
    {
      day : "Day 3",
      date : "02.07.2025",
      task : ["Beginned learning index,main,app,loginpage in the E-connect "]
    },
    {
      day : "Day 4",
      date : "03.07.2025",
      task : ["Continued the learning with basics,state,.map"]
    },
  ];

  const[workDay , setWorkDay] = useState(null);

  const toggleDay = (index) => {
    setWorkDay ( workDay === index ? null : index);
  };

  return (
    <>
    <div className='header'>
      <h1>My Timeline Chart</h1>
      <p>
          <b>Welcome !</b> to my Timeline Chart.
          <br />View my Timeline Learning by clicking the <b>Date</b>. 
          <br />Click on <b>"Show Details"</b> to expand each day's tasks.</p>
    </div>
    <div className='log-container'>
      {logs.map((log,index) => (
        <div key={index} className="log-card">
          <h2>{log.day}</h2>
          <p>Date : {log.date}</p>
          
          <button onClick={() => toggleDay(index)}>
            {workDay === index ? "Hide Details" : "Show Details"}
          </button>
          
          {workDay === index && (
          <ul className="a">
            {log.task.map((task,i) => (
            <li key={i}> {task} </li>
            ))}
          </ul>
          
          )}
        </div>     
        ))}
    </div>
    </>
  )
}

export default App
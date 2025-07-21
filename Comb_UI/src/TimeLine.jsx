import { useState } from "react";
import { Link } from "react-router-dom";

function TimeLine() {

    const logs=[
    {
      day : "Day 1",
      date : "30.06.2025",
      task : ["Deployed the E-connect website and Faced the login error"]
    },
    {
      day : "Day 2",
      date : "01.07.2025",
      task : ["Cleared the Error and logged in the E-connect Website" , "Depoyed"]
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
    setWorkDay(workDay == index ? null : index)
  };

  return (
    <div className="main-container">
        <div className="timeline-container">
            <h1>My Timeline Chart</h1>
            <div className="timeline-intro">
                <p>
                    <b>Welcome to my Timeline chart</b><br/>
                    <b>Click on the Show details button to view the tasks done</b>
                </p>
            </div>
            
            <div>  
                {logs.map((log,index) => (
                    <div key={index} className="timeline-day">
                        <div className="day-header">{log.day}</div>
                        <div className="day-date">Date: {log.date}</div>

                        <button className="toggle-btn" onClick={() => toggleDay(index)}>
                            {workDay == index ? "Hide Details" : "Show Details"}
                        </button>

                        {workDay == index && (
                            <ul className="task-list">
                                {log.task.map((task,i) => (
                                    <li key={i}>{task}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}  
            </div>
        </div>
        
        <div className="page-navigation">
            <Link to='/quotes'>Prev page</Link>
            <Link to='/userdetails'>Next Page</Link>
        </div>
    </div>
  )
}

export default TimeLine
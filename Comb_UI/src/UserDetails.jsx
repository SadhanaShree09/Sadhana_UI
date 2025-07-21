import { Link } from "react-router-dom";
import Display from "./components/Display";

function UserDetails() {

    const users = [
    { id : 1,
      name : "Sadhana",
      age : 21,
      location : "Coimbatore",
      role : "Front end Dev"
    },
    { id : 2,
      name : "Shree",
      age : 25,
      location : "Tamil Nadu",
      role : "Back end Dev"
    },
    { id : 3,
      name : "Anjana",
      age : 28,
      location : "Tirupur",
      role : "Full Stack Dev"
    },
    { id : 4,
      name : "Sanjay",
      age : 31,
      location : "Kerala",
      role : "Software Eng"
    },
    {
      id : 5,
      name : "Ajju",
      age : "22",
      location : "Arunachal Pradhesh",
      role : "Associate Manager"
    },
    {
      id : 6,
      name : "Arjun",
      age : "56",
      location : "Chennai",
      role : "Senior Consultant"
    },
    
  ];

  return (
    <div className="main-container">
        <div className="users-container">
            <h1>Developer's Profile</h1>
            <div className="users-grid">
                {users.map((props) =>(
                    <Display key={props.id} user={props}/>
                ))}
            </div>
        </div>
        
        <div className="page-navigation">
            <Link to='/timeline'>Prev Page</Link>
            <Link to='/'>Back to Home Page</Link>
        </div>
    </div>
  )
}

export default UserDetails
import User from "./components/User";

function App() {

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
      <div className="min-h-screen bg-green-100 p-8">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10 decoration-blue-200 decoration-3">
          Developer Profiles 
        </h1>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {users.map((props)=>(
            <User key={props.id} user={props}/> //user={props} can use any variable instead of user which could be used inn any other component.can use props={props} also
          ))}
        </div>
      </div>
  );
}

export default App;
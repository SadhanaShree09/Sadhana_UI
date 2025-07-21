import { Link } from "react-router-dom"

function App() {
  
  return (
    <div className="main-container">
      <div className="welcome-container">
        <h1>Welcome to the Combined UI</h1>
        <p>Click here to go to the Other Pages.</p>
        <div className="nav-links">
          <Link to='/quotes'>Quote App</Link>
          <Link to='/timeline'>Timeline</Link>
          <Link to='/userdetails'>User Details</Link>
        </div>
      </div>
    </div>
  )
}

export default App
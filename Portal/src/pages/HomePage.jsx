import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

function HomePage() {
  const {user} = useContext(AuthContext);
  return (
    <div className="text-center">
      <h1 className="text-solidblack ">Welcome to the Home Page {user?.username}</h1>
    </div>
  )
}

export default HomePage
import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-pink-100 via-sky-100 to-green-100 mb">
        <div className="text-center p-10 bg-white rounded-xl shadow-xl mb-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Home Page</h1>
            <p>Visit the About and the Timeline Done using React.</p>
        </div>
         <Link className="bg-blue-600 text-white px-6 py-2 rounded hover:text-blue-800" to="/about">About</Link>
    </div>
  )
}

export default Home
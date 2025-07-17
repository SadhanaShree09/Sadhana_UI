import { Link } from "react-router-dom";

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-100 via-sky-100 to-green-100 flex flex-col items-center justify-center bg-gray-100">
        <div className="max-w-xl p-8 bg-white rounded-lg shadow-md mb-5">
            <h1 className="text-3xl font-bold mb-4 text-gray-800">About Us</h1>
            <p className="text-gray-700 mb-6 ">Our company was founded in 2010 by a group of passionate individuals who wanted to make a difference in the world.</p> 
            <p className="text-gray-700 mb-6 ">We started small, but our vision and dedication quickly grew into a global movement.</p>
        </div>
    <Link to="/timeline" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">View Timeline</Link>
    </div>
    );
}

export default About;
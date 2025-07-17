import { Link } from "react-router-dom";

function Timeline() {
  return(
    <div className="min-h-screen bg-gradient-to-r from-pink-100 via-sky-100 to-green-100 p-10 flex flex-col items-center">
            <div className="max-w-2xl w-full bg-white p-6 rounded-lg shadow-lg mb-6" >
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Timeline App</h2>
                <p className="text-1xl font-helvatica">Created a Timeline App which shows the daily done tasks and learnings from that.</p>
            </div>
            <div className="max-w-2xl w-full bg-white p-6 rounded-lg shadow-lg mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Quote App</h2>
                <p className="text-1xl font-helvatica">Gives Random Quotes and also has a option to add the quote needed to Fav list.</p>
            </div>
    <Link className="bg-blue-500 px-5 py-2 text-white rounded hover:text:blue-600 display:felx" to="/">Go Back to Home Page</Link>
    </div>
    );
}

export default Timeline;
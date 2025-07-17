import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="py-4 px-6 justify-end bg-gradient-to-r from-pink-100 via-sky-100 to-green-100 text-black-500 flex gap-4">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/timeline">Timeline</Link>
    </nav>
  );
}

export default Navbar
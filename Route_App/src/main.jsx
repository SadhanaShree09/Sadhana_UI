import { createRoot } from 'react-dom/client'
import Home from './Home.jsx'
import About from './About.jsx'
import Timeline from './Timeline.jsx'
import './index.css'; 
import { BrowserRouter ,Routes, Route } from 'react-router-dom'
import Navbar from './Navbar.jsx';

export default function Main(){

  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/timeline" element={<Timeline/>} />
      </Routes>
    </BrowserRouter>
  ); 
}

const root = createRoot(document.getElementById('root'));
root.render(<Main/>); 
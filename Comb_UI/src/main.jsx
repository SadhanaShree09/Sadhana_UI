import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import QuoteApp from './Quote-App.jsx'
import TimeLine from './TimeLine.jsx'
import UserDetails from './UserDetails.jsx'
import NavBar from './NavBar.jsx'

function Main() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/quotes' element={<QuoteApp />} />
        <Route path='/timeline' element={<TimeLine />} />
        <Route path='/userdetails' element={<UserDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Main

const root = createRoot(document.getElementById('root'));
root.render(<Main/>); 
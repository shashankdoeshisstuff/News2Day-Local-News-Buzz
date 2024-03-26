import './App.scss';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

// conponent import
import Underconstruction from './Underconstruction';
import Dashboard from './Components/Pages/Dashboard';
import NewsShorts from './Components/Pages/NewsShorts';
import NewsFeed from './Components/Pages/NewsFeed';

// Icons import
import { PiSquaresFourFill } from "react-icons/pi";
import { AiFillPlaySquare } from "react-icons/ai";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { HiColorSwatch } from "react-icons/hi";
import { BsPersonCircle } from "react-icons/bs";
import NewsBuzz from './Components/Pages/NewsBuzz';
import Profile from './Components/Pages/Profile';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
      {/* Routes for Pages */}
      <Routes>
        <Route path='/UnderConstruction' element={<Underconstruction />} />
        <Route path='/Dashboard' element={<Dashboard/>}/>
        <Route path='/NewsShorts' element={<NewsShorts/>}/>
        <Route path='/NewsFeed' element={<NewsFeed/>}/>
        <Route path='/NewsBuzz' element={<NewsBuzz/>}/>
        <Route path='/Profile' element={<Profile/>}/>
      </Routes>
    <nav className='navbar'>
        <NavLink className='nav-item' to="/Dashboard"><PiSquaresFourFill /></NavLink>
        <NavLink className='nav-item' to="/NewsShorts"><AiFillPlaySquare /></NavLink>
        <NavLink className='nav-item' to="/NewsFeed"><BiSolidMessageSquareDetail /></NavLink>
        <NavLink className='nav-item' to="/NewsBuzz"><HiColorSwatch /></NavLink>
        <NavLink className='nav-item' to="/Profile"><BsPersonCircle /></NavLink>
    </nav>
    </div>
    </BrowserRouter>
  );
}

export default App;

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
        <li className='nav-item'>
          <NavLink to="/Dashboard"><PiSquaresFourFill /></NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to="/NewsShorts"><AiFillPlaySquare /></NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to="/NewsFeed"><BiSolidMessageSquareDetail /></NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to="/NewsBuzz"><HiColorSwatch /></NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to="/Profile"><BsPersonCircle /></NavLink>
        </li>
      </nav>
    </div>
    </BrowserRouter>
  );
}

export default App;

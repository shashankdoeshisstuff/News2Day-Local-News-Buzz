import './Profile.scss';
import Settings from './Settings';
import Location from './Location';
import { useState } from 'react';

// importing icons
import { TbUserSquareRounded } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";
import { MdEditSquare } from "react-icons/md";
import { RiSettings4Fill } from "react-icons/ri";
import { LuSettings2 } from "react-icons/lu";
import { FaCirclePlay } from "react-icons/fa6";
import { BsShieldFillCheck } from "react-icons/bs";
import UnderConstruction from './UnderConstruction';

const Profile = () => {
    const [showMenuSettings, setShowMenuSettings] = useState(false);
    const [showMenuLocation, setShowMenuLocation] = useState(false);
    const [showMenuUC, setShowMenuUC] = useState(false);

    const toggleMenuSettings = () => {
        setShowMenuSettings(!showMenuSettings);
    }

    const toggleMenuLocation = () => {
        setShowMenuLocation(!showMenuLocation);
    }

    const toggleMenuUC = () => {
        setShowMenuUC(!showMenuUC);
    }
   
    return (
        <>
        <div className='profile-page'>
            <div className="profile">
                <TbUserSquareRounded className='user-img'/>
                <span className="user-name">User Name</span>
            </div>
            <div className="preference">
                <button onClick={toggleMenuLocation}><FaLocationDot/>Location</button>
                <button onClick={toggleMenuUC}><LuSettings2/>Preference</button>
                <button onClick={toggleMenuUC}><MdEditSquare/>Manage Information</button>
                <button onClick={toggleMenuUC}><FaCirclePlay/>Subscription</button>
                <button onClick={toggleMenuUC}><BsShieldFillCheck/>Privacy</button>
                <button onClick={toggleMenuSettings}><RiSettings4Fill/>Settings</button>
            </div>
        </div>

        
        <div
            className={
                showMenuSettings ? `display-block`: 'display-none'
            }
        >
            <Settings 
                toggleMenuUC={toggleMenuUC}
                toggleMenu={toggleMenuSettings}
            />
        </div>
        <div
            className={
                showMenuLocation ? `display-block`: 'display-none'
            }
        >
            <Location
                toggleMenu={toggleMenuLocation}
            />
        </div>
        <div
            className={
                showMenuUC ? `display-block`: 'display-none'
            }
        >
            <UnderConstruction
                toggleMenu={toggleMenuUC}
            />
        </div>
        </>
    )
}

export default Profile;
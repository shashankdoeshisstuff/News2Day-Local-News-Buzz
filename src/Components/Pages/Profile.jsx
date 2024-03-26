import './Profile.scss'

// importing icons
import { TbUserSquareRounded } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";
import { MdEditSquare } from "react-icons/md";
import { RiSettings4Fill } from "react-icons/ri";
import { LuSettings2 } from "react-icons/lu";
import { FaCirclePlay } from "react-icons/fa6";
import { BsShieldFillCheck } from "react-icons/bs";

const Profile = () => {
   
    return (
        <div className='profile-page'>
            <div className="profile">
                <TbUserSquareRounded className='user-img'/>
                <span className="user-name">User Name</span>
            </div>
            <div className="profile-options">
                <ul>
                    <li><FaLocationDot className='option-icon'/>Location</li>
                    <li><LuSettings2 className='option-icon'/>Preference</li>
                    <li><FaCirclePlay className='option-icon'/>Subscription</li>
                    <li><BsShieldFillCheck className='option-icon'/>Privacy</li>
                    <li><RiSettings4Fill className='option-icon'/>Settings</li>
                </ul>
            </div>
        </div>
    )
}

export default Profile;
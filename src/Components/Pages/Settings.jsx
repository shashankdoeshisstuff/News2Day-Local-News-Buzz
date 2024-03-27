import './Settings.scss';
import { MdKeyboardArrowLeft } from "react-icons/md";
import { RiEdit2Fill } from "react-icons/ri";
import { IoIosNotifications } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";
import { RiMessage2Fill } from "react-icons/ri";
import { PiNotepadFill } from "react-icons/pi";
import { AiFillFileExclamation } from "react-icons/ai";

const Settings = ({toggleMenu, toggleMenuUC}) => {
    return (
        <div className='sub-menu'>
            <div className="set-nav">
                <MdKeyboardArrowLeft
                    className='set-nav-back-icon'  
                    onClick={toggleMenu}
                />
                <span>Settings</span>
            </div>
            <div className="preference">
                <button onClick={toggleMenuUC}><RiEdit2Fill/>Change Password</button>
                <button onClick={toggleMenuUC}><IoIosNotifications/>Notification</button>
                <button onClick={toggleMenuUC}><IoCallSharp/>Contact us</button>
                <button onClick={toggleMenuUC}><RiMessage2Fill/>Help Center</button>
                <button onClick={toggleMenuUC}><PiNotepadFill/>FAQ</button>
                <button onClick={toggleMenuUC}><AiFillFileExclamation/>About</button>
            </div>
        </div>
    )
}

export default Settings;
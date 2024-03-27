import './Location.scss';
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { RiEdit2Fill } from "react-icons/ri";

const Location = ({toggleMenu}) => {
    return (
        <div className='sub-menu'>
            <div className="set-nav">
                <MdKeyboardArrowLeft
                    className='set-nav-back-icon'  
                    onClick={toggleMenu}
                />
                <span>Location</span>
            </div>
            <div className="preference">
                <button className='pre-btn-3col'>
                    <FaLocationDot/>
                    <span>
                        Auto Location
                        <label className='switch'>
                            <input type="checkbox" />
                            <span className='slider'></span>
                        </label>
                    </span>
                </button>
                <div className='pre-btn-location'>
                    <button>
                        <RiEdit2Fill/>
                        Select Location
                    </button>
                    <input type="text" 
                        placeholder='Lucknow, Uttar Pradesh'
                    />
                </div>
            </div>
        </div>
    )
}

export default Location;
import './UnderConstruction.scss'
import { MdKeyboardArrowLeft } from "react-icons/md";
import { HiExclamationTriangle } from "react-icons/hi2";

const Underconstruction = ({toggleMenu}) => {
    return (
        <div className="sub-menu">
            <div className="set-nav">
                <MdKeyboardArrowLeft
                    className='set-nav-back-icon'  
                    onClick={toggleMenu}
                />
                <span>Go Back</span>
            </div>
            <div className="caution">
                <HiExclamationTriangle className='caution-icon'/>
                <span>This Page is Underconstruction</span>
            </div>
        </div>
    )
}

export default Underconstruction;
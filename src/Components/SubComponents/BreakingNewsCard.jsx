import './BreakingNewsCard.scss'
import testimage from '../../Assets/3bp-101-unit-05865rc-jpg-3bp-101-unit-05865rc.jpg'

const BreakingNewsCard = () => {
    return (
        <div className="breaking-news-card">
            <img src={testimage} alt="" />
            <p className="card-title">
                Netflix blockbuster ‘3 Body Problem’ 
                divides opinion and sparks nationalist 
                anger in China
            </p>
            <div className="card-btn-box">
                <button className="card-button">Read more</button>
                <h6 className="card-time">6 hours ago</h6>
            </div>
        </div>
    )
}

export default BreakingNewsCard;
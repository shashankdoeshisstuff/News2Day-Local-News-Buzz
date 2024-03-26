import "./Dashboard.scss"
import { RiSearch2Line } from "react-icons/ri";
import BreakingNewsCard from "../SubComponents/BreakingNewsCard";

/* // Importing Swiper React coonponents
import { Swiper, SwiperSlide } from 'swiper/react';
// Importing Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Importing Swiper styles
import 'swiper/css'; */

const Dashboard = () => {
    const category_list = ['All', 'Sports', 'Technology', 'Politics',
            'All', 'Sports', 'Technology', 'Politics'
        ]

 return (
    <main className="dashboard">
        <div className="search">
            <div className="search-box">
            <RiSearch2Line className="search-icon"/>
            <input className="search-input" type="text" placeholder="Find interesting news ..."/>
            <button className="search-btn" >Search</button>
            </div>
        </div>
        {/* <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            ...
        </Swiper> */}

        <div className="category">
            <ul className="category-list">
                {
                    category_list.map((item) => (
                        <li className="category-item">{item}</li>
                    ))
                }
            </ul>
        </div>
        <div className="breakin-news">
            <h3>Breaking News</h3>
            <div className="breaking-news-container">
                <BreakingNewsCard/>
                <BreakingNewsCard/>
                <BreakingNewsCard/>
                <BreakingNewsCard/>
                <BreakingNewsCard/>
            </div>
        </div>
    </main>
 )
}

export default Dashboard;
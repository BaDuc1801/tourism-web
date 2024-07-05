import './Home.css'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import listCountry from '../country/country.js'
import listLocation from '../location/location.js'
import Country from '../country/Country.jsx'
import Location from '../location/Location.jsx'
import { SampleNextArrow, SamplePrevArrow } from '../location/CustomArrow.jsx'
import Stories from '../storiess/Stories.jsx';
import listStory from '../storiess/stories.js';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Weather from '../weather/Weather.jsx';
import UserContext from '../../../context/UserContext.jsx';
import { AuthContext } from '../../../context/AuthContext.jsx';

const Home = () => {
  const nav = useNavigate();
  const {isAuthenticated, setIsAuthenticated} = useContext(AuthContext)
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const buttonLogin = () => {
    nav('/login');
  }

  const [showDropdown, setShowDropdown] = useState(false);
  const [count, setCount] = useState(1)

  const handleMouseEnter = () => {
    setCount(count + 1);
    if(count % 2 === 0){
      setShowDropdown(false)
    }
    else{
      setShowDropdown(true);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    nav('/login')
  };
  const { accName } = useContext(UserContext);

  return (
    <div>
      <div className='section1'>
        <img className='section1-img' src='../src/assets/img/main.jpg'></img>
        <div className="nav">
          <div className="nav-bar">
            <div className="lgo">
              <img src="../src/assets/img/logo.png"></img>
            </div>
            <div className='bar-choice'>
              <Link className='link' to='/destination'>Destination</Link>
              <Link className='link' to='/stories'>Stories</Link>
              <Link className='link' to='/review'>Reviews</Link>
            </div>
            <div className='log'>
              {!isAuthenticated ? <><button className='signup-but but' onClick={() => {nav('/signup')}}>Sign Up</button>
              <button className='login-but but' onClick={buttonLogin}>Login</button></>
              :<div className='account'>
                <span>{accName}</span>
                <div className='account-img' onClick={handleMouseEnter}>
                  <img src='https://cellphones.com.vn/sforum/wp-content/uploads/2023/10/avatar-trang-2.jpg' alt='avatar' />
                  {showDropdown && (
                    <div className='dropdown-menu'>
                      <ul>
                        <li onClick={handleLogout}>Log Out</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>}
            </div>
          </div>
          <div>
            <h1>Discover New Places and Create </h1>
            <h1>Unforgettable Memories</h1>
          </div>
        </div>
      </div>
      <div className='section2'>
        <div className='section2-intro'>
          <div className='title'>
            <h1>Plan your best trip ever</h1>
            <p>Making the Most of Your Travel Experience in 2023</p>
          </div>
          <div className='view-all-city'>
            <button onClick={() => { nav('/destination') }}>View All Destination</button>
          </div>
        </div>
        <div className='country-infor'>
          {listCountry.slice(0, 4).map((item, index) => {
            return <Country item={item} index={index} />
          })}
        </div>
      </div>
      <div >
        <Weather />
      </div>
      <div className='section3'>
        <div className='section2-intro'>
          <div className='title'>
            <h1>Top Locations to Explore</h1>
            <p>Here are some of the most visited places in 2023</p>
          </div>
        </div>
        <Slider {...settings} >
          {listLocation.map((item, index) => {
            return <Location item={item} index={index} />
          })}
          <div className='slider-button'>
            <button>View All</button>
          </div>
        </Slider>
      </div>
      <div className='section2'>
        <div className='section2-intro'>
          <div className='title'>
            <h1>Top Travel Stories</h1>
            <p>Explore our latest stories from our active users</p>
          </div>
          <div className='view-all-city'>
            <button onClick={() => { nav('/stories') }}>View All Stories</button>
          </div>
        </div>
        <div className='story-infor'>
          {listStory.slice(0, 4).map((item, index) => {
            return <Stories item={item} index={index} />
          })}
        </div>
      </div>
      <div className='footer'>
        <img src="../src/assets/img/logo.png"></img>
        <p>© 2023 Travel Pulse. All rights reserved</p>
      </div>
    </div>
  );
}

export default Home;

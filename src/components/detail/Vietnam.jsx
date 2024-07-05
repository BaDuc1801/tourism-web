import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import listCityVietnam from './vietnam.js';
import Vietnamcard from './Vietnamcard.jsx';
import listStory from '../home_page/storiess/stories.js';
import Stories from '../home_page/storiess/Stories.jsx';
import { Pagination } from 'antd';
import { useSearchInput } from '../../hooks/index.js';
import { AuthContext } from '../../context/AuthContext.jsx';
import UserContext from '../../context/UserContext.jsx';

const Vietnam = () => {
  const nav = useNavigate();
  const [countt, setCountt] = useState(6);
  const [isClick, setIsClick] = useState(false);
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(4);
  const { search, search2 } = useSearchInput();

  const handlePaginationChange = (pageNumber) => {
    const pageSize = 4;
    const newFrom = (pageNumber - 1) * pageSize;
    const newTo = newFrom + pageSize;

    setFrom(newFrom);
    setTo(newTo);
  };

  const clickButtonView = () => {
    if (!isClick) {
      setIsClick(true);
      setCountt(10);
    } else {
      setIsClick(false);
      setCountt(6);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 2100);
  }, [from]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const buttonLogin = () => {
    nav('/login');
}
const { isAuthenticated } = useContext(AuthContext)
const { accName } = useContext(UserContext);
const [showDropdown, setShowDropdown] = useState(false);
const [count, setCount] = useState(1)

const handleMouseEnter = () => {
    setCount(count + 1);
    if (count % 2 === 0) {
        setShowDropdown(false)
    }
    else {
        setShowDropdown(true);
    }
};
const handleLogout = () => {
    nav('/login')
};

  return (
    <div>
      <div className='section1'>
        <img className='section1-img' src='../src/assets/img/vn-1.jpg' alt='Vietnam'></img>
        <div className="nav">
          <div className="nav-bar">
            <div className="lgo">
              <Link to='/'><img src="../src/assets/img/logo.png" alt='Logo'></img></Link>
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
          <div className='detail-country'>
            <h1>Vietnam</h1>
          </div>
        </div>
      </div>
      <div className='intro-vn'>
        <h1>Vietnam</h1>
        <p className='p1-1'>Asia</p>
        <p className='p2-2'>Vietnam is an exciting destination with a diverse array of attractions, ranging from bustling cities and serene rural landscapes to stunning natural wonders and historic landmarks. The country boasts beautiful coastal areas, verdant national parks, charming countryside villages, and a wealth of cultural heritage.</p>
      </div>
      <div className='section1-vn'>
        <p className='vn-title'>01 / TOP SIGHTS & LOCATIONS</p>
        <div className='find-city'>
          <h1>Top Destinations for your Travel Plans</h1>
          <input 
            placeholder='Search for places' 
            onChange={(e) => { search.setSearchValue(e.target.value) }} 
            value={search.value} 
          />
        </div>
        <div className='list-city-vn' onClick={() => {nav('/destination/vietnam/hanoi')}}>
          {listCityVietnam
            .filter(city => city.city.toLowerCase().includes(search.value.toLowerCase()))
            .slice(0, countt)
            .map((item, index) => {
              return <Vietnamcard item={item} key={index}/>;
            })}
        </div>
        {!search.value ? (
          <div className='view-all-vn'>
            <button onClick={clickButtonView}>
              {isClick ? 'View Less' : 'View All'}
            </button>
          </div>
        ) : null}
      </div>
      <div className='section1-vn'>
        <p className='vn-title'>02 / LATEST FEATURED STORIES</p>
        <div className='find-cityy'>
          <h1>Latest Stories from Vietnam</h1>
          <input 
            placeholder='Search stories' 
            onChange={(e) => search2.setSearchValuee(e.target.value)} 
            value={search2.value} 
          />
        </div>
        <div className='story-infor str-2'>
          {listStory
            .filter(story => 
              story.location.includes('Vietnam') && 
              (story.location.toLowerCase().includes(search2.value.toLowerCase()) || 
              story.title.toLowerCase().includes(search2.value.toLowerCase()))
            )
            .slice(from, to)
            .map((item, index) => {
              return <Stories item={item} key={index} />;
            })}
        </div>
        {!search2.value ? (
          <Pagination
            className='pagination'
            pageSize={4}
            total={listStory.filter(story => story.location.includes('Vietnam')).length}
            onChange={handlePaginationChange} 
          />
        ) : null}
      </div>
    </div>
  );
};

export default Vietnam;

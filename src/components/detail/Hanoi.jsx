import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSearchInput } from '../../hooks';
import { AuthContext } from '../../context/AuthContext';
import UserContext from '../../context/UserContext';
import logoImage from '../../assets/img/logo.png';
import './Hanoi.css'
import { Pagination } from 'antd';
import listStory from '../home_page/storiess/stories.js';
import Stories from '../home_page/storiess/Stories.jsx';

const Hanoi = () => {
  const nav = useNavigate();
  const { isAuthenticated } = useContext(AuthContext)
  const { accName } = useContext(UserContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const [count, setCount] = useState(1)
  const buttonLogin = () => {
    nav('/login');
  }
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(4);

  const handlePaginationChange = (pageNumber) => {
    const pageSize = 4;
    const newFrom = (pageNumber - 1) * pageSize;
    const newTo = newFrom + pageSize;

    setFrom(newFrom);
    setTo(newTo);
  };

  return (
    <div>
      <div className='section1'>
        <img className='section1-img' src='https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/04/anh-ha-noi.jpg' alt='Vietnam'></img>
        <div className="nav">
          <div className="nav-bar">
            <div className="lgo">
              <Link to='/'><img src={logoImage} ></img></Link>
            </div>
            <div className='bar-choice'>
              <Link className='link' to='/destination'>Destination</Link>
              <Link className='link' to='/stories'>Stories</Link>
              <Link className='link' to='/review'>Reviews</Link>
            </div>
            <div className='log'>
              {!isAuthenticated ? <><button className='signup-but but' onClick={() => { nav('/signup') }}>Sign Up</button>
                <button className='login-but but' onClick={buttonLogin}>Login</button></>
                : <div className='account'>
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
            <h1>Hanoi</h1>
          </div>
        </div>
      </div>
      <div className='intro-vn'>
        <h1>Hanoi</h1>
        <p className='p1-1'>Vietnam</p>
        <p className='p2-2'>Hanoi is a captivating destination with a rich history and vibrant culture. The city features bustling streets, serene lakes, ancient temples, and colonial architecture. Hanoi is known for Hoan Kiem Lake, the Old Quarter, and the Temple of Literature, offering a unique blend of old and new.</p>
      </div>
      <div className='section1-vn'>
        <p className='vn-title'>01 / TOP SIGHTS & LOCATIONS</p>
        <div className='find-city'>
          <h1>Top Destinations for your Travel Plans</h1>
        </div>
        <div className='list-hn'>
          <div className='list-hn-if'>
            <h1>1. Hoan Kiem Lake</h1>
            <img src='https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1688490503/anvrftntreo22dsrerno.webp'></img>
            <p>Besides the name Sword Lake - associated with the legend of King Le Thai To returning the magic sword to the magic turtle - it was once called Luc Thuy Lake because the water surface is clear all year round. This is the ideal starting point if you want to explore the famous old quarters of Hanoi, such as Luong Van Can, Hang Ngang, Hang Dao, Trang Thi, Dinh Tien Hoang, Ba Trieu, Hang Bai... Some attractions that you should not miss when coming to Hoan Kiem Lake are Turtle Tower, Ngoc Son Temple, The Huc Bridge, King Le Temple, Ba Kieu Temple...
              Whether it's early in the morning or late at night, Hoan Kiem Lake has its own vitality. Many locals and tourists come here to exercise, stroll sightseeing, visit historical sites, eat, and shop. On weekends, the area around Hoan Kiem Lake also holds many unique festival activities and art performances. If you want to feel the youthful energy of Hanoi, you must definitely go to Hoan Kiem Lake.</p>
          </div>
          <div className='list-hn-if'>
            <h1>2. Van Mieu - Quoc Tu Giam</h1>
            <img src='https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1635409162/blog/mecjbjhvssovymbs9idz.webp'></img>
            <p>This is the first university relic complex in Vietnam, including the Temple of Literature - Quoc Tu Giam area, Van lake and Giam garden. Built during the reign of King Ly Thanh Tong (around 1070), the Temple of Literature is a place to worship Chu Cong, Confucius and Tu Phoi. Quoc Tu Giam - the first university in Vietnam - was founded by King Ly Nhan Tong in 1076. Located south of Thang Long Imperial Citadel, Temple of Literature - Quoc Tu Giam is a regular destination for students. Hanoi greets and prays for peace and luck on the exam path. If you want to learn about Dai Viet's cultural years and own typical architectural works of the early Nguyen Dynasty, you definitely cannot miss this Hanoi tourist destination.</p>
          </div>
          <div className='list-hn-if'>
            <h1>3. Ho Chi Minh Mausoleum</h1>
            <img src='https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1635409391/blog/tzzpgm3z5eou6pn1ueli.webp'></img>
            <p>Ba Dinh Square - located on Hung Vuong Street, Ba Dinh District - is the largest square and has the most important historical significance in Vietnam. This is where President Ho Chi Minh read the Declaration of Independence giving birth to the Democratic Republic of Vietnam on September 2, 1945. Here, on major holidays, long parades often take place. important. With a width of 100m and a length of 320m, this is also a familiar place for entertainment, strolling, and sightseeing for indigenous people and tourists.
              When coming to Ba Dinh Square, you must definitely spend time visiting. Not only does it possess solid and unique architecture, this project also preserves priceless spiritual assets about "Father of the Nation" Ho Chi Minh and his love for the independent and free country of Vietnam. .</p>
          </div>
          <div className='list-hn-if'>
            <h1>4. West Lake</h1>
            <img src='https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1688490521/ybwdj450y4oco1ibfrzh.webp'></img>
            <p>West Lake has been present since the reign of King Hung, located in Tay Ho district, and is the largest natural lake in Hanoi - with a circumference of about 14.8 km and an area of ​​more than 500 hectares. This famous and beautiful lake has a few other interesting names such as Kim Nguu Lake, Dam Dam, Lang Bac, Doai Ho or Fox Corpse Lagoon. According to many geological experts, West Lake was originally a section of the Red River, stagnant due to the river changing its flow, creating a natural freshwater lake. One feature that makes the unique beauty of West Lake is that the water color changes according to the climate and time of day - guaranteed to bring you an extremely "satisfying" experience.</p>
          </div>
          <div className='list-hn-if'>
            <h1>5. Hanoi Old Quarter</h1>
            <img src='https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1688490354/neusvd7x3ydt77fyjoel.webp'></img>
            <p>Existing since the Ly - Tran dynasties, it is an ancient urban area that has existed for hundreds of years, located in the East of Thang Long Imperial Citadel. The most famous old town in the capital is the Old Quarter of Hoan Kiem District, Hanoi, with 76 streets spread over 100 hectares. Visiting Hanoi's Old Quarter, you will not only take in the unique ancient architecture and typical peaceful pace of life, but also have the opportunity to shop for unique and flavorful handmade souvenirs.</p>
          </div>
        </div>
      </div>
      <div className='section1-vn'>
        <p className='vn-title'>02 / LATEST FEATURED STORIES</p>
        <div className='find-cityy'>
          <h1>Latest Stories from Vietnam</h1>
        </div>
      </div>
      <div className='huhuhu'>
        <div className='story-infor str-2'>
          {listStory
            .filter(story =>
              story.location.includes('Ha Noi')
            )
            .slice(from, to)
            .map((item, index) => {
              return <Stories item={item} key={index} />;
            })}
        </div>
        <Pagination
          className='pagination'
          pageSize={4}
          total={listStory.filter(story => story.location.includes('Ha Noi')).length}
          onChange={handlePaginationChange}
        />
      </div>
    </div>
  )
}

export default Hanoi

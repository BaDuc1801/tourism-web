import React, { useContext, useEffect, useState } from 'react'
import listStory from './stories.js'
import Stories from './Stories.jsx'
import { Pagination } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { useSearchInput } from '../../../hooks/index.js'
import { AuthContext } from '../../../context/AuthContext.jsx'
import UserContext from '../../../context/UserContext.jsx'

function Storiespage() {
    const [from, setFrom] = useState(0)
    const [to, setTo] = useState(8)
    const { search } = useSearchInput()

    const handlePaginationChange = (pageNumber) => {
        const pageSize = 8;
        const newFrom = (pageNumber - 1) * pageSize;
        const newTo = newFrom + pageSize;

        setFrom(newFrom);
        setTo(newTo);
    };

    const nav = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 650);
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
                <img className='section1-img' src='../src/assets/img/stories-main.jpg'></img>
                <div className="nav">
                    <div className="nav-bar">
                        <div className="lgo">
                            <Link to='/'><img src="../src/assets/img/logo.png"></img></Link>
                        </div>
                        <div className='bar-choice'>
                            <Link className='link' to='/destination'>Destination</Link>
                            <a>Stories</a>
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
                    <div>
                        <h1>Travel Stories from different</h1>
                        <h1>people globally</h1>
                    </div>
                </div>
            </div>
            <div className='story-bar'>
                <div className='section2-intro'>
                    <div className='title'>
                        <h1>Top Travel Stories</h1>
                        <p>Explore our latest stories from our active users</p>
                    </div>
                    <div className='view-all-city'>
                        <input placeholder='Search stories'
                            value={search.value}
                            onChange={(e) => { search.setSearchValue(e.target.value) }}></input>
                    </div>
                </div>
                <div className='story-infor'>
                    {listStory.filter(story => (story.location.toLowerCase().includes(search.value.toLowerCase()) ||
                        story.title.toLowerCase().includes(search.value.toLowerCase()))).slice(from, to).map((item, index) => {
                            return <Stories item={item} index={index} />
                        })}
                </div>
                {!search.value ? <Pagination
                    className='pagination'
                    pageSize={8}
                    total={listStory.filter(story => (story.location.toLowerCase().includes(search.value.toLowerCase()) ||
                        story.title.toLowerCase().includes(search.value.toLowerCase()))).length}
                    onChange={handlePaginationChange} /> : <></>}
            </div>
            <div className='footer'>
                <img src="../src/assets/img/logo.png"></img>
                <p>© 2023 Travel Pulse. All rights reserved</p>
            </div>
        </div>
    )
}

export default Storiespage

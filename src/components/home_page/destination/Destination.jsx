import React, { useContext, useEffect, useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { Link, useNavigate } from 'react-router-dom'
import listCountry from '../country/country.js'
import Country from '../country/Country.jsx'
import { Pagination } from 'antd'
import { useSearchInput } from '../../../hooks/index.js'
import { AuthContext } from '../../../context/AuthContext.jsx'
import UserContext from '../../../context/UserContext.jsx'

const Destination = () => {
    const { search } = useSearchInput()
    const nav = useNavigate()
    const [from, setFrom] = useState(0)
    const [to, setTo] = useState(8)
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

    const handlePaginationChange = (pageNumber) => {
        const pageSize = 8;
        const newFrom = (pageNumber - 1) * pageSize;
        const newTo = newFrom + pageSize;

        setFrom(newFrom);
        setTo(newTo);
    };

    useEffect(() => {
        window.scrollTo(0, 850);
    }, [from]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <div className='section1'>
                <img className='section1-img' src='../src/assets/img/destination.png'></img>
                <div className="nav">
                    <div className="nav-bar">
                        <div className="lgo">
                            <Link to='/'><img src="../src/assets/img/logo.png"></img></Link>
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
                    <div>
                        <h1>Discovering the wonders of our </h1>
                        <h1>planet, one adventure at a time</h1>
                    </div>
                </div>
            </div>
            <div className='search-destination'>
                <input placeholder='Search for places' autoComplete='off' onChange={(e) => search.setSearchValue(e.target.value)}></input>
                <button><CiSearch /></button>
            </div>
            <h1 style={{ marginLeft: 200 }}>Your Next Adventure Awaits</h1>
            <div className='country-infor list-destination'>
                {listCountry.filter(story => (story.region.toLowerCase().includes(search.value.toLowerCase()) ||
                    story.name.toLowerCase().includes(search.value.toLowerCase()))).slice(from, to).map((item, index) => {
                        return <Country item={item} index={index} />
                    })}
            </div>
            {!search.value ? <Pagination
                className='pagination'
                pageSize={8}
                total={listCountry.length}
                onChange={handlePaginationChange} /> : <></>}
            <div className='footer'>
                <img src="../src/assets/img/logo.png"></img>
                <p>© 2023 Travel Pulse. All rights reserved</p>
            </div>
        </div>
    )
}

export default Destination

import React, { useState, useEffect, useContext } from 'react';
import './Review.css';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import { FaPen } from 'react-icons/fa';
import { useSearchInput } from '../../../hooks';
import ReviewContext from '../../../context/ReviewContext';
import { AuthContext } from '../../../context/AuthContext';
import UserContext from '../../../context/UserContext';

const ReviewLayout = () => {
    const nav = useNavigate();
    const { search } = useSearchInput();
    const { reviews } = useContext(ReviewContext);
    const [newListReview, setNewListReview] = useState(reviews);

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


    useEffect(() => {
        setNewListReview(reviews);
    }, [reviews]);

    useEffect(() => {
        const filteredReviews = reviews.filter(item =>
        (item.loca.toLowerCase().includes(search.value.toLowerCase()) ||
            item.title.toLowerCase().includes(search.value.toLowerCase()))
        );
        setNewListReview(filteredReviews);
    }, [search.value, reviews]);

    const handleWrite = () => {
        if(isAuthenticated){
            return nav('/review/writereview')
        }else{
            return nav('/login')
        }
    }

    return (
        <div>
            <div className='section1 section1-review'>
                <div className="rv">
                    <div className="nav-bar rv">
                        <div className="lgo logo-rv">
                            <Link to='/'><img src="../src/assets/img/logo-blue.png" alt="logo"></img></Link>
                        </div>
                        <div className='bar-choice'>
                            <Link className='link rv' to='/destination'>Destination</Link>
                            <Link className='link rv' to='/stories'>Stories</Link>
                            <Link className='link rv'>Reviews</Link>
                        </div>
                        <div className='log'>
                            {!isAuthenticated ? <><button className='signup-but but but-rv' onClick={() => { nav('/signup') }}>Sign Up</button>
                                <button className='login-but but-rv but' onClick={buttonLogin}>Login</button></>
                                : <div className='account'>
                                    <span className='bacl'>{accName}</span>
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
                        <h1>Share your Travel Experience in</h1>
                        <h1>form of a story</h1>
                    </div>
                </div>
                <div className='rv-search'>
                    <div className='search-destination rv-se'>
                        <input placeholder='Which review do you want to see?'
                            autoComplete='off'
                            onChange={(e) => search.setSearchValue(e.target.value)}>
                        </input>
                        <button><CiSearch /></button>
                    </div>
                </div>
                <div className='section2'>
                    <div className='section2-intro'>
                        <div className='title'>
                            <h1>Top places with reviews</h1>
                            <p>Travelers want to see more reviews of these places.</p>
                        </div>
                        <div className='view-all-city'>
                            <button onClick={handleWrite}><FaPen /> Write New Review</button>
                        </div>
                    </div>
                </div>
            </div>
            <Outlet context={{ newListReview }} />
        </div>
    );
}

export default ReviewLayout;

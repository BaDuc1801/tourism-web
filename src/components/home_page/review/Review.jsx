// Review.js
import React, { useEffect, useState } from 'react';
import './Review.css';
import { useLocation, useOutletContext } from 'react-router-dom';
import Reviewcard from './Reviewcard';
import { Pagination } from 'antd';

const Review = () => {
    const { newListReview } = useOutletContext();
    const [renderList, setRenderList] = useState([]) 
    const [from, setFrom] = useState(0);
    const [to, setTo] = useState(4);

    useEffect(() => {
        setRenderList(newListReview)
    },[newListReview])

    const handlePaginationChange = (pageNumber) => {
        const pageSize = 4;
        const newFrom = (pageNumber - 1) * pageSize;
        const newTo = newFrom + pageSize;

        setFrom(newFrom);
        setTo(newTo);
    };

    useEffect(() => {
        window.scrollTo(0, 600);
    }, [from]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <div className='list-review'>
                {renderList.slice(from, to).map((item) => {
                    return <Reviewcard key={item.id} item={item} />;
                })}
                <Pagination
                    className='pagination'
                    pageSize={4}
                    total={newListReview.length}
                    onChange={handlePaginationChange}
                />
            </div>
            <div className='footer'>
                <img src="../src/assets/img/logo.png" alt="logo"></img>
                <p>© 2023 Travel Pulse. All rights reserved</p>
            </div>
        </div>
    );
}

export default Review;

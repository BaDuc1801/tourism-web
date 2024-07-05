import React from 'react'
import { Rate } from 'antd'

const Reviewcard = (props) => {
    const { item } = props;
    return (
        <div className='rv-card'>
            <div className='rv-img'><img src={item.img}></img></div>
            <div className='rv-content'>
                <div className='rv-loca'>{item.loca}</div>
                <div className='rv-title'>{item.title}</div>
                <div className='rv-content1'>{item.content1}</div>
                <div className='rv-content2'>{item.content2}</div>
                <div className='rv-rate'><p><Rate className='custom-rate'/></p><p className='c-r'>Click to rate</p></div>
            </div>
        </div>
    )
}

export default Reviewcard

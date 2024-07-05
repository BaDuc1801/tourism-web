import React from 'react'

const Vietnamcard = (props) => {
    const {item} = props
    return (
        <div className='flex-vn'>
            <div className='img-city-vn'><img src={item.img}></img></div>
            <div className='name-city-vn'>{item.city}</div>
        </div>
    )
}

export default Vietnamcard

import React, { useEffect, useState } from 'react'
import './Weather.css'
import WeatherSearch from './WeatherCard'

const Weather = () => {

    return (
        <div className='weather'>
            <WeatherSearch/>
        </div>
    )
}

export default Weather

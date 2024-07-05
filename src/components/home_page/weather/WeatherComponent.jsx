import React from 'react';

const formattedDates = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'short',
        day: 'numeric'
    });
}

const formattedDatesss = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric'
    });
}

const formattedTime = (dateString) => {
    const date = new Date(dateString);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
}

const createWeatherCard = (data) => (e) => {
    return (
        <div key={e.dt} className='each-day'>
            <div className='img-icon'><img src={`https://openweathermap.org/img/wn/${e?.weather[0].icon}@2x.png`} alt="Weather icon" /></div>
            <h4 className='temp-day'>{(e?.main.temp_max - 273.15)?.toFixed(1)}°C</h4>
            <h3 className='date-day'>{formattedDates(e?.dt_txt)}</h3>
        </div>
    );
};

const createWeatherCardd = (data) => (e) => {
    const forecastHour = new Date(e.dt_txt).getHours();
    const backgroundColor = (forecastHour >= 21 || forecastHour < 6) ? 'linear-gradient(to bottom,#494772 0%,#556095 73% ,#6582C6 100%)' : 'linear-gradient(to bottom,#f88408e7 0%,#F7DBA1 73% ,#f6fad9 100%)';
    return (
        <div key={e.dt} className='each-time' style={{ background: backgroundColor }}>
            <h3 className='date-day'>{formattedTime(e.dt_txt)}</h3>
            <img className='img-iconn' src={`https://openweathermap.org/img/wn/${e?.weather[0].icon}@2x.png`} alt="Weather icon" />
            <h4 className='temp-day'>{(e?.main.temp_max - 273.15)?.toFixed()}°C</h4>
            <h3 className='date-dayy'>{formattedDatesss(e?.dt_txt)}</h3>
        </div>
    );
};

const WeatherComponent = ({ forecast, data }) => {
    return (
        <div>
            {forecast.slice(0, 5).map(createWeatherCard(data))}
        </div>
    );
};

const WeatherFiveHoursLater = ({ fiveHoursForecast, data }) => {
    return (
        <div className='fh'>
            {fiveHoursForecast.map(createWeatherCardd(data))}
        </div>
    );
};

export { WeatherFiveHoursLater, WeatherComponent };

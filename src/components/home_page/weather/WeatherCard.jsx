import React, { useEffect, useState } from 'react';
import { AiOutlineAim } from 'react-icons/ai';
import { TbRipple, TbWind } from 'react-icons/tb';
import vietnamCities from '../weather/listID';
import { WeatherComponent, WeatherFiveHoursLater } from './WeatherComponent';
import { CiSearch } from 'react-icons/ci';

const WeatherSearch = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [cityId, setCityId] = useState(1581130);
    const [cityName, setCityName] = useState('');
    const [forecast, setForecast] = useState([]);
    const [fiveHoursForecast, setFiveHoursForecast] = useState([]);
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const weatherData = await getWeatherData(cityId);
            setForecast(weatherData.fiveDaysForecast);
            setFiveHoursForecast(weatherData.fiveHoursForecast);
            setData(weatherData.data); 
        };
        fetchData();
    }, [cityId]);

    const getWeatherData = async (cityId) => {
        const rest = await fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=126d9969f714485eeab0b71ec2b7c165`);
        const data = await rest.json();
        const uniqueForecastDays = [];
        const fiveDaysForecast = data.list.filter(forecast => {
            const forecastDate = new Date(forecast.dt_txt);
            const forecastHour = forecastDate.getHours();

            if (forecastHour === 12) {
                const day = forecastDate.getDate();
                if (!uniqueForecastDays.includes(day)) {
                    uniqueForecastDays.push(day);
                    return true;
                }
            }
            return false;
        });

        const currentTime = new Date();
        const fiveHoursForecast = data.list.filter(forecast => {
            const forecastDateTime = new Date(forecast.dt_txt);
            return forecastDateTime > currentTime;
        }).slice(0, 5);

        return { fiveDaysForecast, fiveHoursForecast, data };
    };

    const handleSearch = () => {
        const city = vietnamCities.find(city => city.name.toLowerCase().trim() === cityName.toLowerCase().trim());
        if (city) {
            setCityId(city.id);
        }
    };

    return (
        <>
            <div className='search-weather'>
                <div className='s-city'>
                    <input
                        placeholder='Search for your preferred city'
                        value={cityName}
                        onChange={(e) => setCityName(e.target.value)}
                    />
                    <button onClick={handleSearch}><CiSearch /></button>
                </div>
                <button onClick={handleSearch}>
                    <AiOutlineAim style={{ marginRight: 5 }} /> <p>Current Location</p>
                </button>
            </div>
            <div className='info-weather'>
                <div className='time-weather'>
                    <div className='city-wt'>{data?.city.name}</div>
                    <div className='time-wt'>
                        {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                    <div className='date-wt'>
                        {currentDate.toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'short' })}
                    </div>
                </div>
                <div className='temp-weather'>
                    <div className='feel-weather'>
                        <h1>{(data?.list[0].main.temp-273.15)?.toFixed(1)}°C</h1>
                        <div className='fl'><p className='fli'>Feels like:</p><p className='flike'>{(data?.list[0].main.feels_like-273.15)?.toFixed(1)}°C</p></div>
                    </div>
                    <div className='met-ia'>
                        <img src={`https://openweathermap.org/img/wn/${data?.list[0].weather[0].icon}@2x.png`}></img>
                    </div>
                    <div className='details-weather'>
                        <div className='humidity'>
                            <p className='ic'><TbRipple /></p><p className='flikee'>{(data?.list[0].main.humidity)}%</p><p>Humidity</p>
                        </div>
                        <div className='wind'>
                            <p className='ic'><TbWind /></p><p className='flikee'>{(data?.list[0].wind.speed)?.toFixed(1)} km/h</p><p>Wind Speed</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='forecast-weather'>
                <div className='gap-day'>
                    <h1 className='fc'>5-Day Weather Forecast</h1>
                    <WeatherComponent forecast={forecast} data={data} />
                </div>
                <div className='gap-hour'>
                    <h1 className='fc'>Hourly Forecast</h1>
                    <WeatherFiveHoursLater fiveHoursForecast={fiveHoursForecast} data={data} />
                </div>
            </div>
        </>
    );
}

export default WeatherSearch;


import React, { useState } from "react";
import axios from "axios";
import './app.css';
import moment from "moment";

function App() {

    const [data, setData] = useState({})

    const [location, setLocation] = useState('')

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=bdb95c6b9964e1a35c7b8cb3c7a548c7`

    const search = (e) => {
        if (e.key === 'Enter') {
            axios.get(url).then((res) => {
                setData(res.data)
                console.log(res.data)
            })
            setLocation('')
        }
    }

    return (
        <div className="app">

            <div className="search">
                <input value={location} onChange={e => setLocation(e.target.value)} type='text' placeholder="Location" onKeyPress={search} />
                <div className="day">{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
            </div>

            <div className="container">

                <div className="top">
                    <div className="location"><p>{data.name}</p></div>
                    <div className="weatherIcon">{data.weather ? <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}></img> : null}</div>
                    <div className="temp">{data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}</div>
                    <div className="sky">{data.weather ? <p>{data.weather[0].main}</p> : null}</div>
                </div>

                {data.name !== undefined &&
                    <div className="middle">
                        <div className="feelsLike">{data.main ? <p className="bold">{data.main.feels_like.toFixed()}°F</p> : null}<p>Feels Like</p></div>
                        <div className="humidity">{data.main ? <p className="bold">{data.main.humidity}%</p> : null}<p>Humidity</p></div>
                        <div className="wind"><p className="bold">{data.wind.speed.toFixed()}mph</p><p>Wind</p></div>
                    </div>
                }
            </div>
        </div>
    )
};

export default App;














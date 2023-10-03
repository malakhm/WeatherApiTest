import React from 'react';
import mc from "../img/weather-icons/mostlycloudy.svg";

const WeatherItem = () => {

  console.log("success")
  return (
    <div className="wrapper-2">
      <div id="image">
<img src={mc} alt="clear" />
</div>
<div id="weather">
  <h1>weather</h1>
</div>
<div id="temp">
  <h1>Temperature 10° to 11℃</h1>
  <h3>Humidity <span>78%</span> Pressure <span>1008.48</span></h3>
</div>
    </div>
  )
}


export default WeatherItem;
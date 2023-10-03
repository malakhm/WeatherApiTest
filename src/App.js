import React from "react";
// import mc from "./img/weather-icons/mostlycloudy.svg";
// import clear from "./img/weather-icons/clear.svg";
// import Search from "./components/Search";
import Search from "./components/Search";
import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";
import WeatherItem from "./components/WeatherItem";
import "./App.css";
import DailyWeather from "./components/Daily";
import { useState , useEffect} from "react";
import axios from "axios";

function App() {

  const [cityName, setCity] = useState("london");
  const [isLoading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState()
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=65625cce43b3bc77dab00b24349bf814`;


  const changeCity = (cityInput) => 
  {
    setCity(cityInput);
  }

  const fetchData = async(url) =>
  {
    setLoading(true);
    try
    {
      const response = await fetch(url);
      const finalResponse = await response.json();
      console.log(finalResponse.data);
    }

    catch(err)
    {
      console.error(err);
    }
    
    finally
    {
      setLoading(false);
    }
    
  }
  if(isLoading)
  {
    console.log('loading .........')
  }

  useEffect(() =>{
    fetchData(url)
  },[]);
  return (

    <div className="App">

      <Search cityPropFunc = {changeCity}/>
      <WeatherItem data = {weatherData}/>
      <DailyWeather data = {weatherData} />

</div>
  );
}

export default App;

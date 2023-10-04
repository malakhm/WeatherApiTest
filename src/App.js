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
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=284466794ddf0e728f1f4d14c5c26591`;


  const changeCity = (cityInput) => 
  {
    setCity(cityInput);
  }

  const fetchData = async(url) =>
  {
    setLoading(true);
    try
    {
      const response = await axios(url);

      const res = response.data
      console.log("parent" , res);
      setWeatherData(res)
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
    fetchData(url);
    return () =>{
      console.log("cleaning...");
    }
  }
  
  ,[]);
  return (

    <div className="App">

      <Search cityPropFunc = {changeCity}/>
      <WeatherItem data = {weatherData}/>
      <DailyWeather data = {weatherData} />

</div>
  );
}

export default App;

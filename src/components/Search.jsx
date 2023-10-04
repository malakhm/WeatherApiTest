import React from "react";
import clear from "../img/weather-icons/clear.svg";
import { useState } from "react";


const Search = (props) => {

  const [input, setInput] = useState('')

  const handleClick = (cityInput) => 
  {
    props.callback(cityInput);
  }


  return (
    <div className="wrapper-1">
      <header>
    <label> <input type="text" placeholder="Enter A City Name" onBlur={a=>setInput(a.target.value)}/> </label>
    <button onClick={e=>handleClick(input)}>FIND WEATHER</button>
    </header>
  </div>
  )
}

export default Search;

pu
import './App.css';
import React,{useState} from 'react'
import { isElementOfType } from 'react-dom/test-utils';
function App() {
  const api={
    key: "ef0e0909853e364737e15ee63ad21cf6",
    base: "https://api.openweathermap.org/data/2.5/"
  } 
  
  const dateBuilder=(d) =>{
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day=days[d.getDay()];
    let date=d.getDate();
    let month=months[d.getMonth()];
    let year=d.getFullYear();
    return `${day} ${date} ${month} ${year}`
  }
  const calcTime=(d) =>{
    // create Date object for current location
        
    let localTime = d.getTime()
    let localOffset = d.getTimezoneOffset() * 60000
    let utc = localTime + localOffset
    let city = utc + (1000 * weather.timezone)
    let nd = new Date(city)
    return "Local time: "+ nd;
}


  const [query,setQuery]=useState('');
  const [weather,setWeather]=useState({}); 
  
  const search =evt =>{
    if (evt.key==='Enter'){
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res =>res.json())
      .then(result =>{
        setWeather(result);
        
        setQuery('');
        console.log(query);
        console.log(result);
                      //console.log(weather);
        
      });
    }
  }

  return (
    <div className={
      (typeof weather.main!="undefined")? 
        ( (weather.weather[0].main=='Sunny')? 'app sunny'
        :(weather.weather[0].main=="Clouds")?'app clouds'
        :(weather.weather[0].main=='Thunderstorm')? 'app thunderstorm'
        :(weather.weather[0].main=="Rain")? 'app rainny': 'app')
      :'app'

    }>
      <main>
        <div className='search-box'>
          <input
          type='text'
          className='search-bar'
          placeholder='Search...'
          onChange={event=>setQuery(event.target.value )} //input =houston =>event target value
          value={query}
          onKeyPress={search}
          >

          </input>
      
        </div>
        {(typeof weather.main!="undefined")? (
          <div>

        <div className='location-box'>
            <div className='location'>
              {weather.name},{weather.sys.country}
            </div>
            <div className='date'>
              
              {calcTime(new Date())}
            </div>
        </div>

        <div className='weather-box'>
            <div className='temp'>{Math.round((weather.main.temp*(9/5))+32)} F
            
              <div className='tempmax' id='maxtemp'>
              Max: {Math.round((weather.main.temp_max*(9/5))+32)} F
              </div>

              <div className='tempmin'>
              Min: {Math.round((weather.main.temp_min*(9/5))+32)} F

              </div>


            </div>
           

            
            <div className='weather'>{weather.weather[0].main}</div>
        </div>

          </div>
        
        ):('')}
      </main>
             
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";
import { Country , Forecast, CurrentWeather} from "../objects";
import axios from "axios";
import "./MapInfo.css";
import { toIconURL } from "../mapUtils";
import { Link } from "react-router-dom";
import { useMapContext } from "../MapContext";

const APIKEY = import.meta.env.VITE_W_API_KEY;

const url = `http://api.openweathermap.org/data/2.5/forecast`;

function DailyForecast ( props: {name:string, forecast:CurrentWeather }){

  const currentWeatherIcon = props.forecast.weather.length > 0 ? toIconURL(props.forecast.weather[0]) : '';

  return(
    <>
      {props.forecast && props.forecast.weather.length > 0? 

           <div className="daily-forecast-container">
            <div className="daily-forecast-header">
                <div>{props.name} :</div> 
            </div>
            <div className="daily-forecast-center">
              <img className="current-weather-icon" width='100px' height='100px' src={currentWeatherIcon}></img> 
              <div className="current-weather-description"> {props.forecast.weather[0].description}</div>
            </div>
            <div className="daily-forecast-content" >
              <div> ⬆️ : {Number(props.forecast.main.temp_max).toFixed(1)} °C </div>
              <div> ⬇️ : {Number(props.forecast.main.temp_min).toFixed(1)} °C </div>
              {/* <div> {props.forecast.dt} </div> */}
            </div>
          </div>  
         : <> </>
      } 
    </>
  )
}

function NextForecast (props: {name:string, forecast:Forecast, index:number }){

  const currentWeatherIcon = props.forecast?.list?.length > 0 ? toIconURL(props.forecast?.list[props.index].weather[0]) : '';

  return(
    <>
      {props.forecast && props.forecast?.list?.length > 0? 

           <div className="daily-forecast-container">
            <div className="daily-forecast-header">
                <div>{props.name} :</div> 
            </div>
            <div className="daily-forecast-center">
              <img className="current-weather-icon" width='100px' height='100px' src={currentWeatherIcon}></img> 
              <div className="current-weather-description"> {props.forecast.list[props.index].weather[0].description}</div>
            </div>
            <div className="daily-forecast-content" >
              <div> ⬆️ : {Number(props.forecast.list[props.index].main.temp_max).toFixed(1)} °C </div>
              {/* <div> ⬇️ : {Number(props.forecast.list[props.index].main.temp_min).toFixed(1)} °C </div> */}
              {/* <div> {props.forecast.dt} </div> */}
            </div>
          </div>  
         : <> </>
      } 
    </>
  )
}


function MapInfo( props : {currentCountry : Country}) {

  // dont forget to pass by reference the current weather 
  // get the forecast 

  const mapState = useMapContext();
  
  console.log('mapState - active country:', mapState.activeCountry);

  const [forecast, setForecast] = useState<Forecast | undefined>();

  const client = axios.create({
    baseURL: url,
  });

  useEffect(() => {

    if(!props.currentCountry) return; 

    try {
      client
        .get(
          `?lat=${props.currentCountry.currentWeather.coord.lat}&lon=${props.currentCountry.currentWeather.coord.lon}&appid=${APIKEY}&lang=es&units=metric&}`
        )
        .then((response) => {
          setForecast(response.data);
        });
    } catch (error) {
      console.log(error);
    }


  }, [props.currentCountry]);

  //end forecast 
  return (
    <>
     {props.currentCountry && props.currentCountry.currentWeather? 
       <div className="city-forecast">
        <div className="city-forecast-header" style={{backgroundImage: `url(${props.currentCountry.current_icon})`}}>
        <Link to={'/country/' + props.currentCountry.country_name} >
         <div className="city-forecast-name"> {props.currentCountry.country_name} </div>
        </Link>
         <div className="city-forecast-sub-name"> {props.currentCountry.currentWeather.name} : {Number(props.currentCountry.currentWeather.main.temp).toFixed(1)} °C  </div>
       </div>
       <div className="weekly-forecast">

        {props.currentCountry.currentWeather ? <>
          <DailyForecast name={'Hoy'} forecast={props.currentCountry.currentWeather}/>
        </> : <></>}
        {
          forecast && forecast!.list?.length > 0? 
          <>
            <NextForecast name={'Mie'} forecast={forecast!} index={8} />
            <NextForecast name={'Jue'} forecast={forecast!} index={16} />
            <NextForecast name={'Vie'} forecast={forecast!} index={23} />
            <NextForecast name={'Sab'} forecast={forecast!} index={31} />
            <NextForecast name={'Dom'} forecast={forecast!} index={39} />
           </> : <></>
        }
       </div>
     </div>
     
     : <></>}
    </>

  )
}

export default MapInfo;

import { CityCords, Country, CurrentWeather } from "../objects";
import { useState, useEffect } from "react";
import axios from "axios";
import { toIconURL } from "../mapUtils";
import "./widget.css";

function Widget(props: { data: CityCords, setCurrentCity(country:Country) : any }) {

  const [currentWeather, setCurrentWeather] = useState<CurrentWeather | undefined >();
  const [currentIcon, setCurrentIcon] = useState<string>("");

  const APIKEY = import.meta.env.VITE_W_API_KEY;
  const url = `http://api.openweathermap.org/data/2.5/weather`;

  const client = axios.create({
    baseURL: url,
  });

  useEffect(() => {
    try {
      client
        .get(
          `?lat=${props.data.lat}&lon=${props.data.lon}&appid=${APIKEY}&lang=es&units=metric&cnt=5 }`
        )
        .then((response) => {
          setCurrentWeather(response.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    if (currentWeather && currentWeather!.weather?.length > 0) {
      setCurrentIcon(
        toIconURL(currentWeather?.weather[0])
      );
    }
  }, [currentWeather]);

  return (
    <>
      <div
        className="tooltip"
        style={{ top: props.data.y, left: props.data.x }}
        onClick={() => props.setCurrentCity({
          country_name: props.data.name,
          current_icon: currentIcon,
          currentWeather: currentWeather! ,
          cities: [],
        })}
      >
        <div>
          <img src={currentIcon} width='100px' height='100px'></img>
          <div className="temp-prev">
            <div className="tooltip-country-name"> {props.data.name} </div>
            <div className="tooltip-country-temp">
            {Number(currentWeather?.main.temp_min).toFixed(0)}/{Number(currentWeather?.main.temp_max).toFixed(0)}
            </div>
          </div>
          
        </div>
        
      </div>
    </>
  );
}

export default Widget;

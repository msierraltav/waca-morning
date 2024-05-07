import { CityCords, Country, CurrentWeather } from "../objects";
import { useState, useEffect } from "react";
import axios from "axios";
import "./widget.css";

// interface WidgetProps{
//     data: CountryCords;
//     setCurrentCity : any ;
// }

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
          `?lat=${props.data.lat}&lon=${props.data.lon}&appid=${APIKEY}&lang=es&units=metric&}`
        )
        .then((response) => {
          setCurrentWeather(response.data);
          //console.log(response.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    if (currentWeather && currentWeather!.weather?.length > 0) {
      setCurrentIcon(
        `https://openweathermap.org/img/wn/${currentWeather?.weather[0]?.icon}@2x.png`
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
        <img src={currentIcon}></img>
      </div>
    </>
  );
}

export default Widget;

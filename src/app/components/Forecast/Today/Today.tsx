"use client";
import openMeteoIcons from "@/app/lib/open.meteo/images";
import openMeteoWeatherCodes from "@/app/lib/open.meteo/codes";
import Image, { StaticImageData } from "next/image";
import style from "./Today.module.scss";
import { Tcity, TForecastData } from "@/app/lib/types";

interface TodayProps {
  city: Tcity;
  forecast: TForecastData;
  dayIndex: number;
  
}

const Today = ({ city, forecast, dayIndex }: TodayProps) => {
  //cityName, weatherCode, maxTemp, minTemp
  const icon: StaticImageData =
    openMeteoIcons[forecast.current.weather_code];
  const forecastText: string =
    openMeteoWeatherCodes[forecast.current.weather_code];

  return (
    <div className={style.today}>
      <div className={style.header}>{city.name}</div>
      <div className={style.container}>
        <Image src={icon.src} alt={forecastText} height={50} width={-1} className={style.icon}/>
        <div className={style.temperatures}>
          <span>
            <span>{forecast.current.temperature_2m}</span>
            <span>{forecast.current_units.temperature_2m}</span>
          </span>
          <span>{forecast.daily.temperature_2m_max[dayIndex]}</span>
          <span>{forecast.daily.temperature_2m_min[dayIndex]}</span>
        </div>
      </div>
      <div className={style.footer}>{forecastText}</div>
    </div>
  );
};

export default Today;

"use client"

import styles from "./Card.module.scss";
import openMeteoIcons from "@/app/lib/open.meteo/images";
import { GetCurrentForecast } from "@/app/customHooks/openMeteo/GetCurrentForecast";
import openMeteoWeatherCodes from "@/app/lib/open.meteo/codes";
import Image from "next/image";
import {AppContext, useAppContext} from "@/app/customHooks/context/AppContext";

interface GetCityInterface {
  countryName: string;
}

export default function Card(props: GetCityInterface) {
  const { countryName } = props;
  const {currentForecast, loading, error} = GetCurrentForecast(countryName);
  const {country, setCountry} = useAppContext();

  const onClickHandler = () => {
    console.log(`Country selected : ${country}`);
    setCountry(countryName);
  }

  return (
    <>
      {error && <div> </div>}

      {loading && <div> Loading... </div>}

      {currentForecast ? (
        <div className={`${styles.card} ${styles[countryName]}`} onClick={onClickHandler}>
          {currentForecast && (
            <>
              <div className={styles.weather_icon}>
                <Image
                  src={openMeteoIcons[currentForecast.current.weather_code].src}
                  alt={openMeteoWeatherCodes[currentForecast.current.weather_code]}
                  width={50}
                  height={50}
                  className={styles.weather_icon_img}
                />
              </div>

              <div className={styles.weather_data}>
                <div>
                  <p>{countryName}</p>
                </div>
                <div>
                  <p>{`${openMeteoWeatherCodes[currentForecast.current.weather_code]}`}</p>
                  <p>
                    {currentForecast.current.temperature_2m}°
                    {currentForecast.current_units.temperature_2m}
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      ) : (
        <>{/* no data */}</>
      )}
    </>
  );
}

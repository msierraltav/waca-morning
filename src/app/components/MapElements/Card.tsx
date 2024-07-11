"use client";

import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import styles from "./Card.module.css";
import locations from "../../lib/locations";
import { fetch, ResponseType } from "@tauri-apps/api/http";
import { CurrentCondition } from "../../lib/types";
import { getWeatherIconUrl } from "../../lib/utils";
import Image from "next/image";

const CURRENT_CONDITIONS_URL =
  "http://dataservice.accuweather.com/currentconditions/v1";

interface GetCityInterface {
  countryName: string;
}

const getCurrentConditions = async (
  locationKey: number | undefined,
  apiKey: string
) => {
  const URL = `${CURRENT_CONDITIONS_URL}/${locationKey}?apikey=${apiKey}&language=es-mx&details=true`;
  const response = await fetch(URL, {
    method: "GET",
    timeout: 15,
    responseType: ResponseType.JSON,
  });

  return response;
};

export default function Card(props: GetCityInterface) {
  const { countryName } = props;
  const [apiKey, setApiKey] = useState<string>("");
  const [currentForecast, setCurrentForecast] = useState<CurrentCondition>();

  const currentCity = locations.find((country) => country.name === countryName)
    ?.cities[0];

  useEffect(() => {
    invoke<string>("get_apikey")
      .then((result) => setApiKey(result))
      .catch(console.error);
  }, []);

  useEffect(() => {
    getCurrentConditions(currentCity?.key, apiKey)
      .then((response) => {
        const current = response?.data as Array<CurrentCondition>;
        setCurrentForecast(current[0]);
      })
      .catch(console.error);
  }, [apiKey, currentCity]);

  console.log(currentForecast);
  //
  return (
    <>
      {currentForecast ? (
        <div className={`${styles.card} ${styles[countryName]}`}>
          {currentForecast && (
            <>
              <div className="container">
                <div className="weather_icon">
                  <Image
                    src={getWeatherIconUrl(currentForecast.WeatherIcon)}
                    alt={currentForecast.WeatherText}
                    width={60}
                    height={30}
                  />
                </div>
                <div className="weather_data">
                  <div>
                    <p>{ countryName }</p>
                  </div>
                  <div>
                    <p>{ currentForecast.WeatherText }</p>
                    <p>
                      { currentForecast.Temperature.Metric.Value }°
                      { currentForecast.Temperature.Metric.Unit }
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      ) : (
        <>
          <p>No Data...</p>
        </>
      )}
    </>
  );
}

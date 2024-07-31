"use client";
import { useEffect, useState } from "react";
import locations from "@/app/lib/locations";
import { fetch, ResponseType } from "@tauri-apps/api/http";
import {TOpenMeteo} from "@/app/lib/open.meteo/types";

const OPEN_METEO_API = "https://api.open-meteo.com/v1/forecast";

export interface ForecastResult {
  currentForecast : TOpenMeteo | undefined;
  loading : boolean;
  error: any;
}

export function GetCurrentForecast(countryName: string): ForecastResult {

  const [currentForecast, setCurrentForecast] = useState<TOpenMeteo>();
  const [url, setUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState(null);
  const URL = `${OPEN_METEO_API}`

  // new we use the tauri fetch to fetch html
  useEffect(() => {
    // first city from de cities list
    const currentCity = locations.find(
      (country) => country.name === countryName
    )?.cities[0];

    if (!currentCity) return;

    const apiResponse = async() => {
      await fetch(URL, {
        method : "GET",
        timeout : 30,
        responseType: ResponseType.JSON,
        query : {
          latitude: currentCity?.latitude?.toString(),
          longitude: currentCity?.longitude?.toString(), 
          current: "temperature_2m,is_day,weather_code", 
          forecast_days: "1",
        }
      })
      .then((response) => {
        if(response.status === 200){
          setCurrentForecast(response.data as TOpenMeteo)
        }
      })
      .catch(error => setError(error))
      .finally(() => setLoading(false));
    };

    apiResponse();
  }, [])

  return { currentForecast, error, loading}
}
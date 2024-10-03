"use client"

import { Tcity, Tlocations, TForecastData } from "@/app/lib/types";
import { fetch } from "@tauri-apps/plugin-http";
import { useEffect, useState } from "react";
import { useAppContext } from "@/app/customHooks/context/useAppContext";
import locations from "@/app/lib/locations";

const OPEN_METEO_API = "https://api.open-meteo.com/v1/forecast";

export interface ForecastResult {
  forecast: TForecastData[] | undefined,
  loading: boolean,
  error: any,
  location: Tlocations | undefined,
}

export function useGetForecast(): ForecastResult {

  const { country } = useAppContext();
  const [forecast, setForecast] = useState<TForecastData[]>();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [location, setLocation] = useState<Tlocations>();

  useEffect(() => {

    const location = locations.find(x => x.country_code === country);
    setLocation(location);

    if (location) {
      const latitudes: string[] = location.cities.map(x => x.latitude.toString());
      const longitudes: string[] = location.cities.map(x => x.longitude.toString());
      const apiResponse = async () => {

        const currentForecastUrl = `${OPEN_METEO_API}?latitude=${latitudes.toString()}&longitude=${longitudes.toString()}&daily=weather_code,temperature_2m_max,temperature_2m_min,wind_speed_10m_max&current=temperature_2m,weather_code&forecast_days=6&past_days=0&timezone=auto`;

        await fetch(currentForecastUrl)
          .then(response => {
            if(response.status == 200){
              const getJsonData = async () => {
                await response.json()
                .then(data => {
                  setForecast(data);
                })
                .catch(error => setError(error))
                .finally( () => setLoading(false));
              }
              getJsonData();
            }else{
              console.error("Error fetching remote resource", response);
            }
          })
          .catch(error => setError(error))
          .finally(() => setLoading(false))
      };
      apiResponse();
    }

  }, [country])

  return { forecast, error, loading, location };

};
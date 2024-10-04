"use client";
import { useEffect, useState } from "react";
import locations from "@/app/lib/locations";
import { fetch } from "@tauri-apps/plugin-http";
import { TOpenMeteo } from "@/app/lib/open.meteo/types";

const OPEN_METEO_API = "https://api.open-meteo.com/v1/forecast";

export interface CurrentForecastResult {
  currentForecast: TOpenMeteo | undefined;
  loading: boolean;
  error: any;
}

export function useGetCurrentForecast(countryCode: string): CurrentForecastResult {

  const [currentForecast, setCurrentForecast] = useState<TOpenMeteo>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState(null);
  const URL = `${OPEN_METEO_API}`

  // new we use the tauri fetch to fetch html
  useEffect(() => {
    // first city from de cities list
    const currentCity = locations.find(
      (country) => country.country_code === countryCode
    )?.cities[0];

    if (!currentCity) return;

    const apiResponse = async () => {

      const currentForecastUrl = `${URL}?latitude=${currentCity?.latitude?.toString()}&longitude=${currentCity?.longitude?.toString()}&current=temperature_2m,is_day,weather_code&forecast_days=1`

      await fetch(currentForecastUrl)
        .then(response => {
          if (response.status == 200) {
            const getJsonData = async () => {
              await response.json()
                .then((data) => {
                  setCurrentForecast(data);
                })
                .catch(error => setError(error))
                .finally(() => setLoading(false));
            }
            getJsonData();
          }else{
            console.error("Error fetching remote resource", response);
          }
        })
        .catch(error => setError(error))
        .finally(() => setLoading(false));
    };

    apiResponse();
  }, [])

  return { currentForecast, error, loading }
}
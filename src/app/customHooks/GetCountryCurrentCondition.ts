'use client';
import { useState, useEffect } from "react";
import { CurrentCondition } from "../lib/types";
import { fetch, ResponseType } from "@tauri-apps/api/http"
import locations from "@/app/lib/locations";
import { invoke } from "@tauri-apps/api/tauri";

export interface UseFetchObject {
  currentForecast : any,
  loading : boolean,
  error : any
}


export function GetCountryCurrentCondition(countryName : string): UseFetchObject {
  const [currentForecast, setCurrentForecast] = useState<CurrentCondition>();
  const [url, setUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState(null);

  
const CURRENT_CONDITIONS_URL =
"http://dataservice.accuweather.com/currentconditions/v1";

  // se supone que podemos hacer esto en js, pero esto es tauri
  // useEffect( () => {
  //     fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => setData(data))
  //     .catch((error) => console.error(error))
  //     .finally(() => setLoading(false));
  // }, [url])

  useEffect(() => {
    const currentCity = locations.find(
      (country) => country.name === countryName
    )?.cities[0];

    // first get the api key from the backedn and with that info create the url.
    invoke<string>("get_apikey")
      .then((apiKey) => {
        const URL = `${CURRENT_CONDITIONS_URL}/${currentCity?.key}?apikey=${apiKey}&language=es-mx&details=false`;
        setUrl(URL);
      })
      .catch(console.error);
  }, [countryName]);

    // then we use the tauri api to fetch html
  useEffect(() => {
    const apiResponse = async () => {
      await fetch(url, {
        method: "GET",
        timeout: 30,
        responseType: ResponseType.JSON,
      })
        .then((response) => {
          if(response.status === 200){
            const currentCondition : CurrentCondition = (response.data as CurrentCondition[])[0];
            setCurrentForecast(currentCondition);
          }
        })
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    };
    apiResponse();
  }, [url]);

  return {currentForecast, loading, error};
}
"use client";
import Header from "./Header/Header";
import style from "./Forecast.module.scss";
import { useGetForecast } from "@/app/customHooks/openMeteo/useGetForecast";
import CityForecast from "./CityForecast/CityForecast";

export const Forecast = (): JSX.Element => {
  const { forecast, loading, error, location } = useGetForecast();
  // todo , create a slider between the cities.

  return (
    <>
      {error && <div></div>}
      {loading && <div>🕑</div>}
      {location && forecast ? (
        <div className={style.forecast}>
          <Header location={location} todayTime={forecast[0].current.time} />
          {
            location.cities.map((_, index) => (
              <CityForecast 
                city={location.cities[index]} 
                forecast={forecast[index]}
                key={`city_forecast_${index}`}
              />
            ) )
          }
        </div>
      ) : (
        <div>Country not found.</div>
      )}
    </>
  );
};

"use client";
import Header from "./Header/Header";
import style from "./Forecast.module.scss";
import Today from "./Today/Today";
import { useAppContext } from "@/app/customHooks/context/AppContext";
import locations from "@/app/lib/locations";
import { GetForecast } from "@/app/customHooks/openMeteo/GetForecast";
import { useEffect, useState } from "react";
import { TForecastData, Tlocations } from "@/app/lib/types";
import Day from "./Day/Day";

export const Forecast = (): JSX.Element => {
  const { forecast, loading, error, location } = GetForecast();
  // todo , create a slider between the cities.

  if (error) {
    console.error(error);
  }

  return (
    <>
      {error && <div></div>}
      {loading && <div>🕑</div>}
      {location && forecast ? (
        <div className={style.forecast}>
          <Header location={location} todayTime={forecast[0].daily.time[0]} />
          <div className={style.city_forecast}>
            <Today
              city={location.cities[0]}
              forecast={forecast[0]}
              dayIndex={0}
            />
            <div className={style.capitalForecast}>
              {forecast[0].daily.time.slice(1).map((_, index) => (
                // generate the daily forecast for each day
                // but no include the first element , that is today.
                <Day
                  forecast={forecast[0]}
                  dayIndex={index + 1}
                  key={`day_forecast_${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div>Country not found.</div>
      )}
    </>
  );
};

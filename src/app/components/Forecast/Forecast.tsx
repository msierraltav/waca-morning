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
import CityForecast from "./CityForecast/CityForecast";

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
          {
            location.cities.map((_, index) => (
              <CityForecast city={location.cities[index]} forecast={forecast[index]} />
            ) )
          }
        </div>
      ) : (
        <div>Country not found.</div>
      )}
    </>
  );
};

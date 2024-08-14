"use client";
import Header from "./Header/Header";
import style from "./Forecast.module.scss";
import Today from "./Today/Today";
import { useAppContext } from "@/app/customHooks/context/AppContext";

export const Forecast = (): JSX.Element => {
  const { country } = useAppContext();

  return (
    <div className={style.forecast}>
      <Header cityName={country} cityDate="2024-08-14T02:00" />
      <div className={style.city_forecast}>
        <Today />
      </div>
    </div>
  );
};

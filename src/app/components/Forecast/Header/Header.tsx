"use client"
// the widget header component, it have a country flag, a city name and the current date of the information
import styles from "./Header.module.scss";
import { GetFlag } from "@/app/customHooks/flagsApi/GetFlag";
import Image from "next/image";
import {TForecastData, Tlocations} from "@/app/lib/types";

// here we goint to control the list of cities.

interface HeaderProps {
  location : Tlocations,
  todayTime : string | undefined,
}

const Header = ({location, todayTime} : HeaderProps) => {

  const flagURL = GetFlag(location.country_code);

  return (
    <div className={styles.header}>
      <div className={styles.arrows}>⬅️</div>
      <div className={styles.header_content}>
        <div>
          <Image src={flagURL} alt="flag" width="32" height="32"/>
          <span>{location.name}</span>
        </div>
        <div>
          <div>📅</div>
          <span>{todayTime}</span>
        </div>
      </div>
      <div className={styles.arrows}>➡️</div>
    </div>
  );
};

export default Header;

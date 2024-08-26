// the widget header component, it have a country flag, a city name and the current date of the information
import styles from "./Header.module.scss";
import { useGetFlag } from "@/app/customHooks/flagsApi/useGetFlag";
import Image from "next/image";
import {Tlocations} from "@/app/lib/types";
import dayjs from "dayjs";
import locale_es from "dayjs/locale/es";

// here we goint to control the list of cities.

interface HeaderProps {
  location : Tlocations,
  todayTime : string | undefined,
}

const Header = ({location, todayTime} : HeaderProps) => {

  const flagURL = useGetFlag(location.country_code);
  const day = dayjs(todayTime, "YYYY-MM-DD").locale(locale_es);

  return (
    <div className={styles.header}>
      <div className={styles.arrows}>⬅️</div>
      <div className={styles.header_content}>
        <div>
          <Image src={flagURL} alt="flag" width="32" height="32"/>
          <span>{location.name}</span>
        </div>
        <div>
          <span>🗓️</span>
          <span>{day.format("ddd DD MMMM")}</span>
        </div>
      </div>
      <div className={styles.arrows}>➡️</div>
    </div>
  );
};

export default Header;

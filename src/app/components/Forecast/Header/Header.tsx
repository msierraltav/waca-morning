// the widget header component, it have a country flag, a city name and the current date of the information
import styles from "./Header.module.scss";
import { GetFlag } from "@/app/customHooks/flagsApi/GetFlag";
import Image from "next/image";

// add here two icons to control the city
// needs to show the local our of the forecast\

interface HeaderProps {
  cityName: string,
  cityDate: string,

}

const Header = ({cityName, cityDate} : HeaderProps) => {

  const flagURL = GetFlag("CL");
  console.log(flagURL);


  return (
    <div className={styles.header}>
      <div className={styles.arrows}>⬅️</div>
      <div className={styles.header_content}>
        <div>
          <Image src={flagURL} alt="flag" width="32" height="32"/>
          <span>{cityName}</span>
        </div>
        <div>
          <div>📅</div>
          <span>{cityDate}</span>
        </div>
      </div>
      <div className={styles.arrows}>➡️</div>
    </div>
  );
};

export default Header;

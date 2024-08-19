"use client"
import Image from "next/image";
import styles from "./page.module.scss";
import Card from "./components/MapElements/Card";
import map from "../../public/assets/guacamolito_map.svg";
import { Forecast } from "./components/Forecast";
import { useAppContext } from "./customHooks/context/AppContext";

export default function Home() {

  const {countryList} = useAppContext();

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.mapContainer}>
          <Image 
            className={styles.mapImage} 
            src={map} 
            alt="aguacate-world"
            height={900}
           />
          <div className={styles.cardsContainer}>
            {
              countryList.map((country) =>
                <Card key={country} countryCode={country} />
              )
            }
          </div>
        </div>
        <div className={styles.infoContainer}>
          <Forecast />
          <div className={styles.open_meteo}>Forecast provided by open-meteo.com</div>
        </div>
      </div>
    </main>
  );
}

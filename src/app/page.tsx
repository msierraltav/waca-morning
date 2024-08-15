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
          <Image className={styles.mapImage} src={map} alt="aguacate-world" />
          <div className={styles.cardsContainer}>
            {
              countryList.map((country) =>
                <Card key={country} countryName={country} />
              )
            }
          </div>
        </div>
        <div className={styles.infoContainer}>
          <Forecast />
        </div>
      </div>
    </main>
  );
}

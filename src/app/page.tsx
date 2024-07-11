"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Card from "./components/MapElements/Card";
import map from "../../public/assets/guacamolito_map.svg";
import { useState } from "react";

export default function Home() {

  const [currentCountry, SetCurrentCountry] =  useState('Chile');

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.mapContainer}>
          <Image className={styles.mapImage} src={map} alt="aguacate-world" />
          <Card countryName="chile" />
        </div>
        <div className={styles.infoContainer}>
          <p>contenedor de informacion, siempre visible.</p>
        </div>
      </div>
    </main>
  );
}

import Image from "next/image";
import styles from "./page.module.css";
import Greet from "./greet";
import sun from '../../public/assets/guacamolito_map.svg'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.mapContainer}>
          <Image
            className={styles.mapImage}
            src={sun}
            alt="aguacate-world"
          />
          <div className={styles.chile}>chile</div>
          <div className={styles.bolivia}>bolivia</div>
          
        </div>
        <div className={styles.infoContainer}> contenedor de informacion, siempre visible.</div>
      </div>
    </main>
  );
}

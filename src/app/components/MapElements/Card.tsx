import styles from "./Card.module.scss";

import { getWeatherIconUrl } from "../../lib/utils";
import openMeteoIcons from "@/app/lib/open.meteo/images";
import { GetCountryCurrentCondition } from "@/app/customHooks/GetCountryCurrentCondition";
import { GetCurrentForecast } from "@/app/customHooks/openMeteo/GetCurrentForecast";
import openMeteoWeatherCodes from "@/app/lib/open.meteo/codes";
import Image from "next/image";

interface GetCityInterface {
  countryName: string;
}

export default function Card(props: GetCityInterface) {
  const { countryName } = props;
  const {currentForecast, loading, error} = GetCurrentForecast(countryName);

  return (
    <>
      {error && <div> </div>}

      {loading && <div> Loading... </div>}

      {currentForecast ? (
        <div className={`${styles.card} ${styles[countryName]}`}>
          {currentForecast && (
            <>
              <div className={styles.weather_icon}>
                <Image
                  src={openMeteoIcons[currentForecast.current.weather_code].src}
                  alt={openMeteoWeatherCodes[currentForecast.current.weather_code]}
                  width={100}
                  height={100}
                  className={styles.weather_icon_img}
                />
              </div>

              <div className={styles.weather_data}>
                <div>
                  <p>{countryName}</p>
                </div>
                <div>
                  <p>{`Clima actual: ${openMeteoWeatherCodes[currentForecast.current.weather_code]}` }</p>
                  <p>
                    {currentForecast.current.temperature_2m}°
                    {currentForecast.current_units.temperature_2m}
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      ) : (
        <>{/* no data */}</>
      )}
    </>
  );
}

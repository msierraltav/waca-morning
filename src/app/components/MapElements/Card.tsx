import styles from "./Card.module.scss";

import { getWeatherIconUrl } from "../../lib/utils";
import { GetCountryCurrentCondition } from "@/app/customHooks/GetCountryCurrentCondition";
import Image from "next/image";

interface GetCityInterface {
  countryName: string;
}

export default function Card(props: GetCityInterface) {
  const { countryName } = props;

  const {currentForecast, loading, error} = GetCountryCurrentCondition(countryName);

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
                  src={getWeatherIconUrl(currentForecast.WeatherIcon)!}
                  alt={currentForecast.WeatherText}
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
                  <p>{currentForecast.WeatherText}</p>
                  <p>
                    {currentForecast.Temperature.Metric.Value}°
                    {currentForecast.Temperature.Metric.Unit}
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

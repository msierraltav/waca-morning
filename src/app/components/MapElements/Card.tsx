import styles from "./Card.module.scss";
import openMeteoIcons from "@/app/lib/open.meteo/images";
import { GetCurrentForecast } from "@/app/customHooks/openMeteo/GetCurrentForecast";
import openMeteoWeatherCodes from "@/app/lib/open.meteo/codes";
import Image from "next/image";
import {useAppContext} from "@/app/customHooks/context/AppContext";
import locations from "@/app/lib/locations";

interface GetCityInterface {
  countryCode: string;
}

export default function Card(props: GetCityInterface) {
  const { countryCode } = props;
  const { currentForecast, loading, error} = GetCurrentForecast(countryCode);
  const { setCountry} = useAppContext();

  const onClickHandler = () => {
    setCountry(countryCode);
  }

  const country = locations.find(x => x.country_code === countryCode);

  return (
    <>
      {error && <div> </div>}

      {loading && <div> Loading... </div>}

      {currentForecast ? (
        <div className={`${styles.card} ${styles[countryCode]}`} onClick={onClickHandler}>
          {currentForecast && (
            <>
              <div className={styles.weather_icon}>
                <Image
                  src={openMeteoIcons[currentForecast.current.weather_code].src}
                  alt={openMeteoWeatherCodes[currentForecast.current.weather_code]}
                  width={-1}
                  height={80}
                  className={styles.weather_icon_img}
                />
              </div>

              <div className={styles.weather_data}>
                <div>
                  <p>{country?.name}</p>
                </div>
                <div>
                  <p>{`${openMeteoWeatherCodes[currentForecast.current.weather_code]}`}</p>
                  <p>
                    {currentForecast.current.temperature_2m}
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

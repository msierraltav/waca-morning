
import Header from "./Header/Header";
import style from "./Forecast.module.scss";
import Today from "./Today/Today";
import { useAppContext } from "@/app/customHooks/context/AppContext";
import locations from "@/app/lib/locations";
import { GetForecast } from "@/app/customHooks/openMeteo/GetForecast";

export const Forecast = (): JSX.Element => {

  const { country } = useAppContext();
  const location = locations.find( x => x.name === country);
  const {forecast, loading, error} = GetForecast(location);
  console.log("current location", location);
  console.log("forecast ",forecast);
  console.log("forecast error ",error);

  // todo , create a slider between the cities.

  if(error){
    console.error(error);
  }

  return (
    <>
      {error && <div></div> }
      {loading && <div>🕑</div>}
      {location && forecast ? (
              <div className={style.forecast}>
              <Header location={location} todayTime={forecast[0].daily.time[0]}/>
              <div className={style.city_forecast}>
                <Today />
              </div>
            </div>
      ) : (
        <div>Country not found.</div>
      )}
    </>

  );
};

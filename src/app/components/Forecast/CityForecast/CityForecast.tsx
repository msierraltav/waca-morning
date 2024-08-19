import style from "./CityForecast.module.scss";
import Today from "../Today/Today";
import Day from "../Day/Day";
import { Tcity, TForecastData } from "@/app/lib/types";
import Insights from "../Insights/Insights"

interface CityForecastProps {
  city: Tcity;
  forecast: TForecastData;
}

const CityForecast = ({ city, forecast }: CityForecastProps) => {

  return (
    <>
      {city && forecast ? (
        <div className={style.city_forecast}>
          <Today 
          city={city} 
          forecast={forecast} 
          dayIndex={0} />
          <div className={style.capitalForecast}>
            {forecast.daily.time.slice(1).map((_, index) => (
              // generate the daily forecast for each day
              // but no include the first element , that is today.
              <Day
                forecast={forecast}
                dayIndex={index + 1}
                key={`day_forecast_${index + 1}`}
              />
            ))}
          </div>
          <Insights forecast={forecast} />
        </div>
      ) : (
        <div> No Data</div>
      )}
    </>
  );
};

export default CityForecast;

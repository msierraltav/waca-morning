import styles from "./Insights.module.scss";
import { TForecastData } from "@/app/lib/types";

interface InsightsProps {
  forecast: TForecastData;
}

const Insights = ({ forecast }: InsightsProps) => {
  const maxWeekly = Math.max(...forecast.daily.temperature_2m_max);
  const minWeekly = Math.min(...forecast.daily.temperature_2m_min);
  const maxWindSpeed = Math.max(... forecast.daily.wind_speed_10m_max);
  const temperatureSymbol = forecast.daily_units.temperature_2m_max;

  return (
    <>
      <div className={styles.weekly_insights}>
        <span>📅 : </span>
        <span>
          {maxWeekly} {temperatureSymbol}
        </span>
        <span>
          {minWeekly} {temperatureSymbol}
        </span>
        <span>
          🍃{maxWindSpeed} {forecast.daily_units.wind_speed_10m_max}
        </span>
      </div>
    </>
  );
};

export default Insights;

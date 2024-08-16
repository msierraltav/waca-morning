import { TForecastData } from "@/app/lib/types";
import style from "./Day.module.scss";
import Image from "next/image";
import openMeteoIcons from "@/app/lib/open.meteo/images";
import openMeteoWeatherCodes from "@/app/lib/open.meteo/codes";
import moment from "moment";
import { Tooltip } from "@nextui-org/tooltip";

interface DayProps {
  forecast: TForecastData;
  dayIndex: number;
}

const Day = ({ forecast, dayIndex }: DayProps) => {

  const icon = openMeteoIcons[forecast.daily.weather_code[dayIndex]];
  const forecastText: string =
    openMeteoWeatherCodes[forecast.daily.weather_code[dayIndex]];
  const dayName = moment(
    forecast.daily.time[dayIndex],
    "YYYY-MM-DD"
  );
  return (
    <div className={style.day}>
      <Tooltip content={forecastText} className="tooltip">
        <Image src={icon.src} alt={forecastText} width={30} height={-1}/>
      </Tooltip>
      <span>{dayName.format("ddd")}</span>
      <span>{forecast.daily.temperature_2m_max[dayIndex]}</span>
      <span>{forecast.daily.temperature_2m_min[dayIndex]}</span>
    </div>
  );
};

export default Day;

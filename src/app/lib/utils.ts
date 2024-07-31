import { StaticImageData } from "next/image";
import WeatherImages from "./images";

export function getWeatherIconUrl(code : number) : string | undefined {

    return  WeatherImages.find(x => x.id === code)?.icon.src;
}
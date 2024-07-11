import { StaticImageData } from "next/image";
import WeatherImages from "./images";

export function getWeatherIconUrl(code : number) : string {

    let result : string = "";
    result = WeatherImages.find(x => x.id === code)?.icon.src;
    return result;
}
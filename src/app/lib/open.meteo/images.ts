import { StaticImageData } from "next/image";
import sunny from "../../../../public/assets/icons/weather/01-s.png";
import mostlySunny from "../../../../public/assets/icons/weather/02-s.png";
import partlySunny from "../../../../public/assets/icons/weather/03-s.png";
import intermitentClouds from "../../../../public/assets/icons/weather/04-s.png";
import hazySunshine from "../../../../public/assets/icons/weather/05-s.png";
import mostlyCloudy from "../../../../public/assets/icons/weather/06-s.png";
import cloudy from "../../../../public/assets/icons/weather/07-s.png";
import dreary from "../../../../public/assets/icons/weather/08-s.png";
import fog from "../../../../public/assets/icons/weather/11-s.png";
import showers from "../../../../public/assets/icons/weather/12-s.png";
import mostlyCloudyWithShowers from "../../../../public/assets/icons/weather/13-s.png";
import partlySunnyWithShowers from "../../../../public/assets/icons/weather/14-s.png";
import storms from "../../../../public/assets/icons/weather/15-s.png";
import mostlyCloudyWithStorms from "../../../../public/assets/icons/weather/16-s.png";
import partlySunnyWithStorms from "../../../../public/assets/icons/weather/17-s.png"
import rain from "../../../../public/assets/icons/weather/18-s.png";
import flurries from "../../../../public/assets/icons/weather/19-s.png";
import mostlyCloudyWithFlurries from "../../../../public/assets/icons/weather/20-s.png";
import partlySunnyWithFlurries from "../../../../public/assets/icons/weather/21-s.png";
import snow from "../../../../public/assets/icons/weather/22-s.png";
import mostlyCloudyWithSnow from "../../../../public/assets/icons/weather/23-s.png";
import ice from "../../../../public/assets/icons/weather/24-s.png";
import sleet from "../../../../public/assets/icons/weather/25-s.png";
import freezingRain from "../../../../public/assets/icons/weather/26-s.png";
import rainAndSnow from "../../../../public/assets/icons/weather/29-s.png";
import hot from "../../../../public/assets/icons/weather/30-s.png";
import cold from "../../../../public/assets/icons/weather/31-s.png";
import windy from "../../../../public/assets/icons/weather/32-s.png";
import clear from "../../../../public/assets/icons/weather/33-s.png";
import mostlyClear from "../../../../public/assets/icons/weather/34-s.png";
import partlyCloudy from "../../../../public/assets/icons/weather/35-s.png";
import intermitentCloudsNight from "../../../../public/assets/icons/weather/36-s.png";
import hazyMoonlight from "../../../../public/assets/icons/weather/37-s.png";
import mostlyCloudyNight from "../../../../public/assets/icons/weather/38-s.png";
import partlyCloudyWithShowers from "../../../../public/assets/icons/weather/39-s.png";
import mostlyCloudyWithShowersNight from "../../../../public/assets/icons/weather/40-s.png";
import partlyCloudyWithStorms from "../../../../public/assets/icons/weather/41-s.png";
import mostlyCloudyWithStorm from "../../../../public/assets/icons/weather/42-s.png";
import mostlyCloudyWithFlurriesNight from "../../../../public/assets/icons/weather/43-s.png";
import mostlyCloudyWithSnowNight from "../../../../public/assets/icons/weather/44-s.png";

interface TopenMeteoIcons {
    [code: number]: StaticImageData;
  }

const openMeteoIcons: TopenMeteoIcons = {
    0: sunny, // soleado
    1: intermitentClouds, //"Mayormente despejado"
    2: mostlySunny, //"Parcialmente nublado",
    3: mostlyCloudy, //"Overcast ,Nublado que soleado pero hay sol",
    45: fog, //"Niebla",
    48: dreary, //"Niebla y escarcha"
    51: partlySunnyWithShowers, //"Llovizna: Intensidad ligera",
    53: mostlyCloudyWithShowers, // "Llovizna: Intensidad moderada",
    55: showers, //"Llovizna: Intensidad densa",
    56: showers, //"Llovizna congelante: Intensidad ligera",
    57: showers, //"Llovizna congelante: Intensidad densa",
    61: rain, //"Lluvia: Intensidad ligera",
    63: rain, //"Lluvia: Intensidad moderada",
    65: rain, //"Lluvia: Intensidad fuerte",
    66: freezingRain , //"Lluvia congelante: Intensidad ligera",
    67: freezingRain , //"Lluvia congelante: Intensidad fuerte",
    71: snow, //"Nieve: Intensidad ligera",
    73: snow, //"Nieve: Intensidad moderada",
    75: snow, //"Nieve: Intensidad fuerte",
    77: ice, //"Granizo pequeño",
    80: partlyCloudyWithShowers, //"Chubascos de lluvia: Intensidad ligera",
    81: partlyCloudyWithShowers, //"Chubascos de lluvia: Intensidad moderada",
    82: partlyCloudyWithShowers, //"Chubascos de lluvia: Intensidad fuerte",
    85: partlyCloudyWithShowers, //"Chubascos de nieve: Intensidad ligera",
    86: partlyCloudyWithShowers, //"Chubascos de nieve: Intensidad fuerte",
    95: storms, //"Tormenta: Intensidad leve o moderada",
    96: storms , //"Tormenta con granizo leve",
    99: storms , //"Tormenta con granizo fuerte",
  };

  export default openMeteoIcons;
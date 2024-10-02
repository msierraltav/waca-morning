import { StaticImageData } from "next/image";
import sunny from "../../../../public/assets/icons/open-meteo-cute/sun.png";
import cloud from "../../../../public/assets/icons/open-meteo-cute/cloud.png";
import cloudy from "../../../../public/assets/icons/open-meteo-cute/cloudy.png";
import fog from  "../../../../public/assets/icons/open-meteo-cute/fog.png";
import rain from "../../../../public/assets/icons/open-meteo-cute/rain.png";
import rainfall from "../../../../public/assets/icons/open-meteo-cute/rain-fall.png";
import snow from "../../../../public/assets/icons/open-meteo-cute/snow.png";
import storm from "../../../../public/assets/icons/open-meteo-cute/storm.png"

interface TopenMeteoIcons {
    [code: number]: StaticImageData;
  }

const openMeteoIcons: TopenMeteoIcons = {
    0: sunny, // soleado
    1: sunny, //"Mayormente despejado"
    2: cloud, //"Parcialmente nublado",
    3: cloudy, //"Overcast ,Nublado que soleado pero hay sol",
    45: fog, //"Niebla",
    48: fog, //"Niebla y escarcha"
    51: rain, //"Llovizna: Intensidad ligera",
    53: rain, // "Llovizna: Intensidad moderada",
    55: rain, //"Llovizna: Intensidad densa",
    56: rain, //"Llovizna congelante: Intensidad ligera",
    57: rain, //"Llovizna congelante: Intensidad densa",
    61: rainfall, //"Lluvia: Intensidad ligera",
    63: rainfall, //"Lluvia: Intensidad moderada",
    65: rainfall, //"Lluvia: Intensidad fuerte",
    66: snow , //"Lluvia congelante: Intensidad ligera",
    67: snow , //"Lluvia congelante: Intensidad fuerte",
    71: snow, //"Nieve: Intensidad ligera",
    73: snow, //"Nieve: Intensidad moderada",
    75: snow, //"Nieve: Intensidad fuerte",
    77: snow, //"Granizo pequeño",
    80: rain, //"Chubascos de lluvia: Intensidad ligera",
    81: rain, //"Chubascos de lluvia: Intensidad moderada",
    82: rain, //"Chubascos de lluvia: Intensidad fuerte",
    85: rain, //"Chubascos de nieve: Intensidad ligera",
    86: rain, //"Chubascos de nieve: Intensidad fuerte",
    95: storm, //"Tormenta: Intensidad leve o moderada",
    96: storm , //"Tormenta con granizo leve",
    99: storm , //"Tormenta con granizo fuerte",
  };

  export default openMeteoIcons;
/* 
Open meteo weather codes.

0 	Clear sky
1, 2, 3 	Mainly clear, partly cloudy, and overcast
45, 48 	Fog and depositing rime fog
51, 53, 55 	Drizzle: Light, moderate, and dense intensity
56, 57 	Freezing Drizzle: Light and dense intensity
61, 63, 65 	Rain: Slight, moderate and heavy intensity
66, 67 	Freezing Rain: Light and heavy intensity
71, 73, 75 	Snow fall: Slight, moderate, and heavy intensity
77 	Snow grains
80, 81, 82 	Rain showers: Slight, moderate, and violent
85, 86 	Snow showers slight and heavy
95 * 	Thunderstorm: Slight or moderate
96, 99 * 	Thunderstorm with slight and heavy hail
*/

interface TOpenMeteoWeatherCodes {
    [code: number]: string;
  }
  
  const openMeteoWeatherCodes: TOpenMeteoWeatherCodes = {
    0: "Cielo despejado",
    1: "Mayormente despejado",
    2: "Parcialmente nublado",
    3: "Nublado",
    45: "Niebla",
    48: "Niebla y escarcha",
    51: "Llovizna ligera",
    53: "Llovizna moderada",
    55: "Llovizna densa",
    56: "Llovizna congelante ligera",
    57: "Llovizna congelante densa",
    61: "Lluvia ligera",
    63: "Lluvia moderada",
    65: "Lluvia fuerte",
    66: "Lluvia congelante ligera",
    67: "Lluvia congelante fuerte",
    71: "Nieve ligera",
    73: "Nieve moderada",
    75: "Nieve fuerte",
    77: "Granizo pequeño",
    80: "Chubascos ligeros",
    81: "Chubascos moderados",
    82: "Chubascos fuertes",
    85: "Chubascos de nieve ligeras",
    86: "Chubascos de nieve fuertes",
    95: "Tormenta moderada",
    96: "Tormenta con granizo leve",
    99: "Tormenta con granizo fuerte",
  };
  
  export default openMeteoWeatherCodes;
//   // Ejemplo de uso:
//   const codigo = 61; // Código para lluvia ligera
//   console.log(`Clima actual: ${openMeteoWeatherCodes[codigo]}`);
  




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
    51: "Llovizna: Intensidad ligera",
    53: "Llovizna: Intensidad moderada",
    55: "Llovizna: Intensidad densa",
    56: "Llovizna congelante: Intensidad ligera",
    57: "Llovizna congelante: Intensidad densa",
    61: "Lluvia: Intensidad ligera",
    63: "Lluvia: Intensidad moderada",
    65: "Lluvia: Intensidad fuerte",
    66: "Lluvia congelante: Intensidad ligera",
    67: "Lluvia congelante: Intensidad fuerte",
    71: "Nieve: Intensidad ligera",
    73: "Nieve: Intensidad moderada",
    75: "Nieve: Intensidad fuerte",
    77: "Granizo pequeño",
    80: "Chubascos de lluvia: Intensidad ligera",
    81: "Chubascos de lluvia: Intensidad moderada",
    82: "Chubascos de lluvia: Intensidad fuerte",
    85: "Chubascos de nieve: Intensidad ligera",
    86: "Chubascos de nieve: Intensidad fuerte",
    95: "Tormenta: Intensidad leve o moderada",
    96: "Tormenta con granizo leve",
    99: "Tormenta con granizo fuerte",
  };
  
  export default openMeteoWeatherCodes;
//   // Ejemplo de uso:
//   const codigo = 61; // Código para lluvia ligera
//   console.log(`Clima actual: ${openMeteoWeatherCodes[codigo]}`);
  




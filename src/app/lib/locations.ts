type Tlocations = {
  name: string,
  country_code: string,
  cities: Array<Tcity>,
}

type Tcity = {
  name: string,
  key : string | number,
  latitude : number,
  longitude: number,
}

const locations : Tlocations[] = [
  {
    name: "mexico",
    country_code: "MX",
    cities: [
      {
        name: "Ciudad de México",
        key: 242560,
        latitude: 19.42847,
        longitude: -99.12766,
      },
      {
        name: "Monterrey",
        key: 244681,
        latitude: 25.67507,
        longitude: -100.31847,
      },
      {
        name: "Acapulco",
        key: 3567495,
        latitude: 16.11417,
        longitude: -91.51028,
      },
      {
        name: "Cancún",
        key: 235049,
        latitude: 21.17429,
        longitude: -86.84656,
      }
    ],
  },
  {
    name: "españa",
    country_code: "ES",
    cities: [
      {
        name: "Madrid",
        key: 308526,
        latitude: 40.4165,
        longitude: -3.70256,
      },
      {
        name: "Barcelona",
        key: 307297,
        latitude: 41.38879,
        longitude: 2.15899,
      },
      {
        name: "Málaga",
        key: 306732,
        latitude: 36.72016,
        longitude: -4.42034,
      },
      {
        name: "Valencia",
        key: 310683,
        latitude: 39.46975,
        longitude: -0.37739,
      }
    ],
  },
  {
    // uruguay?
    name: "r. Funa-landia",
    country_code: "UY",
    cities: [
      {
        name: "Montevideo",
        key: 349269,
        latitude: -34.90328,
        longitude: -56.18816,
      },
      {
        name: "Artigas",
        key: 347277,
        latitude: -30.4,
        longitude: -56.46667,
      },
      {
        name: "Villa Independencia",
        key: 350550,
        latitude: -33.11651,
        longitude : -58.31067,

      },
      {
        name: "Melo",
        key: 347660,
        latitude: -32.37028,
        longitude: -54.1675,
      }
    ],
  },
  {
    name: "chile",
    country_code: "CL",
    cities: [
      {
        name: "Santiago de Chile",
        key: 60449,
        latitude: -33.45694,
        longitude: -70.64827,
      },
      {
        name: "Valparaiso",
        key: 61328,
        latitude: -33.036,
        longitude: -71.62963,
      },
      {
        name: "arica",
        key: 52496,
        latitude: -18.4746,
        longitude: -70.29792,
      },
      {
        name: "punta Arenas",
        key: 53738,
        latitude : -53.15483,
        longitude : -70.91129,
      }
    ],
  },
  {
    name: "el salvador",
    country_code : "SV",
    cities: [
      {
        name: "San Salvador",
        key: 130669,
        latitude: 13.68935,
        longitude: -89.18718,
      },
      {
        name: "Santa Ana",
        key: 130702,
        latitude: 13.99417,
        longitude: -89.55972,
      },
      {
        name: "San Miguel",
        key: 130626,
        latitude: 13.48333,
        longitude: -88.18333,
      },
      {
        name: "Ahuachapán",
        key: "1-126865_1_AL",
        latitude: 13.92139,
        longitude: -89.845,
      }
    ],
  },
  {
    name: "perú",
    country_code: "PE",
    cities: [
      {
        name: "Lima",
        key: 264120,
        latitude: -12.04318,
        longitude: -77.02824,
      },
      {
        name: "Chiclayo",
        key: 258372,
        latitude: -6.77137,
        longitude: -79.84088,
      },
      {
        name: "Trujillo",
        key: 258353,
        latitude: -8.11599,
        longitude: -79.02998,
      },
      {
        name: "Arequipa",
        key: 256930,
        latitude: -16.39889,
        longitude: -71.535,
      }
    ],
  },
  {
    name: "colombia",
    country_code: "CO",
    cities: [
      {
        name: "Bogotá",
        key:107487,
        latitude: 4.60971,
        longitude: -74.08175,
      },
      {
        name: "Medellin",
        key:107060,
        latitude: 6.25184,
        longitude: -75.56359,
      },
      {
        name: "Cali",
        key:111732,
        latitude: 3.43722,
        longitude: -76.5225,
      },
      {
        name: "Barranquilla",
        key:107123,
        latitude: 10.96854,
        longitude: -74.78132,
      }
    ],
  },
  {
    name: "panamá",
    country_code: "PA",
    cities: [
      {
        name: "Panamá",
        key: 0,
        latitude: 8.9936,
        longitude: -79.51973,
      },
      {
        name: "Bocas del Toro",
        key: 0,
        latitude: 9.34031,
        longitude: -82.24204,
      },
      {
        name: "Los Santos",
        key: 0,
        latitude: 7.93445,
        longitude: -80.41218,
      },
      {
        name: "David",
        key: 0,
        latitude: 8.42729,
        longitude: -82.43085,
      }
    ],
  },
  {
    name: "brazil",
    country_code: "BR",
    cities: [
      {
        name: "Brasilia",
        key: 0,
        latitude : -15.77972,
        longitude: -47.92972,
      },
      {
        name: "Sao Paulo",
        key: 0,
        latitude : -23.5475,
        longitude: -46.63611,
      },
      {
        name: "Rio de Janeiro",
        key: 0,
        latitude : -22.90642,
        longitude: -43.18223,
      },
      {
        name: "Salvador de Bahía",
        key: 0,
        latitude : -12.97111,
        longitude: -38.51083,
      }
    ],
  },
  {
    name: "argentina",
    country_code: "AR",
    cities: [
      {
      name: "Buenos Aires",
      key: 0,
      latitude: -34.61315,
      longitude: -58.37723,
    },
    {
      name: "Tucumán",
      key: 0,
      latitude: -26.82414,
      longitude: -65.2226,
    },
    {
      name: "Mendoza",
      key: 0,
      latitude: -32.89084,
      longitude: -68.82717,
    },
    {
      name: "Ushuaia",
      key: 0,
      latitude: -54.81084,
      longitude: -68.31591,
    },
  ],
  },
  {
    name: "venezuela",
    country_code: "VE",
    cities: [
      {
        name: "Caracas",
        key: 0,
        latitude: 10.48801,
        longitude: -66.87919,
      },
      {
        name: "Maracaibo",
        key: 0,
        latitude: 10.66663,
        longitude: -71.61245,
      },
      {
        name: "Puerto la Cruz",
        key: 0,
        latitude: 10.21382,
        longitude: -64.6328,
      },
      {
        name: "Mérida",
        key: 0,
        latitude: 20.97537,
        longitude: -89.61696,
      },
    ],
  },
  {
    name: "bolivia",
    country_code: "BO",
    cities: [
      {
        name: "La Paz",
        key: 0,
        latitude: -16.5,
        longitude: -68.15,
      },
      {
        name: "Santa Cruz de la Sierra",
        key: 0,
        latitude: -17.78629,
        longitude: -63.18117,
      },
      {
        name: "Potosí",
        key: 0,
        latitude: -19.58361,
        longitude: -65.75306,
      },
      {
        name: "Cobija",
        key: 0,
        latitude: -11.02671,
        longitude: -68.76918,
      },
    ],

  },
  {
    name: "guatemala",
    country_code: "GT", 
    cities: [
      {
        name: "Guatemala",
        key: 0,
        latitude: 15.5,
        longitude: -90.25,
      },
      {
        name: "Flores",
        key: 0,
        latitude: 16.92258,
        longitude: -89.89941,
      },
      {
        name: "Huehuetenango",
        key: 0,
        latitude: 15.31918,
        longitude:-91.47241,
      },
      {
        name: "Chiquimula",
        key: 0,
        latitude: 14.8,
        longitude: -89.54583,
      },
    ],

  },
  {
    name: "costa Rica",
    country_code: "CR",
    cities: [
      {
        name: "San José",
        key: 0,
        latitude: 9.93333,
        longitude: -84.08333,
      },
      {
        name: "Liberia",
        key: 0,
        latitude: 10.63504,
        longitude: -85.43772,
      },
      {
        name: "Limón",
        key: 0,
        latitude: 9.99074,
        longitude: -83.03596,
      },
      {
        name: "Golfito",
        key: 0,
        latitude:  8.60327,
        longitude: -83.11342,
      },
    ],
  },
];

export default locations;
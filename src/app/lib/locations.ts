type Tlocations = {
  name: string,
  cities: Array<Tcity>,
}

type Tcity = {
  name: string,
  key : string | number,
  latitude? : number,
  longitude?: number,
}

const locations : Tlocations[] = [
  {
    name: "mexico",
    cities: [
      {
        name: "Ciudad de Mexico",
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
    cities: [
      {
        name: "Madrid",
        key: 308526,
      },
      {
        name: "Barcelona",
        key: 307297,
      },
      {
        name: "Málaga",
        key: 306732,
      },
      {
        name: "Valencia",
        key: 310683,
      }
    ],
  },
  {
    // uruguay?
    name: "r. Funa-landia",
    cities: [
      {
        name: "Montevideo",
        key: 349269,
      },
      {
        name: "Artigas",
        key: 347277,
      },
      {
        name: "Fray Bentos",
        key: 350550,
      },
      {
        name: "Melo",
        key: 347660,
      }
    ],
  },
  {
    name: "chile",
    cities: [
      {
        name: "santiago",
        key: 60449,
        latitude: -33.45694,
        longitude: -70.64827,
      },
      {
        name: "salparaiso",
        key: 61328,
      },
      {
        name: "arica",
        key: 52496,
      },
      {
        name: "punta Arenas",
        key: 53738,
      }
    ],
  },
  {
    name: "el salvador",
    cities: [
      {
        name: "San Salvador",
        key: 130669,
      },
      {
        name: "Santa Ana",
        key: 130702,
      },
      {
        name: "San Miguel",
        key: 130626,
      },
      {
        name: "Ahuachapán",
        key: "1-126865_1_AL",
      }
    ],
  },
  {
    name: "perú",
    cities: [
      {
        name: "Lima",
        key: 264120,
      },
      {
        name: "Chiclayo",
        key: 258372,
      },
      {
        name: "Trujillo",
        key: 258353,
      },
      {
        name: "Arequipa",
        key: 256930,
      }
    ],
  },
  {
    name: "colombia",
    cities: [
      {
        name: "Bogotá",
        key:107487,
      },
      {
        name: "Medellin",
        key:107060,
      },
      {
        name: "Cali",
        key:111732,
      },
      {
        name: "Barranquilla",
        key:107123,
      }
    ],

  },
  {
    name: "panamá",
    cities: [
      {
        name: "Panamá",
        key: 0,
      },
      {
        name: "",
        key: 0,
      },
      {
        name: "",
        key: 0,
      },
      {
        name: "",
        key: 0,
      }
    ],
  },
  {
    name: "brazil",
    cities: [],

  },
  {
    name: "argentina",
    cities: [],

  },
  {
    name: "venezuela",
    cities: [],

  },
  {
    name: "bolivia",
    cities: [],

  },
  {
    name: "guatemala",
    cities: [],

  },
  {
    name: "costa Rica",
    cities: [],

  },
];

export default locations;
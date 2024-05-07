
export type City = {
    country: string;
    name: string,
}

export type Main = {
    temp: number,
    feels_like : number,
    temp_min : number,
    temp_max : number,
    humidity : number,
}

export type Weather = {
    id: number,
    main: string,
    description : string,
    icon: string,

}

export type List = {
    dt : string,
    main : Main, 
    weather : Array<Weather>
    dt_txt : string,
}

export type Forecast = {
    city: City,
    list: Array<List>,
}

export type CityCords = {
    name: string,
    lat: number,
    lon: number,
    x : number,
    y: number,
}

export type Country = {
    country_name: string,
    current_icon : string,
    currentWeather : CurrentWeather,
    cities : Array<CityCords>,
}

export type CurrentWeather = {
  main: Main,
  name: string,
  timezone: number,
  dt: number,
  weather: Array<Weather>,
  coord: Coord
}

export type Coord = {
    lat : number,
    lon : number,

}

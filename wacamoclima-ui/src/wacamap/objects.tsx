

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

export type CountryCords = {
    name: string,
    lat: number,
    lon: number,
    x : number,
    y: number,
}

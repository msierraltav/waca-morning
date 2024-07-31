
export type Tcurrent  = {
    interval : number, 
    is_day : boolean,
    temperature_2m: number, 
    time : string,
    weather_code: number,
}

export type Tcurrent_units = {
  interval : string,
  is_day : string,
  temperature_2m: string,
  time : string,
  weather_code: string,
}

export type TOpenMeteo = {
    current: Tcurrent,
    current_units : Tcurrent_units,
    elevation: number,
    generationtime_ms : number,
    latitude : number,
    longitude : number,
    timezone : string, 
    timezone_abbreviation : string, 
    utc_offset_seconds : number
}

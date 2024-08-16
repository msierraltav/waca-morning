

export type CurrentCondition = {
  LocalObservationDateTime : Date,
  EpochTime : number,
  WeatherText : string,
  WeatherIcon : number,
  HasPrecipitation : boolean,
  PrecipitationType : string|null,
  IsDayTime : boolean,
  Temperature : Temperature,
  MobileLink : string,
  Link: string,
}

type Temperature = {
  Metric : TempValues,
  Imperial: TempValues,
}

type TempValues = {
  Value: number,
  Unit: string, 
  UnitType: number,
}

// existe un CurrentConditionWith Details

export type Tlocations = {
  name: string,
  country_code: string,
  cities: Array<Tcity>,
}

export type Tcity = {
  name: string,
  key : string | number,
  latitude : number,
  longitude: number,
}

export interface TForecastData {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  daily_units: {
      time: string; // Formato ISO8601
      weather_code: string; // Código WMO
      temperature_2m_max: string; // Formato Temp
      temperature_2m_min: string; // Formato Temp
  };
  daily: {
      time: string[]; // Arreglo de fechas en formato ISO8601
      weather_code: number[]; // Arreglo de códigos WMO
      temperature_2m_max: number[]; // Arreglo de temperaturas en °C
      temperature_2m_min: number[]; // Arreglo de temperaturas en °C
  };
  current: {
    time: string;
    interval: number;
    temperature_2m: number;
    weather_code: number;
  }
  current_units: {
    time : "string";
    interval: "string";
    temperature_2m: "string";
  }
}


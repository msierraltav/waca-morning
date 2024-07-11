

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



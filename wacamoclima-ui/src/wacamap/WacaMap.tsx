import { useState } from "react";
import Widget from "./widget/widget";
import { CityCords, Country, MapState } from "./objects";
import MapInfo from "./map-info/MapInfo";
import locations from "./locations";
import "./index.css";
import { MapContext } from "./MapContext";

const findCountry = (countryName: string) => {
  return locations.find((country) => country.name === countryName);
};

const mexico: CityCords = findCountry("Mexico");
const spain: CityCords = findCountry("España");
const chile: CityCords = findCountry("Chile");
// funalandia
const uruguay: CityCords = findCountry("R. Funa-landia");
const salvador: CityCords = findCountry("El Salvador");
const peru: CityCords = findCountry("Perú");
const colombia: CityCords = findCountry("Colombia");
const panama: CityCords = findCountry("Panamá");
const brazil: CityCords = findCountry("Brazil");
const argentina: CityCords = findCountry("Argentina");
const venezuela: CityCords = findCountry("Venezuela");
const bolivia: CityCords = findCountry("Bolivia");
const guatemala: CityCords = findCountry("Guatemala");
const costarica: CityCords = findCountry("Costa Rica");

function WacaMap() {
  const [currentCountry, setCurrentCountry] = useState<Country | undefined>();

  const defaultState : MapState = {activeCountry: mexico}

  function CurrentCityHandle(country: Country) {
    setCurrentCountry(country);
    //console.log(country);
  }

  return (
    <MapContext.Provider value={defaultState} >
      <div className="container">
        <div className="map-container">
          <div className="widget-container">
            <Widget data={mexico} setCurrentCity={CurrentCityHandle} />
            <Widget data={spain} setCurrentCity={CurrentCityHandle} />
            <Widget data={uruguay} setCurrentCity={CurrentCityHandle} />
            <Widget data={chile} setCurrentCity={CurrentCityHandle} />
            <Widget data={salvador} setCurrentCity={CurrentCityHandle} />
            <Widget data={peru} setCurrentCity={CurrentCityHandle} />
            <Widget data={colombia} setCurrentCity={CurrentCityHandle} />
            <Widget data={panama} setCurrentCity={CurrentCityHandle} />
            <Widget data={brazil} setCurrentCity={CurrentCityHandle} />
            <Widget data={argentina} setCurrentCity={CurrentCityHandle} />
            <Widget data={venezuela} setCurrentCity={CurrentCityHandle} />
            <Widget data={bolivia} setCurrentCity={CurrentCityHandle} />
            <Widget data={guatemala} setCurrentCity={CurrentCityHandle} />
            <Widget data={costarica} setCurrentCity={CurrentCityHandle} />
          </div>
        </div>
        <div className="map-info">
          <MapInfo currentCountry={currentCountry!} />
        </div>
      </div>
    </MapContext.Provider>
  );
}

export default WacaMap;

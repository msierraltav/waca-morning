import { useState } from "react";
import Widget from "./widget/widget";
import { CityCords, Country } from "./objects";
import MapInfo from "./map-info/MapInfo";
import "./index.css";


const mexico: CityCords = {
  name: "Mexico",
  lat: 19.4326296,
  lon: -99.1331785,
  x: 460,
  y: 276,
};

const spain: CityCords = {
  name: "España",
  lat: 40.4165,
  lon: -3.7026,
  x: 190,
  y: 22,
};

// funalandia
const uruguay: CityCords = {
  name: "RadioFuna-landia",
  lat: -34.9058916,
  lon: -56.1913095,
  x: 60,
  y: 132,
};

const chile: CityCords = {
  name: "Chile",
  lat: -33.4377756,
  lon: -70.6504502,
  x: 120,
  y: 537,
};

const salvador: CityCords = {
  name: "El Salvador",
  lat: 13.6989939,
  lon: -89.1914249,
  x: 130,
  y: 380,
};

const peru: CityCords = {
  name: "Perú",
  lat: -12.0621065,
  lon: -77.0365256,
  x: 170,
  y: 152,
};

const colombia: CityCords = {
  name: "Colombia",
  lat: 4.6534649,
  lon: -74.0836453,
  x: 250,
  y: 123,
};

const panama: CityCords = {
  name: "Panamá",
  lat: 8.9714493,
  lon: -79.5341802,
  x: 350,
  y: 98,
};

const brazil: CityCords = {
  name: "Brazil",
  lat: -15.7934036,
  lon: -47.8823172,
  x: 170,
  y: 297,
};

const argentina: CityCords = {
  name: "Argentina",
  lat: -34.6075682,
  lon: -58.4370894,
  x: 280,
  y: 420,
};

const venezuela: CityCords = {
  name: "Venezuela",
  lat: 10.5060934,
  lon: -66.9146008,
  x: 320,
  y: 525,
};

const bolivia: CityCords = {
  name: "Bolivia",
  lat: -19.0477251,
  lon: -65.2594306,
  x: 460,
  y: 454,
};

const guatemala: CityCords = {
  name: "Guatemala",
  lat: 14.6222328,
  lon: -90.5185188,
  x: 330,
  y: 303,
};

const costarica: CityCords = {
  name: "Costa Rica",
  lat: 9.9325427,
  lon: -84.0795782,
  x: 370,
  y: 584,
};


function WacaMap() {

 const [currentCountry, setCurrentCountry] = useState<Country | undefined>();

  function CurrentCityHandle(country: Country){
    setCurrentCountry(country);
    //console.log(country);
  }

  return (
    <div className="container">
      <div className="map-container">
        <div className="widget-container">
          <Widget data={mexico} setCurrentCity={CurrentCityHandle} />
          <Widget data={spain} setCurrentCity={CurrentCityHandle}/>
          <Widget data={uruguay} setCurrentCity={CurrentCityHandle}/>
          <Widget data={chile} setCurrentCity={CurrentCityHandle}/>
          <Widget data={salvador} setCurrentCity={CurrentCityHandle}/>
          <Widget data={peru} setCurrentCity={CurrentCityHandle}/>
          <Widget data={colombia} setCurrentCity={CurrentCityHandle}/>
          <Widget data={panama} setCurrentCity={CurrentCityHandle}/>
          <Widget data={brazil} setCurrentCity={CurrentCityHandle}/>
          <Widget data={argentina} setCurrentCity={CurrentCityHandle}/>
          <Widget data={venezuela} setCurrentCity={CurrentCityHandle}/>
          <Widget data={bolivia} setCurrentCity={CurrentCityHandle}/>
          <Widget data={guatemala} setCurrentCity={CurrentCityHandle}/>
          <Widget data={costarica} setCurrentCity={CurrentCityHandle}/>
        </div>
      </div>
      <div className="map-info">
        <MapInfo currentCountry={currentCountry!} />
      </div>
    </div>
  );
}

export default WacaMap;

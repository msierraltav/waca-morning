import Widget from "./widget/widget";
import {CountryCords} from './objects'
import './index.css'
import MapaAguacate from '/guacamolito_map.svg'

function WacaMap(){

    const mexico : CountryCords = {
        name: 'Mexico',
        lat: 19.4326296,
        lon: -99.1331785,
        x: 632,
        y: 276,
    }

    const spain : CountryCords = {
        name: 'España',
        lat: 12.8682088,
        lon : 124.1418908,
        x: 376,
        y : 22,
    }

    // funalandia
    const uruguay : CountryCords = {
        name: 'RadioFuna-landia',
        lat : -34.9058916,
        lon : -56.1913095,
        x: 237,
        y : 132,

    }

    const chile : CountryCords = {
      name: 'Chile',
      lat : -33.4377756,
      lon: -70.6504502,
      x: 290,
      y : 537,
    }

    const salvador : CountryCords = {
      name: 'El Salvador',
      lat: 13.6989939,
      lon:-89.1914249,
      x:320,
      y:380,
    }

    const peru : CountryCords = {
      name: 'Perú',
      lat: -12.0621065,
      lon: -77.0365256,
      x: 354,
      y: 152,
    }

    const colombia: CountryCords = {
      name: 'Colombia',
      lat: 4.6534649,
      lon: -74.0836453,
      x: 442,
      y: 123,
    }

    const panama: CountryCords = {
      name: 'Panamá',
      lat: 8.9714493,
      lon: -79.5341802,
      x:515,
      y:98,

    }

    const brazil: CountryCords ={
      name: 'Brazil',
      lat:-15.7934036,
      lon: -47.8823172,
      x: 361,
      y:297,
    }

    const argentina : CountryCords = {
      name: 'Argentina',
      lat: -34.6075682,
      lon: -58.4370894,
      x:480,
      y:420,

    }

    const venezuela: CountryCords ={
      name: 'Venezuela',
      lat:10.5060934,
      lon: -66.9146008,
      x:500,
      y:525,
    }

    const bolivia : CountryCords = {
      name: 'Bolivia',
      lat: -19.0477251,
      lon: -65.2594306,
      x:655,
      y:454,
    }

    const guatemala : CountryCords = {
      name: 'Guatemala',
      lat: 14.6222328,
      lon: -90.5185188,
      x:499,
      y:303,
    }

    const costarica : CountryCords ={
      name: 'Costa Rica',
      lat: 9.9325427,
      lon: -84.0795782,
      x: 547,
      y:584,
    }
    
    return(

      <div className="container">
        <div className="map-container">
          <img className="mapa-agucate" src={MapaAguacate} height={'720'} width={'1024'}></img>
            <div className="widget-container">
              <Widget data = {mexico}/>
              <Widget data = {spain} />
              <Widget data = {uruguay} />
              <Widget data={chile}/>
              <Widget data={salvador}/>
              <Widget data={peru} />
              <Widget data={colombia} />
              <Widget data={panama} />
              <Widget data={brazil}/>
              <Widget data={argentina} />
              <Widget data={venezuela} />
              <Widget data={bolivia} />
              <Widget data={guatemala} />
              <Widget data={costarica} />
          </div>
        </div>
      </div>
    )

}

export default WacaMap;
import { CityDetail } from "../objects"
import './CountryInfo.css'


export default function CityForecast(props : {city : CityDetail}){
    // print the city information row

    return(
        <div className="forecast-week-container">
              <div className="city-name" > {props.city.name} </div>
              <div className="week-container-cell" >Martes</div>
              <div className="week-container-cell" >Miercoles</div> 
              <div className="week-container-cell" >Jueves</div>
              <div className="week-container-cell" >Viernes</div>
              <div className="week-container-cell" >Sabado</div>
              <div className="week-container-cell" >Domingo</div>
        </div>
    )
}
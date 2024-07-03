import { Link } from "react-router-dom";
import locations from "../locations";
import { CityCords } from "../objects";
import CityForecast from "./CityForecast";
import './CountryInfo.css'

export default function CountryCityInformation(props: { name: string }) {

    const country : CityCords = locations.find((country) => country.name === props.name);
    
    return (
      <>
        <div className="country-info-container">
          <div className="back-button"> <Link to={"/"}> 👈 </Link></div>
          <div className="country-name"> <p>{country?.name}</p></div>
          <div className="country-info-cities-list">

            <div className="cities-forecast-header">
              <div className="city-name">Country Name</div>
              <div className="week-container-cell">Martes</div>
              <div className="week-container-cell">Miercoles</div>
              <div className="week-container-cell">Jueves</div>
              <div className="week-container-cell">Vierenes</div>
              <div className="week-container-cell">Sabado</div>
              <div className="week-container-cell">Domingo</div>
            </div>

            <div className="cities-forecast" >
              {country?.cities?.map(city => {
                  return(<CityForecast key={city.name} city={city} />)
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
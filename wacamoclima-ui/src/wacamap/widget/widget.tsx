import {CountryCords, Forecast} from '../objects'
import { useState, useEffect } from 'react';
import axios from "axios";
import './index.css'


function Widget( props  : {data :CountryCords}){

    const [forecast, setForecast] = useState<Forecast>();
    const [currentIcon, setCurrentIcon] = useState<string>('');

    const  APIKEY = import.meta.env.VITE_W_API_KEY;
    const url = `http://api.openweathermap.org/data/2.5/forecast`;

    const client = axios.create({
        baseURL: url
    });

    useEffect(()=>{
        try {
            client.get(`?lat=${props.data.lat}&lon=${props.data.lon}&appid=${APIKEY}&lang=es&units=metric&}`)
            .then((response)=>{
                console.log(response.data);
                setForecast(response.data);
            });
        } catch (error) {
            console.log(error);
        }

    }, []);

    useEffect(() => {
        if(forecast?.list != undefined){
            setCurrentIcon(`https://openweathermap.org/img/wn/${forecast?.list[0]?.weather[0]?.icon}@2x.png`);
        }
    }, [forecast]);



    const Tooltip = () => {

        if(forecast?.list != undefined){
            return (
            <span className='tooltiptext'>
              <p>~ {props.data.name} ~</p> 
              <p>{forecast?.list[0]?.weather[0].description}</p>
              <p>temp : {forecast?.list[0]?.main.temp} ºC</p>
              <p>max : {forecast?.list[0]?.main.temp_max} ºC</p>
              <p>min : {forecast?.list[0]?.main.temp_min} ºC</p>
            </span>)
        }
    }


    return(<>
        <div className='tooltip' style={{top:props.data.y, left:props.data.x}}>
          <Tooltip/>
          <img src={currentIcon}></img>
        </div>
    </>)
}

export default Widget;
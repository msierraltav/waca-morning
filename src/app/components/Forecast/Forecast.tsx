import Header from "./Header/Header"
import style from "./Forecast.module.scss"
import Today from "./Today/Today";

export const  Forecast = () : JSX.Element => {
  return (
  <div className={ style.forecast}>
    <Header/>

    <Today /> 


  </div>
  )
};
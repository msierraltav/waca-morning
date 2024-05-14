
import {Weather} from './objects';

// icons codes
// 

// 01d.png 01n.png - clear sky
// 02d.png 02n.png  - few clouds
// 03d.png 03n.png - scattered clouds
// 04 broken clouds
// 09 shower rain
// 10 rain
// 11 thunderstorm
// 13 snow
// 50 mist 

// return the default open weather url img if not exists.

export function toIconURL(weather : Weather){

    if(weather.icon.startsWith('01')) return './assets/icons/sun_yellow1.png';
    else if(weather.icon.startsWith('11')) return './assets/icons/thunder.png';
    else return `https://openweathermap.org/img/wn/${weather.icon}@2x.png` ;

}
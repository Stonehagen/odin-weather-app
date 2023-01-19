import weatherData from './modules/weatherData';

weatherData('Luebeck').then((data) => console.log(data));

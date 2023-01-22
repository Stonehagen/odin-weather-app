/* eslint-disable operator-linebreak */
import fetchData from './fetchData';

const apiKey = '9229c5de8fb6d42d3ad5444e87f13b9e';

const getCoordinates = async (location) => {
  const url =
    'http://api.openweathermap.org/geo/1.0/direct?' +
    `q=${location}&limit=1&appid=${apiKey}`;

  const result = await fetchData(url);
  if (!result[0]) {
    return false;
  }
  const latLon = { lat: result[0].lat, lon: result[0].lon };

  return latLon;
};

export default async (search) => {
  const url = (lat, lon) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    'http://api.openweathermap.org/data/2.5/forecast' +
    `?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

  let latLon = await getCoordinates(search);
  if (!latLon) {
    latLon = {
      lat: 0,
      lon: 0,
    };
  }
  const data = await fetchData(url(latLon.lat, latLon.lon));

  return data;
};

const getDayandTime = (dateTxt) => {
  const weekdays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const date = new Date(dateTxt);
  return [weekdays[date.getDay()], date.getHours()];
};

export const getTemp = (forecast) => {
  const forecastData = {};
  forecast.list.forEach((item) => {
    const [day, hour] = getDayandTime(item.dt_txt);
    if (!forecastData[day]) {
      forecastData[day] = {
        temp: {},
        weather: {},
      };
    }
    forecastData[day].temp[hour] = item.main.temp * 1;
  });
  return forecastData;
};

export const getWeather = (forecast, forecastData) => {
  const forecastDataCopy = { ...forecastData };
  forecast.list.forEach((item) => {
    const [day, hour] = getDayandTime(item.dt_txt);
    forecastDataCopy[day].weather[hour] = item.weather[0].icon;
  });
  return forecastDataCopy;
};

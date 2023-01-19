/* eslint-disable operator-linebreak */
import fetchData from './fetchData';

const apiKey = '9229c5de8fb6d42d3ad5444e87f13b9e';

// here a function for checking if search is legid
const getLocation = (search) => search;

const getCoordinates = async (location) => {
  const url =
    'http://api.openweathermap.org/geo/1.0/direct?' +
    `q=${location}&limit=1&appid=${apiKey}`;

  const result = await fetchData(url);
  const latLon = { lat: result[0].lat, lon: result[0].lon };

  return latLon;
};

export default async (search) => {
  const url = (lat, lon) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    'http://api.openweathermap.org/data/2.5/forecast' +
    `?lat=${lat}&lon=${lon}&appid=${apiKey}`;

  const latLon = await getCoordinates(getLocation(search));
  const data = await fetchData(url(latLon.lat, latLon.lon));

  return data;
};

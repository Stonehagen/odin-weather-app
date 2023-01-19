/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const apiKey = '9229c5de8fb6d42d3ad5444e87f13b9e';
const limit = '1';
const cityName = 'Luebeck';
const stateCode = '';
const countryCode = '';
const search = [cityName, stateCode, countryCode].filter((element) => element);
const searchString = search.join(',');

const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${searchString}&limit=${limit}&appid=${apiKey}`;

const weatherUrl = (lat, lon) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;

const fetchData = async (url) => {
  const response = await fetch(url, { mode: 'cors' });
  const data = await response.json();

  return data;
};

const getCoordinates = async (url) => {
  // save API fetches
  // const result = await fetchData(url);
  // const latLon = { lat: result[0].lat, lon: result[0].lon };
  const latLon = await { lat: 53.86444, lon: 10.684738 };
  return latLon;
};

const getWeather = async (url) => {
  const latLon = await getCoordinates(geoUrl);
  const data = await fetchData(url(latLon.lat, latLon.lon));

  return data;
};

getWeather(weatherUrl).then((res) => {
  console.log(res);
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWlFLGFBQWEsU0FBUyxNQUFNLFNBQVMsT0FBTzs7QUFFN0c7QUFDQTtBQUNBLHlEQUF5RCxJQUFJLE9BQU8sSUFBSSxTQUFTLE9BQU87O0FBRXhGO0FBQ0Esc0NBQXNDLGNBQWM7QUFDcEQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIseUJBQXlCO0FBQ3pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFwaUtleSA9ICc5MjI5YzVkZThmYjZkNDJkM2FkNTQ0NGU4N2YxM2I5ZSc7XG5jb25zdCBsaW1pdCA9ICcxJztcbmNvbnN0IGNpdHlOYW1lID0gJ0x1ZWJlY2snO1xuY29uc3Qgc3RhdGVDb2RlID0gJyc7XG5jb25zdCBjb3VudHJ5Q29kZSA9ICcnO1xuY29uc3Qgc2VhcmNoID0gW2NpdHlOYW1lLCBzdGF0ZUNvZGUsIGNvdW50cnlDb2RlXS5maWx0ZXIoKGVsZW1lbnQpID0+IGVsZW1lbnQpO1xuY29uc3Qgc2VhcmNoU3RyaW5nID0gc2VhcmNoLmpvaW4oJywnKTtcblxuY29uc3QgZ2VvVXJsID0gYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9JHtzZWFyY2hTdHJpbmd9JmxpbWl0PSR7bGltaXR9JmFwcGlkPSR7YXBpS2V5fWA7XG5cbmNvbnN0IHdlYXRoZXJVcmwgPSAobGF0LCBsb24pID0+XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBsaWNpdC1hcnJvdy1saW5lYnJlYWtcbiAgYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P2xhdD0ke2xhdH0mbG9uPSR7bG9ufSZhcHBpZD0ke2FwaUtleX1gO1xuXG5jb25zdCBmZXRjaERhdGEgPSBhc3luYyAodXJsKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICByZXR1cm4gZGF0YTtcbn07XG5cbmNvbnN0IGdldENvb3JkaW5hdGVzID0gYXN5bmMgKHVybCkgPT4ge1xuICAvLyBzYXZlIEFQSSBmZXRjaGVzXG4gIC8vIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoRGF0YSh1cmwpO1xuICAvLyBjb25zdCBsYXRMb24gPSB7IGxhdDogcmVzdWx0WzBdLmxhdCwgbG9uOiByZXN1bHRbMF0ubG9uIH07XG4gIGNvbnN0IGxhdExvbiA9IGF3YWl0IHsgbGF0OiA1My44NjQ0NCwgbG9uOiAxMC42ODQ3MzggfTtcbiAgcmV0dXJuIGxhdExvbjtcbn07XG5cbmNvbnN0IGdldFdlYXRoZXIgPSBhc3luYyAodXJsKSA9PiB7XG4gIGNvbnN0IGxhdExvbiA9IGF3YWl0IGdldENvb3JkaW5hdGVzKGdlb1VybCk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaERhdGEodXJsKGxhdExvbi5sYXQsIGxhdExvbi5sb24pKTtcblxuICByZXR1cm4gZGF0YTtcbn07XG5cbmdldFdlYXRoZXIod2VhdGhlclVybCkudGhlbigocmVzKSA9PiB7XG4gIGNvbnNvbGUubG9nKHJlcyk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
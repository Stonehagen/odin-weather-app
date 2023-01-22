import iconLoader from './iconLoader';

export const loadPage = (container) => {
  const htmlHeader = document.createElement('div');
  htmlHeader.classList.add('header');

  const htmlHeading = document.createElement('h1');
  htmlHeading.innerHTML = '<span>W</span>EATHER <span>A</span>PP';
  htmlHeader.appendChild(htmlHeading);

  const htmlInput = document.createElement('input');
  htmlInput.classList.add('search');
  htmlHeader.appendChild(htmlInput);

  const htmlButton = document.createElement('button');
  htmlButton.innerHTML = 'SEARCH';
  htmlHeader.appendChild(htmlButton);

  const htmlForecast = document.createElement('div');
  htmlForecast.classList.add('forecast');

  container.appendChild(htmlHeader);
  container.appendChild(htmlForecast);
};

const getWeekday = (dateTxt) => {
  const weekdays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const date = new Date(dateTxt);
  return [weekdays[date.getDay()], date.getHours()];
};

const getTemp = (forecast) => {
  const forecastData = {};
  forecast.list.forEach((item) => {
    const [day, hour] = getWeekday(item.dt_txt);
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

const getWeather = (forecast, forecastData) => {
  const forecastDataCopy = { ...forecastData };
  forecast.list.forEach((item) => {
    const [day, hour] = getWeekday(item.dt_txt);
    forecastDataCopy[day].weather[hour] = item.weather[0].icon;
  });
  return forecastDataCopy;
};

const getForecastData = (forecast) => {
  let forecastData = getTemp(forecast);
  forecastData = getWeather(forecast, forecastData);

  return forecastData;
};

const getForecastTable = (forecast) => {
  const forecastData = getForecastData(forecast);

  const htmlList = document.createElement('ul');
  htmlList.classList.add('forecastTable');

  Object.keys(forecastData).forEach((day) => {
    const htmlListitem = document.createElement('li');

    const htmlDay = document.createElement('div');
    htmlDay.classList.add('day');
    htmlDay.innerHTML = day;
    htmlListitem.appendChild(htmlDay);

    const htmlHoursContainer = document.createElement('div');
    htmlHoursContainer.classList.add('houers-container');

    const temps = forecastData[day].temp;
    const weatherIcons = forecastData[day].weather;
    for (let h = 0; h <= 21; h += 3) {
      const htmlhour = document.createElement('div');

      const htmlIcon = document.createElement('div');
      if (weatherIcons[h]) {
        htmlIcon.innerHTML = iconLoader(weatherIcons[h]);
      }
      htmlhour.appendChild(htmlIcon);

      const htmltemp = document.createElement('h4');
      htmltemp.classList.add('temp');
      if (temps[h]) {
        htmltemp.innerHTML = `${Math.round(temps[h])}°`;
      }
      htmlhour.appendChild(htmltemp);

      htmlHoursContainer.appendChild(htmlhour);
    }

    htmlListitem.appendChild(htmlHoursContainer);

    htmlList.appendChild(htmlListitem);
  });

  return htmlList;
};

export const loadForecast = (forecast) => {
  const container = document.querySelector('.forecast');
  container.innerHTML = '';
  const htmlForecastLocation = document.createElement('h2');
  htmlForecastLocation.innerHTML = forecast.city.name;
  container.appendChild(htmlForecastLocation);

  container.appendChild(getForecastTable(forecast));
};

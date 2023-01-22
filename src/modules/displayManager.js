import iconLoader from './iconLoader';

const htmlCreateElement = (htmlElement, htmlClass, htmlInner = '') => {
  const newHtmlElement = document.createElement(htmlElement);
  newHtmlElement.classList.add(htmlClass);
  newHtmlElement.innerHTML = htmlInner;
  return newHtmlElement;
};

export const loadPage = (container) => {
  const htmlHeader = htmlCreateElement('div', 'header');
  const htmlHeading = htmlCreateElement(
    'h1',
    'main-heading',
    '<span>W</span>EATHER <span>A</span>PP',
  );
  htmlHeader.appendChild(htmlHeading);

  const htmlInput = htmlCreateElement('input', 'search');
  htmlHeader.appendChild(htmlInput);

  const htmlButton = htmlCreateElement('button', 'search-btn', 'SEARCH');
  htmlHeader.appendChild(htmlButton);
  container.appendChild(htmlHeader);

  const htmlForecast = htmlCreateElement('div', 'forecast');
  container.appendChild(htmlForecast);
};

const getDayandTime = (dateTxt) => {
  const weekdays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const date = new Date(dateTxt);
  return [weekdays[date.getDay()], date.getHours()];
};

const getTemp = (forecast) => {
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

const getWeather = (forecast, forecastData) => {
  const forecastDataCopy = { ...forecastData };
  forecast.list.forEach((item) => {
    const [day, hour] = getDayandTime(item.dt_txt);
    forecastDataCopy[day].weather[hour] = item.weather[0].icon;
  });
  return forecastDataCopy;
};

const getForecastTable = (forecast) => {
  const forecastData = getWeather(forecast, getTemp(forecast));

  const htmlList = htmlCreateElement('ul', 'forecast-table');

  Object.keys(forecastData).forEach((day) => {
    const htmlListitem = document.createElement('li');

    const htmlDay = htmlCreateElement('div', 'day', day);
    htmlListitem.appendChild(htmlDay);

    const htmlHoursContainer = htmlCreateElement('div', 'houers-container');

    const temps = forecastData[day].temp;
    const weatherIcons = forecastData[day].weather;
    for (let h = 0; h <= 21; h += 3) {
      const htmlhour = htmlCreateElement('div', 'hour');

      const htmlIcon = htmlCreateElement(
        'div',
        'icon',
        weatherIcons[h] ? iconLoader(weatherIcons[h]) : '',
      );
      htmlhour.appendChild(htmlIcon);

      const htmltemp = htmlCreateElement(
        'h4',
        'temp',
        temps[h] ? `${Math.round(temps[h])}°` : '',
      );
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

import iconLoader from './iconLoader';
import { getWeather, getTemp } from './weatherData';

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

const getForecastHours = (forecastData, day) => {
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

  return htmlHoursContainer;
};

const getForecastTable = (forecast) => {
  const forecastData = getWeather(forecast, getTemp(forecast));

  const htmlList = htmlCreateElement('ul', 'forecast-table');

  Object.keys(forecastData).forEach((day) => {
    const htmlListitem = document.createElement('li');

    const htmlDay = htmlCreateElement('div', 'day', day);
    htmlListitem.appendChild(htmlDay);

    const htmlHoursContainer = getForecastHours(forecastData, day);
    htmlListitem.appendChild(htmlHoursContainer);
    htmlList.appendChild(htmlListitem);
  });
  return htmlList;
};

export const loadForecast = (forecast) => {
  const container = document.querySelector('.forecast');
  container.innerHTML = '';
  const htmlForecastLocation = htmlCreateElement(
    'h2',
    'forecast-city',
    forecast.city.name,
  );
  container.appendChild(htmlForecastLocation);
  container.appendChild(getForecastTable(forecast));
};

import image01d from '../icons/01d.svg';
import image01n from '../icons/01n.svg';
import image02d from '../icons/02d.svg';
import image02n from '../icons/02n.svg';
import image03d from '../icons/03d.svg';
import image03n from '../icons/03n.svg';
import image04d from '../icons/04d.svg';
import image04n from '../icons/04n.svg';
import image09d from '../icons/09d.svg';
import image09n from '../icons/09n.svg';
import image10d from '../icons/10d.svg';
import image10n from '../icons/10n.svg';
import image11d from '../icons/11d.svg';
import image11n from '../icons/11n.svg';
import image13d from '../icons/13d.svg';
import image13n from '../icons/13n.svg';
import image50d from '../icons/50d.svg';
import image50n from '../icons/50n.svg';

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

const returnImage = (imageStr) => {
  switch (imageStr) {
    case '01d':
      return image01d;
    case '01n':
      return image01n;
    case '02d':
      return image02d;
    case '02n':
      return image02n;
    case '03d':
      return image03d;
    case '03n':
      return image03n;
    case '04d':
      return image04d;
    case '04n':
      return image04n;
    case '09d':
      return image09d;
    case '09n':
      return image09n;
    case '10d':
      return image10d;
    case '10n':
      return image10n;
    case '11d':
      return image11d;
    case '11n':
      return image11n;
    case '13d':
      return image13d;
    case '13n':
      return image13n;
    case '50d':
      return image50d;
    case '50n':
      return image50n;
    default:
      return image50n;
  }
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
        htmlIcon.innerHTML = returnImage(weatherIcons[h]);
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
  const htmlForecastLocation = document.createElement('h2');
  htmlForecastLocation.innerHTML = forecast.city.name;
  container.appendChild(htmlForecastLocation);

  container.appendChild(getForecastTable(forecast));
};

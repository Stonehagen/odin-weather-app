import weatherData from './weatherData';
import { loadForecast } from './displayManager';

// eslint-disable-next-line import/prefer-default-export
export const searchBtnEL = () => {
  const htmlInput = document.querySelector('input');
  const htmlButton = document.querySelector('button');
  htmlButton.addEventListener('click', () => {
    weatherData(htmlInput.value).then((data) => {
      loadForecast(data);
    });
    htmlInput.value = '';
  });
};

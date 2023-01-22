import weatherData from './weatherData';
import { loadForecast } from './displayManager';

export default () => {
  const htmlInput = document.querySelector('input');
  const htmlButton = document.querySelector('button');
  htmlButton.addEventListener('click', () => {
    if (!htmlInput.value) {
      return;
    }
    weatherData(htmlInput.value).then((data) => {
      loadForecast(data);
    });
    htmlInput.value = '';
  });
};

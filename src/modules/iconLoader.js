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

export default (imageStr) => {
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

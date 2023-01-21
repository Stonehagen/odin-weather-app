import './style.css';
import { searchBtnEL } from './modules/eventListerners';
import { loadPage } from './modules/displayManager';

const htmlContainer = document.querySelector('#content');

loadPage(htmlContainer);
searchBtnEL();

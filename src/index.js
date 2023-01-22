import './style.css';
import eventListerners from './modules/eventListerners';
import { loadPage } from './modules/displayManager';

const htmlContainer = document.querySelector('#content');

loadPage(htmlContainer);
eventListerners();

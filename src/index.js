import './style.css';
import displayList from './modules/display.js';
import displayDish from './modules/displayDish.js';

displayList();

window.addEventListener('DOMContentLoaded', displayDish);
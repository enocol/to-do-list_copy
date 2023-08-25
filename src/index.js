import './styles.css';
import add from './addItem.js';
import updateDisplay from './updateDisplay.js';
import clearAll from './clearAll';

const button = document.querySelector('.add');

button.addEventListener('click', add);

window.onload = updateDisplay;

const clearButton = document.querySelector('.button');
clearButton.addEventListener('click', clearAll);

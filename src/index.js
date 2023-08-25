import './styles.css';
import { add } from './addItem.js';
import { updateDisplay } from './updateDisplay.js';

const button = document.querySelector('.add');

button.addEventListener('click', add);

window.onload = updateDisplay;

import './styles.css';
import { add } from './addItem';
import { updateDisplay } from './updateDisplay';

const button = document.querySelector('.add');

button.addEventListener('click', add);

window.onload = updateDisplay;

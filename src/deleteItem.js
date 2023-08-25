import { updateDisplay } from './updateDisplay.js';
import { updateIndices } from './updateIndices.js';

export const deleteItem = (index) => {
  const data = JSON.parse(localStorage.getItem('data')) || [];
  data.splice(index, 1);
  localStorage.setItem('data', JSON.stringify(data));
  updateDisplay();
  updateIndices();
};

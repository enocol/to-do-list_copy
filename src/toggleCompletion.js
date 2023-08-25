import { updateDisplay } from './updateDisplay.js';

export const toggleCompletion = (index) => {
  const data = JSON.parse(localStorage.getItem('data')) || [];
  data[index].completed = !data[index].completed;
  localStorage.setItem('data', JSON.stringify(data));
  updateDisplay();
};

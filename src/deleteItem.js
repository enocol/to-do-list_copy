import { updateDisplay } from './updateDisplay';
import { updateIndices } from './updateIndices';

export const deleteItem = (index) => {
  const data = JSON.parse(localStorage.getItem('data')) || [];
  data.splice(index, 1);
  localStorage.setItem('data', JSON.stringify(data));
  updateDisplay();
  updateIndices();
};

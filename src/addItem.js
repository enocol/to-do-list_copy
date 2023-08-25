import { addToStorage } from './addToStogage';
import { updateDisplay } from './updateDisplay';

export const add = () => {
  const data = JSON.parse(localStorage.getItem('data')) || [];
  const input = document.querySelector('.input');

  if (input.value === '') {
    alert('please type something');
    return;
  }

  const object = {
    index: data.length + 1,
    description: input.value,
    compelected: false,
  };

  data.push(object);
  addToStorage(data);
  updateDisplay();
  input.value = '';
};

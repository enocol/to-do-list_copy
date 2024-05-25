import addToStorage from './addToStogage.js';
import updateDisplay from './updateDisplay.js';

const add = () => {
  const data = JSON.parse(localStorage.getItem('data')) || [];
  const input = document.querySelector('.input');

  if (input.value === '') {
    alert("please inout some data")
  }

  const object = {
    index: data.length + 1,
    description: input.value,
    completed: false,
  };

  data.push(object);
  addToStorage(data);
  updateDisplay();
  input.value = '';
};

export default add;

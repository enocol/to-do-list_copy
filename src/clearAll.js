import updateDisplay from './updateDisplay';

const clearAll = () => {
  const data = JSON.parse(localStorage.getItem('data')) || [];

  data.forEach((item) => {
    if (item.completed === true) {
      const filtered = data.filter((item) => item.completed !== true);
      localStorage.setItem('data', JSON.stringify(filtered));
      updateDisplay();
    }
  });
};

export default clearAll;

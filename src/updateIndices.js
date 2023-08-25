export const updateIndices = () => {
  const data = JSON.parse(localStorage.getItem('data'));
  data.forEach((todo, index) => {
    todo.index = index + 1;
  });
  localStorage.setItem('data', JSON.stringify(data));
};

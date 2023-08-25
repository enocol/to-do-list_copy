const updateCompleted = (index) => {
  const data = JSON.parse(localStorage.getItem('data')) || [];
  data[index].completed = !data[index].completed;
  localStorage.setItem('data', JSON.stringify(data));
};

export default updateCompleted;

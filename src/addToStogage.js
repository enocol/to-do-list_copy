const addToStorage = (data) => {
  localStorage.setItem('data', JSON.stringify(data));
};

export default addToStorage;

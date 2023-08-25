import { toggleCompletion } from './toggleCompletion';
import { deleteItem } from './deleteItem';
import { addToStorage } from './addToStogage';

export const updateDisplay = () => {
  const data = JSON.parse(localStorage.getItem('data')) || [];
  const listTodo = document.querySelector('.to-do-list');
  listTodo.innerHTML = '';

  data.forEach((todo, index) => {
    const listItem = document.createElement('li');
    const container = document.createElement('div');
    container.className = 'textContainer';
    const iconDiv = document.createElement('div');
    iconDiv.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    iconDiv.addEventListener('click', () => {
      deleteItem(index);
    });

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;
    checkbox.id = `${index}`;
    checkbox.addEventListener('change', () => {
      toggleCompletion(index);
    });

    const inputBox = document.createElement('input');
    inputBox.value = `${todo.description}`;
    inputBox.setAttribute('readOnly', 'true');
    inputBox.className = 'editable';
    inputBox.classList.add('noneEdit');

    inputBox.addEventListener('focus', (event) => {
      const target = event.target;
      target.removeAttribute('readonly');
    });

    inputBox.addEventListener('blur', (event) => {
      const target = event.target;
      target.setAttribute('readonly', true);
      data[index].description = target.value;
      addToStorage(data);
    });

    listItem.append(checkbox, inputBox);
    container.append(listItem, iconDiv);

    listTodo.appendChild(container);
  });
};

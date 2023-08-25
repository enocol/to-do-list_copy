import { toggleCompletion } from './toggleCompletion';
import { deleteItem } from './deleteItem';

export const updateDisplay = () => {
  const data = JSON.parse(localStorage.getItem('data')) || [];
  const listTodo = document.querySelector('.to-do-list');
  listTodo.innerHTML = '';

  console.log('data', data);

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
    checkbox.addEventListener('change', () => {
      toggleCompletion(index);
    });

    const textSpan = document.createElement('span');
    textSpan.textContent = `${todo.index}. ${todo.description}`;

    listItem.append(checkbox, textSpan);
    container.append(listItem, iconDiv);

    listTodo.appendChild(container);
  });
};

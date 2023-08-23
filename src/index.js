import './styles.css';

const toDoList = [
  {
    description: 'Read flexbox',
    completed: false,
    index: 1,
  },
  {
    description: 'Code css grid',
    completed: false,
    index: 2,
  },
  {
    description: 'go to shop',
    completed: false,
    index: 3,
  },
];

function renderTasks(todos) {
  const todo = document.querySelector('.to-do-list');
  const div2 = document.createElement('div');
  div2.className = 'button-container';
  const button = document.createElement('button');

  todos.forEach((task) => {
    const div1 = document.createElement('div');
    const listItem = document.createElement('li');
    const checkbox = document.createElement('input');
    const div3 = document.createElement('div');
    div3.className = 'icon';
    div3.innerHTML = `<i class="fa-solid fa-ellipsis-vertical"></i>`;
    checkbox.type = 'checkbox';
    const div = document.createElement('div');
    button.className = 'button';
    button.innerText = 'Clear all completed';
    div.className = 'task';
    div1.className = 'taskcontainer';

    listItem.textContent = task.description;
    listItem.className = task.completed ? 'completed' : 'incomplete';
    div.append(checkbox, listItem);
    div1.append(div, div3);
    todo.append(div1);
  });
  div2.append(button);
  todo.append(div2);
}

renderTasks(toDoList);

const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();

  if (taskText === '') return;

  // item da lista
  const li = document.createElement('li');
  li.textContent = taskText;

  // container dos botões
  const buttons = document.createElement('div');
  buttons.classList.add('buttons');

  // botão concluir
  const doneBtn = document.createElement('button');
  doneBtn.textContent = '✓';
  doneBtn.classList.add('done-btn');
  doneBtn.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  // botão deletar
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '✗';
  deleteBtn.classList.add('delete-btn');
  deleteBtn.addEventListener('click', () => {
    li.remove();
  });

  // junta tudo
  buttons.appendChild(doneBtn);
  buttons.appendChild(deleteBtn);
  li.appendChild(buttons);
  taskList.appendChild(li);

  taskInput.value = '';
});

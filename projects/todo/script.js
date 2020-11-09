/**
 * 
 * create method to create listitem
 *    -checkbox
 *    -p (contains input from user with task)
 *    -delete button
 * 
 * create + button logic
 *  create alert
 *  create text form/input/button
 * 
 * checkbox logic
 * strikethrough on click
 * 
 */

let tasksArr = [];
const createItem = (taskStr) => {
  let text = document.createTextNode(taskStr);
  let ol = document.getElementById('list');
  let li = document.createElement('li');

  li.appendChild(text);
  li.class = 'taskItem'

  //single click line-through toggle
  li.addEventListener('click', function(){  
    if (li.style.textDecoration === ''){
      li.style.textDecoration = 'line-through';
    } else {
      li.style.textDecoration = '';
    }
  })

  //double click delete
  li.addEventListener('dblclick', function(){
    let taskIdx = tasksArr.indexOf(taskStr);
    tasksArr.splice(taskIdx, 1)
    li.remove()
    saveData(tasksArr)
  })

  ol.appendChild(li)
  return li;
}

const createNewEvent = () => {
  let task = window.prompt('Enter task:');
  let newTask = createItem(task);
  let list = document.querySelector('#list');
  list.appendChild(newTask);
  tasksArr.push(task);

  
  return newTask;
}

const plusButton = () => {
  addBtn = document.querySelector('#add-btn');
  addBtn.addEventListener('click', function(){
    createNewEvent();
    saveData(tasksArr);
  });
}

const saveData = (taskArr) => {
  localStorage.setItem('taskList', JSON.stringify(taskArr));
}

const loadData = () => {
  if (localStorage.getItem('taskList')) {
    savedTasks = JSON.parse(localStorage.getItem('taskList'));
    tasksArr = savedTasks;

    for (let i = 0; i < savedTasks.length; i++) {
      createItem(savedTasks[i]);
    }
  }
}

loadData();
plusButton();

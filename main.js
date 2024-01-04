const todoTitle = document.querySelector('#todoTitle');
const form = document.querySelector('form');
const display = document.querySelector('ol');

let array = [
  {
    id: 1,
    todoTitle: 'laksldk',
    isDone: true,
  },
];

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const todo = {
    id: new Date().getTime(),
    Title: todoTitle.value,
    isDone: false,
  };

  array.push(todo);
  //console.log(array);

  for (let i = 0; i < array.length; i++) {
    const li = document.createElement('li');
    const checkbox = document.createElemen('input');


    checkbox.type = 'checkbox';
    if(array[i].isDone){checkbox}
    checkbox.checked = array[i].isDone;
    li.append(li);
  }
});

// btn.addEventListener('click', function (e){
//     e.preventDefault();
// let array= [];
//     array.forEach(element => {
//     });
// })

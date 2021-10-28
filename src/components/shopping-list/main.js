'use strict';

const input = document.querySelector('.input');
const addBtn = document.querySelector('.addBtn');
const lists = document.querySelector('.lists');
const resetBtn = document.querySelector('.resetBtn');

input.addEventListener('keypress', event => {
    if (event.key === 'Enter') {
        onAdd();
    }
})

addBtn.addEventListener('click', () => {
    onAdd();
});

function onAdd() {
    const text = input.value;
    if (text === '') {
        input.focus();
        return;
    }
    
    const list = createList(text);
    lists.appendChild(list);
    list.scrollIntoView({block: "center"});
    input.value = '';
    input.focus();
};

let id = 0;

function createList(text) {
    const list = document.createElement('li');
    list.setAttribute('class', 'list');
    list.setAttribute('data-id', `${id}`)
    list.innerHTML = `
        <div class="list__item" data-id=${id}>
            <span class="checkBtn">
              ✔
            </span>
            <span class="item" data-value=${id}>${text}</span>
        </div>
        <div class="deleteBtn">
            <i class="far fa-trash-alt" data-key=${id}></i>
        </div>
    `;

    id++;    
    return list;
};




resetBtn.addEventListener('click', () => {
    lists.innerHTML = ``
})

lists.addEventListener('click', event => {
  const key = event.target.dataset.key;
  const value = event.target.dataset.value;
  
  if (key) {
      const toBeDeleted = document.querySelector(`.list[data-id="${key}"]`);
      toBeDeleted.remove();
  }

  if (value) {
      const toBeChecked = document.querySelector(`.list__item[data-id="${value}"]`);
      toBeChecked.style.textDecoration = "line-through";
      toBeChecked.style.color = "green";
  }
}); 
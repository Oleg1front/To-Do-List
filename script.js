const button = document.querySelector('.add-btn');
const input = document.querySelector('.todo-input');
const list = document.querySelector('.todo-list');

button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.className = 'todo-list-item';
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn'
    deleteBtn.innerText = "Delete";
    li.innerText = input.value;
    list.appendChild(li);
    li.appendChild(deleteBtn);
    input.value = " ";

    deleteBtn.addEventListener('click', () => {
        list.removeChild(li);
    });

})



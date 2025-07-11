const todoList = []
const data = document.getElementById('todo-text');
document.getElementsByClassName("task-list-box")[0].style.display = "none";

function addFunction() {
    if (data.value.trim() === '') {
        alert("Please enter a task.");
        return;
    }
    todoList.push(data.value);
    data.value = '';
    console.log(todoList);
    displayList();
    if (data.value.trim() === '') {
        document.getElementById("todo-btn").innerHTML = "Add";
    }
    if (todoList.length > 0) {
        document.getElementsByClassName("task-list-box")[0].style.display = "block";
    }
}

function displayList() {
    const list = document.getElementById("todo-list");
    list.innerHTML = '';
    for (let i = 0; i < todoList.length; i++) {
        list.innerHTML += `
        <li>
          <span>${todoList[i]}</span>
          <div class="btn-group">
            <button class="edit-btn"  type="button" onclick="editList(${i})">Edit</button>
            <button class="delete-btn" onclick="deleteList(${i})" type="button">Delete</button>
          </div>
        </li>
      `;
    }
}

function deleteList(i) {
    todoList.splice(i, 1)
    displayList();
    if (todoList.length === 0) {
        document.getElementsByClassName("task-list-box")[0].style.display = "none";
    }

}

function editList(i) {
    let edit = todoList[i];
    document.getElementById("todo-btn").innerHTML = "Update";
    data.value = edit;
    data.focus();
    todoList.splice(i, 1)

}


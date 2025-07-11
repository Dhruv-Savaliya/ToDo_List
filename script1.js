const input = document.getElementById("todo-text");
const sub = document.getElementById("todo-btn");
const ul = document.querySelector("#todo-list");


const todos = () => {
    let edit = null;

    sub.addEventListener("click", (e) => {
        e.preventDefault();
        if (input.value.trim() === "") {
            alert("Please enter a task");
            return;
        }

        if (sub.innerHTML === "Update" && edit) {
            // Update the existing task
            edit.querySelector("span").textContent = input.value;
            sub.innerHTML = "Add";
            input.value = "";
            edit = null;
        } else {
            // Add new task
            ul.innerHTML += `<li><span>${input.value}</span> <button class="edit-btn" type="button">Edit</button> <button class="delete-btn" type="button">Delete</button></li>`;
            input.value = "";
        }
    });

    ul.addEventListener("click", (e) => {
        debugger;
        if (e.target.classList.contains("delete-btn")) {
            e.target.parentElement.remove();
        } else if (e.target.classList.contains("edit-btn")) {
            edit = e.target.parentElement;
            input.value = edit.querySelector("span").textContent.trim();
            sub.innerHTML = "Update";
            input.focus();
        }
    });
}

todos();






// const input = document.getElementById("todo-text");
// const sub = document.getElementById("todo-btn");
// const ul = document.querySelector("#todo-list");

// const todos = () => {
//   let edit = null;

//   sub.addEventListener("click", (e) => {
//     e.preventDefault();

//     if (input.value.trim() === "") {
//       alert("Please enter a task");
//       return;
//     }

//     if (sub.innerText === "Update" && edit) {
//       edit.querySelector("span").textContent = input.value;
//       sub.innerText = "Add";
//       input.value = "";
//       edit = null;
//     } else {
//       ul.innerHTML += `
//         <li>
//           <span>${input.value}</span>
//           <div class="btn-group">
//             <button class="edit-btn" type="button">Edit</button>
//             <button class="delete-btn" type="button">Delete</button>
//           </div>
//         </li>
//       `;
//       input.value = "";
//     }
//   });

//   ul.addEventListener("click", (e) => {
//     const target = e.target;

//     if (target.classList.contains("delete-btn")) {
//       target.closest("li").remove();
//     } else if (target.classList.contains("edit-btn")) {
//       edit = target.closest("li");
//       input.value = edit.querySelector("span").textContent.trim();
//       sub.innerText = "Update";
//       input.focus();
//     }
//   });
// };

// todos();

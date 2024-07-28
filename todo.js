document.addEventListener("DOMContentLoaded", function() {
    const todoInput = document.getElementById("new-todo");
    const addTodoButton = document.getElementById("add-todo");
    const todoList = document.getElementById("todo-list");

    let todos = JSON.parse(localStorage.getItem("todos")) || [];

    function renderTodos() {
        todoList.innerHTML = "";
        todos.forEach((todo, index) => {
            const li = document.createElement("li");
            li.textContent = todo.text;
            li.className = "flex justify-between items-center mb-2";

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.className = "bg-red-600 text-white p-2 rounded";
            deleteButton.addEventListener("click", () => {
                deleteTodo(index);
            });

            li.appendChild(deleteButton);
            todoList.appendChild(li);
        });
    }

    function addTodo() {
        const text = todoInput.value.trim();
        if (text !== "") {
            todos.push({ text });
            todoInput.value = "";
            saveTodos();
            renderTodos();
        }
    }

    function deleteTodo(index) {
        todos.splice(index, 1);
        saveTodos();
        renderTodos();
    }

    function saveTodos() {
        localStorage.setItem("todos", JSON.stringify(todos));
    }

    addTodoButton.addEventListener("click", addTodo);
    renderTodos();
});

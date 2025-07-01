const hi = document.getElementById("hi");
if (Date.now.getHours < 12) {
  hi.textContent = "Good Morning";
} else if (Date.now.getHours < 16) {
  hi.textContent = "Good Afternoon";
} else {
  hi.textContent = "Good Evening";
}
function updateClock() {
  const now = new Date();
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();
  const ampm = h >= 12 ? "PM" : "AM";
  h = h % 12 || 12;
  document.getElementById("clock").textContent = `${h
    .toString()
    .padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s
    .toString()
    .padStart(2, "0")} ${ampm}`;
}
setInterval(updateClock, 1000);
updateClock();

const todoForm = document.getElementById('todoForm');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');
const filterBtns = document.querySelectorAll('.todo-filter-btn');

let todos = [];
let filter = 'all'; 

todoForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const value = todoInput.value.trim();
    if (!value) return;
    todos.push({ text: value, completed: false });
    todoInput.value = '';
    renderTodos();
});

function renderTodos() {
    todoList.innerHTML = '';
    let filtered = todos;
    if (filter === 'completed') {
        filtered = todos.filter(t => t.completed);
    } else if (filter === 'incompleted') {
        filtered = todos.filter(t => !t.completed);
    }
    filtered.forEach((todo, idx) => {
        const li = document.createElement('li');
        li.className = "flex items-center gap-4 bg-white/90 rounded-lg shadow p-3";
        li.innerHTML = `
            <input type="checkbox" class="form-checkbox h-6 w-6 text-blue-600 rounded-full border-2 border-blue-400 focus:ring-2 focus:ring-blue-400 transition shadow-sm" ${todo.completed ? 'checked' : ''} />
            <span class="flex-1 text-lg font-medium text-blue-900 px-2 ${todo.completed ? 'line-through text-gray-400' : ''}">${todo.text}</span>
            <button type="button" class="px-4 py-2 rounded-lg bg-red-500 text-white font-semibold hover:bg-red-700 transition">Delete</button>
        `;
        const checkbox = li.querySelector('input[type="checkbox"]');
        const span = li.querySelector('span');
        checkbox.addEventListener('change', function () {
            todos[idx].completed = checkbox.checked;
            renderTodos();
        });
        li.querySelector('button').addEventListener('click', function () {
            todos.splice(idx, 1);
            renderTodos();
        });
        todoList.appendChild(li);
    });
}

document.querySelectorAll('.todo-filter-btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        filter = btn.dataset.filter;
        renderTodos();
        document.querySelectorAll('.todo-filter-btn').forEach(b => b.classList.remove('ring', 'ring-blue-400'));
        btn.classList.add('ring', 'ring-blue-400');
    });
});

renderTodos();

const noteForm = document.getElementById("noteForm");
const noteInput = document.getElementById("noteInput");
const noteList = document.getElementById("noteList");

noteForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const value = noteInput.value.trim();
  if (!value) return;
  addNote(value);
  noteInput.value = "";
});

function addNote(text) {
  const note = document.createElement("div");
  note.className =
    "relative bg-green-200 rounded-2xl p-4 min-w-[180px] min-h-[90px] max-w-[220px] break-words shadow-lg flex flex-col justify-between";
  note.innerHTML = `
        <button class="absolute top-2 right-2 w-7 h-7 rounded-full bg-red-500 text-white flex items-center justify-center text-base font-bold shadow hover:bg-red-700 transition-all duration-150 focus:outline-none" title="Delete"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>
</button>
        <div class="whitespace-pre-line text-gray-800 text-base font-medium leading-snug pr-2">${text}</div>
    `;
  note.querySelector("button").addEventListener("click", function () {
    note.remove();
  });
  noteList.appendChild(note);
}

const darkToggle = document.getElementById('darkModeToggle');
darkToggle.addEventListener('click', function() {
    document.documentElement.classList.toggle('dark');
});

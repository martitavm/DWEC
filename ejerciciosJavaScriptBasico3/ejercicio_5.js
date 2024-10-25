function addTask() {
    let input = document.getElementById('newTaskInput');
    let lista = document.getElementById('taskList');

    let tarea = input.value;
    if (tarea != "") {
        let li = document.createElement('li');
        li.textContent = tarea;
        input.value = "";

        let botoncito = document.createElement('button');
        botoncito.classList.add('deleteBtn');
        botoncito.textContent = 'x';
        li.appendChild(botoncito);
        lista.appendChild(li);
        botoncito.onclick = function () {
            li.remove();

        }



    }
}
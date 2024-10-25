function addItem(){
    let input = document.getElementById("newItemInput");
    let botonAgregar = document.getElementById("addItemBtn");
    let lista = document.getElementById("itemsList");

    let tarea = input.value;
    if (tarea != "") {
        let li = document.createElement('li');
        li.textContent = tarea;
        input.value = "";

        let botoncitoEliminar = document.createElement('button');
        botoncitoEliminar.innerHTML = '<i class="material-icons">delete</i>';
        botoncitoEliminar.classList.add('deleteBtn');
        li.appendChild(botoncitoEliminar);
        lista.appendChild(li);
        botoncitoEliminar.onclick = function () {
            li.remove();

        }

        let botoncitoCompletar = document.createElement('button');
        botoncitoCompletar.innerHTML = '<i class="material-icons">check</i>';
        botoncitoCompletar.classList.add('completeBtn');
        li.appendChild(botoncitoCompletar);
        lista.appendChild(li);
        botoncitoCompletar.onclick = function () {
            
            li.classList.add("completed");

        }


    }
}

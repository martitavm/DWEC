let lista_memoria = [];

function agregar() {
    let input = document.getElementById('inputName');
    let lista = document.getElementById('nameList');

    let nombre = input.value;
    
        let li = document.createElement('li');
        li.textContent = nombre;
        input.value = "";

        lista_memoria.push(nombre);

        lista.appendChild(li);

}

function ale(){

    let li = document.getElementsByTagName("li");
    let aleatorio= Math.floor(Math.random() * lista_memoria.length);

    for (let  lii of li){

        lii.classList.remove("selected");
        lii.textContent = lii.innerText.split(" - Se ha elegido: ")[0];
    }

    li[aleatorio].classList.add("selected");
    li[aleatorio].textContent += " - Se ha elegido: " + li[aleatorio].innerText;
}
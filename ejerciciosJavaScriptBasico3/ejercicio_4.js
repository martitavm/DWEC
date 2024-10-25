function toggleBox(){
    let caja = document.getElementById('box');
    let boton = document.getElementById('toggleBtn');

    if(boton.textContent == "Ocultar Caja"){
        boton.innerHTML = "Mostrar Caja";
        caja.style.display = "none";
    }else if(boton.textContent == "Mostrar Caja"){
        caja.style.display = "block";
        boton.innerHTML = "Ocultar Caja";
    }


}
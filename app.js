// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo(){
    // Capturar nuestro "input".
    let inputAmigo = document.getElementById('amigo');
    
    // Capturar el valor escrito en ese "input".
    const amigo = inputAmigo.value;

    if(amigo === ''){
        alert('Por favor, inserte un nombre.');
        return;
    }

    // Guardar amigo en el ARREGLO.
    amigos.push(amigo);

    // Limpiar el input.
    document.querySelector('#amigo').value = '';

    actualizarLista();
}


function actualizarLista(){
    // Capturar la "ul".
    const lista = document.getElementById('listaAmigos');
    
    // Limpiar el valor de "ul", para que este vacio.
    lista.innerHTML = '';

    // Se crea un "for" para recorrer los elementos del arrerglo "lista."
    for(let i=0; i<amigos.length; i++){

        // Crea en memoria un nuevo elemento HTML <li> (un ítem de lista), pero aún no lo muestres en la página.
        const li = document.createElement("li");

        // Se le asigna el contenido a la variable "li".
        li.textContent = amigos[i];
        
        // insertar el <li> en la lista visible.
        lista.appendChild(li);
    }
}
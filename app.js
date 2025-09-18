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

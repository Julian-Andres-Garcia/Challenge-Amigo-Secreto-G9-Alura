// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
 
    let campoAmigo = document.getElementById('amigo');    
    let lista = document.getElementById('listaAmigos');    
    let nombreAmigo = campoAmigo.value.toUpperCase();

    if (nombreAmigo == '') {
        alert('Por favor, inserta un nombre.');
        return; 
    }

    
    if (amigos.includes(nombreAmigo)) {
        alert('Este nombre ya ha sido agregado. Por favor, ingresa un nombre diferente.');
        campoAmigo.value = ''; 
        return;
    }

    
    amigos.push(nombreAmigo);
    
    lista.textContent = amigos.join(', ');

    campoAmigo.value = '';
}

function sortearAmigo() {
    
    if (amigos.length < 2) {
        alert('Debes agregar al menos dos amigos para poder sortear.');
        return; 
    }

    
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);    
    let amigoSecreto = amigos[indiceAleatorio];   
    let resultado = document.getElementById('resultado');
    
    resultado.textContent = 'El amigo secreto es: ' + amigoSecreto;
}


function reiniciar() {
    
    amigos = [];
    
    document.getElementById('listaAmigos').textContent = '';    
    document.getElementById('resultado').textContent = '';    
    document.getElementById('amigo').value = '';
}
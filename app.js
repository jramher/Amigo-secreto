// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
  const nombreAmigo = document.getElementById('amigo').value.trim();

  if (!nombreAmigo) {
    alert('Por favor, inserte un nombre.');
    return;
  }

  amigos.push(nombreAmigo);
  document.getElementById('amigo').value = '';
  actualizarListaAmigos();
}

function actualizarListaAmigos() {
  const listaAmigos = document.getElementById('listaAmigos');
  listaAmigos.innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join('');
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert('No hay amigos para sortear.');
    return;
  }

  const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
  document.getElementById('resultado').innerHTML = `<li>El amigo secreto es: ${amigoSorteado}</li>`;
}
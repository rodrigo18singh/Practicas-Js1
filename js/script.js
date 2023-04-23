// Se debe crear un sistema que permita al usuario cargar los datos de sus amigos.
// Constara de una sola pantalla donde aparecerá la lista de amigos que  el usuario va ingresando en un formulario. Los datos que necesito de cada amigo son: nombre y foto (url)
// Cada card de amigo debería tener un botón para borrarlo de mis amigos si me peleo.
// Debería tener un botón que permitiera borrar todos los amigos

const $formulario = document.getElementById("formulario");
const $inputNombre = document.getElementById("nombre");
const $inputImagen = document.getElementById("imagen");
const $contenedorTarjetas = document.getElementById("contenedor-tarjetas");

let amigos = [];

const amigosEnElLocalStorage = localStorage.getItem("amigos") // obtenemos el JSON del almacenamiento local del navegador.
const amigosConvertidosJS = JSON.parse(amigosEnElLocalStorage) // transformamos el JSON a Javascript



if(amigosConvertidosJS !== null){ // si el navegador tiene los amigos? entonces
  
  amigos = amigosConvertidosJS  // la variable amigos va a ser igual a lo que tiene guardado mi navegador
}


const crearId = () => Math.random().toString(36).substring(2, 18);

$formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const nuevoAmigo = {
    id: crearId(),
    nombre: $inputNombre.value,
    foto: $inputImagen.value,
  };

  amigos.push(nuevoAmigo);  // 1 -  los amigos con el nuevo agregado

  const amigosEnFormatoJSON = JSON.stringify(amigos) // 2 - transformamos de JAVASCRIPT a JSON (todo a string)

  window.localStorage.setItem("amigos", amigosEnFormatoJSON); // 3 - Estamos guardando en el almacenamiento del navegador los amigos en formato JSON.

  pintarAmigos(); // 4 - Pintamos los amigos en el DOM

  $formulario.reset()
});

const pintarAmigos = () => {
  $contenedorTarjetas.innerHTML = "";
  amigos.forEach((amigo) => {
    const estructuraCard = `
        <div class="card" style="width: 10rem;height: fit-content">
          <img src="${amigo.foto}" class="card-img-top" alt="...">
          <div class="card-body px-2">
            <h5 class="card-title" style="white-space:nowrap;text-overflow:ellipsis;overflow:hidden;">${amigo.nombre}</h5>
            <a href="#" class="btn btn-danger">borrar</a>
          </div>
        </div>
      `;

    $contenedorTarjetas.innerHTML += estructuraCard;
  });
};

pintarAmigos()
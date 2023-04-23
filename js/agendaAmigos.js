const $inputCorreo = document.getElementById("correo");
const $inputNombre = document.getElementById("nombre");
const $inputFoto = document.getElementById("imagenUrl");
const $botonEnviar = document.getElementById("botonEnviar");
const $formulario = document.getElementById("formulario");
const $inputId = document.getElementById("idTarjeta");
const $imgMuestra = document.querySelector("#imagen-muestra");
const $botonBorrar = document.querySelector("#botonEliminarTodos");
const $botonCancelar = document.querySelector(".cancelar");
const $contenedorMuestra = document.querySelector("#contenedor-img-muestra");


const $tituloFormulario = document.getElementById("tituloFormulario");

const $campoAmigos = document.getElementById("campoAmigos");


let amigos = [];

const amigosLocalStorege = localStorage.getItem("amigos");
const amigosLocalStoregeAJs = JSON.parse(amigosLocalStorege);

if( amigosLocalStorege !== null){
    amigos = amigosLocalStoregeAJs;
}



$inputFoto.addEventListener("input",function(){
    $contenedorMuestra.classList.remove("d-none");
    if($inputFoto.value==""){
        $imgMuestra.src = "/img/pngwing.com.png";
        $imgMuestra.classList.remove("img-thumbnail","bg-secondary");
    }else{
        $imgMuestra.src = $inputFoto.value;
        $imgMuestra.classList.add("img-thumbnail","bg-secondary");
    }

});

$imgMuestra.addEventListener("error",function(){
    $contenedorMuestra.classList.remove("d-none")
    $imgMuestra.classList.remove("img-thumbnail","bg-secondary");
    $imgMuestra.src ="/img/pngwing.com.png";
});

$formulario.addEventListener("submit", function(e){
    
    e.preventDefault();

    if($inputId.value !== ""){
        
        amigos = amigos.map( (amigo) =>{
            if(amigo.id == $inputId.value){
                    const amigoMapeado = {
                        id: amigo.id,
                        imagen: $inputFoto.value,
                        nombre: $inputNombre.value,
                        correo: $inputCorreo.value,
                    };
                    return amigoMapeado;
            }
            return amigo;
        });

        persistirDatos(amigos);

        cargarTarjetas();
        $formulario.reset();

        $tituloFormulario.textContent = "Formulario";
        $botonEnviar.value = "Enviar";
        $botonEnviar.classList.add("btn-dark");
        $botonEnviar.classList.remove("btn-light");
        $contenedorMuestra.classList.add("d-none");
        $botonCancelar.classList.add("d-none");




    }else{

    function generarID() {
        var caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var longitud = 6;
        var id = "";
        
        for (var i = 0; i < longitud; i++) {
          id += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
        }
        
        return id;
      }

    const amigoIngresado= {
        id: generarID(),
        imagen: $inputFoto.value,
        nombre: $inputNombre.value,
        correo: $inputCorreo.value,
    }

    amigos.push(amigoIngresado);
    
    persistirDatos(amigos);

    cargarTarjetas();

   
    
}

$contenedorMuestra.classList.add("d-none");
$formulario.reset();
});

const cargarTarjetas = ()=>{
    $campoAmigos.innerHTML = "";

    amigos.forEach((amigo) =>{
        const tarjeta = `
        <div class="card shadow-sm" style="width: 12rem; height: 20rem; background-color: rgba(0,0,0,0.6)">
        <img class="overflow-hidden rounded p-1" src="${amigo.imagen}">
        <div class="card-body py-1 d-flex align-items-center">
            <h5 class="card-title pb-1 text-white fw-light" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${amigo.nombre}</h5>
        </div >
        <ul class="list-group list-group-flush bg-transparent " >
            <li class="list-group-item py-1 bg-transparent" >
                <p class="text-primary mb-1 fw-bolder user-select-all" style="white-space: nowrap;overflow: hidden; text-overflow: ellipsis; cursor: pointer;">${amigo.correo}</p>
            </li>
        </ul>
        <div class="card-body text-center py-1 d-flex align-items-center justify-content-center">
            <button onclick="eliminarAmigoId('${amigo.id}')" class="btn btn-dark px-2 py-1 me-1">Eliminar</button>
            <button onclick="editarAmigoId('${amigo.id}')" class="btn btn-dark px-2 py-1">Editar</button>
        </div>
        </div>
        `;

        $campoAmigos.innerHTML += tarjeta;
    });

};

const persistirDatos = (amigosInf) =>{
    const amigosFormatoJSON = JSON.stringify(amigosInf);
    localStorage.setItem("amigos", amigosFormatoJSON);
};

const eliminarAmigoId = (id) =>{
    
    amigos = amigos.filter( amigo => amigo.id !== id);
    
    persistirDatos(amigos);

    cargarTarjetas();

};


const borrarTodo = () =>{
    amigos = [];
    localStorage.removeItem("amigos");
    $botonCancelar.classList.add("d-none");
    $contenedorMuestra.classList.add("d-none");

    cargarTarjetas();
};

const editarAmigoId = (id) =>{
    let amigoEncontrado = amigos.find(amigo =>{
        return amigo.id == id;
    });

    $inputNombre.value = amigoEncontrado.nombre;
    $inputCorreo.value = amigoEncontrado.correo;
    $inputFoto.value = amigoEncontrado.imagen;
    $tituloFormulario.textContent = "Editar";
    $botonEnviar.value = "Actualizar";
    $botonEnviar.classList.remove("btn-dark");
    $botonEnviar.classList.add("btn-light");
    $inputId.value = amigoEncontrado.id;
    $imgMuestra.src = `${amigoEncontrado.imagen}`;
    $botonCancelar.classList.remove("d-none");
    $contenedorMuestra.classList.remove("d-none");
    
   

};

$botonCancelar.addEventListener("click",() =>{
    $formulario.reset();
    $botonEnviar.value = "Enviar"
    $botonCancelar.classList.add("d-none");
    $tituloFormulario.textContent = "Formulario";
    $botonEnviar.classList.remove("btn-light");
    $botonEnviar.classList.add("btn-dark");
    $imgMuestra.src = "";
    $contenedorMuestra.classList.add("d-none");
});

$botonBorrar.addEventListener("click", borrarTodo);
  


cargarTarjetas();
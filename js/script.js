/* 1- Crea una web con bootstrp y js, que contenga un botón comenzr el juego,
en ese momento se crea un número aleatorio que el usuario debera
adivina, la interfaz del usuario debe tener además un input para ingrear un número
y un botón enviar, al presionar el  botón enviar mostar en un alert si el usario 
adivino o no le número mágico, si no lo adivino indicarle con un alert si el numero 
que ingreso es mayor o menor al número mágico.
 Cuando el usario adivine el numero mostrar un mensaje indicando al usario que adivino
 el numero.*/

/*const boton = document.getElementById("boton");
const textoCaja = document.getElementById("textocaja");
let numRandom =  Math.floor(Math.random()*100)+1;
let encontrado = false
boton.addEventListener("click", ()=>{
    do {
        let numeroIngresado=parseInt(prompt("Ingresa tu número"));    
        if(isNaN(numeroIngresado)){
            alert("El valor ingresado debe ser un número.");
        }else {
            if( numeroIngresado <0){
                alert("El número tiene que ser positivo.");
            }else {
                if(numeroIngresado < numRandom){
                    alert("El número es mayor. Sigue intentando");
                }else if(numeroIngresado> numRandom) {
                    alert("El número es menor. Sigue intentando.");
                }else{
                    encontrado = true;
                }
            }
        }
    }while (!encontrado && confirm("Desea intentar nuevamente?"));

    if(encontrado){
        alert("Felicidades, el número es el correcto!")
        textoCaja.innerText=numRandom;
        
    }

   
});


/* 2- Crear una clase llamada Persona que siga las siguientes condiciones:
   Sus propiedades son: nombre, DNI, sexo (H hombre, M mujer), peso y altura,
   año de nacimiento. Si quieres añadir algunda propiedad extra puedes hacerlo.

   Los métodos que se debe poder utilizar son:

   mostrarGeneracion: este método debe mostrar un mensaje indicando a qué 
   generación pertenece la persona creada y ual es el rasgo caracteristico de esta
   generación.

   esMayorDeEdad: indica si es maor de edad, devuelve un mensaje indicando que la persona 
   es mayor de edad.

   mostrarDatos: devuelve toda la información del objeto.

   Luego crea la interfaz necesaria par que el usuario pueda crear un onjeto persona, 
   permitiendo ingresar las propiedades mediante un formulario, también 
   agregar los botones "mostrar generación", es "mayor de edad" e indicar en un alert el 
   resultado de la función correspondiente.*/

 /*  class Persona {
        constructor(nombre,edad,DNI, sexo,peso,altura,anioDeNacimiento){
            this._nombre = nombre;
            this._edad = edad;
            this._DNI = DNI;
            this._sexo = sexo;
            this._peso = peso;
            this._altura = altura;
            this._anioDeNacimiento = anioDeNacimiento;
        }

        get getNombre() {
            return this._nombre;
        }
        set setNombre(nuevoNombre){
            this._nombre = nuevoNombre;
        }
        get getEdad() {
            return this._edad;
        }
        set setEdad(nuevaEdad){
            this._edad = nuevaEdad;
        }
        get getDNI() {
            return this._DNI;
        }
        set setDNI(nuevoDNI){
            this._DNI = nuevoDNI;
        }
        get getSexo() {
            return this._nombre;
        }
        set setSexo(nuevoSexo){
            this._sexo = nuevoSexo;
        }
        get getPeso() {
            return this._peso;
        }
        set setPeso(nuevoPeso){
            this._peso = nuevoPeso;
        }
        get getAltura() {
            return this._altura;
        }
        set setAltura(nuevaAltura){
            this._altura = nuevaAltura;
        }
        get getAnioDeNacimiento() {
            return this._anioDeNacimiento;
        }
        set setAnioDeNacimiento(nuevoAnioDeNacimiento){
            this._anioDeNacimiento = nuevoAnioDeNacimiento;
        };
        mostrarGeneracion(){
            let generacion = "";
            if(this.getAnioDeNacimiento>=1930 && this.getAnioDeNacimiento<=1948){
                generacion= "Silent Generation";
            }else if(this.getAnioDeNacimiento>=1949 && this.getAnioDeNacimiento<=1968){
                generacion= "Baby Boom";
            }else if(this.getAnioDeNacimiento>=1969 && this.getAnioDeNacimiento<=1980){
                generacion = "Generación X";
            }else if(this.getAnioDeNacimiento>=1981 && this.getAnioDeNacimiento<=1993){
                generacion = "Generación Y";
            }else if(this.getAnioDeNacimiento>=1994 && this.getAnioDeNacimiento<=2010){
                generacion= "Generación Z";
            }
            let msj
            switch(generacion){
                case "Silent Generation":
                    msj=`${this.getNombre}, pertenece a la Generación: ${generacion} y su rasgo caracteristico es la Austeridad. `;
                    break;
                case "Baby Boom" :
                    msj=`${this.getNombre}, pertenece a la Generación: ${generacion}, y su rasgo caracteristico es la Ambición.`;
                    break;
                case "Generación X":
                    msj=`${this.getNombre}, pertenece a la Generación: ${generacion}, y su rasgo caracteristico es la Obsesión por el éxito.`;
                    break;
                case "Generación Y":
                     msj=`${this.getNombre}, pertenece a la Generación: ${generacion}, y su rasgo caracteristico es la Frustración.`;
                    break;
                case "Generación Z":
                    msj=`${this.getNombre}, pertenece a la Generación: ${generacion}, y su rasgo caracteristico es la Irreverencia.`;
                    break;            
                default:
                    msj= `No pertenece a las generacións registradas en el programa.`          
            }

            alert(msj);
        };

        esMayorDeEdad(){
            if(isNaN(this.getEdad)){
              alert("El valor tiene que ser un número");
            }else if(this.getEdad<0){
                alert("El valor tiene que ser positivo");
            }else if(this.getEdad<18){
                return false;
            }else {
                return true;
            }
        };

        mostrarDatos(){
           
            alert(
                `Nombre: `+this.getNombre + 
                `\nEdad: `+this.getEdad +
                `\nDni: `+this.getDNI+
                `\nSexo: ` + this.getSexo +
                `\nPeso: ` + this.getPeso + " Kg"+
                `\nAltura: ` + this.getAltura + " cm"+
                `\nAño de Nacimiento: ` + this.getAnioDeNacimiento
            );
            
            
            
        };
   };

    document.addEventListener("DOMContentLoaded",function(){
        document.getElementById("formulario").addEventListener("submit", function(event){
            event.preventDefault();

            let nombre = document.getElementById("nombre").value;
            let edad = parseInt(document.getElementById("edad").value);
            let dni = parseInt(document.getElementById("dni").value);
            let sexo = document.querySelector('input.sexo:checked').value;
            let peso = document.getElementById("peso").value;
            let altura = document.getElementById("altura").value;
            let anioDeNacimiento = document.getElementById("anioDeNacimiento").value;

            let persona = new Persona(nombre,edad,dni,sexo,peso,altura,anioDeNacimiento);

            document.getElementById("btnEnviar").addEventListener("click", function(){
                alert(`Perfil de ${persona.getNombre}, fue guardado.`)
                persona.mostrarDatos();
                let form = document.getElementById("formulario");
                form.reset();
             });

            document.getElementById("mayorEdad").addEventListener("click", function(){
                if(persona.esMayorDeEdad()){
                    alert(`${persona.getNombre}, es mayor de edad: ${persona.getEdad}.`);
                }else {
                    alert(`, es menor de edad`)
                }
            });

            let botonGeneracion =document.getElementById("generacion");
            botonGeneracion.addEventListener("click", function(){
                persona.mostrarGeneracion();
            });


        });
    });

*/

/* 3- Crear una web con bootstrap y js, que contenga un botón input donde se pueda cargar
una tarea y un botón que al ser presionado agregue dicha tarea a una lista, cada elemento
ingresado en la lista debe poder ser eliminado con un botón creado para ese fin.*/

// Se puede mejorar mucho el codigo agregando clases para las tarjetas y funciones para la creacion de las tarjetas, como para poder eliminarlas, y una funcion para el modal )

/*document.addEventListener("DOMContentLoaded",function(){

    let tituloNota = document.getElementById("tituloNota");
let contenidoNota = document.getElementById("contenidoNota");
const formulario = document.getElementById("formulario");
const tablero = document.getElementById("tableroNotas");

let botonEnviar = document.getElementById("botonEnviar");

formulario.addEventListener("submit",function(e){
    e.preventDefault();
    const tituLo = tituloNota.value;
    const  contenido = contenidoNota.value;

    console.log(tituLo,contenido);

    if (tituLo!=""){

        const id = "nota_"+ Date.now();

        let tarjetaNota = document.createElement('div');
        tarjetaNota.classList.add("card", "w-25", "bg-warning", "h-25", "m-1", "ms-5");
        tarjetaNota.style.backgroundColor = "white"

        let notaDinamica = document.createElement('div');
        notaDinamica.classList.add("texto-recortado", "text-nowrap",  "card-body");

        let tituloNotaDinamica = document.createElement ('h5');
        tituloNotaDinamica.classList.add("text-dark", "card-title");
        tituloNotaDinamica.textContent = tituLo;

        let contenidoDinamico = document.createElement ('p');
        contenidoDinamico.classList.add("card-text");
        contenidoDinamico.textContent = contenido;

        let verMas = document.createElement('button');
        verMas.classList.add("btn", "btn-primary");
        verMas.textContent = "Ver más";
        verMas.setAttribute("data-bs-toggle", "modal");
        verMas.setAttribute("data-bs-target", `#${id}`);



        tarjetaNota.appendChild(notaDinamica);
        notaDinamica.appendChild(tituloNotaDinamica);
        notaDinamica.appendChild(contenidoDinamico);
        notaDinamica.appendChild(verMas);
        
        tablero.appendChild(tarjetaNota);

        let idTituloModal = "modal_" + Date.now();

        const modalTarjeta = document.createElement('div');
        modalTarjeta.classList.add("modal", "fade");
        modalTarjeta.id = id;
        modalTarjeta.setAttribute("data-bs-backdrop", "static");
        modalTarjeta.setAttribute("data-bs-keyboard", "false");
        modalTarjeta.setAttribute("tabindex", "-1");
        modalTarjeta.setAttribute("aria-labelledby", `${idTituloModal}`);
        modalTarjeta.setAttribute("aria-hidden", "true");

        const modalCuerpo = document.createElement('div');
        modalCuerpo.classList.add("modal-dialog");

        const modalContenido = document.createElement('div');
        modalContenido.classList.add("modal-content");

        const modalHeader = document.createElement('div');
        modalHeader.classList.add("modal-header");

        const tituloModal = document.createElement('h5');
        tituloModal.classList.add("modal-title", "tituloNota");
        tituloModal.id = idTituloModal;
        tituloModal.textContent = tituLo;

        const botonCierreX = document.createElement('button');
        botonCierreX.classList.add("btn-close");
        botonCierreX.setAttribute("type", "button");
        botonCierreX.setAttribute("data-bs-dismiss", "modal");
        botonCierreX.setAttribute("aria-label", "Close");

        const modalBody = document.createElement('div');
        modalBody.classList.add("modal-body");

        const contenidoNotaModal = document.createElement('p');
        contenidoNotaModal.textContent = contenido;
        
        const modalFooter = document.createElement('div');
        modalFooter.classList.add("modal-footer");

        const botonCierreModal = document.createElement('button');
        botonCierreModal.classList.add("btn", "btn-primary");
        botonCierreModal.setAttribute("type", "button");
        botonCierreModal.setAttribute("data-bs-dismiss", "modal");
        botonCierreModal.textContent = "Cerrar";

        

        modalTarjeta.appendChild(modalCuerpo);

        modalCuerpo.appendChild(modalContenido);

        modalContenido.appendChild(modalHeader);
        modalContenido.appendChild(modalBody);
        modalContenido.appendChild(modalFooter);

        modalHeader.appendChild(tituloModal);
        modalHeader.appendChild(botonCierreX);

        modalBody.appendChild(contenidoNotaModal);

        modalFooter.appendChild(botonCierreModal);


        tablero.appendChild(modalTarjeta);









        formulario.reset();
    }
});



})*/


/* 4- Crear una web con un reloj que muestre la siguiente información;

 Jueves 299 de Octubre del 2015

 12:02:58/pm, referencia a la imagen del ejercicio. */

/*function appClock(){
     function reloj () {
        let time = new Date

    let dia = time.getDay();
    let numDia = time.getDate();
    let mes = time.getMonth();
    let anio = time.getFullYear();

    console.log(dia, numDia, mes, anio);
    
    let dia_ = document.getElementById("dia");
    const diaSemana = ["Domingo","Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
    dia_.textContent = diaSemana[dia];
    
    let numDia_ = document.getElementById("numDia");
    numDia_.textContent = numDia;
    
    let mes_= document.getElementById("mes");
    const mesesAnio=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    mes_.textContent = mesesAnio[mes];
    
    let anio_ = document.getElementById("anio");
    anio_.textContent = anio;
    
    
    let horas = time.getHours();
    let minutos = time.getMinutes();
    let segundos = time.getSeconds();

    console.log(horas, minutos, segundos);

    let horas_ = document.getElementById("horas");
    horas_.textContent = horas;

    let minutos_ = document.getElementById("minutos");
    minutos_.textContent = minutos;

    let segundos_ = document.getElementById("segundos");
    segundos_.textContent = segundos;

    let ampm_ = document.getElementById("ampm");

    if(horas >= 12){
        
        ampm_.textContent = "pm";

        horas_.textContent= horas - 12;
        
    } else{
        ampm_.textContent= "am";
        
    }
    
    }


    reloj();
    
    
};

const intervalo = setInterval( appClock, 1000 );*/

/* 5- Realizar una web con un cronómetro, que tenga las opciones de iniciar, reset
(volver el cronómetro a 0) y pausar.*/

/*let hr = min = seg = mlseg = "0" + 0;
let comenzarTiempo;
 

const inicioBtn = document.querySelector(".inicio");
const pararBtn = document.querySelector(".parar");
const reiniciarBtn = document.querySelector(".reiniciar"); 

inicioBtn.addEventListener("click", inicio);
pararBtn.addEventListener("click", parar);
reiniciarBtn.addEventListener("click", reinicio);

function inicio () {

    inicioBtn.classList.add("activo","seleccionado");
    pararBtn.classList.remove("pararActivo","seleccionado");


    comenzarTiempo = setInterval(()=>{
        mlseg++;

        mlseg = mlseg  < 10 ? "0" + mlseg : mlseg;


        if(mlseg == 100){
            seg++;
            seg = seg < 10 ? "0" + seg : seg;

            mlseg = "0" + 0;
        }
        if(seg == 60){
            min++;
            min = min < 10 ? "0" + min : min;
            seg = "0" + 0;
        }

        if( min == 60){
            hr++;
            hr = hr < 10 ? "0" + hr : hr;
            min = "0" + 0;
        }

        cambiarNumeros();
    }, 10);

}

function parar (){
    inicioBtn.classList.remove("activo", "seleccionado");
    pararBtn.classList.remove("pararActivo");
    pararBtn.classList.add("seleccionado");
    clearInterval(comenzarTiempo);
};

function reinicio (){
    inicioBtn.classList.remove("activo","seleccionado");
    pararBtn.classList.remove("pararActivo","seleccionado");
    clearInterval(comenzarTiempo);
    hr = min = seg = mlseg = "0" + 0;
    cambiarNumeros();
};

function cambiarNumeros(){
    document.querySelector(".mlseg").innerText = mlseg;
    document.querySelector(".seg").innerText = seg;
    document.querySelector(".min").innerText = min;
    document.querySelector(".hr").innerText = hr;

};*/

/* 6- Realizar una web con un temporizador donde el usario pueda 
ingresar un tiempo donde comenzará a decrementar el contador. Debe
contener los botones, iniciar, pausar y reset.*/

    let formulario = document.querySelector("#formulario");
    let contadorNum = document.querySelector(".numTemporizador")



    const iniciarBtn1 =document.querySelector(".iniciar1");
    const iniciarBtn2 =document.querySelector(".iniciar2");
    const pararBtn = document.querySelector(".pausar");
    const reiniciarBtn = document.querySelector(".reiniciar");

    let correrTemporizador;

    iniciarBtn1.addEventListener("click",iniciar);
    iniciarBtn2.addEventListener("click",iniciar);
    pararBtn.addEventListener("click",parar);
    reiniciarBtn.addEventListener("click",reiniciar);

    const hrInput = document.querySelector(".hrIngresada");
    const minInput = document.querySelector(".minIngresado");
    const segInput = document.querySelector(".segIngresado");

    
    
    

    function cambiarNumeros(){
        document.querySelector(".hr").textContent= hr;
        document.querySelector(".min").textContent = min;
        document.querySelector(".seg").textContent = seg;
    }

    function iniciar(){
        formulario.classList.add("nomostrar");
        iniciarBtn1.classList.add("activo");
        iniciarBtn2.classList.add("activo");
        contadorNum.classList.remove("nomostrar");
        
        seg = parseInt(segInput.value);
        min = parseInt(minInput.value);
        hr = parseInt(hrInput.value);
      

        correrTemporizador = setInterval(()=>{

            if (seg > 0) {
                seg--;
            } else {
                if (min > 0) {
                    min--;
                    seg = 59;
                } else {
                    if (hr > 0) {
                        hr--;
                        min = 59;
                        seg = 59;
                    }
                }
            }


            if(seg <10){
                seg= ("0"+seg).slice(-2);
               
            }
            if(min<10 ){
                min =("0"+min).slice(-2);
            
            }
            if(hr<10){
                hr =("0"+hr).slice(-2);
                
            }
            

            cambiarNumeros();

        },1000);
    };

    function parar(){
        iniciarBtn2.classList.remove("activo");
        pararBtn.classList.add("activo");
        clearInterval(correrTemporizador);
    };

    function reiniciar(){
        iniciarBtn1.classList.remove("activo");
        iniciarBtn2.classList.remove("activo");
        pararBtn.classList.remove("activo");
        clearInterval(correrTemporizador);
        hr = "0"+0;
        min = "0"+0;
        seg= "0"+0;
        cambiarNumeros();
        formulario.classList.remove("nomostrar");
        contadorNum.classList.add("nomostrar");
    }

    formulario.addEventListener("submit",function(e){
        e.preventDefault();
        
        


    });

    
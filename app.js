let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
console.log(numeroSecreto);

function asignarTextoElmento (elemento,texto){
    let elementoHTML = document.querySelector (elemento)
    elementoHTML.innerHTML = texto; 
    return;
}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    console.log (intentos);
    if (numeroDeUsuario===numeroSecreto){
        asignarTextoElmento  ("P",`Acertaste el número en ${intentos} ${(intentos===1) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else{
        if ( numeroDeUsuario>numeroSecreto){
            asignarTextoElmento ("p","El número secreto es menor");
        }else{
            asignarTextoElmento ("p","El número secreto es mayor");
        }
        intentos++;
        limpiarCaja();
        
    }
    return;
}

function limpiarCaja(){
 document.querySelector("#valorUsuario").value = "";
  
}
function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
    console.log (numeroGenerado);
    console.log (listaNumerosSorteados)
   //si ya sorteamos todos los numeros
   if(listaNumerosSorteados.length==numeroMaximo){
     asignarTextoElmento ("P","Ya se sortearon todos los numero posibles");
   }else{
  //si el numero generado esta incluido en la lista
    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto ();
       

    }else {
        //
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado
        }

    }    
    
}
function condicionesIniciales(){
    asignarTextoElmento ("h1","Juego del número secreto!");
    asignarTextoElmento ("p",`Indica un número de 1 a ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;    
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    // Indicar mensaje de intervale de numeros
    // Generar numeros aleatorios
     // Inicializar el numero de intentos 
     condicionesIniciales();
    // Desabilitar el boton de nuevo juego
   document.querySelector("#reiniciar").setAttribute("disabled","true");
    
}
condicionesIniciales();


function mostrarHola (){
console.log ("¡ Hola, mundo!");
}

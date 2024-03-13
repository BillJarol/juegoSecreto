
let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteado = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(intentos);

    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número secreto en ${intentos} ${(intentos == 1) ?'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
            //El usuario no acerto
    } else{
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor ');
        } else{
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }

    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //Si el numero generado esta incluido en la lista

    console.log(numeroGenerado);
    console.log(listaNumeroSorteado);
    //Si ya todos los numeros fueron sorteados 

    if(listaNumeroSorteado.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros del juego')
    } else{

    if(listaNumeroSorteado.includes(numeroGenerado)){
        return generarNumeroSecreto();
    } else{
        listaNumeroSorteado.push(numeroGenerado);
        // console.log(`Numero generado: ${numeroGenerado}`)
        return numeroGenerado;
    }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1','JUEGO DEL NUMERO SECRETO');
    asignarTextoElemento('P', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //Limpiar caja
    limpiarCaja();
    //Indicar el mensaje de numero de intentos
    //Generar el numero aleatorio
    //Inicializar el numero de intentos
    condicionesIniciales();
    //Deshabilitar el boton de juego nuevo
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    
}

condicionesIniciales();


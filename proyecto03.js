//Generamos variables para las posiciones y randomizamos numeros

var posInicial=[0,0];
var posFinal=[0,0];

var num1 = +Math.floor((Math.random() * 6) + 1); //Posicion incial 1
var num2 = +Math.floor((Math.random() * 6) + 1); //Posicion inicial 2
var num3 = +Math.floor((Math.random() * 6) + 1); //Posicion final 1
var num4 = +Math.floor((Math.random() * 6) + 1); //Posicion final 2


//Quitamos que la posibilidad de que la posicion inicial pueda ser igual a la final

while (num1 === num3) {
    num3 = +Math.floor((Math.random() * 6) + 1);
}

while (num2 === num4) {
    num4 = +Math.floor((Math.random() * 6) + 1);
}


//Funcion para generar las casillas aleatorias

function casillaAleatoria() {
    for (var i = 0; i < 1; i++) {
        console.log(posInicial[posInicial.length-2] = num1);
    }
    for (var i = 0; i < 1; i++) {
        console.log(posInicial[posInicial.length-1] = num2);
    }
    for (var i = 0; i < 1; i++) {
        console.log(posFinal[posFinal.length-2] = num3);
    }
    for (var i = 0; i < 1; i++) {
        console.log(posFinal[posFinal.length-1] = num4);
    }
}

var random = casillaAleatoria();


//Zona de console.log

console.log(`La posición inicial es (${posInicial})`);
console.log(`La posición final es (${posFinal})`)



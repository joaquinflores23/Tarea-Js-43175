function recorrerListas ( lista ) {
    for (let i = 0; i < lista.length; i++) {
        console.log(lista[i])
    }
}

let numeros = [20, 3095, 43, 6545, 12, 54, 78];


// recorrerListas(numeros)

const obetenerMenor = (listaNum) => {
    let min = listaNum[0];
    for (let i = 0; i < listaNum.length; i++) {
        if(listaNum[i] < min){
            min = listaNum[i]
        }
    }
    return console.log(min)
}

obetenerMenor(numeros)

const numerosSumar = [5, 7, 10, 12, 24]

const funcionSuma = (listaSuma) =>{
    let suma = 0;
    for (let i = 0; i < listaSuma.length; i++){
        suma = suma + listaSuma[i]
    }
    return console.log(suma)

}

funcionSuma(numerosSumar)


const numerosComparar = [5, 7, 99, 3, 4, 54, 2, 12];

const contiene = (numBuscar, listaNumeros) => {
    let resultado;
    for (let i = 0; i < listaNumeros.length; i++){
        console.log(listaNumeros[i])
        if (numBuscar !== listaNumeros[i]){
            resultado = false;
            
        }else if (numBuscar === listaNumeros[i]){
            resultado = true;
            break
        }
    }
    return console.log(resultado)
}

contiene(5, numerosComparar)

const palabraInvertir = 'Ada Lovelace'

const invertirCaso = (string) => {
    let inversion = '';
    for (let i = 0; i < string.length; i++){

        if (/[A-Z]/.test(string[i])){
            inversion = inversion + string[i].toLowerCase()

        } else if (/[a-z]/.test(string[i])){
            inversion = inversion + string[i].toUpperCase()
        }else{
            inversion = inversion + string[i]
        }
    }
    return console.log(inversion)
}

invertirCaso('AbCdEfGhI')

const perrosYGatos = '🐶🐱🐶🐱🐱🐶🐶';

console.log(perrosYGatos)

const separar = (stringEmoji) =>{
    let perros = '';
    let gatos = '';

    for (let i = 0; i < stringEmoji.length; i++){
        console.log(stringEmoji[i])
        if(stringEmoji[i] == '🐶'){
            
            perros = perros + stringEmoji[i];
            
        }else if (stringEmoji[i] == '🐱'){

            gatos = gatos + stringEmoji[i];
        }
    }
    resultado = perros + gatos
    return console.log(resultado)
}

// separar(perrosYGatos)

const numerosMulti = [5, 7, 15, 22, 40];

const funcionMultiArray = (numMulti,array) =>{
    let arrayMultiplicado = [];
    for (let i = 0; i < array.length; i++){
        arrayMultiplicado.push(array[i] * numMulti)
        
    }
    return console.log(arrayMultiplicado)
}

funcionMultiArray(2, numerosMulti)
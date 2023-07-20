for (let i = 0; i < 10; i++ ){
    console.log('¡¡Oh no, entré en un bucleeee!!')
}

for (let i = 20; i < 50; i++){
    console.log(i)
}

const palabra = 'murcielago';

for (let i = 0; i < palabra.length ; i++){
    console.log(palabra[i])
}

let acc = 0;

// for(i = 10; i <= 100; i++){
//     acc = acc + i;
//     console.log(acc)
// }

// for(i = 0; i < 10; i++){
//     if (i % 2 !== 0){
//         acc = acc + i;
//         console.log(acc)
//     }
// }

const nombre = 'Alejandro';

for(i = 0; i < nombre.length; i++){
    if (nombre[i].match(/[aeiouAEIOU]/)){
        acc = acc + 1;
        console.log(`Para el valor ${nombre[i]}, ${nombre} tiene ${acc} vocales`)
    }
}
function direccion (calle, numero, departamento, codigoPostal, ciudad, pais) {

    console.log(`La dirección que ha ingresado es ${calle} ${numero} ${departamento}, ${codigoPostal}, ${ciudad},${pais}`)
}

direccion('falsa', '123', '23', '5000', 'cordoba', 'argentina');
direccion('sucre', '3234', '6to a', '5010', 'santa fe', 'argentina');
direccion('arrollo', '4483', '1ro e', '2321', 'hurlingam', 'argentina');


function listaMusica (nombrePlaylist, cancion1, primeraCancion, segundaCancion, terceraCancion){
    let playlist = nombrePlaylist;
    let cancion2 = segundaCancion;
    let cancion3 = terceraCancion;
    console.log(`Se ha creado la playlist ${playlist} con las canciones ${cancion1}, ${cancion2} y ${cancion3}.`)
}

listaMusica('joda', 'ya tu sabes', null, 'abelardo', 'serrucho');
listaMusica('mates', 'avisame', 'situaciones', 'asi es la vida', 'cancion de amores');
listaMusica('training', 'pump it', '', 'give it to me', 'no time')



function conversionMinSec (minutos){
    let resultado = minutos * 60;
    console.log(`El resultado de la conversión de ${minutos} minutos a segundos es: ${resultado}`)
}

conversionMinSec(2)
conversionMinSec(10)
conversionMinSec(5)

function convertDiaSec (dias){
    let resultado = dias * 24 * 60 * 60;
    console.log(`El resultado de la conversión de ${dias} días a segundos es: ${resultado}`)
}

convertDiaSec(1)
convertDiaSec(2)
convertDiaSec(3)

const convertKmMl = function (km){
    let resultado = km / 1.609344;
    console.log(`El resultado de la conversión de ${km} kilometros a millas es: ${resultado}`)
}

convertKmMl(1)
convertKmMl(10)
convertKmMl(100)

function areaTriangulo (base, altura){
    let area = (base * altura) / 2;
    console.log(`El resultado del área del triángulo con base ${base} y altura ${altura} es: ${area}`)
}

areaTriangulo(2, 3)
areaTriangulo(4, 5)
areaTriangulo(6, 10)

function areaRectangulo (base, altura){
    let area = base * altura;
    console.log(`El resultado del área del rectangulo con base ${base} y altura ${altura} es: ${area}`)
}

areaRectangulo(4, 4)
areaRectangulo(6, 10)
areaRectangulo(5, 3)

function tiempoRecorrido (recorrido){
    let distancia = recorrido;
    let resultadoEnBicicleta = recorrido / 5;
    let resultadoAPie= recorrido / 10;
    let resultadoEnAuto = recorrido / 50;
    console.log(`Para la distancia ${distancia} km en bicicleta el tiempo de viaje es ${resultadoEnBicicleta} hora/s, a pie ${resultadoAPie} hora/s y en auto ${resultadoEnAuto} hora/s`)
}

tiempoRecorrido(10)
tiempoRecorrido(100)
tiempoRecorrido(200)



function incrementos (numeroDePartidad, cantidad){
    let acc = 0;
    let incremento = numeroDePartidad + cantidad;

    for (i = 0; i < 5; i++) {
        acc = acc + 1;
        incremento = incremento + cantidad;
        console.log(`Incremento ${acc}: ${incremento}`)
    }
}

incrementos(10, 1)
incrementos(0, 10)
incrementos(100, 50)

const conversiónCtoF = celsius => {
    let resultado = (celsius * (9/5)) + 32
    return console.log(`La conversión de ${celsius} grados Celsius a Fahrenheit es: ${resultado}`)
}

conversiónCtoF(1)
conversiónCtoF(25)
conversiónCtoF(40)
// 1)

const user = {};

user.name = 'John';

user.surname = 'Smith';

console.log(user)

user.name = 'Pete';

console.log(user)

delete user.name;

console.log(user)

user.name = 'Joaquin';

console.log(user)

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
  sumarSalarios: function () {
    return this.John + this.Ann + this.Pete
  }
}

const sum = salaries.sumarSalarios()

console.log(sum)

// Lista de propiedades:

const  producto1 = {
    id: 10,
    nombreDelProducto: 'Plancha LG 1400w',
    precio: 12400,
    color: 'Blanco',
    categoriaDelProducto: 'Pequeños Electrodomesticos',
    oferta: true,
    descuentoEnCyberWeek: 15,
    aplicarDescuento: function (){
        if(this.oferta === true){
            return this.precio = this.precio * ( (100- this.descuentoEnCyberWeek) / 100 )
        }
    },
    vendedor: 'Electrocor',
    reputacionVendedor: 3,
    reputacionProducto: 5,
    cantidadDisponible: 117,
    cantidadVendida: 46,
}
console.log(producto1)
producto1.aplicarDescuento()
console.log(producto1.precio)

const  producto2 = {
    id: 11,
    nombreDelProducto: 'Lavarropas Electrolux 9 kg.',
    precio: 85700,
    color: 'Plateado',
    categoriaDelProducto: 'Lavarropas y Secadoras',
    oferta: false,
    descuentoEnCyberWeek: 10,
    aplicarDescuento: function (){
        if(this.oferta === true){
            return this.precio = this.precio * ( (100- this.descuentoEnCyberWeek) / 100 )
        }
    },
    vendedor: 'Impvelezsars',
    reputacionVendedor: 5,
    reputacionProducto: 4,
    cantidadDisponible: 38,
    cantidadVendida: 12,
}
console.log(producto2)
producto2.aplicarDescuento()
console.log(producto2.precio)

const  producto3 = {
    id: 11,
    nombreDelProducto: 'TV LED Samsung 48"',
    precio: 258000,
    color: 'Negro',
    categoriaDelProducto: 'TV y Smart',
    oferta: true,
    descuentoEnCyberWeek: 20,
    aplicarDescuento: function (){
        if(this.oferta === true){
            return this.precio = this.precio * ( (100- this.descuentoEnCyberWeek) / 100 )
        }
    },
    vendedor: 'Distsarmiento',
    reputacionVendedor: 5,
    reputacionProducto: 5,
    cantidadDisponible: 62,
    cantidadVendida: 57,
}

console.log(producto3)
producto3.aplicarDescuento()
console.log(producto3.precio)


// nombre --> string
// apellido --> string
// dirección --> string
// calle --> number
// departamento --> number || null
// localidad --> string
// provincia --> string
// país --> string
// dni --> number
// email --> string

class Clientes{
    constructor (nombre, apellido, direccion, calle, departamento, localidad, provincia, pais, dni, email){
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.calle = calle;
        this.departamento = departamento;
        this.localidad = localidad;
        this.provincia =  provincia;
        this.pais = pais;
        this.dni = dni;
        this.email = email;
    }
}

const clientePedro = new Clientes ('Pedro','Groppo','Chacabuco',357,11,'Cordoba','Cordoba','Argntina',33402855,'pedro.g.89@gmial.com')

console.log(clientePedro)

const clientePablo = new Clientes ('Pablo','Tabares','Colon',632,null,'San Francisco','Cordoba','Argntina',28363983,'tabares.pablo@live.com')

console.log(clientePablo)

const clienteAlejo = new Clientes ('Alejo','Perez','San Martin',4302,14,'CABA','CABA','Argntina',40739632,'alejo47633@gmail.com')

console.log(clienteAlejo)

const discoSolido = { 
    id: "MLA1410362542",
    category_id: "MLA1672",
    title: "Disco sólido interno Adata Ultimate SU650 ASU650SS-240GT-R 240GB negro",
    url: "https://www.mercadolibre.com.ar/disco-solido-interno-adata-ultimate-su650-asu650ss-240gt-r-240gb-negro/p/MLA15749699#reco_item_pos=0&reco_backend=machinalis-pdp-pads-v2p-brothers&reco_backend_type=low_level&reco_client=pdp-pads-right&reco_id=14b8ec57-61a1-49f7-9d64-3c1ba4abf3f8",
    price: {
        currency_id: "ARS",
        symbol: "$",
        decimal_separator: ",",
        fraction: "13.399"
    },
    sale_price: {
        amount: 13399,
        currency_id: "ARS",
        metadata: {},
        fallback: false
    },
    image: {
        src: "https://http2.mlstatic.com/D_Q_NP_726919-MLA40462053410_012020-AB.webp",
        src2x: "https://http2.mlstatic.com/D_Q_NP_2X_726919-MLA40462053410_012020-AB.webp",
        size: "224px"
    },
    product_id: "MLA15749699",
    available_quantity: 12,
    status: "active",
    is_cart_enabled: false,
    vertical: "CORE",
    shipping: {
        text: "Envío gratis",
        freeShipping: true,
        fullfilment: true
    }
}

const tituloProd = discoSolido.title;

console.log(tituloProd)

const priceSymbol = discoSolido.price.symbol;

console.log(priceSymbol)

const precioProd = discoSolido.sale_price.amount;

console.log(precioProd)

const envioFree = discoSolido.shipping.freeShipping;

console.log(envioFree)

// b) el title
// c) el symbol de la propiedad price
// d) el amount de la propiedad sale_price
// f) el freeShipping de la propiedad shipping

const costoEnvio = function (titulo, simbolo, precio, envioGratis){
    titulo = tituloProd;
    simbolo = priceSymbol;
    precio = precioProd;
    envioGratis = envioFree;

    if(envioGratis === true){
        console.log(`El artículo: ${ titulo }, de precio: ${ simbolo }${ precio }, que se encuentra disponible, cuenta con envío gratis.`)
    } else if(envioGratis === false){
        console.log(`El artículo: ${ titulo }, de precio: ${ simbolo }${ precio }, que se encuentra disponible, no cuenta con envío gratis.`)
    }
}

costoEnvio()
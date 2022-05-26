//ingresar librios a la biblioteca

//book object
function Libro(datos_libro){
    this.id = datos_libro.id;
    this.nombre = datos_libro.nombre;
    this.autor = datos_libro.autor;
    this.precio = datos_libro.precio;
}

let biblioteca = [];


function preguntar(){
let opcion = prompt("Ingrese la opcion:\n1)_Añadir libro a la biblioteca\n2)_Consultar Libro\n3)_Comprar libro\n4)_Terminar");


function crearLibro(){
        let nombre = prompt("Ingrese el nombre del libro:");
        let precio = prompt("Ingrese el precio:");
        let autor = prompt("Ingrese el autor:");
        const nuevo_libro = new Libro({nombre:nombre,precio:precio,autor:autor});
        return nuevo_libro;
    }
    function insLibro(biblioteca){
        let cantidadAIngresar = prompt("Cantidad de libros a ingresar:")
        for(i = 0 ; i < cantidadAIngresar; i++){
            const libro = crearLibro();
            biblioteca.push(libro);
        }
    }

if(opcion == 1){
    insLibro(biblioteca);
    preguntar();
}



function buscarPrecioLibro(biblioteca){
    let nombre = prompt("Ingrese el nombre del libro a buscar / comprar:");
    let libro = biblioteca.find(libro => libro.nombre === nombre);
    return libro;
 }

if(opcion == 2){
let libroAImprimir = buscarPrecioLibro(biblioteca);
console.log("EL libro que busca es:");
console.log("Nombre:",libroAImprimir.nombre);
console.log("Precio:",libroAImprimir.precio);
console.log("Autor:",libroAImprimir.autor);
preguntar();
}


function calcularPrecio(precio, cuotas, envio) {
    parseInt(precio);
    var interes;
    if (cuotas >= 6) {
        interes = 0.05;
    } else interes = 0;
    var ship_price;
    if (envio.toUpperCase() == 'DOMICILIO') {
        ship_price = 120;
    } else {
        ship_price = 0;
    }
    precio = parseInt(precio);
    interes *= precio;
    var precio_final = (precio + interes + ship_price);
    precio_final = parseInt(precio_final);
    console.log('El precio final del libro con envio', envio, 'es de: $', precio_final, 'en', cuotas, 'cuotas de $', (precio_final / cuotas).toFixed(2));
}

if(opcion == 3){
        let book_buy = buscarPrecioLibro(biblioteca);
        let price = book_buy.precio;
        let cuotas = prompt("Introduzca la cantidad de cuotas para realizar el pago:\n1/2/3/6/12");
        let envio = prompt("Seleccione el tipo de envio:\nDomicilio\nPickup");
        calcularPrecio(price, cuotas, envio);
        preguntar();
}
}
preguntar();



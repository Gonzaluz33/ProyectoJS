//Modularizacion TAD Biblioteca

//book object
function Libro(datos_libro){
    this.id = datos_libro.id;
    this.nombre = datos_libro.nombre;
    this.autor = datos_libro.autor;
    this.precio = datos_libro.precio;
}

// Constructoras ----------------
function crearLibro(nombre,precio,autor){
    let nombre2 = nombre.toLowerCase();
    let id = nombre2.replace(/\s+/g, '');
    const nuevo_libro = new Libro({id:id,nombre:nombre,precio:precio,autor:autor});
    return nuevo_libro;
}
//----------------------------------

// Operaciones de modificación ---------
function insLibro(biblioteca,libro){
        biblioteca.push(libro);
}
//----------------------------------

// Operaciones de consulta ---------------
function buscarPrecioLibro(biblioteca,nombre){
    let nombre3 = nombre.toLowerCase();
    nombre3 = nombre3.replace(/\s+/g, '');
    let libro = biblioteca.find(libro => libro.id === nombre3);
    return libro;
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
    return precio_final = parseInt(precio_final);
}
//------------------------------------
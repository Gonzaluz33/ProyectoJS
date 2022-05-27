//ingresar libros a la biblioteca

let biblioteca = [];

function preguntar(){

let opcion = prompt("Ingrese la opcion:\n1)_Añadir libro a la biblioteca\n2)_Consultar Libro\n3)_Comprar libro\n4)_Terminar");

if(opcion == 1){
    let libroIns = crearLibro(prompt("Ingrese el nombre del libro:"),prompt("Ingrese el precio:"),prompt("Ingrese el autor:"));
    insLibro(biblioteca,libroIns);
    preguntar();
}

if(opcion == 2){
let libroAImprimir = buscarPrecioLibro(biblioteca,prompt("Ingrese el nombre del libro a buscar:"));
let bookName = document.getElementById("bookName");
let bookPrice = document.getElementById("bookPrice");
let imageSRC = document.getElementById("imageSRC");
imageSRC.src ='img/'+libroAImprimir.id+'.jpg';
bookName.innerText = libroAImprimir.nombre;
bookPrice.innerText = libroAImprimir.precio;
preguntar();
}


if(opcion == 3){
    let book_buy = buscarPrecioLibro(biblioteca,prompt("Ingrese el nombre del libro a comprar:"));
    let price = book_buy.precio;
    let cuotas = prompt("Introduzca la cantidad de cuotas para realizar el pago:\n1/2/3/6/12");
    let envio = prompt("Seleccione el tipo de envio:\nDomicilio\nPickup");
    let finalPrice = calcularPrecio(price, cuotas, envio);
    console.log("EL PRECIO FINAL ES:", parseInt(finalPrice));
    preguntar();
}
}

preguntar();



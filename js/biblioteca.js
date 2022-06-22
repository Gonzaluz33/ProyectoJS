
let biblioteca = [];
if(localStorage.getItem("biblioteca")){
    biblioteca = JSON.parse(localStorage.getItem("biblioteca"));
}
let categorias = [];
let UsuariosAdmin = [
    {
    username: "admin",
    password: "admin"
    },
    {
    username: "admin",
    password: "1234"
    },
    {
    username: "1",
    password: "1"
    },
];

function cargarImagen(search){
    fetch(`https://www.googleapis.com/books/v1/volumes?q=` + search)
    .then(response => response.json())
    .then((result) => {
        let aux = auxCargarImagen(result);
        return aux;
    })
    
}
function auxCargarImagen(result){
 let array = result.items;
 let libro = array[0];
 let libro2 = libro.volumeInfo.imageLinks.thumbnail;
 return libro2;
}



function agregarLibro(biblioteca,nombre,autor,precio,categoria){
    let esta = biblioteca.filter(libro => libro.nombre === nombre);
    if(esta.length > 0){
        let libro_aux = biblioteca.find(libro => libro.nombre === nombre);
        libro_aux.stock++;
    }else{
        let id = 1;
        if(biblioteca.length > 0){
            id = biblioteca[biblioteca.length-1].id+1;
        }
        let nomId = nombre.toLowerCase();
        nomId = nomId.replace(/\s+/g, '');
        //obtener imagen de la api y asociar la mas relevante con el nombre del libro
        let image = cargarImagen(nombre);
        let libro = new Libro(id,nomId,nombre,autor,precio,1,categoria,image);
        biblioteca.push(libro);
        let estaCategoria = categorias.filter((cat)=> cat === categoria) 
        if(estaCategoria.length == 0)
        categorias.push(categoria);
    }
}

function quitarLibro(biblioteca,nombre){
    let esta = biblioteca.some((libro) => libro.nombre === nombre || libro.nomId === nombre);
    if(esta){
        let libro_aux = biblioteca.find((libro) => libro.nombre === nombre || libro.nomId === nombre);
        if(libro_aux.stock > 1){
            libro_aux.stock--;
        }else{
            let index = biblioteca.indexOf(libro_aux);
            biblioteca.splice(index,1);
        }
        console.log(libro_aux);
    }
}

function cambiarPrecioLibro(biblioteca,nombre,nuevoPrecio){
    let esta = biblioteca.some((libro) => libro.nombre === nombre || libro.nomId === nombre);
    if(esta){
        let libro_encontrado = biblioteca.find((libro) => libro.nombre === nombre || libro.nomId === nombre);
        libro_encontrado.precio = nuevoPrecio;
    }
}
function cambiarStockLibro(biblioteca,nombre,nuevoStock){
    let esta = biblioteca.some((libro) => libro.nombre === nombre || libro.nomId === nombre);
    if(esta){
        let libro_encontrado = biblioteca.find((libro) => libro.nombre === nombre || libro.nomId === nombre);
        libro_encontrado.stock = nuevoStock;
    }
}


function buscarLibro(biblioteca,nombre){
    let nombre_aux = nombre.toLowerCase();
    nombre_aux = nombre_aux.replace(/\s+/g, '');
    let libro = biblioteca.find((libro)=> libro.nomId.indexOf(nombre_aux) !== -1);
    return libro;
}

function mostrarActualHeader(){
    let container = document.getElementById("containerActualHeader");
    container.innerHTML ="";
    for(let i=0; i<biblioteca.length;i++){
        let libro = biblioteca[i];
        let casilla = document.createElement("div");
        casilla.innerHTML = `<div class="card m-3" style="width: 18rem;"><img src="./img/book_image.png" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">${libro.nombre}</h5></div><ul class="list-group list-group-flush"><li class="list-group-item">$ ${libro.precio}</li><li class="list-group-item">Autor: ${libro.autor}</li><li class="list-group-item">Categoría: ${libro.categoria}</li></ul><div class="card-body"><button class="button-41" role="button">Agregar al Carrito</button></div></div>`;
        container.appendChild(casilla);
    }
    
}
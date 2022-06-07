class Libro{
    constructor(id,nomId,nombre,autor,precio,stock,categoria){
        this.id = id;
        this.nomId = nomId;
        this.nombre = nombre;
        this.autor = autor;
        this.precio = precio;
        this.stock = stock;
        this.categoria = categoria;
    }
}

let biblioteca = [];
if(localStorage.getItem("biblioteca")){
    biblioteca = JSON.parse(localStorage.getItem("biblioteca"));
}
const categorias = [];



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
        let libro = new Libro(id,nomId,nombre,autor,precio,1,categoria);
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
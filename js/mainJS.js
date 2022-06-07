mostrarActual();

let btnAgregar = document.getElementById("submitAgregar");
btnAgregar.onclick = ()=>{
    const inNombre = document.getElementById("imputNombre-agregar").value;
    const inAutor = document.getElementById("imputAutor-agregar").value;
    const inPrecio = document.getElementById("imputPrecio-agregar").value;
    const inCategoria = document.getElementById("imputCategoria-agregar").value;
    agregarLibro(biblioteca,inNombre,inAutor,inPrecio,inCategoria);
    document.getElementById("imputNombre-agregar").value = "";
    document.getElementById("imputAutor-agregar").value = "";
    document.getElementById("imputPrecio-agregar").value = "";
   document.getElementById("imputCategoria-agregar").value = "";
   localStorage.setItem("biblioteca", JSON.stringify(biblioteca));
   mostrarActual();
};

let btnBorrar = document.getElementById("submitBorrar");
btnBorrar.onclick = ()=>{
    const delNombre = document.getElementById("imputNombre-borrar").value;
    quitarLibro(biblioteca,delNombre);
    document.getElementById("imputNombre-borrar").value = "";
    localStorage.setItem("biblioteca", JSON.stringify(biblioteca));
    mostrarActual();
};

let btnBuscar = document.getElementById("submitBuscar");
btnBuscar.onclick = ()=>{
    document.getElementById("containerMostrar").innerHTML ="";
    let container = document.getElementById("containerMostrar");
    let casilla = document.createElement("div");
    let searchNombre = document.getElementById("imputNombre-buscar").value;
    let libro = buscarLibro(JSON.parse(localStorage.getItem("biblioteca")),searchNombre);
    if(libro){
    casilla.innerHTML = `<div class="card m-3" style="width: 18rem;"><img src="./img/book_image.png" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">${libro.nombre}</h5></div><ul class="list-group list-group-flush"><li class="list-group-item">$ ${libro.precio}</li><li class="list-group-item">Autor: ${libro.autor}</li><li class="list-group-item">Categoría: ${libro.categoria}</li></ul><div class="card-body"><button class="button-41" role="button">Agregar al Carrito</button></div></div>`;
    container.appendChild(casilla);
    }
    else container.innerHTML =`<h1>Libro no Encontrado</h1>`;
    document.getElementById("imputNombre-buscar").value = "";
};

 function mostrarActual(){
    let container = document.getElementById("containerProducts");
    container.innerHTML ="";
    for(let i=0; i<biblioteca.length;i++){
        let libro = biblioteca[i];
        let casilla = document.createElement("div");
        casilla.innerHTML = `<div class="card m-3" style="width: 18rem;"><img src="./img/book_image.png" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">${libro.nombre}</h5></div><ul class="list-group list-group-flush"><li class="list-group-item">$ ${libro.precio}</li><li class="list-group-item">Autor: ${libro.autor}</li><li class="list-group-item">Categoría: ${libro.categoria}</li></ul><div class="card-body"><button class="button-41" role="button">Agregar al Carrito</button></div></div>`;
        container.appendChild(casilla);
    }
    
}
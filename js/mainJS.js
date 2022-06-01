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
};



let btnBorrar = document.getElementById("submitBorrar");
btnBorrar.onclick = ()=>{
    const delNombre = document.getElementById("imputNombre-borrar").value;
    quitarLibro(biblioteca,delNombre);
    document.getElementById("imputNombre-borrar").value = "";
};



let btnBuscar = document.getElementById("submitBuscar");
btnBuscar.onclick = ()=>{
    document.getElementById("containerMostrar").innerHTML ="";
    let Encontrado = document.createElement("h2");
    Encontrado.innerHTML= "El libro que buscas es: <br>";
    Encontrado.className = "p-3";
    const searchNombre = document.getElementById("imputNombre-buscar").value;
    let libro = buscarLibro(biblioteca,searchNombre);
    document.getElementById("imputNombre-buscar").value = "";
    let nameText = document.createElement("h4");
    nameText.innerHTML= `Nombre : ${libro.nombre}`;
    nameText.className = "p-2";
    let container =  document.getElementById("containerMostrar");
    let precioText = document.createElement("h4");
    precioText.innerHTML= `Precio : $${libro.precio}`;
    precioText.className = "p-2";
    let autorText = document.createElement("h4");
    autorText.innerHTML= `Autor : ${libro.autor}`;
    autorText.className = "p-2";
    let stockText = document.createElement("h4");
    stockText.innerHTML= `Stock : ${libro.stock}`;
    stockText.className = "p-2";
    container.appendChild(Encontrado);
    container.appendChild(nameText);
    container.appendChild(precioText);
    container.appendChild(autorText);
    container.appendChild(stockText);
};

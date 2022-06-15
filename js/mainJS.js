mostrarActual();

let activeLoginAdm = false;
let btn3 = document.getElementById("buttonLogAdmin");
btn3.onclick = ()=>{ !activeLoginAdm && openForm();};

let btnLoginAdmn = document.getElementById("btnLoginAdmn");
btnLoginAdmn.onclick = ()=>{
    const usr = document.getElementById("imputUsr").value;
    const psw = document.getElementById("imputPass").value;
    let aprobado = UsuariosAdmin.find(usuario => (usuario.username === usr) && (usuario.password === psw));
    aprobado && mostrarcontainerAdmSection();
        function mostrarcontainerAdmSection(){
            Toastify({
                text:"Login Satisfactorio",
                duration: 3000,
                gravity:'bottom',
                position:'left',
                style:{
                    background:'green'
                },
            }).showToast();
            document.getElementById("containerAdmSection").style.display = "block";
            closeForm();
        }
    !aprobado && Toastify({
        text:"Intente Nuevamente",
        duration: 3000,
        gravity:'bottom',
        position:'left',
        style: {background:'red'},
    }).showToast();;
};

let btnAgregar = document.getElementById("submitAgregar");
btnAgregar.onclick = ()=>{
    const inNombre = document.getElementById("imputNombre-agregar").value;
    const inAutor = document.getElementById("imputAutor-agregar").value || "UNKNOWN";
    const inPrecio = document.getElementById("imputPrecio-agregar").value;
    const inCategoria = document.getElementById("imputCategoria-agregar").value || "UNKNOWN";
    (inNombre && inPrecio) && agregarLibro(biblioteca,inNombre,inAutor,inPrecio,inCategoria);
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
    delNombre && quitarLibro(biblioteca,delNombre);
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
    libro && agregarCasilla();
    function agregarCasilla(){
        casilla.innerHTML = `<div class="card m-3" style="width: 18rem;"><img src="./img/book_image.png" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">${libro.nombre}</h5></div><ul class="list-group list-group-flush"><li class="list-group-item">$ ${libro.precio}</li><li class="list-group-item">Autor: ${libro.autor}</li><li class="list-group-item">Categoría: ${libro.categoria}</li></ul><div class="card-body"></div></div>`;
        container.appendChild(casilla);
    }
    !libro && (container.innerHTML =`<h1>Libro no Encontrado</h1>`);
    document.getElementById("imputNombre-buscar").value = "";
};


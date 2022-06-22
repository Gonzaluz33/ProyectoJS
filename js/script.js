searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
  searchForm.classList.toggle('active');
}

let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () =>{
  loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () =>{
  loginForm.classList.remove('active');
}


let btnLogin = document.getElementById("btnLogin");
btnLogin.onclick = ()=>{
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
           document.getElementById("containerAdmSection").style.display = "flex";
        }
    !aprobado && Toastify({
        text:"Intente Nuevamente",
        duration: 3000,
        gravity:'bottom',
        position:'left',
        style: {background:'red'},
    }).showToast();
};




function loader(){
  document.querySelector('.loader-container').classList.add('active');
}

function fadeOut(){
  setTimeout(loader, 500);//cambiar a 2500
}

window.onscroll = () =>{

  searchForm.classList.remove('active');

  if(window.scrollY > 80){
    document.querySelector('.header .header-2').classList.add('active');
  }else{
    document.querySelector('.header .header-2').classList.remove('active');
  }

}

window.onload = () =>{

  if(window.scrollY > 80){
    document.querySelector('.header .header-2').classList.add('active');
  }else{
    document.querySelector('.header .header-2').classList.remove('active');
  }

  fadeOut();

}



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
 //  mostrarActual();
};

let btnBorrar = document.getElementById("submitBorrar");
btnBorrar.onclick = ()=>{
    const delNombre = document.getElementById("imputNombre-borrar").value;
    delNombre && quitarLibro(biblioteca,delNombre);
    document.getElementById("imputNombre-borrar").value = "";
    localStorage.setItem("biblioteca", JSON.stringify(biblioteca));
  //  mostrarActual();
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
        casilla.innerHTML = `<div class="card m-3" style="width: 18rem;"><img src="${libro.img}" class="card-img-top" alt=""><div class="card-body"><h5 class="card-title">${libro.nombre}</h5></div><ul class="list-group list-group-flush"><li class="list-group-item">$ ${libro.precio}</li><li class="list-group-item">Autor: ${libro.autor}</li><li class="list-group-item">Categoría: ${libro.categoria}</li></ul><div class="card-body"></div></div>`;
        container.appendChild(casilla);
    }
    !libro && (container.innerHTML =`<h1>Libro no Encontrado</h1>`);
    document.getElementById("imputNombre-buscar").value = "";
};



var swiper = new Swiper(".books-slider", {
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".featured-slider", {
  spaceBetween: 10,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

var swiper = new Swiper(".arrivals-slider", {
  spaceBetween: 10,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".reviews-slider", {
  spaceBetween: 10,
  grabCursor:true,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});


function mostrarActualHeader(){
  let container = document.getElementById("containerActualHeader");
  container.innerHTML ="";
  for(let i=0; i<biblioteca.length;i++){
      let libro = biblioteca[i];
      let casilla = document.createElement("div");
      casilla.innerHTML = `<a href="#" class="swiper-slide"><img src="image/book-1.png" alt=""></a>`;
      container.appendChild(casilla);
  }
  
}
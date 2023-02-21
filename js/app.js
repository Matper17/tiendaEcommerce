// ARRAY DE TODOS LOS PRODUCTOS

const productos = [
    {
        id: 1,
        nombre: "Dumbells - Par 10kg", 
        tipo: "Mancuernas", 
        desc: "Producto premium",
        marca: "G-fitness", 
        peso: "10kg", 
        precio: 12000,
        img: "/Images/dumbells.jfif",
        categoria:{
            titulo: "Mancuernas",
            id: "productos"
        },
        cantidad: 1
    },

    {
        id: 2,
        nombre: "Barra olímpica 20kg", 
        tipo: "Barra", 
        desc: "Levantamiento olímpico",
        marca: "G-fitness", 
        peso: "20kg", 
        precio: 40000,
        img: "/Images/barraOlimpica.jfif",
        categoria:{
            titulo: "Barra olímpica",
            id: "productos"
        },
        cantidad: 1
    },

    {
        id: 3,
        nombre: "Set discos bumper 100kg", 
        tipo: "Discos", 
        desc: "100kg",
        marca: "G-fitness", 
        peso: "5kg, 10kg, 15kg, 20kg", 
        precio: 100000,
        img: "/Images/discosBumper.jfif",
        categoria:{
            titulo: "Discos bumper",
            id: "productos"
        },
        cantidad: 1
    },

    {
        id: 4,
        nombre: "Barra W", 
        tipo: "Barra", 
        desc: "Barra de fundición",
        marca: "G-fitness", 
        peso: "12kg", 
        precio: 20000,
        img: "/Images/barraW.jfif",
        categoria:{
            titulo: "Barra W",
            id: "productos"
        },
        cantidad: 1
    },

    {
        id: 5,
        nombre: "Medball 20kg", 
        tipo: "Pelota", 
        desc: "Cuerina premium",
        marca: "Sonnos", 
        peso: "20kg", 
        precio: 7500,
        img: "/Images/medBall.jfif",
        categoria:{
            titulo: "Medball",
            id: "productos"
        },
        cantidad: 1    
    },

    {
        id: 6,
        nombre: "Soga de salto", 
        tipo: "Soga", 
        desc: "Cable de acero",
        marca: "G-fitness", 
        peso: "400gr", 
        precio: 3500,
        img: "/Images/sogaSalto.jfif",
        categoria:{
            titulo: "Soga de salto",
            id: "productos"
        },
        cantidad: 1    
    },

    {
        id: 7,
        nombre: "Bandas de resistencia", 
        tipo: "Bandas circulares", 
        desc: "Goma resistente",
        marca: "G-fitness", 
        peso: "200gr", 
        precio: 5000,
        img: "/Images/bandasResistencia.jfif",
        categoria:{
            titulo: "Bandas de resistencia",
            id: "productos"
        },
        cantidad: 1    
    },

    {
        id: 8,
        nombre: "TRX", 
        tipo: "Banda de suspención", 
        desc: "Soporta hasta 140kg",
        marca: "G-fitness", 
        peso: "2kg", 
        precio: 6000,
        img: "/Images/trx.jfif",
        categoria:{
            titulo: "TRX",
            id: "productos"
        },
        cantidad: 1    
    },

    {
        id: 9,
        nombre: "Kit body pump 19kg", 
        tipo: "Kit barra y mancuernas", 
        desc: "Barra y mancuernas de caño",
        marca: "G-fitness", 
        peso: "", 
        precio: 17000,
        img: "/Images/kitBodyPump.jfif",
        categoria:{
            titulo: "Kit body pump",
            id: "productos"
        },
        cantidad: 1    
    },

    {
        id: 10,
        nombre: "Set de conos", 
        tipo: "Conos tortuga", 
        desc: "40 conos tortuga",
        marca: "Sonnos", 
        peso: "", 
        precio: 2500,
        img: "/Images/conosTortuga.jfif",
        categoria:{
            titulo: "Set de conos",
            id: "productos"
        },
        cantidad: 1    
    },

    {
        id: 11,
        nombre: "Plan de entrenamiento 'Fuerza'", 
        tipo: "Rutina mensual", 
        desc: "Entrenamiento de pesas",
        precio: 4000,
        img: "/Images/ronnieColeman.jfif",
        categoria:{
            titulo: "Plan de fuerza",
            id: "servicios"
        },
        cantidad: 1
    },

    {
        id: 12,
        nombre: "Plan de entrenamiento 'Resistencia aeróbica'", 
        tipo: "Rutina mensual",
        desc: "Entrenamiento de resistencia",
        precio: 4000,
        img: "/Images/resistenciaAerobica.jfif",
        categoria:{
            titulo: "Plan de resistencia",
            id: "servicios"
        },
        cantidad: 1
    },

    {
        id: 13,
        nombre: "Plan de entrenamiento 'Preparación general'", 
        tipo: "Rutina mensual", 
        desc: "Preparación física general",
        precio: 4000,
        img: "/Images/preparacionFisicaGral.jfif",
        categoria:{
            titulo: "Preparación general",
            id: "servicios"
        },
        cantidad: 1
    }

]

//FUNCIONES, RECORRIDOS DEL ARRAY, CONDICIONALES, MODIFICACION DEL DOM

const contenedorProductos = document.querySelector("#contenedorProductos");
const botonLat = document.querySelectorAll(".boton-lateral");
// const titulosPrincipales = document.querySelector("#primerTitulo");
// const agregarProductos = document.querySelector ("productoAgregar"); 


function cargarProductos(productosSeleccionados) {
    contenedorProductos.innerHTML = "";

    productosSeleccionados.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto")
        div.innerHTML = `
        <img class="productoImagen" src="${producto.img}" alt="${producto.nombre}">
        <div class="productoTipos">
            <h3 class="productoTitulo">${producto.nombre}</h3>
            <p class="productoPrecio">$${producto.precio}</p>
            <button class="productoAgregar" id="${producto.id}">Añadir al carrito</button>
        </div>
        `;
        contenedorProductos.append(div);
    })
}
cargarProductos(productos); 

botonLat.forEach(boton => {
    boton.addEventListener("click", (e) => {
        
        botonLat.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if(e.currentTarget.id != "todosLosProd"){
            const seleccionProductos = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
        
            cargarProductos(seleccionProductos);  
        } else{
            // titulo.innerText = "Todos los productos"
            cargarProductos(productos); 
        }
    })
})


function agregarProductos(){
    botonProducto = document.querySelector("productoAgregar")
    botonProducto.forEach (boton => {
        boton.addEventListener("click", añadirAlCarrito)
    })
}

const productosCarrito = [] 

function añadirAlCarrito(e){
    const id = e.currentTarget.id
    console.log(id)
} 
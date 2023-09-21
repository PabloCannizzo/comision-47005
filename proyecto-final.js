const suma = (a, b) => a + b;
const mult = (a, b) => a * b;
const resta = (a, b) => a - b;
const iva = (x) => x * 0.21;

class Producto {
    constructor(nombre, categoria, precio, cantidad, descuento, imagen) {
        this.nombre = nombre,
            this.categoria = categoria,
            this.precio = precio,
            this.cantidad = cantidad,
            this.descuento = descuento,
            this.imagen = imagen
    }
    vender() {
        this.cantidad -= 1;
    }
}


const productos = [
    { id: 1, nombre: "licores", categoria: "alcohol", precio: 3500, cantidad: 25, descuento: 400, imagen: "../assets/img/licores.png " },
    { id: 2, nombre: "whiskies", categoria: "alcohol", precio: 60000, cantidad: 30, descuento: 2000, imagen: "../assets/img/whiskies.png.png " },
    { id: 3, nombre: "vinos", categoria: "alcohol", precio: 13000, cantidad: 42, descuento: 1000, imagen: "../assets/img/vinos.png.png " },
    { id: 4, nombre: "cocteles", categoria: "alcohol", precio: 7440, cantidad: 20, descuento: 1100, imagen: "../assets/img/cocteles.png.png " },
    { id: 5, nombre: "cerveza", categoria: "alcohol", precio: 1200, cantidad: 50, descuento: 350, imagen: "../assets/img/cerveza.png.png " },
    { id: 6, nombre: "fernet", categoria: "alcohol", precio: 2000, cantidad: 45, descuento: 300, imagen: "../assets/img/fernet.png.png " },
    { id: 7, nombre: "jugos", categoria: "sin alcohol", precio: 400, cantidad: 40, descuento: 150, imagen: "../assets/img/jugos.png.png " },
    { id: 8, nombre: "gaseosas", categoria: "sin alcohol", precio: 600, cantidad: 50, descuento: 200, imagen: "../assets/img/gaseosas.png.png " },
    { id: 9, nombre: "energizantes", categoria: "sin alcohol", precio: 600, cantidad: 50, descuento: 300, imagen: "../assets/img/energizantes.png.png " },
    { id: 10, nombre: "aguas", categoria: "sin alcohol", precio: 400, cantidad: 50, descuento: 100, imagen: "../assets/img/agua.png.png " }
]

let header = document.getElementById("encabezado");
encabezado.className = "encabezado";
let h1 = document.createElement("div");
//let parrafo = document.createElement("p");
h1.innerHTML = `<a href="./index.html"><h1>LiquorStore</h1></a>
<p>tienda de bebidas online</p>`;
h1.className = "verde";
header.append(h1);


class Persona {
    constructor(nombre, edad, direccion) {
        this.nombre = nombre;
        this.edad = edad;
        this.direccion = direccion;
    }
}


let cuerpo = document.getElementById("cuerpo");
cuerpo.className = "cuerpo";
let div1 = document.createElement("div");
div1.className = "bienvenida";
div1.innerHTML = `<h2>Bienvenido a nuestra tienda de bebidas online</h2>
<br>
<h3>A continuación ingrese la categoria de bebida que desea comprar...</h3>`;
cuerpo.append(div1);


let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let body = document.getElementById("cuerpo");

const mostrarProductos = (productos) => {
    const contenedorProductos = document.querySelector(".product-list");
    // Limpio el contenedor por si había algo anteriormente
    contenedorProductos.innerHTML = "";
    productos.forEach((producto) => {
        const li = document.createElement("li");
        li.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}" />
        <h3>${producto.nombre}</h3>
        <b>Precio c/u: $ ${producto.precio}</b>
        <h4>Categoria: ${producto.categoria}</h5>
        <h5>Stock disponible: ${producto.cantidad} unidades</h6>
        <button id="agregar-${producto.id}" class="add-to-cart">Agregar al carrito</button>
        `;
        contenedorProductos.appendChild(li);
        const boton = document.getElementById(`agregar-${producto.id}`);
        boton.addEventListener("click", () => {
            agregarAlCarrito(producto.id);
        });
    });
};

const agregarAlCarrito = (id) => {
    // Si el producto no está en el carrito, lo agregamos
    if (!carrito.some((producto) => producto.id === id)) {
        // Buscamos el producto en el array de productos
        const producto = productos.find((producto) => producto.id === id);
        // Agregamos un nuevo objeto con el contenido del producto y un campo cantidad en 1. Para más información sobre spread operator: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
        carrito.push({ ...producto, cantidad: 1 });
    } else {
        // Si el producto está en el carrito, lo buscamos y le incrementamos las unidades
        const producto = carrito.find((producto) => producto.id === id);
        producto.cantidad++;
    }
    // Guardamos el carrito en el localStorage para tenerlo actualizado si recargamos la página porque hicimos cambios
    localStorage.setItem("carrito", JSON.stringify(carrito));
    // Actualizamos la vista del carrito porque hemos hecho cambios
    mostrarCarrito();
};

//alert(`El producto ${nombre} fue agregado al carrito`);
//localStorage.setItem(`SE AGREGO AL CARRITO: ${nombre}`, JSON.stringify(carrito));
const mostrarCarrito = () => {
    const contenedorCarrito = document.querySelector(".carrito");
    contenedorCarrito.innerHTML = "";

    if (carrito.length > 0) {
        const productsCart = document.createElement("ul");
        productsCart.classList.add("productsCart");
        contenedorCarrito.appendChild(productsCart);
        const contenedorTotal = document.createElement("p");
        actualizarTotal(contenedorTotal);
        contenedorCarrito.appendChild(contenedorTotal);
        // Recorro el array y por cada uno creo una card para mostrar en pantalla
        carrito.forEach((producto) => {
            const li = document.createElement("li");
            li.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" />
            <div class="productContent">
                <h3>${producto.nombre}</h3>
                <p class="product-price">$${producto.precio}</p>
                <div class="counter">
				<button id="decrementar-${producto.id}" class="button">-</button>
				<span class="product-price">${producto.cantidad}u.</span>
				<button id="incrementar-${producto.id}" class="button">+</button>
				</div>
			</div>
			<button id="eliminar-${producto.id}" class="remove">Eliminar</button>`;
            productsCart.appendChild(li);

            const boton = document.getElementById(`eliminar-${producto.id}`);
            boton.addEventListener("click", () => {
                eliminarProducto(producto.id);
            });

            const decrementar = document.getElementById(`decrementar-${producto.id}`);
            decrementar.addEventListener("click", () => {
                decrementarProducto(producto.id);
            });

            const incrementar = document.getElementById(`incrementar-${producto.id}`);
            incrementar.addEventListener("click", () => {
                incrementarProducto(producto.id);
            });
        });
    }
    else {
        contenedorCarrito.innerHTML = '<p class="empty">No hay productos</p>';
    }
};

const decrementarProducto = (id) => {
    const producto = carrito.find((prod) => prod.id === id);
    if (producto.cantidad === 1) {
        eliminarProducto(producto.id);
    } else {
        producto.cantidad--;
        localStorage.setItem("carrito", JSON.stringify(carrito));
        mostrarCarrito();
    }
};

const incrementarProducto = (id) => {
    const producto = carrito.find((prod) => prod.id === id);
    producto.cantidad++;
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
};

const eliminarProducto = (id) => {
    carrito = carrito.filter((producto) => producto.id !== id);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
};

const actualizarTotal = (contenedor) => {
    const total = carrito.reduce((acumulador, producto) => suma(acumulador, suma(producto.precio, iva(producto.precio * producto.cantidad))) , 0);
    contenedor.textContent = `Valor final a abonar + IVA = $${total}`;
};

mostrarProductos(productos);
mostrarCarrito();


fetch("./js/productos.json")
    .then((response) => response.json())
    .then((productos) => {
        mostrarProductos(productos);
        mostrarCarrito();
    });

    const formulario = document.getElementById("formulario");

    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        const buscador = document.getElementById("buscador");
        // Aquí van todos los filtrados que necesitemos
        const filtro = productos.filter((producto) => producto.nombre.includes(buscador.value));
        // Mostramos los productos que hayan pasado el filtro
        mostrarProductos(filtro);
    });
//veeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeerrrrrrrrrrrrrrrrrrrrrrrrrr

/* let cuerpo2 = document.getElementById("cuerpo");
let finCompra = document.createElement("div");
finCompra.innerHTML = `<div id = "compra"></div>
<div id = "envio"></div>`;
cuerpo2.append(finCompra);

let cuerpo3 = document.getElementById("compra");
let formularioCompra = document.createElement("div");
formularioCompra.className = "formularioCompra";
formularioCompra.innerHTML = //agregar aqui el formulario que ingrese cantidad y luego el calculo 
    `
    <h5>Finalice su compra</h5>
<div class = "divForm1">
    <h5>Bebida:</h5>
    <form action="" class="nombre" id = "formNomb">
        <label for="text"></label>
        <input type="text" name="nombre" id="agregar" placeholder="">
    </form>
</div>
<div class = "divForm2" id = "formCant">
    <h5>Ingrese la cantidad:</h5>
    <form action="" class="cantidad">
        <label for="number"></label>
        <input type="number" name="cantidad" id="" placeholder="Ingrese la cantidad">
    </form>
</div>
<div class = "divForm3" id = "formTot">
    <h5>Total a pagar: </h5>
    <form action="" class="cantidad">
        <label for="number"></label>
        <input type="number" name="cantidad" id="" placeholder="TOTAL">
    </form>
</div>
<button type = "submit" id = "btn-compra">COMPRAR</button>
`;
cuerpo3.append(formularioCompra);

let formularioNombre = document.getElementById("formTot");
const pagar = () => {
    let cantidadStock1 = resta(producto.cantidad, cantidad);
    let precioF = resta(suma(mult(cantidad, producto.precio), iva(producto.precio)), producto.descuento);
    let precioP = document.createElement("h4");
    precioP.innerHTML = `El valor de cada botella es de $${producto.precio}. Su valor final de compra + impuestos es igual= $${precioF}.`;
} */
/* let productoAgr = document.getElementById(`boton${producto.id}`);
let productoIng = localStorage.getItem("agregar");
 
 
/* let nombre = prompt("Ingrese su nombre");
let edad = parseInt(prompt("Ingrese su edad"));
let direccion = prompt("Ingrese su direccion de residencia");
 
const persona1 = new Persona(nombre, edad, direccion);
 
sessionStorage.setItem("persona1", JSON.stringify(persona1)); */

let cuerpo4 = document.getElementById("envio");
let formularioEnvio = document.createElement("div");
formularioEnvio.className = "formularioEnvio";
formularioEnvio.innerHTML = `<h3>Utilice nuestro sistema de envio personalizado</h3>
    <br>
    <h3>Ingrese sus datos por favor</h3>
    <form action="" id="nombre">
        <input type="text" name="nombre" id="" placeholder="ingrese su nombre">
    </form>
    <button id = "botonEnvio">ENVIAR</button>
    <br>
    `;/* <h4>Nombre: ${persona1.nombre}</h4>
    <h4>Edad: ${persona1.edad}</h4>
    <h4>Dirección: ${persona1.direccion}</h4> */
envio.append(formularioEnvio);


let footer = document.getElementById("pie-de-pagina");
let derechos = document.createElement("div");
derechos.className = "derechos-autor";
derechos.innerHTML = "<p>&copy; 2023 Company, Inc. todos los derechos reservados.</p>";
footer.append(derechos);
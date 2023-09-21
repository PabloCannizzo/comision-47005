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
    { id: 1, nombre: "licores", categoria: "alcohol", precio: 3500, cantidad: 25, descuento: 400, imagen: "./assets/img/licores.png " },
    { id: 2, nombre: "whiskies", categoria: "alcohol", precio: 60000, cantidad: 30, descuento: 2000, imagen: "./assets/img/whiskies.png " },
    { id: 3, nombre: "vinos", categoria: "alcohol", precio: 13000, cantidad: 42, descuento: 1000, imagen: "./assets/img/vinos.png " },
    { id: 4, nombre: "cocteles", categoria: "alcohol", precio: 7440, cantidad: 20, descuento: 1100, imagen: "./assets/img/cocteles.png " },
    { id: 5, nombre: "cerveza", categoria: "alcohol", precio: 1200, cantidad: 50, descuento: 350, imagen: "./assets/img/cerveza.png " },
    { id: 6, nombre: "fernet", categoria: "alcohol", precio: 2000, cantidad: 45, descuento: 300, imagen: "./assets/img/fernet.png " },
    { id: 7, nombre: "jugos", categoria: "sin alcohol", precio: 400, cantidad: 40, descuento: 150, imagen: "./assets/img/jugos.png " },
    { id: 8, nombre: "gaseosas", categoria: "sin alcohol", precio: 600, cantidad: 50, descuento: 200, imagen: "./assets/img/gaseosas.png " },
    { id: 9, nombre: "energizantes", categoria: "sin alcohol", precio: 600, cantidad: 50, descuento: 300, imagen: "./assets/img/energizantes.png " },
    { id: 10, nombre: "aguas", categoria: "sin alcohol", precio: 400, cantidad: 50, descuento: 100, imagen: "./assets/img/agua.png " }
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

const inicioFormulario = document.getElementById("inicio");

const mostrarMensaje = (title, text, type) => {
    Swal.fire(title, text, type);
};

inicioFormulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const pass = document.getElementById("password").value;
    fetch("./usuarios.json")
        .then((response) => response.json())
        .then((users) => {
            const user = users.find((user) => user.nombre === nombre);
            if (user) {
                if (pass === user.password) {
                    mostrarMensaje(`¡Buen día, ${user.nombre}!`, "Redireccionando...", "success");
                    setTimeout(() => {
                        location.href = "./index.html";
                    }, 1500);
                } else {
                    mostrarMensaje("Error al iniciar sesión", "Contraseña incorrecta.", "error");
                }
            } else {
                mostrarMensaje("Error al iniciar sesión", "Nombre incorrecto.", "error");
            }
        });
});


const cuerpo = document.getElementById("entrada");
cuerpo.className = "cuerpo";
const div1 = document.createElement("div");
div1.className = "bienvenida";
div1.innerHTML = `<h2>Bienvenido a LiquorStore nuestra tienda de bebidas online</h2>
<br>
<h3>La mejor bebida para las mejores personas</h3>
<br>
<h4>A continuación ingrese la categoria de bebida que desea comprar...</h3>`;
entrada.append(div1);


let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let body = document.getElementById("cuerpo");

const mostrarProductos = (productos) => {
    const contenedorProductos = document.querySelector(".product-list");
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
            Swal.fire({
                position: 'top-end',
                whith: '500px',
                margin: '20px',
                icon: 'success',
                title: 'Producto agregado al carrito!',
                showConfirmButton: false,
                timer: 1500
            })
        });
    });
};

const agregarAlCarrito = (id) => {
    if (!carrito.some((producto) => producto.id === id)) {
        const producto = productos.find((producto) => producto.id === id);
        carrito.push({ ...producto, cantidad: 1 });
    } else {
        const producto = carrito.find((producto) => producto.id === id);
        producto.cantidad++;
    }
    localStorage.setItem("carrito", JSON.stringify(carrito));
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
                Swal.fire({
                    title: 'Está seguro de querer eliminarlo?',
                    //text: "El proceso sera irreversible",
                    icon: 'CUIDADO',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Si, eliminar!'
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire(
                            'Eliminado!',
                            'Su producto fue eliminado del carrito.',
                            'success'
                        )
                    }
                    else {
                        Swal.fire(
                            'Su producto no se eliminará!'
                        )
                    }
                })
            });

            const decrementar = document.getElementById(`decrementar-${producto.id}`);
            decrementar.addEventListener("click", () => {
                decrementarProducto(producto.id);
            });

            const incrementar = document.getElementById(`incrementar-${producto.id}`);
            incrementar.addEventListener("click", () => {
                incrementarProducto(producto.id);
            });

            /* const totPagar = document.getElementById("pagar");
            totPagar.addEventListener("submit", () => {
                localStorage.setItem("comprado", JSON.stringify(carrito));
            }); */
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
//<button type = "submit" id = "pagar" class="buttonP">PAGAR</button>
const actualizarTotal = (contenedor) => {
    const total = carrito.reduce((acumulador, producto) => suma(acumulador, suma(producto.precio, iva(producto.precio * producto.cantidad))), 0);
    contenedor.textContent = `Valor final a abonar + IVA = $${total}`;
};


mostrarProductos(productos);
mostrarCarrito();


const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const buscador = document.getElementById("buscador");
    const filtro = productos.filter((producto) => producto.nombre.includes(buscador.value));
    mostrarProductos(filtro);
});

const footer = document.getElementById("pie-de-pagina");
const derechos = document.createElement("div");
derechos.className = "derechos-autor";
derechos.innerHTML = "<p>&copy; 2023 Company, Inc. todos los derechos reservados.</p>";
footer.append(derechos);
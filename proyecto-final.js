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
    { id: 1, nombre: "licores", categoria: "alcohol", precio: 3500, cantidad: 25, descuento: 400 },
    { id: 2, nombre: "whiskies", categoria: "alcohol", precio: 60000, cantidad: 30, descuento: 2000 },
    { id: 3, nombre: "vinos", categoria: "alcohol", precio: 13000, cantidad: 42, descuento: 1000 },
    { id: 4, nombre: "cocteles", categoria: "alcohol", precio: 7440, cantidad: 20, descuento: 1100 },
    { id: 5, nombre: "cerveza", categoria: "alcohol", precio: 1200, cantidad: 50, descuento: 350 },
    { id: 6, nombre: "fernet", categoria: "alcohol", precio: 2000, cantidad: 45, descuento: 300 },
    { id: 7, nombre: "jugos", categoria: "sin alcohol", precio: 400, cantidad: 40, descuento: 150 },
    { id: 8, nombre: "gaseosas", categoria: "sin alcohol", precio: 600, cantidad: 50, descuento: 200 },
    { id: 9, nombre: "energizantes", categoria: "sin alcohol", precio: 600, cantidad: 50, descuento: 300 },
    { id: 10, nombre: "aguas", categoria: "sin alcohol", precio: 400, cantidad: 50, descuento: 100 }
]

let header = document.getElementById("encabezado");
encabezado.className = "encabezado";
let h1 = document.createElement("div");
//let parrafo = document.createElement("p");
h1.innerHTML = `<a href="./index.html"><h1>LiquorStore</h1></a>
<p>tienda de bebidas online</p>`;
h1.className = "verde";
header.append(h1);


//alert("Bienvenido a LiquorStore");

class Persona {
    constructor(nombre, edad, direccion) {
        this.nombre = nombre;
        this.edad = edad;
        this.direccion = direccion;
    }
}



let cuerpo = document.getElementById("cuerpo");
cuerpo.className = "cuerpo";

//if ((persona1.nombre != "") && (persona1.edad >= 18)) {

let div1 = document.createElement("div");
div1.className = "bienvenida";
div1.innerHTML = `<h2>Bienvenido a nuestra tienda de bebidas online</h2>
<br>
<h3>A continuación ingrese la categoria de bebida que desea comprar...</h3>`;
cuerpo.append(div1);
productos.forEach((producto) => {
    let div2 = document.createElement("div");
    div2.className = "div";
    div2.innerHTML =
        `<img src="" alt="${producto.imagen}">
        <b>Precio c/u: $ ${producto.precio}</b>
        <h5>Producto: ${producto.nombre}</h5>
            <h5>Categoria: ${producto.categoria}</h5>
            <h6>Stock disponible: ${producto.cantidad} unidades</h6>
            <br>
            <button id = "boton${producto.id}">AGREGAR</button>
            <br>
            `;
    cuerpo.append(div2);

    let boton1 = document.getElementById(`boton${producto.id}`);
    const agregar = (nombre) => {
        alert(`El producto ${nombre} fue agregado al carrito`);
        localStorage.setItem(`SE AGREGO AL CARRITO: ${nombre}`, true);
        /* let producto = productos.find((item) => item.id === nombre);
        console.log(producto); */
    };
    boton1.addEventListener("click", () => agregar(producto.nombre));
    //});
});
//veeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeerrrrrrrrrrrrrrrrrrrrrrrrrr

let cuerpo2 = document.getElementById("cuerpo");
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
const pagar = () =>{
    let cantidadStock1 = resta(producto.cantidad, cantidad);
    let precioF = resta(suma(mult(cantidad, producto.precio), iva(producto.precio)), producto.descuento);
    let precioP = document.createElement("h4");
    precioP.innerHTML = `El valor de cada botella es de $${producto.precio}. Su valor final de compra + impuestos es igual= $${precioF}.`;
}
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
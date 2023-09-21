const suma = (a, b) => a + b;
const mult = (a, b) => a * b;
const resta = (a, b) => a - b;
const iva = (x) => x * 0.21;



class Producto {
    constructor(nombre, categoria, precio, cantidad, descuento) {
        this.nombre = nombre,
            this.categoria = categoria,
            this.precio = precio,
            this.cantidad = cantidad,
            this.descuento = descuento
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
let h1 = document.createElement("h1");
let parrafo = document.createElement("p");
h1.innerHTML = "LiquorStore";
parrafo.innerHTML = "tienda de bebidas online";
h1.className = "verde";

header.append(h1, parrafo); 

alert("Bienvenido a LiquorStore");
//alert("A continuación le pediremos unos datos, con el fin de brindarle una mejor atención, Gracias!"); 

class Persona {
    constructor(nombre, edad, direccion) {
        this.nombre = nombre;
        this.edad = edad;
        this.direccion = direccion;
    }
}

//let nombre = prompt("Ingrese su nombre");
let edad = parseInt(prompt("Ingrese su edad"));
//let direccion = prompt("Ingrese su direccion de residencia");

const persona1 = new Persona(/* nombre, */ edad/* , direccion */);

sessionStorage.setItem("persona1", JSON.stringify(persona1));

//Agregar mas funciones del storage y json
/* let usuario;
let usuarioStorage = sessionStorage.getItem("persona1");
if (usuarioStorage =! ""){
    usuario = usuarioStorage;
    alert(`Bienvenido nuevamente ${persona1.nombre}`);
}
else{
    usuario = prompt("ingrese su nombre");
    sessionStorage.setItem("usuario", usuario);
    alert(`Bienvenido por primera vez a LiquorStore`);
} */
/* sessionStorage.setItem("nombre", persona1.nombre);
sessionStorage.setItem("edad", persona1.edad);
sessionStorage.setItem("direccion", persona1.direccion); */


/* const agregar = (nombre) => {
    alert(`El producto ${nombre} fue agregado al carrito`);
    localStorage.setItem(`SE AGREGO AL CARRITO: ${nombre}`, true);
    /* let producto = productos.find((item) => item.id === nombre);
    console.log(producto); */
//}; 

let cuerpo = document.getElementById("cuerpo");
cuerpo.className = "cuerpo";

if /* ((persona1.nombre != "") && */ (persona1.edad >= 18) {

    let div1 = document.createElement("div");
    div1.className = "bienvenida";
    div1.innerHTML = `<h2>Bienvenido ${persona1.nombre} a nuestra tienda de bebidas online</h2>
    <br>
    <h3>A continuación ingrese la categoria de bebida que desea comprar...</h3>`;
    cuerpo.append(div1);
    productos.forEach((producto) => {
        let div2 = document.createElement("div");
        div2.className = "div";
        div2.innerHTML =
            `<h4>Producto: ${producto.nombre}</h4>
            <h4>Categoria: ${producto.categoria}</h4>
            <b>Precio c/u: $ ${producto.precio}</b>
            <h4>Stock disponible: ${producto.cantidad} unidades</h4>
            <br>
            <form action="" class="cantidad">
                <label for="number"></label>
                <input type="number" name="cantidad" id="" placeholder="Ingrese la cantidad">
            </form>
            <br>
            <button id = "boton${producto.id}">AGREGAR</button>
            <br>
            <hr />
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
    });

    let div3 = document.createElement("div");
    div3.className = "envio";
    div3.innerHTML = `<h3>Utilice nuestro sistema de envio personalizado</h3>
    <br>
    <h3>CONFIRME SI SUS DATOS INGRESADOS SON CORRECTOS</h3>
    <h4>Nombre: ${persona1.nombre}</h4>
    <h4>Edad: ${persona1.edad}</h4>
    <h4>Dirección: ${persona1.direccion}</h4>
    <button id = "botonEnvio">ENVIAR</button>
    <button id = "botonModificar">MODIFICAR</button>
    <br>
    `;
    cuerpo.append(div3);

    let boton2 = document.getElementById(`botonEnvio`);
    //let boton3 = document.getElementById(`botonModificar`);
        const enviar = (productos) => {
            let comprados = "Productos a enviar\n";
            productos.forEach((producto, index) => {
                comprados += `${index + 1}. ${producto.nombre}\n`;
            });
            //comprados += "Elija una opción escribiendo el número correspondiente:";
            const opcion = parseInt(prompt(comprados));

            if (opcion >= 1 && opcion <= productos.length) {
                const producto = productos[opcion - 1];
                let mensaje = `
                Todos sus productos seran enviados:
                Usted eligio: ${producto.nombre}`;
                alert(mensaje);
            }
            localStorage.setItem(`SE ENVIARÁ: ${nombre}`, true);
        };

        /* const agregar = (nombre) => {
            alert(`El producto ${nombre} fue agregado al carrito`);
            localStorage.setItem(`SE AGREGO AL CARRITO: ${nombre}`, true); */
            /* let producto = productos.find((item) => item.id === nombre);
            console.log(producto); */
        
        /* boton.addEventListener("click", () => agregar(producto.nombre));
 */
}
else if (/* (persona1.nombre != "") && */ (18 > persona1.edad)) {
    let div3 = document.createElement("div");
    div3.className = "categorias";
    div3.innerHTML = `
        <h2>Bienvenido ${persona1.nombre} a nuestra tienda de bebidas online</h2>
        <br>
        <h3>Le informamos que la venta de alcohol a menores de 18 años esta PROHIBIDA. Disculpe las molestias!</h3>
        <br>
        <h3>Contamos con una amplia variedad de bebidas "SIN ALCOHOL" dentro nuestro stock: Gaseosas, Jugos, aguas, entre otras. Seleccione alguna de las opcione a continuación:...</h3>
        <br>`;

    let productosSinAlcohol = productos.filter(producto => producto.categoria === "sin alcohol");
    productosSinAlcohol.forEach((producto) => {
        let div4 = document.createElement("div");
        div4.className = "div";
        div4.innerHTML = `
        <h4> Producto: ${producto.nombre}</h4 >
        <h4>Categoria: ${producto.categoria}</h4>
        <b>Precio c/u: $ ${producto.precio}</b>
        <h4>Stock disponible: ${producto.cantidad} unidades</h4>
        <br>
        <input type = "number" name="cantidad" id="" placeholder="Ingrese la cantidad"></input>
        <button id = "boton${producto.id}">AGREGAR</button>
        <br>
        <hr />`;
        cuerpo.append(div3, div4);

        let boton = document.getElementById(`boton${producto.id}`);
        boton.addEventListener("click", () => agregar(producto.nombre));
    });
}
else {
    let div5 = document.createElement("div");
    div5.className = "div5";
    div5.innerHTML = `<h3 class="datosFaltantes"> Debe completar con los datos requeridos</h3 > 
    <div class="boton-recargar">
        <button class="continuar">
            <a href="./index.html">
                <h5>Recargar pagina</h5>
            </a>
        </button>
    </div>`;
    cuerpo.append(div5);
}

let footer = document.getElementById("pie-de-pagina");
let derechos = document.createElement("div");
derechos.className = "derechos-autor"
derechos.innerHTML = `<p>&copy; 2023 Company, Inc. todos los derechos reservados.</p>`;
footer.append(derechos);
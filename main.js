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
parrafo.className = "subtitulo";
header.append(h1, parrafo); // bien

alert("Bienvenido a LiquorStore");
//alert("A continuación le pediremos unos datos, con el fin de brindarle una mejor atención, Gracias!"); 

class Persona {
    constructor(nombre, edad, direccion) {
        this.nombre = nombre;
        this.edad = edad;
        this.direccion = direccion;
    }
}

let nombre = prompt("Ingrese su nombre");
let edad = parseInt(prompt("Ingrese su edad"));
let direccion = prompt("Ingrese su direccion de residencia");

const persona1 = new Persona(nombre, edad, direccion);

sessionStorage.setItem("persona1", JSON.stringify(persona1));
/* sessionStorage.setItem("nombre", persona1.nombre);
sessionStorage.setItem("edad", persona1.edad);
sessionStorage.setItem("direccion", persona1.direccion); */

/* let div1 = document.createElement("div");
div1.className = "categorias";
div1.innerHTML = `<h2>Bienvenido ${persona1.nombre} a nuestra tienda de bebidas online</h2>
<h3>A continuación ingrese la categoria de bebida que desea comprar...</h3>`;
cuerpo.append(div1); */
/* 
if ((persona1.nombre != "") && (persona1.edad >= 18)) {
    alert(`Bienvenido ${persona1.nombre} a nuestra tienda online de bebidas.`);
    alert("A continuación ingrese la categoria de bebida que desea comprar");
    while (nombre.toLowerCase() !== "esc") {
        if (persona1.edad >= 18) {
            let opciones = "Opciones de bebidas con y sin alcohol:\n";
            productos.forEach((producto, index) => {
                opciones += `${index + 1}. ${producto.nombre}\n`;
            });
            opciones += "Elija una opción escribiendo el número correspondiente:";

            const opcion = parseInt(prompt(opciones));

            if (opcion >= 1 && opcion <= productos.length) {
                const producto = productos[opcion - 1];
                let mensaje = `
                Usted eligio: ${producto.nombre}
                Categoria: ${producto.categoria}
                Precio c/u: $ ${producto.precio}
                Stock disponible: ${producto.cantidad} unidades`;
                alert(mensaje);
                let cantidad = parseInt(prompt("Ingrese la cantidad a comprar: #..."));
                let cantidadStock1 = resta(producto.cantidad, cantidad);
                let precioF = resta(suma(mult(cantidad, producto.precio), iva(producto.precio)), producto.descuento);
                alert(`El valor de cada botella es de $${producto.precio}. Su valor final de compra + impuestos es igual= $${precioF}. Cantidad actual del stock: ${cantidadStock1} unidades.`);
            }
            else {
                alert("La categoria que eligio no se encuentra por el momento. Elija otra variedad de bebida, gracias!");
            }
        }
        nombre = prompt("Si desea consultar un nuevo producto ingreselo a continuación. Caso contrario escriba 'esc' para salir");
    }
    let envio = prompt("Desea elegir nuestro sistema de envio a domicilio?. A continuación seleccione SI o NO");
    if ((envio === "si") || (envio === "SI")) {
        alert(`Confirme sus datos ingresados: 
        Nombre: ${persona1.nombre}
        Edad: ${persona1.edad}
        Dirección: ${persona1.direccion}`);
        let confirmacion = prompt("Si son correctos escriba SI, caso contrario escriba MODIFICAR/NO");
        switch (confirmacion) {
            case "si":
                alert("Excelente, su pedido sera preparado y enviado por nuestro cadete");
                break;
            case "SI":
                alert("Excelente, su pedido sera preparado y enviado por nuestro cadete");
                break;
            default:
                let nombre = prompt("Ingrese nuevamente su nombre");
                let edad = parseInt(prompt("Ingrese nuevamente su edad"));
                let direccion = prompt("Ingrese nuevamente su direccion de residencia");
                const persona2 = new Persona(nombre, edad, direccion);
                while (nombre != "ESC") {
                    alert(`Confirme sus datos:
                    Nombre: ${persona2.nombre}
                    Edad: ${persona2.edad}
                    Direccion: ${persona2.direccion}`);
                    nombre = prompt("Si sus datos son correctos escriba 'ESC' para continuar. Caso contrario debe volver a ingresar sus datos ")
                }//ver como agregar informacion para el envio
                alert("Excelente, su pedido sera preparado y enviado por nuestro cadete");
                break;
        }
    }
    else {
        alert("Excelente, su pedido sera preparado para su posterior retiro por la sucursal. Recuerde que nuestro horario de atención es de Lunes a Viernes de 9:30 hs a 22 hs y días Sabados de 9:30 hs a 14 hs.")
    }
    alert("MUCHAS GRACIAS POR ELEGIRNOS...");
}
else if ((persona1.nombre != "") && (18 > persona1.edad)) {
    alert(`Bienvenido ${persona1.nombre} a nuestra tienda online de bebidas. La venta de alcohol a menores de 18 años esta PROHIBIDA. Disculpe las molestias!`);
    alert("Contamos con una amplia variedad de bebidas sin alcohol dentro nuestro stock: Gaseosas, Jugos, aguas, entre otras. Seleccione alguna de las opcione a continuación:..."); // Para menores de 18 años contamos con 2 

    const productosSinAlcohol = productos.filter(producto => producto.categoria === "sin alcohol");
    while (nombre.toLowerCase() !== "esc") {
        if (persona1.edad < 18) {
            let opcionesSinAlcohol = "Opciones de bebidas sin alcohol:\n";
            productosSinAlcohol.forEach((producto, index) => {
                opcionesSinAlcohol += `${index + 1}. ${producto.nombre}\n`;
            });
            opcionesSinAlcohol += "Elija una opción escribiendo el número correspondiente:";

            const opcion = parseInt(prompt(opcionesSinAlcohol));

            if (opcion >= 1 && opcion <= productosSinAlcohol.length) {
                const producto = productosSinAlcohol[opcion - 1];
                alert(`
                Usted eligio: ${producto.nombre}
                categoria: ${producto.categoria}
                Precio c/u: $ ${producto.precio}
                Stock Disponible: ${producto.cantidad} unidades `);
                let cantidad = parseInt(prompt("Ingrese la cantidad a comprar: #..."));
                let cantidadStock1 = resta(producto.cantidad, cantidad);
                let precioF = resta(suma(mult(cantidad, producto.precio), iva(producto.precio)), producto.descuento);

                alert(`El valor de cada botella es de $${producto.precio}. Su valor final de compra + impuestos es igual= $${precioF}. Cantidad actual del stock: ${cantidadStock1} unidades.`);
                // Resto del código para mostrar información y procesar la compra

            }
            else {
                alert("Opción inválida. Elija una opción válida dentro de la sección");
            }
        }
        // ...
        nombre = prompt("Si desea ingresar un nuevo producto ingreselo a continuación. Caso contrario escriba 'esc' para salir"); //Debe ingresar una categoría de bebida, caso contrario escriba 'ESC' para continuar
    }
    let envio = prompt("Desea elegir nuestro sistema de envio a domicilio?. A continuación seleccione SI o NO");
    if ((envio === "si") || (envio === "SI")) {
        alert(`Confirme sus datos ingresados: 
        Nombre: ${persona1.nombre}
        Edad: ${persona1.edad}
        Dirección: ${persona1.direccion}`);
        let confirmacion = prompt("Si son correctos escriba SI, caso contrario escriba MODIFICAR/NO");
        switch (confirmacion) {
            case "si":
                alert("Excelente, su pedido sera preparado y enviado por nuestro cadete");
                break;
            case "SI":
                alert("Excelente, su pedido sera preparado y enviado por nuestro cadete");
                break;
            default:
                let nombre = prompt("Ingrese nuevamente su nombre");
                let edad = parseInt(prompt("Ingrese nuevamente su edad"));
                let direccion = prompt("Ingrese nuevamente su direccion de residencia");
                const persona3 = new Persona(nombre, edad, direccion);
                while (nombre != "ESC") {
                    alert(`Confirme sus datos:
                    Nombre: ${persona3.nombre}
                    Edad: ${persona3.edad}
                    Direccion: ${persona3.direccion}`);
                    nombre = prompt("Debe volver a ingresar sus datos, caso contrario escriba 'ESC' para continuar")
                }//ver como agregar informacion para el envio
                alert("Excelente, su pedido sera preparado y enviado por nuestro cadete");
                break;
        }
    }
    else {
        alert("Excelente, su pedido sera preparado para su posterior retiro por la sucursal. Recuerde que nuestro horario de atención es de Lunes a Viernes de 9:30 hs a 22 hs y días Sabados de 9:30 hs a 14 hs.")
    }
    alert("MUCHAS GRACIAS POR ELEGIRNOS...");
}
else {
    alert("Debe completar con los datos requeridos");
} */
//-------------------------------------------------------------------------------------

const agregar = (nombre) => {
    alert(`El producto ${nombre} fue agregado al carrito`);
    localStorage.setItem(`SE AGREGO AL CARRITO: ${nombre}`, true);
    /* let producto = productos.find((item) => item.id === nombre);
    console.log(producto); */
};

let cuerpo = document.getElementById("cuerpo");
cuerpo.className = "cuerpo";

if ((persona1.nombre != "") && (persona1.edad >= 18)) {

    let div1 = document.createElement("div");
    div1.className = "bienvenida";
    div1.innerHTML = `<h2>Bienvenido ${persona1.nombre} a nuestra tienda de bebidas online</h2>
    <br>
    <h3>A continuación ingrese la categoria de bebida que desea comprar...</h3>`;
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
        cuerpo.append(div1, div2);


        let boton = document.getElementById(`boton${producto.id}`);
        boton.addEventListener("click", () => agregar(producto.nombre));
    });

}
else if ((persona1.nombre != "") && (18 > persona1.edad)) {
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
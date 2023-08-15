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

/* const producto = []
producto.push(new Producto("licor", "alcohol", 3500, 25));
producto.push(new Producto("whiskie", "alcohol", 60000, 30));
producto.push(new Producto("vino", "alcohol", 13000, 42));
producto.push(new Producto("cocteles", "alcohol", 7440, 20));
producto.push(new Producto("cerveza", "alcohol", 1200, 50));
producto.push(new Producto("fernet", "alcohol", 2000, 45));
producto.push(new Producto("jugos o aguas", "sin alcohol", 3500, 25));
producto.push(new Producto("gaseosas", "sin alcohol", 600, 50)); */

const productos = [
    { nombre: "licores", categoria: "alcohol", precio: 3500, cantidad: 25, descuento: 400 },
    { nombre: "whiskies", categoria: "alcohol", precio: 60000, cantidad: 30, descuento: 2000 },
    { nombre: "vinos", categoria: "alcohol", precio: 13000, cantidad: 42, descuento: 1000 },
    { nombre: "cocteles", categoria: "alcohol", precio: 7440, cantidad: 20, descuento: 1100 },
    { nombre: "cerveza", categoria: "alcohol", precio: 1200, cantidad: 50, descuento: 350 },
    { nombre: "fernet", categoria: "alcohol", precio: 2000, cantidad: 45, descuento: 300 },
    { nombre: "jugos", categoria: "sin alcohol", precio: 400, cantidad: 40, descuento: 150 },
    { nombre: "gaseosas", categoria: "sin alcohol", precio: 600, cantidad: 50, descuento: 200 },
    { nombre: "energizantes", categoria: "sin alcohol", precio: 600, cantidad: 50, descuento: 300 },
    { nombre: "aguas", categoria: "sin alcohol", precio: 400, cantidad: 50, descuento: 100 }
]
alert("Bienvenido a LiquorStore");
alert("A continuación le pediremos unos datos, con el fin de brindarle una mejor atención, Gracias!");

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

if ((persona1.nombre != "") && (persona1.edad >= 18)) {  /* `${nombre}` */
    alert(`Bienvenido ${persona1.nombre} a nuestra tienda online de bebidas. A continuacion le pediremos que ingrese la categoria de bebidas que desea comprar`);
    let nombre = prompt("Ingrese la categoria de bebida que desea");
    /* let filtrados = producto.filter((item) => item.categoria > categoria); */
    while (nombre != "ESC") {
        let producto;
        for (const item of productos) {
            if ((item.nombre === nombre)) {
                producto = item;
            }
        }
        if (producto) {
            let mensaje = `
                Usted eligio: ${producto.nombre}
                Categoria: ${producto.categoria}
                Precio c/u: $ ${producto.precio}
                Stock disponible: ${producto.cantidad} unidades`;
            switch (producto.nombre) {
                case "licores":
                    alert(mensaje);
                    let cantidad = parseInt(prompt("Ingrese la cantidad a comprar: #..."));
                    let cantidadStock1 = resta(producto.cantidad, cantidad);
                    let precioL = resta(suma(mult(cantidad, producto.precio), iva(producto.precio)), producto.descuento);
                    /* producto.vender(); */
                    alert(`El valor de cada botella es de $${producto.precio}. Su valor final de compra + impuestos es igual= $${precioL}. Cantidad actual del stock: ${cantidadStock1} unidades.`);
                    /* alert(mensaje); */
                    break;

                case "cerveza":
                    alert(mensaje);
                    let cantidad2 = parseInt(prompt("Ingrese la cantidad a comprar: #..."));
                    let cantidadStock2 = resta(producto.cantidad, cantidad2);
                    let precioCe = resta(suma(mult(cantidad2, producto.precio), iva(producto.precio)), producto.descuento);
                    alert(`El valor de cada botella es de $${producto.precio}. Su valor final de compra + impuestos es igual= $${precioCe}. Cantidad actual del stock: ${cantidadStock2} unidades.`);
                    break;

                case "gaseosas":
                    alert(mensaje);
                    let cantidad3 = parseInt(prompt("Ingrese la cantidad a comprar: #..."));
                    let cantidadStock3 = resta(producto.cantidad, cantidad3);
                    let precioG = resta(suma(mult(cantidad3, producto.precio), iva(producto.precio)), producto.descuento);
                    alert(`El valor de cada botella es de $${producto.precio}. Su valor final de compra + impuestos es igual= $${precioG}. Cantidad actual del stock: ${cantidadStock3} unidades.`);
                    break;

                case "vinos":
                    alert(mensaje);
                    let cantidad4 = parseInt(prompt("Ingrese la cantidad a comprar: #..."));
                    let cantidadStock4 = resta(producto.cantidad, cantidad4);
                    let precioV = resta(suma(mult(cantidad4, producto.precio), iva(producto.precio)), producto.descuento);
                    alert(`El valor de cada botella es de $${producto.precio}. Su valor final de compra + impuestos es igual= $${precioV}. Cantidad actual del stock: ${cantidadStock4} unidades.`);
                    break;

                case "cocteles":
                    alert(mensaje);
                    let cantidad5 = parseInt(prompt("Ingrese la cantidad a comprar: #..."));
                    let cantidadStock5 = resta(producto.cantidad, cantidad5);
                    let precioC = resta(suma(mult(cantidad5, producto.precio), iva(producto.precio)), producto.descuento);
                    alert(`El valor de cada botella es de $${producto.precio}. Su valor final de compra + impuestos es igual= $${precioC}. Cantidad actual del stock: ${cantidadStock5} unidades.`);
                    break;

                case "whiskies":
                    alert(mensaje);
                    let cantidad6 = parseInt(prompt("Ingrese la cantidad a comprar: #..."));
                    let cantidadStock6 = resta(producto.cantidad, cantidad6);
                    let precioW = resta(suma(mult(cantidad6, producto.precio), iva(producto.precio)), producto.descuento);
                    alert(`El valor de cada botella es de $${producto.precio}. Su valor final de compra + impuestos es igual= $${precioW}. Cantidad actual del stock: ${cantidadStock6} unidades.`);
                    break;

                case "fernet":
                    alert(mensaje);
                    let cantidad7 = parseInt(prompt("Ingrese la cantidad a comprar: #..."));
                    let cantidadStock7 = resta(producto.cantidad, cantidad7);
                    let precioFernet = resta(suma(mult(cantidad7, producto.precio), iva(producto.precio)), descuentoPrecioF);
                    alert(`El valor de cada botella es de $${producto.precio}. Su valor final de compra + impuestos es igual= $${precioFernet}. Cantidad actual del stock: ${cantidadStock7} unidades.`);
                    break;

                case "energizantes":
                    alert(mensaje);
                    let cantidad8 = parseInt(prompt("Ingrese la cantidad a comprar: #..."));
                    let cantidadStock8 = resta(producto.cantidad, cantidad8);
                    let precioEnergizante = resta(suma(mult(cantidad8, producto.precio), iva(producto.precio)), producto.descuento);
                    alert(`El valor de cada lata es de ${producto.precio}. Su valor final de compra + impuestos es igual = $${precioEnergizante}. Cantidad actual del stock: ${cantidadStock8} unidades.`);

                default:
                    alert("La categoria que eligio no se encuentra por el momento. Elija otra variedad de bebida, gracias!");
                    break;
            }
            nombre = prompt("Debe ingresar una categoría de bebida, caso contrario escriba ''ESC para continuar");
            /* Ingrese otra categoria que desee o caso contrario escriba 'ESC' para continuar */
        }
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
                alert("OK");//ver como agregar informacion para el envio
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
    let nombre2 = prompt("Contamos con una amplia variedad de bebidas sin alcohol dentro nuestro stock: Gaseosas, Jugos, aguas, entre otras. Seleccione alguna de las opcione a continuación:..."); /* Para menores de 18 años contamos con 2 */
    while (nombre2 != "ESC") {
        let producto;
        for (const item of productos) {
            if ((item.nombre === nombre2)) {
                producto = item;
            }
        }
        if (producto) {
            let mensaje = `
        Usted eligio: ${producto.nombre}
        categoria: ${producto.categoria}
        Precio c/u: $ ${producto.precio}
        Stock Disponible: ${producto.cantidad} unidades `;
            switch (producto.nombre) {
                case "gaseosas":
                    alert(mensaje);
                    let cantidad9 = parseInt(prompt("Ingrese la cantidad a comprar: #..."));
                    let cantidadStock9 = resta(producto.cantidad, cantidad9);
                    let precioGa = resta(suma(mult(cantidad9, producto.precio), iva(producto.precio)), producto.descuento);
                    alert(`El valor de cada botella es de $${producto.precio}. Su valor final de compra + impuestos es igual= $${precioGa}. Cantidad actual del stock: ${cantidadStock9} unidades.`);
                    break;

                case "jugos":
                    alert(mensaje);
                    let cantidad10 = parseInt(prompt("Ingrese la cantidad a comprar: #..."));
                    let cantidadStock10 = resta(producto.cantidad, cantidad10);
                    let precioJ = resta(suma(mult(cantidad10, producto.precio), iva(producto.precio)), producto.descuento);
                    alert(`El valor de cada botella es de $${producto.precio}. Su valor final de compra + impuestos es igual= $${precioJ}. Cantidad actual del stock: ${cantidadStock10} unidades.`);
                    break;

                    case "aguas":
                    alert(mensaje);
                    let cantidad11 = parseInt(prompt("Ingrese la cantidad a comprar: #..."));
                    let cantidadStock11 = resta(producto.cantidad, cantidad11);
                    let precioA = resta(suma(mult(cantidad11, producto.precio), iva(producto.precio)), producto.descuento);
                    alert(`El valor de cada botella es de $${producto.precio}. Su valor final de compra + impuestos es igual= $${precioA}. Cantidad actual del stock: ${cantidadStock11} unidades.`);
                    break;

                default:
                    alert("La categoria que eligio no se encuentra por el momento en esta sección. Elija otra variedad de bebida, gracias!");
                    break;
            }
            nombre2 = prompt("Debe ingresar una categoría de bebida, caso contrario escriba 'ESC' para continuar");
        }
    }
    let envio = prompt("Desea elegir nuestro sistema de envio a domicilio?. A continuación seleccione SI o NO");
    if ((envio === "si") || (envio === "SI")) {
        alert(`Confirme sus datos ingresados: 
            Nombre: ${persona1.nombre}
            Edad: ${persona1.edad}
            Dirección: ${persona1.direccion}`);
        let confirmacion = prompt("Si son correctos escriba SI, caso contrario escriba MODIFICAR");
        switch (confirmacion) {
            case "si":
                alert("Excelente, su pedido sera preparado y enviado por nuestro cadete");
                break;
            case "SI":
                alert("Excelente, su pedido sera preparado y enviado por nuestro cadete");
                break;
            default:
                alert("OK");//ver como agregar informacion para el envio
                break;
            //ver como agregar informacion para el envio
        }
    }
    else {
        alert("Excelente, su pedido sera preparado para su posterior retiro por la sucursal. Recuerde que nuestro horario de atención es de Lunes a Viernes de 9:30 hs a 22 hs y días Sabados de 9:30 hs a 14 hs.")
    }
    alert("MUCHAS GRACIAS POR ELEGIRNOS...");
}
else {
    alert("Debe completar con los datos requeridos");
}

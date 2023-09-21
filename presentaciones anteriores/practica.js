/* class Producto {
    constructor(nombre, precio, imagen, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
        this.cantidad = cantidad;
    }

    vender() {
        this.cantidad -= 1; // this.cantidad = this.cantidad - 1
    }
}

const producto1 = new Producto(
    "Monitor gamer curvo Samsung C27R500FHL",
    867212,
    "http://1234df",
    5
);

console.log(producto1);
producto1.vender();
console.log(producto1);
 */

const suma = (a, b) => a + b;
const mult = (a, b) => a * b;
const resta = (a, b) => a - b;
const iva = (x) => x * 0.21;
/* const envio = (x) => x + 450 */


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
    alert(`Bienvenido ${persona1.nombre} a nuestra tienda online de bebidas.`);
    /* let nombre = prompt("Ingrese la categoria de bebida que desea"); */
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
                /* while (nombre != "ESC") {
                    let producto;
                    for (const item of productos) {
                        if ((item.nombre === nombre)) {
                            producto = item;
                        }
                    }
                    if (producto) { */
                let mensaje = `
                Usted eligio: ${producto.nombre}
                Categoria: ${producto.categoria}
                Precio c/u: $ ${producto.precio}
                Stock disponible: ${producto.cantidad} unidades`;
                alert(mensaje);
                let cantidad = parseInt(prompt("Ingrese la cantidad a comprar: #..."));
                let cantidadStock1 = resta(producto.cantidad, cantidad);
                let precioF = resta(suma(mult(cantidad, producto.precio), iva(producto.precio)), producto.descuento);
                /* producto.vender(); */
                /* aplicar clase 7 de sumatoria de valores */
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
                alert("Excelente, su pedido sera preparado y enviado por nuestro cadete");//ver como agregar informacion para el envio
                break;
        }
        /* let sumaF = suma(${precioF}, 450);
        alert(`El costo del producto más el envio ($450) sería igual a ${sumaF}`) */
    }
    else {
        alert("Excelente, su pedido sera preparado para su posterior retiro por la sucursal. Recuerde que nuestro horario de atención es de Lunes a Viernes de 9:30 hs a 22 hs y días Sabados de 9:30 hs a 14 hs.")
    }
    alert("MUCHAS GRACIAS POR ELEGIRNOS...");
}
else if ((persona1.nombre != "") && (18 > persona1.edad)) {
    alert(`Bienvenido ${persona1.nombre} a nuestra tienda online de bebidas. La venta de alcohol a menores de 18 años esta PROHIBIDA. Disculpe las molestias!`);
    alert("Contamos con una amplia variedad de bebidas sin alcohol dentro nuestro stock: Gaseosas, Jugos, aguas, entre otras. Seleccione alguna de las opcione a continuación:..."); /* Para menores de 18 años contamos con 2 */
    /* let producto = productos.find((item) => item.categoria != "alcohol"); */
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
}



/* filtrados.find((item) => {
    item.categoria != "alcohol" */
/* let producto; */
/* for (const item of productos) {
    if ((item.nombre === nombre)) {
        producto = item;
    }
}
if (producto) {
    let mensaje = `
    Usted eligio: ${producto.nombre}
    categoria: ${producto.categoria}
    Precio c/u: $ ${producto.precio}
    Stock Disponible: ${producto.cantidad} unidades `;
    alert(mensaje);
    let cantidad = parseInt(prompt("Ingrese la cantidad a comprar: #..."));
    let cantidadStock1 = resta(producto.cantidad, cantidad);
    let precioF = resta(suma(mult(cantidad, producto.precio), iva(producto.precio)), producto.descuento);
    /* producto.vender(); */
/* alert(`El valor de cada botella es de $${producto.precio}. Su valor final de compra + impuestos es igual= $${precioF}. Cantidad actual del stock: ${cantidadStock1} unidades.`);
}
else {
alert("La categoria que eligio no se encuentra por el momento. Elija otra variedad de bebida dentro de esta sección, gracias!");
}
/* }); */
/* nombre = prompt("Debe ingresar una categoría de bebida, caso contrario escriba 'ESC' para continuar"); */
//} 


//-------------------SACADO DE 2DA ENTREGA-----------------------------------


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

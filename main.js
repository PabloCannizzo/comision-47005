const suma = (a, b) => a + b;
const mult = (a, b) => a * b;
const resta = (a, b) => a - b;
const iva = (x) => x * 0.21;

alert("Bienvenido a LiquorStore");
alert("A continuación le pediremos unos datos, con el fin de brindarle una mejor atención, Gracias!")
let nombre = prompt("Ingrese su nombre");
let edad = parseInt(prompt("Ingrese su edad"));
if ((nombre != "") && (edad >= 18)) {
    alert(`Bienvenido ${nombre} a nuestra tienda online de bebidas. A continuacion le pediremos que ingrese la categoria de bebidas que desea comprar`);
    let categoria = prompt("Ingrese la categoria de bebida que desea");
    while (categoria != "ESC") {
        switch (categoria) {
            case "licor":
                alert("Usted eligio categoria: licores");
                let cantidad1 = parseInt(prompt("Ingrese la cantidad a comprar: #..."));

                let precioProductoL = 3500;
                let descuentoPrecioL = 400;
                let precioL = resta(suma(mult(cantidad1, precioProductoL), iva(precioProductoL)), descuentoPrecioL);
                alert(`El valor de cada botella es de $3500. Su valor final de compra + impuestos es igual= $${precioL}`);
                break;
            case "cerveza":
                alert("Usted eligio categoria: Cerveza");
                let cantidad2 = parseInt(prompt("Ingrese la cantidad a comprar: #..."));

                let precioProductoCe = 1200;
                let descuentoPrecioCe = 350;
                let precioCe = resta(suma(mult(cantidad2, precioProductoCe), iva(precioProductoCe)), descuentoPrecioCe);
                alert(`El valor de cada botella es de $1200. Su valor final de compra + impuestos es igual= $${precioCe}`);
                break;
            case "gaseosa":
                alert("Usted eligio categoria: Gaseosa");
                let cantidad3 = parseInt(prompt("Ingrese la cantidad a comprar: #..."));

                let precioProductoG = 600;
                let descuentoPrecioG = 200;
                let precioG = resta(suma(mult(cantidad3, precioProductoG), iva(precioProductoG)), descuentoPrecioG);
                alert(`El valor de cada botella es de $600. Su valor final de compra + impuestos es igual= $${precioG}`);
                break;
            case "vino":
                alert("Usted eligio categoria: Vino");

                let cantidad4 = parseInt(prompt("Ingrese la cantidad a comprar: #..."));

                let precioProductoV = 13000;
                let descuentoPrecioV = 1000;
                let precioV = resta(suma(mult(cantidad4, precioProductoV), iva(precioProductoV)), descuentoPrecioV);
                alert(`El valor de cada botella es de $13000. Su valor final de compra + impuestos es igual= $${precioV}`);
                break;
            case "cocteles":
                alert("Usted eligio categoria: cocteles");
                let cantidad5 = parseInt(prompt("Ingrese la cantidad a comprar: #..."));

                let precioProductoC = 7440;
                let descuentoPrecioC = 1100;
                let precioC = resta(suma(mult(cantidad5, precioProductoC), iva(precioProductoC)), descuentoPrecioC);
                alert(`El valor de cada botella es de $7440. Su valor final de compra + impuestos es igual= $${precioC}`);
                break;
            case "whiskie":
                alert("Usted eligio categoria: Whiskie");

                let cantidad6 = parseInt(prompt("Ingrese la cantidad a comprar: #..."));

                let precioProductoW = 60000;
                let descuentoPrecioW = 2000;
                let precioW = resta(suma(mult(cantidad6, precioProductoW), iva(precioProductoW)), descuentoPrecioW);
                alert(`El valor de cada botella es de $60.000. Su valor final de compra + impuestos es igual= $${precioW}`);
                break;
            case "fernet":
                alert("Usted eligio categoria: Fernet");
                let cantidad7 = parseInt(prompt("Ingrese la cantidad a comprar: #..."));

                let precioProductoFernet = 2000;
                let descuentoPrecioF = 300;
                let precioFernet = resta(suma(mult(cantidad7, precioProductoFernet), iva(precioProductoFernet)), descuentoPrecioF);
                alert(`El valor de cada botella es de $2000. Su valor final de compra + impuestos es igual= $${precioFernet}`);
                break;
            default:
                alert("La categoria que eligio no se encuentra por el momento. Elija otra variedad de bebida, gracias!");
                break;
        }
        categoria = prompt("Ingrese otra categoria que desee o caso contrario presione ESC para continuar");
    }
}
else if ((nombre != "") && (18 > edad)) {
    alert(`Bienvenido ${nombre} a nuestra tienda online de bebidas. La venta de alcohol a menores de 18 años esta PROHIBIDA. Disculpe las molestias!`);
    let categoria2 = prompt("Para menores de 18 años contamos con 2 categorias de bebidas, Gaseosas o Jugos:");
    while (categoria2 != "ESC") {
        switch (categoria2) {
            case "gaseosas":
                alert("Usted eligio categoria: Gasesosas.");
                let cantidad8 = parseInt(prompt("Ingrese la cantidad a comprar: #..."));

                let precioProductoGasesosa = 600;
                let descuentoPrecioPorMayor = 200;

                let precioGasesosa = resta(suma(mult(cantidad8, precioProductoGasesosa), iva(precioProductoGasesosa)), descuentoPrecioPorMayor);
                alert(`El valor de cada botella es de $600. Su valor final de compra + impuestos es igual= $${precioGasesosa}`);
                break;
            case "jugos":
                alert("Usted eligio categoria: Jugos o Aguas");
                let cantidad9 = parseInt(prompt("Ingrese la cantidad a comprar: #..."));

                let precioProductoJugo = 400;
                let descuentoPrecioJ = 150;
                let precioJugos = resta(suma(mult(cantidad9, precioProductoJugo), iva(precioProductoJugo)), descuentoPrecioJ);
                alert(`El valor de cada botella es de $400. Su valor final de compra + impuestos es igual= $${precioJugos}`);
                break;
            default:
                alert("La categoria que eligio no se encuentra por el momento en esta sección. Elija otra variedad de bebida, gracias!");
                break;
        }
        categoria2 = prompt("Ingrese otra categoria que desee o caso contrario presione ESC para continuar");
    }
}
else {
    alert("Debe completar con los datos requeridos");
}
alert("MUCHAS GRACIAS POR ELEGIRNOS...");

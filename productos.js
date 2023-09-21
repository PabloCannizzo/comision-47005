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
    { id: 2, nombre: "whiskies", categoria: "alcohol", precio: 60000, cantidad: 30, descuento: 2000, imagen: "../assets/img/whiskies.png.png "  },
    { id: 3, nombre: "vinos", categoria: "alcohol", precio: 13000, cantidad: 42, descuento: 1000, imagen: "../assets/img/vinos.png.png "  },
    { id: 4, nombre: "cocteles", categoria: "alcohol", precio: 7440, cantidad: 20, descuento: 1100, imagen: "../assets/img/cocteles.png.png "  },
    { id: 5, nombre: "cerveza", categoria: "alcohol", precio: 1200, cantidad: 50, descuento: 350, imagen: "../assets/img/cerveza.png.png "  },
    { id: 6, nombre: "fernet", categoria: "alcohol", precio: 2000, cantidad: 45, descuento: 300, imagen: "../assets/img/fernet.png.png "  },
    { id: 7, nombre: "jugos", categoria: "sin alcohol", precio: 400, cantidad: 40, descuento: 150, imagen: "../assets/img/jugos.png.png "  },
    { id: 8, nombre: "gaseosas", categoria: "sin alcohol", precio: 600, cantidad: 50, descuento: 200, imagen: "../assets/img/gaseosas.png.png "  },
    { id: 9, nombre: "energizantes", categoria: "sin alcohol", precio: 600, cantidad: 50, descuento: 300, imagen: "../assets/img/energizantes.png.png "  },
    { id: 10, nombre: "aguas", categoria: "sin alcohol", precio: 400, cantidad: 50, descuento: 100, imagen: "../assets/img/agua.png.png "  }
]
const ventas = [
    { producto: "teclado", detalles: { precio: 50, unidades: 3 } },
    { producto: "mouse", detalles: { precio: 20, unidadees: 5 } },
    { producto: "audifonos", detalles: { precio: 30, unidades: 2 } },
];

function detallesPrimerProducto() {
    const [,,, { detalles: { precio, unidades } }] = ventas;
    console.log(`El precio es ${precio} y las unidades son ${unidades}`);

    return precio * unidades;
}

console.log(detallesPrimerProducto());

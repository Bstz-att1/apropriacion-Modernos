function procesarPedido(pedido, ...extras) {
    const { cliente, producto, cantidad } = pedido;
    return {
        cliente,
        producto,
        cantidad,
        extras
    };
}

const pedido = { cliente: 'Juan', producto: 'Laptop', cantidad: 1 };
const resultado = procesarPedido(pedido, 'Garantía extendida', 'Envío rápido');
console.log(resultado);
const pedido2 = { cliente: 'Ana', producto: 'Teléfono', cantidad: 2 };
const resultado2 = procesarPedido(pedido2, 'Funda protectora', 'Audífonos inalámbricos');
console.log(resultado2);
const pedido3 = { cliente: 'Luis', producto: 'Tablet', cantidad: 1 };
const resultado3 = procesarPedido(pedido3, 'Teclado Bluetooth', 'Soporte para tablet');
console.log(resultado3);
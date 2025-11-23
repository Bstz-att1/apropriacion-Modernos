const inventario = ["camara", "tripode", "microfono"];

function agregarinventario(lista, ...nuevoitem) {
    const nuevalista = [...lista, ...nuevoitem]
    console.log(`lista actualizada, ${nuevalista.length} items`);
    return nuevalista
}

const nuevalista = agregarinventario(inventario, "usb" , "telefono", "cpu", "gpu");

console.log(inventario);
console.log(nuevalista);


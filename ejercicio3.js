function registrarActividad(actividad) {
    const {nombre, notas } = configurarUsuario;

    try {
        if (!nombre || !notas) {
            throw new Error("Las propiedas no existen")
        } else {
            console.log("Usuario registrado");
        }
    } catch (error) {
        console.log(error.message);
        
    }
}

const usuario = {
    nombre: "Dan",
    fecha: "21/11/2025",
    notas: [1, 2, 3]
}

registrarActividad(usuario)
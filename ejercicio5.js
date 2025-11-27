const perfil = {
    nombre: "Godinez",
    pais: "Colombia",
};

const actualizarPerfil = (perfil, ...nuevosDatos) =>{
    const nuevoperfil = { ...perfil };

    for (const element of nuevosDatos) {
        for (const key in element) {
            nuevoperfil[key] = element[key];
        }
    }
    return nuevoperfil;
}

const nuevosDatos = actualizarPerfil(perfil,
    { edad: 22 },
    { ciudad: "Medellín" },
    { genero: "Masculino" }
);

console.log(nuevosDatos);
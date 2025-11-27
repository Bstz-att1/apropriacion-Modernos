function evaluar(...valores) {
    try {
        for (let i = 0; i < valores.length; i++) {
            const valor = valores[i];
            if (typeof valor !== 'number') {
                throw new Error(`El valor "${valor}" en la posicion ${i} no es un número.`);
            }
        }
        let suma = 0;
        for (const valor of valores) {
            suma += valor;
        }
        const promedio = suma / valores.length;
        console.log("Todos los valores son válidos. El promedio es:", promedio);
        return promedio;
    } catch (error) {
        console.error("Error en la validación:", error.message);
        return null;
    }
}

evaluar(10, 20, 30);  // Ejemplo con un valor inválido
evaluar(10, "veinte", 30);  // Ejemplo con un valor inválido
const defaults = { tema: "claro", idioma: "es" };

function configurarUsuario(defaults, personalizadas) {
  // Combine defaults and personalizadas without mutating either using spread
  const configuracionCombinada = { ...defaults, ...personalizadas };

  // Return the combined configuration object (both tema and idioma)
  return configuracionCombinada;
}

// Ejemplo de personalización 1: cambiar el idioma a inglés
const personalizacion1 = { idioma: "en" };
const resultado1 = configurarUsuario(defaults, personalizacion1);
console.log("Personalización 1 - configuración:", resultado1); // debe imprimir { tema: "claro", idioma: "en" }
const { idioma: idioma1 } = resultado1;
console.log("Personalización 1 - idioma extraído:", idioma1); // debe imprimir "en"

// Ejemplo de personalización 2: cambiar el tema y el idioma a francés
const personalizacion2 = { tema: "oscuro", idioma: "fr" };
const resultado2 = configurarUsuario(defaults, personalizacion2);
console.log("Personalización 2 - configuración:", resultado2); // debe imprimir { tema: "oscuro", idioma: "fr" }
const { idioma: idioma2 } = resultado2;
console.log("Personalización 2 - idioma extraído:", idioma2); // debe imprimir "fr"

// Verificar que defaults no se ha modificado
console.log("Defaults después de personalizaciones:", defaults); // debe imprimir { tema: "claro", idioma: "es" }

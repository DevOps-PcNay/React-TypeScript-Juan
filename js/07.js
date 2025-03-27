// Creando dos objetos 
const Productos = {
    nombre: "Tablet",
    precio: 34.56,
    disponible: false
}

const Clientes = {
    nombre : "Juan",
    premiun : true
}

// Para agregar una propiedad de un objeto a otro objeto
const carrito = {
    cantidad : 1,
    ...Productos     // Para agregar el otro objeto se le conoce como "spread operator"
}

console.log (carrito)
console.log (carrito.precio)


const CopiaObjectoReemplazando = {
    ...Productos,
    ...Clientes
}
console.log (" Reemplazando Propiedades del Objecto ", CopiaObjectoReemplazando)


// Uniendo dos completos completamente
const NuevoObjeto = {
    producto : {...Productos},
    cliente : {...Clientes}
}

console.log (NuevoObjeto)

// Uniendo dos objetos completamente 
const NuevoObjeto3 = Object.assign(Productos, Clientes)
console.log("Uniendo Objetos usando -Object.assign - ",NuevoObjeto3)



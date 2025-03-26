// Objetos en JavaScript
// Es uno de los elementos mas usados en JavaScript, Node, React, View, etc
// Un objeto es una coleccion de propiedades 
// Propiedad = Es una asociacion entre clave y valor
// Definiendo un objeto

const producto = {
  nombre : "Tablet", // Propiedad ; nombre = Key ; "Tablet" = Valor
  precio : 300,
  disponible : true
}
console.log (producto)
console.log(typeof producto)

// Para mostrarlo en formato table(tabular) 
console.table(producto)

// Accesando a una de sus propiedades 
console.log(producto.nombre)
console.log(producto.precio)

// Destructing viene definido desde la version de ECJS Ver 6 ya viene implementado
// Extraer la variable y generarla en una linea de codigo.
const { nombre } = producto
console.log (nombre)

// Object Literal Enhacement
// Creando objetos :
const autenticados = false
const usuarios = "Juan"

// Se utilizan cuando se desea retornar varios valores pero dentro de un objeto (funciones)
const NuevoObjeto = {
  autenticado : autenticados,
  usuario : usuarios
}

console.log (NuevoObjeto)


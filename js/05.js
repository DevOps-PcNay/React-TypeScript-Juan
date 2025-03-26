// Objetos - Manipulacion

const Producto ={
  nombre: "Tablet",
  precio: 834.45,
  disponible: false  
}
// Const Permite cambiar el valor de las propiedades del objeto.

// Asignado un valor a una propiedad
Producto.disponible = true

// Agregando otra propiedad el objeto
Producto.imagen = "Imagen.jpg"

console.log(Producto)

// Eliminando una propiedad del objeto.
delete Producto.precio
console.log (Producto)

// Para que no se modifique un objeto.
Object.freeze(Producto)

// Permite modificar solamente las propiedades de un objeto, pero no permite agregar o eliminar una propiedad
Object.seal(Producto)



// Destructuring de dos o mas objetos 
const Producto = {
  nombre : "Tablet",
  precio : 8934.90,
  disponible : false
}

const Cliente = {
  nombre : "Pedro",
  premiun : true,
  direccion : {
    calle : "Calle Sexto ",
    delegacion : "San Antonio"
  }
}

// Accesando a una propiedad con el mismo nombre .
const { nombre } = Producto
const { nombre:nombreCliente, direccion : {calle} } = Cliente
console.log (nombre)
console.log(nombreCliente)

// Un caso de uso es : cuando se importan librerias y tienen el mismo nombre los modulos que se desean utilizar por lo que se tiene que renombrar de esta manera

// Aplicando "Destructuring " aun objeto que este anidado.
console.log(calle)


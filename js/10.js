// Modificando arreglo.
const tecnologias = ["HTML","css","JavaScript","Vergel.js"]

// Mostrando el contenido del arreglo.
console.table(tecnologias)

// Asignando un elemento al arreglo
tecnologias[4] = "Angular"
console.table(tecnologias)

// Agregando un elemento hasta el final del arreglo.
tecnologias.push("NestJs")
console.table(tecnologias)

// en ReactJs se deben utilizar funciones que no cambien los valores
// No se recomienda usar el metodo "push" con React
//Alternativa:, copia un arreglo no muta el arreglo original "tecnologias"
const nuevoArreglo = [...tecnologias,'Go Lands']
console.table(nuevoArreglo)

// Eliminando un elemento del arreglo, para este caso el primer elemento, pero este tambien Muta el areglo original
nuevoArreglo.shift()
console.table(nuevoArreglo)

// Alternativa para evitar que mute el arreglo original para el caso de "Borrar"
// Usando el metodo "Filter" de los arreglos.
const tecnologias2 = tecnologias.filter(function(itemsArreglo){
  //if (itemsArreglo == "HTML"){ // Se excluye "HTML"
  if (itemsArreglo !== "HTML"){ // Se incluye "HTML" solamente.
    return itemsArreglo 
  }
})
console.log(tecnologias2)




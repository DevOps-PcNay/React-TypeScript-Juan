// Tipos de datos

/*
Comentarios en bloque

*/

/*
//Undefined = Se ha creado, pero no se le ha asignado un valor 
let precio
console.log(precio)

// typeof = Nos indica que tipo de dato es una variable
console.log(typeof precio)


// Cadena de textos "string" 
let texto = "Cadena de Texto"
const Producto = "Monitor de 14 Pulg"
console.log (Producto)
console.log (typeof Producto)


// Numbers : En JavaScript todos son numeros : Enteros, flotantes, 
const numero1 = 10
const numero2 = 40.50
console.log(typeof numero1)
console.log(typeof numero2)

// BigInt = numeros muy grandes, se utiliza un constructor para poderlo utilizar
const numeroGrande = BigInt(23482394892389238492923)
console.log (numeroGrande)
console.log (typeof numeroGrande)


// Boolen = Valor booleano "true", "false"
const activo = true
console.log (activo)
console.log (typeof activo) 


// Null = No tiene valor, por lo que no ocupa una direccion de memoria ya que no contiene valor 
// Algunas veces en el codigo se definen las variables de esta manera.
const descuento = null
console.log (descuento)
console.log (typeof descuento)

*/

// Symbol = Se utilizan mas para librerias, ademas se utiliza un constructor.
// Tienen la particularidad de que son unicos aun cuando se definen iguales
const primerSymbol = Symbol(30)
const segundoSymbol = Symbol(30)
console.log (primerSymbol === segundoSymbol)



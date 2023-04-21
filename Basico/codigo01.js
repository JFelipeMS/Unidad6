console.log('Hola Mundo!')

//MANEJO DE VARIABLES
var varhola = 'texto1'
let var01 = 'texto2'
var varhola = 'texto3'

//mutabilidad
varhola = 'Hola Mundo '
var01 = 'JavaScript'

console.log(varhola + var01)

//Declaración de constantes
const PI = 3.1416
console.log(PI)

//declarar variables de tipo numerico
let minumero01 = 10
let minumero02 = -12
let minumero03 = 1.234
console.log(minumero01, minumero02, minumero03)

//declarar variables de tipo booleano
let miboolean01 = true
let miboolean02 = false
console.log(miboolean01, miboolean02)

// declarar variables nulas y undefined
let mivarnula = null
let mivarundefined
console.log(mivarnula, mivarundefined)
mivarundefined = 7
console.log(mivarnula, mivarundefined)

//declarar variables de tipo objeto
let miobjeto01 = {
    minumero : 12,
    mistring : "Hola Mundo JavaScript",
    mibooleano : true,
}
console.log(miobjeto01)
console.log(miobjeto01.minumero)
const object1 = {
    a: 'somestring',
    b: 42,
    c: false
};
console.log(Object.values(object1)); //  esto requiere que la declaracion sea const

//declarar arreglos
const arrayvacio = []  //esto es especial
const array01 = [13, 'Hola Mundo', true, 12.3]
console.log(arrayvacio, array01)
arrayvacio.push(minumero01)
arrayvacio.push('Hola Chicos')
arrayvacio.push(false)
console.log(arrayvacio, array01)
let milista01 = [10, 7, 21, 35, 2]  //lista, porque todos los elementos son del mismo tipo

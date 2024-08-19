console.log("Saludos desde la terminal")

//var, let, const
var a = 10
var a = '10'

let b = 11
//let b = '11' No puedo redefinir

const PI = 3.1416
// PI = 3.1417 

console.log('@@@ concatenar => ', a + b)

/*
let nombre = prompt('Cual es tu nombre')
console.log('@@ nombre =>', nombre)
console.log('@@@ type of =>', typeof nombre)

let edad = prompt('Cual es tu edad')
console.log('@@ nombre =>', parseInt(edad))
console.log('@@@ type of =>', typeof parseInt(edad))¨
*/

console.log('@ document => ', document)
console.log('@ head => ', document.head)
console.log('@ body => ', document.body)
console.log('@ title => ', document.title)
console.log('@ domain => ', document.domain)

document.title = 'Cambiado desde JS'

/*
document. 

getElementById('titulo')
getElementByClassName('miClase')
getElementByTagName('div')

querySelector(selector) '#id' '.clase' 'div'
querySelectorAll

createElement('elemento')
createDocumentFragment()
*/

document.addEventListener('DOMContentLoaded',
    () => {
        console.log('dom => carga todo')
        console.log(document.querySelector('h1'))
})
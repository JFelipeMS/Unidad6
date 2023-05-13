var parrafos = document.getElementsByTagName("p")
console.log(parrafos)
var parrafoN1 = parrafos[0]
console.log(parrafoN1, parrafoN1.innerText, parrafoN1.innerHTML)
/*
for(var i = 0; i < parrafos.length; i++){
    console.log(parrafos[i], parrafos[i].innerText
        , parrafos[i].innerHTML)
}*/
for(var i in parrafos){
    console.log(parrafos[i], parrafos[i].innerText
        , parrafos[i].innerHTML)
}

console.log("Busqueda de objetos por nombre")
var parrafoPorNombre = document.getElementsByName("parrafo_post")
console.log(parrafoPorNombre)
console.log(parrafoPorNombre[0], parrafoPorNombre[0].innerText
    , parrafoPorNombre[0].innerHTML)

console.log("Busqueda de objetos por id")
var parrafoPorId = document.getElementById("p_post")
console.log(parrafoPorId, parrafoPorId.innerText
    , parrafoPorId.innerHTML)

console.log("Busqueda de objetos selector")
var elementos = document.querySelectorAll("#parrafos p")
console.log(elementos)
console.log(elementos[0], elementos[0].innerText
    , elementos[0].innerHTML)

var elementos = document.querySelectorAll(".contacto")
console.log(elementos)
console.log(elementos[0], elementos[0].innerText
    , elementos[0].innerHTML)

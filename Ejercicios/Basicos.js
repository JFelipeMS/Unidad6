/* Sacar el área y perímetro de un cuadrado, ingresando el lado del mismo */
function Cuadrado(L){
    var area = L * L
    var peri = L + L + L + L
    retorno = {lado: L, area: area, perimetro: peri}
    return retorno
}

console.log(Cuadrado(2))
/* Sacar el área y perímetro de un cuadrado, ingresando el lado del mismo */
function Cuadrado(L){
    var area = L * L
    var peri = L + L + L + L
    retorno = {lado: L, area: area, perimetro: peri}
    return retorno
}
console.log(Cuadrado(2))

/* Sacar el área y perímetro de un circulo, ingresando el radio del mismo */
function Circulo(R){
    const PI = 3.1416
    var area = PI * R * R
    var peri = 2 * R * PI
    retorno = {radio: R, area: area, perimetro: peri}
    return retorno
}
console.log(Circulo(2))

/* La tienda CavaVe2 requiere entregar vueltas con el menor número de monedas a 
partir del valor a regresar, los valores de las monedas existentes son $1000, $500, $200, $100 y $50. */
function vueltas(V){
    var Resi = V % 1000
    var Mmil = (V - Resi) / 1000
    var Resi1 = Resi % 500
    var Mqui = (Resi - Resi1) / 500
    Resi = Resi1 % 200
    var Mdos = (Resi1 - Resi) / 200
    Resi1 = Resi % 100
    var Mcie = (Resi - Resi1) / 100
    var Mcin = Resi1 / 50
    retorno = {Vueltas: V, MonedaMil: Mmil, MonedaQui: Mqui, MonedaDos: Mdos, MonedaCie: Mcie, MonedaCin: Mcin}
    return retorno
}
console.log(vueltas(4850))

/* Realizar el algoritmo en un diagrama de flujo, que permita determinar si un número es positivo o negativo */
function PositivoNegativo(N){
    if (N >= 0) {
        return true
    } else
        return false
}
console.log(PositivoNegativo(10) ? "positivo" : "Negativo")
console.log(PositivoNegativo(-7) ? "positivo" : "Negativo")

/* Muestre el precio final de un artículo, si este tiene un iva del 19% y un descuento del 30% */
function PrecioFin(N){
    const IVA = 0.19
    const DESC = 0.3
    let a_iva = N * IVA
    let a_desc = N * DESC
    let precio = N - a_desc + a_iva
    return {PrecioIni: N, iva: a_iva, descuento: a_desc, Valorfin: precio}
}
console.log(PrecioFin(100000))

/* El pago del salario semanal de un trabajador es de $400000, debiendo trabajar 40 horas a la semana, 
después de estas horas, las horas adicionales se pagan al doble, realizar el diagrama de flujo que muestre 
el pago semanal de un trabajador */
function PagoSemanal(H){
    var HE = H - 40
    var PAGO = 400000 + (2 * HE * (400000/40))
    return PAGO
}
console.log(PagoSemanal(50))

/* Realice la sucesión de Fibonacci hasta el N termino */
function Fibonacci(N){
    var A = 0, B = 1
    var sucesion = [A, B]
    for (var M = 1; M <= (N-2); M++){
        var C = A + B
        sucesion.push(C)
        var A = B
        var B = C
    }
    return sucesion
}
console.log(Fibonacci(10))
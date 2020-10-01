// Do not change any of the function names

function invocarCallback(cb) {
    // Invoca al callback `cb`
    cb();
}

function sumarArray(numeros, cb) {
    // Suma todos los números enteros (int/integers) de un array ("numeros")
    // Pasa el resultado a `cb`
    // No es necesario devolver nada
    var suma = numeros.reduce(function(acc, curr) { //utilizo reduce, donde acc representa el acumulador del array y curr el valor actual.
        return acc + curr //devuelvo lo acumulado (acc) sumado al elemento actual.
    })
    cb(suma) //devuelvo la variavle suma invocandola a traves de un cb.
}




function forEach(array, cb) {
    // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
    // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
    array.forEach(function valores(elemento) { //utilizo forEach en el array "array" recorro sus elementos con la funcion valores
        cb(elemento) //invoco cb para cada valor/elemento dentro de la matriz
    })

}


function map(array, cb) {
    // Crea un nuevo array
    // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
    // El nuevo array debe tener la misma longitud que el array del argumento
    var nuevoarray = array.map(function(x) { //utilizo la function .map que me permite crear un nuevo array con los resultados del cb.
        return cb(x) //devuelvo el cb de cadaelemento x
    })
    return nuevoarray //devuelvo el nuevo array denominado "nuevoarray"
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
    invocarCallback,
    sumarArray,
    forEach,
    map,
};
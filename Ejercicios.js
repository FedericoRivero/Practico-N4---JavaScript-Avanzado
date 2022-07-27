console.log('Ejercicio 1');
function cacheFunction(cb) {
    // Usa closures para crear un cache para la funcion cb.
    // la funcion que retornas debe aceptar un solo argumento e invocar a cb con ese argumento
    // cuando la funcion que hayas retornado es invocada de nuevo, deberia guardar el argumento y el resultado de la invocacion
    // cuando la funcion que retornaste sea invocada de nuevo con un argumento con el cual se habia invocado anterioremente, no deberia invocar de nuevo a cb
    // deberia retornar el resultado (previamente guardado)
    // Ejemplo:
    // cb -> function(x) { return x * x; }
    // si invocas la function que retornaste con 5, adentro deberia invocar cb(5) y retornar 25.
    // si la invocas de nuevo con 5, deberia retornar 25 (guardado previament en el cache)
    // Tips, usá un objeto donde cada propiedad sea un argumento, y el valor el resultado.
    // Aqui tu codigo

    var cache = {};
    return function(arg){
        if(cache.hasOwnProperty(arg)){
            return cache[arg];
        }else{
            var result = cb(arg);
            cache[arg] = result;
            return result;
        }
    }
}

const cache = cacheFunction(function(x) {
    return x * x;
}
);
console.log(cache(5));


console.log('Ejercicio 2');
function CadenaInvertida(str) {
    // Instrucción:
    // Dada una cadena, escriba una función recursiva para devolver la cadena invertida. */// Ejemplo:
    // => 'divoco'
    //cadena inversa('covid')
    // Aqui tu codigo

    function inversa(str){
        if(str.length === 0){
            return '';
        }
        return inversa(str.substr(1)) + str[0];
    }
    console.log(inversa(str));
}
CadenaInvertida('divoc');

console.log('Ejercicio 3');
function EnteroMasGrande(array) {
    // Instruction:
    //Dada una matriz, escriba una función recursiva para encontrar el entero más grande en una matriz. */// Ejemplos:
    //maxOf([1, 4, 5, 3])
    // => 5
    //maxOf([3, 1, 6, 8, 2, 4, 5])
    // => 8
    //Aqui tu codigo
    function maxOf(array){
        if(array.length === 0){
            return 0;
        }
        if(array.length === 1){
            return array[0];
        }
        let max = maxOf(array.slice(1));
        if(array[0] > max){
            return array[0];
        }
        return max;
    }
    console.log(maxOf(array));
}
EnteroMasGrande([1, 4, 5, 3]);
EnteroMasGrande([3, 1, 6, 8, 2, 4, 5]);

console.log('Ejercicio 4');
function Permutaciones(str){
    
// Instrucción:
//Dada una cadena, escriba una función recursiva para imprimir una matriz de todas las permutaciones posibles de la cadena. */// Ejemplos:
//permutaciones('abc')
// => ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
//permutaciones('aabc')
// => ["aabc", "aacb", "abac", "abca", "acab", "acba", "baac", "baca", "bcaa", "caab", "caba", " cbaa"]
//Aqui tu codigo

    function permutaciones(str){
        if(str.length === 0){
            return [''];
        }
        let result = [];
        for(let i = 0; i < str.length; i++){
            let rest = permutaciones(str.substr(0, i) + str.substr(i + 1));
            for(let j = 0; j < rest.length; j++){
                result.push(str[i] + rest[j]);
            }
        }
        return result;
    }
    console.log(permutaciones(str));
}
Permutaciones('abc');
Permutaciones('aabc');
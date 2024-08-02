/**
 * Realizar una funcion que invierta un numero
 * invierteNumero(123) = 321
 */
// 123
//   1*10^2       2*10^1      3*10^0
// 123 -> 0
// 
function invertirNumero(numero){ // 123
    let numeroInvertido = 0; // 0
    while(numero > 0){ // 123>0, 12>0, 1>0, 0>0
        numeroInvertido = numeroInvertido * 10 + (numero % 10); // 0+3 = 3, 30 + 2 = 32, 320 + 1 = 321
        numero = Math.floor(numero / 10); // 12 1 0
    }
    return numeroInvertido;
}
console.log(invertirNumero(123456789))


/**
 * Realizar una funcion que dado un numero N, devuelva su representacion en unos
 * transformaAUnos(3) = 111
 * transformaAUnos(4) = 1111
 * transformaAUnos(5) = 11111
 */
function convierteAUnos(numero){ // 4 = 1111
    let unos = 0;
    for (let i = 0; i < numero; i++) { //0<4, 1<4,
        unos = unos+(10**i) // 1 11  
    }
    return unos;
}

console.log(convierteAUnos(5));

/**
 * Realizar una funcion que calcule si un numero es primo
 * esPrimo(8) = false
 * esPrimo(7) = true
 */

/*
    5 es primo
    5 % 1 = 0
    5 % 2 != 0
    5 % 3 != 0
    5 % 4 != 0
    5 % 5 = 0
*/
/*
    4 primo
    4 % 1 = 0
    4 % 2 = 0
    4 % 3 != 0
    4 % 4 = 0
    
*/
function cuentaDivisores(numero){ // 5 -> 0
    let cuentaDeDivisores = 0;
    for(let divisor = 2; divisor < numero; divisor++){
        if(numero % divisor == 0){
            cuentaDeDivisores = cuentaDeDivisores + 1;
        }
    }
    return cuentaDeDivisores;
}

function esPrimo(numero){
    if(cuentaDivisores(numero) == 0){
        return true;
    }
    return false;
}

/**
 * Con apoyo de lo anterior muestra todos los numeros primos entre a y b siendo a<b  
 */

function primosEntreNumeros(a,b){
    console.log(`los numeros primos entre ${a} y ${b}`)
    for (let posiblePrimo=a+1; posiblePrimo<b; posiblePrimo++){
        if(esPrimo(posiblePrimo)){
        
            console.log(posiblePrimo)
        }
    }
}
primosEntreNumeros(1, 30)

/**
 * 
 * 6 -> 1,2,3
 * 8 -> 1 2 4
 * 
 * Hallar todos los numeros perfectos en un intervalo
 * 
 */
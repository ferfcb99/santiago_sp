//quien lo lea es gei
console.log("probando");

/**
 * Function que dice mediante un dato booleano si un numero es par o impar
6 / 2 = 3
6 % 2 = 0

5 / 2 = 2.5
5 % 2 = 1
*/
console.log("--- Ejericio de numero par ---")
function esPar(numero){
    if(numero % 2 == 0){
        return true;
    }
    return false;
}

console.log(esPar(5))
console.log(esPar(8))
console.log(esPar(7))
console.log(esPar(13))

/**
 * Escribir una funcion que reciba un numero N y diga si es multiplo de 3
 */
function Esmultiplo(N,multiplo){
    if (N % multiplo == 0){
        return true
    }
    return false
}
console.log("-------------------------")
console.log("Ejercicio de validar multiplo")
console.log(Esmultiplo(8,3))
console.log(Esmultiplo(9,3))
console.log(Esmultiplo(12,3))
console.log(Esmultiplo(421,3))

/**
 * Calcule la suma de todos los divisores propios de un numero, menos el propioo numero
 * 8 
 * 8 % 1 = 0
 * 8 % 2 = 0 
 * 8 % 3 != 0
 * 8 % 4 = 0
 * 8 % 5 != 0
 * 8 % 6 != 0
 * 8 % 7 != 0
 */
console.log("Ejercicio de suma de divisores propios")
function sumaDivisoresPropios(numero){
    let suma = 0;
    for(let i = 1; i<numero; i++){
        if(numero % i == 0){
            suma = suma + i;
        }
    }
    return suma;
}

console.log(sumaDivisoresPropios(284));
console.log(sumaDivisoresPropios(8));
console.log(sumaDivisoresPropios(97));
console.log(sumaDivisoresPropios(47));

/**
 * Realizar una funcion que reciba un numero y retorne la cantidad de divisores que tiene exeptuando el 1 y el mismo
 * cuentaDivisores(8) = 2
 */
console.log("Ejercicio de Contarin de divisores propios")
function cuentaDivisores(Num){ // 8
    let Cuenta=0 // 0
    for (let j=2; j<Num; j++){ // 2<8, 3<8, 4<8==0
        if (Num%j == 0 ){ // 8%2==0, 8%3!=0, 8%4==0
            Cuenta = Cuenta + 1 // 1 2
        }
    }
    return Cuenta
}
console.log(cuentaDivisores(284));


/**
 * Funcion que reciba un numero y un digito y cuente cuantas veces aparece dicho digito en el numero
 * apareceDigitoEnNumero(13224, 2) = 2
 */
/**
 * 13224, 2, 0
 * 1322, 2, 0
 * 132, 2, 1
 * 13, 2, 2
 * 1, 2, 2
 * 0, 2, 2
 */
console.log("Ejercicio de aparicion de digitos")
function apareceDigitoEnNumero(numero_a_checar, numero_que_checa){ // 456, 4
    let cuentaApariciones = 0;
    while(numero_a_checar > 0){ // 456>0 45>0 4>0 0>0
        let ultimoDigitoActual = numero_a_checar % 10; // 6 5 4
        if(ultimoDigitoActual == numero_que_checa){ // 5==4, 4==4
            cuentaApariciones = cuentaApariciones + 1; // 1
        }
        numero_a_checar = Math.floor(numero_a_checar / 10); // 45 4 0
    }
    return cuentaApariciones;
}

console.log(apareceDigitoEnNumero(456, 5));
console.log(apareceDigitoEnNumero(274682152, 2));
console.log(apareceDigitoEnNumero(456, 7));


/**
 * Realizar una funcion que diga mediante true o false si un numero es oblongo
 * 31 -> 6*7 = 42 
 */
console.log("Numero Oblongo")
function es_oblongo(numero){
    let numero1 = 0;
    let numero2 = 1;
    let multiplicacion = numero1 * numero2;
    while(numero >= multiplicacion){
        multiplicacion = numero1 * numero2;
        if(multiplicacion == numero){
            return true;
        }
        numero1 = numero1 + 1;
        numero2 = numero2 + 1;
    }
    return false;
}

console.log(es_oblongo(30))
console.log(es_oblongo(420))
console.log(es_oblongo(421))

for (let i = 0; i*(i+1) <= numero; i++){ // 0<8, 2<8, 6<=8, 12<=8
    if (i*(i+1) == numero){ // 0 == 8, 2 == 8, 6 == 8,
        return true
    }
}
return false

/**
 * Realizar una funcion que calcule si un numero es primo
 * esPrimo(8) = false
 * esPrimo(7) = true
 */

/**
 * Realizar una funcion que invierta un numero
 * invierteNumero(123) = 321
 */

/**
 * Realizar una funcion que dado un numero N, devuelva su representacion en unos
 * transformaAUnos(3) = 111
 * transformaAUnos(4) = 1111
 * transformaAUnos(5) = 11111
 */
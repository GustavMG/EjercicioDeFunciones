//  Declaración de tipos de variables y datos
var distancia = 100;
var tiempo = 5;

// let a;
// let b;
// let c;

//  EJERCICIO 9
function velocidad(d,t){    //Distancia, Tiempo
    
    let resultadoVelocidad;

    if(t != 0){
        resultadoVelocidad = d / t; //Los valores son metro y segundos m/s
    }
    else{
        resultadoVelocidad = 0;
    }
    

    console.log("De acuerdo a la distancia: " + d + "m recorrida en " + t + "s, la velocidad actual es: " + resultadoVelocidad + "m/s");
}

velocidad(distancia, tiempo);


//  EJERCICIO 10

let a = prompt("Ingresa el valor de a");
let b = prompt("Ingresa el valor de b");
let c = prompt("Ingresa el valor de c");

formulaGeneral(a, b, c);
// formulaGeneral(6, -19, 7);   // 2.741036999120817 y 0.4256296675458497
// formulaGeneral(1, -4, 3);    // 3 y 1 
// formulaGeneral(1, 4, 3);     // -1 y -3
// formulaGeneral(4, 8, -12);   // 1 y -3
// formulaGeneral(4, 12, 9);    // -3/2

function formulaGeneral(a, b, c){

    /* 
    // Version larga
    let resultadoX1;
    let resultadoX2;
    let tempA;
    let tempB;
    let tempBC;
    let tempAC;
    let tempCuadrado;

    tempAC = 4 * a * c;
    tempB = b * b;
    tempBC = tempB - tempAC
    tempCuadrado = Math.sqrt(tempBC);
    tempA = 2 * a;*/

    // Version Corta
    interiorRaiz = ((b * b) - (4 * a * c));
    raiz = Math.sqrt(interiorRaiz);
    
    resultadoX1 = (-b + raiz) / (2 * a);
    resultadoX2 = (-b - raiz) / (2 * a);

    console.log("Dada la expresión " + a + "x^2 + (" + b + ")x + " + c + ",");
    console.log("La solución de x1 es: " + resultadoX1 + " y la solución de x2 es: " + resultadoX2);

}
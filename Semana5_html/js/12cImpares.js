function contarImpares(num1, num2, num3, num4, num5){
    /*
    Entrada: ingresado 5 números
    let resul, n
    Proceso: pasar por cada uno, dividir para dos y su resudio es un numero =/ 0 es impar
    Salida:  Cantidad de impares: "n"
     */
    let resul=0; n=0
    if (resul !== num1%2){
            n++;
        }
    if (resul !== num2%2){
            n++;
        }
    if (resul !== num3%2){
            n++;
        }
    if (resul !== num4%2){
            n++;
        }
    if (resul !== num5%2){
            n++;
        }
    console.log(`Cantidad de impares: ${n}`)
}
//debugger
//contarImpares(2, 5, 7, 8, 10)
 /*-------------------------------------------------------------------------------------------
    Entrada: ingresado 5 números con arreglo
    let c, resul, n
    Proceso: pasar por cada uno, dividir para dos y su resudio es un numero =/ 0 es impar
    Salida:  Cantidad de impares: "n"
     */
function aContarImpares(num1, num2, num3, num4, num5){
    let c=0; resul=0; n=0
    let numeros=[num1, num2, num3, num4, num5]
    while(c<numeros.length){
        resul = numeros[c]%2
        if (resul!==0){
            n++;
        }
        c++
    }
    console.log(`Cantidad de impares: ${n}`)
}
//debugger
//aContarImpares(2, 5, 7, 8, 10)
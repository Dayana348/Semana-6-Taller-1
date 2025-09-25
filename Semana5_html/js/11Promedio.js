function promedio(num1, num2, num3, num4, num5){
    /*
    Entrada: INgresa 5 numeros
    let resul, divi
    Proceso: sumar los 5 números sacar el promedio 
    Salida: promedio de los 5 números
    */
   let resul = num1 + num2 + num3 + num4 + num5
   let divi = resul/5
   console.log(`El promedio es ${divi}`)
}
//debugger
//promedio(5, 7, 9, 3, 6)
 /*----------------------------------------------------------------------------------------
    Entrada: INgresa 5 numeros con arreglo
    let resul, divi
    Proceso: sumar los 5 números sacar el promedio 
    Salida: promedio de los 5 números
    */
function aPromedio(num1, num2, num3, num4, num5){
   let numeros=[num1, num2, num3, num4, num5]
   let resul = num1 + num2 + num3 + num4 + num5
   let divi = resul/numeros.length
   console.log(`El promedio es ${divi}`)
}
debugger
aPromedio(5, 7, 9, 3, 6)
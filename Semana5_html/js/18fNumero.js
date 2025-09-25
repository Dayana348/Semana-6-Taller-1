function factorialNúmero(num){
    /*
    Entrada: Ingrese un número
    Proceso: El número ingresado se sacara factorial (se multiplica desde el número dedo hasta 1)
    Salida: Resultado de la multiplicacion
    */
   let c=num-1
    num=num*(c)
    c=c-1
    num=num*(c)
    c=c-1
    num=num*(c)
   console.log(`${num}`)
}
debugger
factorialNúmero(4)
/*----------------------------------------------------------------------------------------------
    Entrada: Ingrese un número con arreglo
    let c
    Proceso: El número ingresado se sacara factorial (se multiplica desde el número dedo hasta 1)
    Salida: Resultado de la multiplicacion
    */
function aFactorialNúmero(num){
   let c=num-1
   while(0<c){
    num=num*c
    c--
   }
   console.log(`${num}`)
}
//debugger
//aFactorialNúmero(4)
function calcularCubo(num1, num2, num3){
    /*
    Entrada: Se ingresan los números
    let resul1, resul2, resul3, resp
    Proceso: cada uno se calculo al cubo (el mismo multiplicado 3 veces)
    salida: El re sultado de cada uno
    */
   let resul1=0, resul2=0, resul3=0, resp=""
    resul1 = num1**3
    resp+= resul1 + ", ";
    resul2 = num2**3
    resp+= resul2 + ", ";
    resul3 =num3**3
    resp+= resul3 + ", ";
   console.log(`${resp}`)
}
//debugger
//calcularCubo(2,3,4)
/*------------------------------------------------------------------------------------------------------
    Entrada: Se ingresan los números con arreglo
    let c, resul, resp
    Proceso: cada uno se calculo al cubo (el mismo multiplicado 3 veces)
    salida: El re sultado de cada uno
    */
function aCalcularCubo(num1, num2, num3){
   let c=0; resul=0; resp=""
   let numeros=[num1, num2, num3]
   while(c<numeros.length){
    resul=numeros[c]**3
    resp+= resul + ", ";
    c++
   }
   console.log(`${resp}`)
}
debugger
aCalcularCubo(2,3,4)
function sumar([num1, num2, num3],[num4, num5, num6]){
    /*
    Entrada: Ingrese dos grupos de números, cada grupo con 3 números
    let resul1, resul2, resul3, resp
    Proceso: el grupo 1 se sumara con el grupo dos 
    Salida: el resultado de las 3 sumas
    */
   let resul1=0, resul2=0, resul3=0, resp=""
    resul1=num1+num4
    resp += resul1 + ", ";
    resul2=num2+num5
    resp += resul2 + ", ";
    resul3=num3+num6
    resp += resul3 + ", ";
   console.log(`${resp}`)
}
debugger
sumar([2,4,6], [1,3,5])
/*-------------------------------------------------------------------------------------------------
    Entrada: Ingrese dos grupos de números, cada grupo con 3 números con arreglo
    let c, numeros1, numeros2, resul, resp
    Proceso: el grupo 1 se sumara con el grupo dos 
    Salida: el resultado de las 3 sumas
    */
function aSumar([num1, num2, num3],[num4, num5, num6]){
   let resul=0; resp=""
   let numeros1 = [num1, num2, num3]
   let numeros2 = [num4, num5, num6]
   for(let c=0;c<numeros1.length;c++){
    resul=numeros1[c]+numeros2[c]
    resp += resul + ", ";
   }
   console.log(`${resp}`)
}
//debugger
//aSumar([2,4,6], [1,3,5])
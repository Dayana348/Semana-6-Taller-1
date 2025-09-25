function numerosPares(num1, num2, num3, num4){
    /*
    Entrada: Ingresar un grupo de números
    let c, resp
    Proceso: cada uno dividir para 2, sí el residio es 0, es par
    Salida: Mostrar los números pares
    */
   let c=0; resp=""
    if (0===num1%2){
        resp+= num1+", ";
    }
    if (0===num2%2){
        resp+= num2+", ";
    }
    if (0===num3%2){
        resp+= num3+", ";
    }
    if (0===num4%2){
        resp+= num4;
    }
   console.log(`Lo números pares '${resp}'`)
}
//debugger
//numerosPares(3, 8, 11, 14)
/*----------------------------------------------------------------------------------------------
    Entrada: Ingresar un grupo de números con arreglo
    let c, resul, resp, numeros
    Proceso: cada uno dividir para 2, sí el residio es 0, es par
    Salida: Mostrar los números pares
    */
function aNumerosPares(num1, num2, num3, num4){
   let c=0; resul=0; resp=""
   let numeros=[num1, num2, num3, num4]
   while(c<numeros.length){
    resul=numeros[c]%2
    if (resul===0){
        resp+= numeros[c]+", ";
    }
    c++
   }
   console.log(`Lo números pares '${resp}'`)
}
debugger
aNumerosPares(3, 8, 11, 14)
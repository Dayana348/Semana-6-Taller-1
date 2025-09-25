function buscarValor([num1, num2, num3, num4], valor){
    /*
    Entrada: ingresar un grupo de números, ingresar valor 
    let n
    Proseco: En el grupo de números , buscar el valor ingresado
    salida: "El valor "valor" sí existe en el arreglo"
    */
   let n=0
   if(num1===valor){
            n++
        }
    if(num2===valor){
            n++
        }
    if(num3===valor){
            n++
        }
    if(num4===valor){
            n++
        }
    if(n>0){
        console.log(`El valor ${valor} existe`)
    }else{
        console.log(`El valor ${valor} no existe`)
    }
}
//debugger
//buscarValor([4, 8, 15, 23], 15)
/*------------------------------------------------------------------------------------------
    Entrada: ingresar un grupo de números, ingresar valor (Con arreglo)
    let c, numeros, n
    Proseco: En el grupo de números , buscar el valor ingresado
    salida: "El valor "valor" sí existe en el arreglo"
    */
function aBuscarValor([num1, num2, num3, num4], valor){
   let c=0; n=0
   let numeros=[num1, num2, num3, num4]
    while(c<numeros.length){
        if(numeros[c]===valor){
            n++
        }
        c++
    }
    if(n>0){
        console.log(`El valor ${valor} existe`)
    }else{
        console.log(`El valor ${valor} no existe`)
    }
}
//debugger
//aBuscarValor([4, 8, 15, 23], 15)
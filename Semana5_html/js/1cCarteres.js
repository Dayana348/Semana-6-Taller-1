    /*
    Entrada: tengo que ingresar la palabra 
    proceso: 
    Contara los caracteres de dicha palabra
    Salida:
    mostrará el número de caracteres
    */
function contarcaracteres(palabra){
   if(isNaN(palabra)){
   console.log(`La palabra tiene ${palabra.length} letras`)
   }else{
    console.log(`Ingrese palabras`)
   }
}
//debugger
//contarcaracteres("Manzana")
/*--------------------------------------------------------------
    Entrada: tengo que ingresar varias palabra 
    let c
    proceso:
    cada palabra 
    Contará los caracteres de dicha palabra
    Salida:
    mostrará el número de caracteres
    de cada una
    */
function cCaracteresVPalabras(palabra1, palabra2, palabra3){
  let palabra=[palabra1, palabra2, palabra3]
  let c=0
    while(c<palabra.length){
      palabra[c]=contarcaracteres(palabra[c])
      c++;
    }
}
debugger
cCaracteresVPalabras("Manzana","Pera","Sandía")
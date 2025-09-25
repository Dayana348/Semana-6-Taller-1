    /*
    Entrada: Según la palabar ingresada(Quito)
    let lon, resultado
    Proceso:
    La palabra escrita, la ultima letra aparecera primero
    Salida
     (otiuQ)
    */
function invertirNombre(palabra){
   let lon = palabra.length-1
   let resul=""
   while(lon>=0 ){
    resul +=palabra[lon]
    lon--
   }
   console.log(`${resul}`)
}
//debugger
//invertirNombre("Quíto");
/*-------------------------------------------------------------------
    Entrada: Según las palabras ingresadas
    let c, palabra
    Proceso:
    La palabra escrita, la ultima letra aparecera primero
    Salida
     (otiuQ)(amiL)
    */
function invertirPalabras(palabra1, palabra2){
    let c=0
    let palabra=[palabra1, palabra2]
    while(c<palabra.length){
        palabra[c]= invertirNombre(palabra[c])
        c++
    }
}
debugger
invertirPalabras("Quito","Lima")
function concatenarPalabras (pal1, pal2, pal3){
    /*
    Entrada: ingresa un grupo de palabras
    Proceso: las palabras se unirar con un espacio
    Salida: palabras inidas
     */
    console.log (`${pal1} ${pal2} ${pal3}`)
}
//debugger
//concatenarPalabras("Me", "gusta", "programar")
/*-----------------------------------------------------------------------------------------------------
    Entrada: ingresa un grupo de palabras con arreglo
    let c, resul; palabras
    Proceso: las palabras se unirar con un espacio
    Salida: palabras inidas
     */
function aConcatenarPalabras (pal1, pal2, pal3){
    let c=0;resul=""
    let palabras =[pal1, pal2, pal3]
    while(c<palabras.length){
        resul += palabras[c]+" ";
        c++
    }
    console.log (`${resul}`)
}
debugger
aConcatenarPalabras("Me", "gusta", "programar")
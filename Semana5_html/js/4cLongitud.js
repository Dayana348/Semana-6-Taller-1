    /*
    Entrada: segun los nombres ingresados
    let c1, c2
    proceso:
    Comparar cuantos diguitos tiene cada uno
    salida:
    Cual de los dos tiene más caracteres
    */
function CompararLongitud(nom1, nom2){
   let c1 =0; c2 =0
   while (c1<=nom1.length-1){
    c1++}
   while (c2<=nom2.length-1){
    c2++}
   if (c1===c2){
    console.log(`Las palabras tienen la misma cantidad de letras`)
   }else{if(c1>c2){
    console.log(`El apellido '${nom1}' tiene más letras que '${nom2}'.`)
   }else{
    console.log(`El apellido '${nom2}' tiene más letras que '${nom1}.`)
   }}}
//debugger
//CompararLongitud("García","Pérez")
/*--------------------------------------------------------------------------
    Entrada: ingresa dos gurpos de dos nombres cada uno
    let c
    proceso:
    En un grupo se comparan los dos nombres, lo mismo en el siguien
    Comparar cuantos diguitos tiene cada uno
    salida:
    En cada grupo "Cual de los dos tiene más caracteres"
    */
function compararLongitudes(nombres1, nombres2){
    let c=0
    let nombres=[nombres1,nombres2]
    while(c<nombres.length){
        nombres[c]=CompararLongitud(nombres[c][0],nombres[c][1])
        c++
    }
}
debugger
compararLongitudes(["García","Pérez"],["Lopez","Ramirez"])
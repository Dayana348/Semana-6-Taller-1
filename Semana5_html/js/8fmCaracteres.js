function fmayorCaracteres(frase1, frase2){
   /*
    Entrada: segun las frases ingresadas
    let c1, c2
    proceso:
    Comparar cuantos diguitos tiene cada uno
    salida:
    Cual de los dos tiene más caracteres
    */
   let c1 =0; c2 =0
   while (c1<=frase1.length-1){
    c1++}
   while (c2<=frase2.length-1){
    c2++}
     if (c1===c2){          console.log(`Las frases tienen la misma cantidad de letras`)
   }else{if(c1>c2){         console.log(`La frase '${frase1}' tiene más caracteres.`)
      }else{                console.log(`La frase '${frase2}' tiene más caracteres.`)
   }}}
//debugger
//fmayorCaracteres("Me gusta el fútbol","Prefiero el baloncesto") 
/*
    Entrada: ingresa dos grupos
    cada grupo dos frases ingresadas
    let c
    proceso:
    el primer grupo
    Comparar cuantos diguitos tiene cada uno
    al igual es segundo grupo
    salida:
    Cual de los dos tiene más caracteres en los dos grupos
 */
function dfmayorCaracteres(gfrase1, gfrase2){
   let c=0
   let frases=[gfrase1,gfrase2]
   while(c<frases.length){
      frases[c]=fmayorCaracteres(frases[c][0],frases[c][1])
      c++
   }
}
debugger
dfmayorCaracteres(["Me gusta el fútbol", "Prefiero el baloncesto"],["Hola", "Adiós"])
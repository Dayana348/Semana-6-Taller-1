function reemplazocaracter(palabra){
    /*
    Entrada: Se ingresa una palabra
    let c, resul
    proceso:
    Segun la palabra ingresada pasar una por una
    si encuentra una "letra en especifico"
    Procede a cambiarla por #
    Salida:
    se imprime la palabra con la "letra en especifico" cambiada por un #
    */
   let c=0
   let resul=""
   while(c<=palabra.length-1){
    if(palabra[c]==="o"||palabra[c]==="O"){
        resul+="#"
    }else{
    resul+=palabra[c]
    }
    c++;
   }
   console.log(`${resul}`)
}
//debugger
//reemplazocaracter("Programador")  
/*-----------------------------------------------------------------------------------------------
    Entrada: Se ingresa dos palabras
    let c
    proceso:
    Segun la palabra ingresada pasar una por una
    si encuentra una "letra en especifico"
    Procede a cambiarla por #
    Salida:
    se imprime las palabras con la "letra en especifico" cambiada por un #
    */
function rCaracterPalabra(palabra1, palabra2){
    let c=0
    let palabra=[palabra1, palabra2]
    while (c<palabra.length){
        palabra[c]=reemplazocaracter(palabra[c])
        c++
    }
}
debugger
rCaracterPalabra("Programador", "Motor")

    /*
    Entrada: Dada un oracion
    let c, resultado
    proceso:
    por cada espacio que se encontraba en la oracion, se hace un salto de línea
    resul+="\n"
    Salida:
    "Me
    gusta
    aprender
    programación"
    */
function dividirOración(oracion){
   let c=0; resul=""
   while(c<oracion.length){
    if(oracion[c]===" "){
//        resul+="\n"
        resul+=", "
    }else{     resul+=`${oracion[c]}`
    }
    c++}
   console.log(`${resul}`)
}
//debugger
//dividirOración("Me gusta aprender programación")
/*---------------------------------------------------------------------------------------------
    Entrada: Dada dos oraciones
    let c
    proceso:
    por cada espacio que se encontraba una oracion, se agrega ", "
    resul+=", "
    Salida:
    "Me, gusta, aprender, programación"
    "Hola, mundo"
    */
function divicionoraciones(oracion1, oracion2){
    let c=0
    let oracion=[oracion1, oracion2]
    while(c<oracion.length){
        oracion[c] = dividirOración(oracion[c])
        c++
    }
}
debugger
divicionoraciones("Me gusta aprender programación", "Hola mundo")
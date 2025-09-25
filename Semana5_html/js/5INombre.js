    /*
    Entrada: Ingresado sus Nombres y apellidos con su primera letra mayuscula
    let c, resultado
    Proseco:
    El contador va a pasar con cada letra y preguntar si es mayuscula 
    salida:
    Imprime solo la letra mayuscula
    */
function inicilesNombre(nomCpt){
   let c=0;resl=""
   while(c<=nomCpt.length-1){
    if(/[A-Z]/.test(nomCpt[c])){
        resl+=nomCpt[c]+`.`;
    }
    c++}
   console.log(`${resl}`)}
//debugger
//inicilesNombre("Ana María Torres")
/*--------------------------------------------------------------------------
    Entrada: Dos personas ingresan sus Nombres y apellidos con su primera letra mayuscula
    let c
    Proseco:
    el contador va apasar por los nombres de las dos personas
    El contador va a pasar con cada letra y preguntar si es mayuscula 
    salida:
    Imprime solo la letra mayuscula de las dos personas
    */
function inicilesNombresPersonas(nombres1, nombres2){
    let c=0
    let nombres=[nombres1, nombres2]
    while(c<nombres.length){
        nombres[c]=inicilesNombre(nombres[c])
        c++
    }
}
debugger
inicilesNombresPersonas("Ana María Torres", "Juan Carlos Pérez")
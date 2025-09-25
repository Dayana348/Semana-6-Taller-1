function quitarAcentos(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
function caracterElegido(frase, letra){
    /*
    Entrada: Se ingresa una frase, y una letra
    let c, n
    Proces:
    recorre en la frase y cuanta las veces que aparece la letra
    salida:
    le letra "letra" aparece "n" veces
    */
   let c=0; n=0
   let letraSA = quitarAcentos(letra.toLowerCase());
   while(c<frase.length){
    let fraseSA = quitarAcentos(frase[c].toLowerCase());
    if(letraSA===fraseSA){
        n++
    }
    c++
   }
   console.log(`La letra '${letra}' aparece ${n} veces.`)
}
//debugger
//caracterElegido("Examen de programación","m")
/*----------------------------------------------------------------------------------------------
    Entrada: Se ingresa varias frases, y varias letras
    let c
    Proces:
    recorre en la frase y cuanta las veces que aparece la letra
    salida:
    le letra "letra" aparece "n" veces
    */
function caracteresElegidos(texto1,texto2){
    let c=0
    let texto =[texto1, texto2]
    while(c<=texto.length){
        texto[c]=caracterElegido(texto[c][0],texto[c][1])
        c++
    }
}
debugger
caracteresElegidos(["Examen de programación","m"],["Hola mundo","o"])
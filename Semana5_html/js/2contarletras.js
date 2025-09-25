function quitarAcentos(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
    /*
    Entarda: Ingresa un parrafo
    ingresar que letra quiere verificar si esta
    let c, n
    proceso:
    hacer un ciclo
    según el párrafo ingresado, verificara cuantas veces se repite la latra ingresada
    salida:
    En número de veces que se repite esa "letra"
    */
function contarletra(parrafo, letra){
   let c=0; n=0
   while(c<parrafo.length){
    let letraSA = quitarAcentos(letra.toLowerCase());
    let caracterSA = quitarAcentos(parrafo[c].toLowerCase());
    if(letraSA===caracterSA){
        n++;
    }
    c++;
   }
   console.log(`La letra '${letra}' aparece ${n} veces`)
}
//debugger
//contarletra("Me encanta el café","e")
/*----------------------------------------------------------------------------------------
    Entarda: Ingresa varios parrafos
    ingresar que letra quiere verificar si esta en los parrafos
    let c
    proceso:
    hacer un ciclo
    recorrer cada párrafo ingresado, verificara cuantas veces se repite la latra ingresada
    salida:
    En número de veces que se repite esa "letra" 
    en cada parrafo
    */
function contarLetraVFrases([parrafo1, parrafo2], letra){
    let c=0
    let parrafo=[parrafo1, parrafo2]
    while(c<parrafo.length){
        parrafo[c]=contarletra(parrafo[c],letra)
        c++
    }
}
debugger
contarLetraVFrases(["Me encanta el café","Estudio programación"],"e")
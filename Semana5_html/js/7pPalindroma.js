function palabraPalíndroma(palabra){
    /*
    Entrada: según la palabra ingresada
    let c, resul
    proceso:
    La palabra se ordenara de atras a delante 
    si la palabra es igual a "palabrareves"
    Salida:
    La palabra es políndromo
    */
   let c=palabra.length
   let resul=""
   while(c>0){
    resul+=palabra[c]
    c--}
   if(resul===palabra){    console.log(`La palabra '${palabra}' es un palíndromo`)
         }else{            console.log(`La palabra '${palabra}' no es un palíndromo`)
   }}
//debugger
//palabraPalíndroma("radar")
/*
    Entrada: según las palabras ingresadas
    let c
    proceso:
    cada palabra tendra que ordenarce de atras a delante 
    si cada palabra es igual a "palabrareves" de dicha palabra
    Salida:
    La palabra es políndromo
    de lo contrario
    no la sera
 */
function palabrasPalindromas(palabra1, palabra2, palabra3){
    let c=0
    let palabras =[palabra1,palabra2,palabra3]
    while(c<palabras.length){
        palabras[c]=palabraPalíndroma(palabras[c])
        c++
    }}
debugger
palabrasPalindromas("radar", "oso", "casa")
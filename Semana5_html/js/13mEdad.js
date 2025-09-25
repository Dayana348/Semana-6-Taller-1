function mayoresEdad(edad1, edad2, edad3, edad4, edad5){
    /*
    Entrada: ingresado 5 edades
    let c, n
    Proceso: pasar por cada uno, comparar su son >= a 18
    Salida:  Mayores de edad: "n"
     */
    let c=0; n=0
    if (edad1>=18){
            n++;
        }
    if (edad2>=18){
            n++;
        }
    if (edad3>=18){
            n++;
        }
    if (edad4>=18){
            n++;
        }
    if (edad5>=18){
            n++;
        }
    console.log(`Mayores de edad: ${n}`)
}
//debugger
//mayoresEdad(15, 22, 18, 30, 12)
/*---------------------------------------------------------------------------------------------------
    Entrada: ingresado 5 edades con arreglo
    let c, n
    Proceso: pasar por cada uno, comparar su son >= a 18
    Salida:  Mayores de edad: "n"
     */
function aMayoresEdad(edad1, edad2, edad3, edad4, edad5){
    let c=0; n=0
    let edad=[edad1, edad2, edad3, edad4, edad5]
    while(c<edad.length){
        if (edad[c]>=18){
            n++;
        }
        c++
    }
    console.log(`Mayores de edad: ${n}`)
}
debugger
aMayoresEdad(15, 22, 18, 30, 12)
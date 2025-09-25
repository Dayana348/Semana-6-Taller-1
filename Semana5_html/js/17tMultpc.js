function tablamultiplicar(num){
    /*
    Entrada: Ingresa un número
    let c, rasul, resp
    proceso: El número de multiplicara del 1-10
    Salida: resultado de la multiplicacion del 1-10
    */
    let resul1=0, resul2=0, resul3=0, resul4=0, resul5=0, resul6=0, resul7=0, resul8=0, resul9=0, resul10=0, resp="";
        resul1=num*1
        resp+= resul1 + ", ";
        resul2=num*2
        resp+= resul2 + ", ";
        resul3=num*3
        resp+= resul3 + ", ";
        resul4=num*4
        resp+= resul4 + ", ";
        resul5=num*5
        resp+= resul5 + ", ";
        resul6=num*6
        resp+= resul6 + ", ";
        resul7=num*7
        resp+= resul7 + ", ";
        resul8=num*8
        resp+= resul8 + ", ";
        resul9=num*9
        resp+= resul9 + ", ";
        resul10=num*10
        resp+= resul10 + ", ";
    console.log(`${resp}`)
}
//debugger
//tablamultiplicar(5)
/*------------------------------------------------------------------------------------------
    Entrada: Ingresa un número con arreglo
    let c, rasul, resp
    proceso: El número de multiplicara del 1-10
    Salida: resultado de la multiplicacion del 1-10
    */
function aTablamultiplicar(num){
    let c=1; resul=0; resp="";
    while(c<=10){
        resul=num*c
        resp+= resul + ", ";
        c++
    }
    console.log(`${resp}`)
}
debugger
aTablamultiplicar(5)
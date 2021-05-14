


function mat (array,matriz,M2Array) {

    var array=[-6,7,0,-5];
    var matriz = [];
    var M2Array = Math.sqrt(array.length);    

if (Number.isInteger(M2Array)) {
    var aux = new Array();  
    array.forEach((element, index) => { 
        if (aux.length < M2Array) {
            aux.push(element);
        }
        if (aux.length == M2Array) {
            matriz.push(aux);
            aux = new Array();
        }
    });
    var izquierda = 0;
    var diagIzquierda = 0;
    var derecha = matriz.length - 1;
    var diagDerecha = 0;

  
    matriz.forEach(element => {
        //izquierda
        diagIzquierda += element[izquierda];
        izquierda++;
        //derecha
        diagDerecha += element[derecha];
        derecha--;
    });
    console.log(`La suma de la diagonal izquierda es ${diagIzquierda}`);
    console.log(`La suma de la diagonal derecha es ${diagDerecha}`);
    //sacar la diferiencia positiva
    var diferencia = diagIzquierda - diagDerecha;
    diferencia = (diferencia < 0) ? diferencia * (-1) : diferencia;
    console.log(`La diferencia entre la diagonal izquierda y derecha es de ${diferencia}`);
}
else
    console.log("No es posible hacer una matriz cuadrada");
}

mat();
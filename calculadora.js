'use strict'
//Para captura parametros en JS utilizando NODEJS, se utiliza el metodo
//process.argv.slice(n parametros)
//El Slice(2) es el indicador del array, a partir de cual indice comenzara a mostrar la informacion
var params=process.argv.slice(2);

var numero1= parseFloat(params[0]);

var numero2= parseFloat(params[1]);

var plantilla=`
    La suma es: ${numero1 + numero2}
    La resta es: ${numero1 - numero2}
    La multiplicacion es: ${numero1 * numero2}
    La division es: ${numero1 / numero2}
`;
console.log("Node JS")

console.log(plantilla);
 var edad = [12,50,23,11,18,35,41,85,16,45]
 var nombre = ["juan", "maria", "tereza", "pedro", "javier", "ana", "diana", "jorge",
"dayana", "lady"];


var min=Math.min.apply(null, edad);
var max=Math.max.apply(null, edad);
var busqueda = edad.findIndex( buscar => buscar == min);
var busquedaM = edad.findIndex( buscar => buscar == max);
console.log(busqueda);

document.write("La persona con menor edad es: " + edad[busqueda] + " y su nombre es: " + nombre[busqueda]);
document.write("<br>")
document.write("La persona con mayor edad es: " + edad[busquedaM] + " y su nombre es: " + nombre[busquedaM]);

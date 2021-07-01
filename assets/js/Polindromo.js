		
//Definimos un metodo para el tipo de datos "string", que lo unico que hace es devolver nuestra palabra en orden inverso.
const respuesta= document.getElementById('respuesta');
String.prototype.reverse=function(){
    return this.split("").reverse().join("");
}

function Polindromo(word) {
    
 
 //Una vez definido, ya lo tenemos practicamente hecho.
 var inverseWord = word.reverse();
 if (word == inverseWord) { //Si la palabra es igual a la palabra girada.
  respuesta.innerText= "La palabra '"+word+"' SI es Polindromo";
  return(true); //Es capicua/palindromo.
 }
 else {
    respuesta.innerText="La palabra '"+word+"' NO es Polindromo: '"+inverseWord;
  return(false); //NO es capicua/palindromo.
 } 
} 


/*const btnIn =document.getElementById('btnIn');
const respuesta = document.getElementById('respuesta');

btnIn.addEventListener('click',()=> {
    const textoIn = document.getElementById('palabra');
    let palabra = textoIn.value;

    let palabraArray =palabra.split('');
    let tamano = palabraArray.lenght;
    let contador =0;
    let posFinal = tamano-1;

    console.log ('textoIn:' +palabra);
    console.log ('tamano:' +tamano);

    for (let i =0; i< tamano; i++) {
        //console.log('['+palabraArray[i]+']')
        if (palabraArray[i]== palabraArray[posFinal]) {
            contador++;
        }
        posFinal--;
    }
    respuesta.innerText='contador: '+ contador;
    
});
*/
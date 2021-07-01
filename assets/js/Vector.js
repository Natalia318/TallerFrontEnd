const verIn = document.getElementById('verIn');
const botonIn = document.getElementById('botonIn');
const btnBuscar = document.getElementById('btnBus');
const salidaTexto = document.getElementById('salidaTexto');

let nombres =[];
let edades =[];


botonIn.addEventListener('click',()=> {
    let nombre = document.getElementById('nombre').value;
    let edad = parseInt(document.getElementById('edad').value);

    nombres.push(nombre);
    edades.push(edad);

    });

verIn.addEventListener('click',()=> {
    console.log('Nombres');
    for (let i =0; i< nombres.length; i++) {
     console.log('['+nombres[i]+']')
        
    }
    console.log('Edades');
    for (let i =0; i< edades.length; i++) {
        console.log('['+edades[i]+']')
           
       }
});


btnBuscar.addEventListener('click',()=> {

    let nomBus = document.getElementById("nomBus").value;
    let posicion;
    let existe = false;

    for (let i=0; i< nombres.length; i++) {

     if (nombres[i] == nomBus) {
         posicion=i;
         existe = true;
     }
       
     
    }
    if (existe) {
        salidaTexto.innerText='El usuario '+nombres[posicion]+' si exite y tiene la edad de '+edades[posicion];
        } else 
        salidaTexto.innerText='El usuario No exite'
    
});
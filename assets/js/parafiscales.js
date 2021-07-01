function calcular() {
    //Obtienes el valor
    var inputnumer10 = document.getElementById("inputnumer10").value; //numeroDigitado

    //le descuentas el 8% y lo agregas al HTML
    var descuentoS = parseInt(inputnumer10) * 12.5 / 100;
    var descuentoP = parseInt(inputnumer10) * 16 / 100;
    var descuentoR = parseInt(inputnumer10) * 0.522 / 100;

    //agrega los resultados al DOM
    alert('Salud: $' + descuentoS + '  ' + 'Pension: $ ' + descuentoP + '  ' + 'Riesgos Laborales $' + descuentoR);
}
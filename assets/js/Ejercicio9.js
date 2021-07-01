var primernumero = parseInt(prompt("Digite el primer número xd"));
var segundonumero = parseInt(prompt("Digite el segundo número xd"));
var array = [primernumero, segundonumero];

for (var i = 0; i < 100; i++) {

    var nuevonumero = primernumero + segundonumero;
    array.push(nuevonumero);
    primernumero = segundonumero;
    segundonumero = nuevonumero;

}
console.log(array);

const btnMultiplicar = document.getElementById('btnMultiplicar');

btnMultiplicar.addEventListener('click',()=> {

    num = document.getElementById("numero").value;
    num = parseInt(num);

    for (var i = 1; i <= 10; i++) {
        multi = num * i;
        document.write('<div id="resultado" style="background-color: cornflowerblue">');
        document.write(num + "x" + i + "=" + multi + "<br></div>");
    }
});
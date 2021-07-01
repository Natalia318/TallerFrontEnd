

function paroImpar(){
    let valor=parseInt(document.getElementById("valor").value);

    if(valor % 2 == 0){
        
        document.getElementById("resultado").innerHTML="El numero "+valor+"  es PAR";
    }else{
        document.getElementById("resultado").innerHTML="El numero "+valor+"  es IMPAR";
    }
}

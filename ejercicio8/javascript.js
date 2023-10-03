function calcular() {
    
    var figura = document.getElementsByName("figura").value;
    var base = parseFloat(document.getElementById("base").value);
    var altura = parseFloat(document.getElementById("altura").value);
    var resultado;

    if (figura == "rectangulo")
    {
        resultado = base * altura;
    }else if (figura == "triangulo")
    {
        resultado = (base * altura) / 2;
    } else {
        resultado = "Resultado no valido";
    }
    //document.getElementById("resultado").value = resultado;
    alert(resultado);
}
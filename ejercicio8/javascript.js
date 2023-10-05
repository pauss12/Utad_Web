function calcular() {
    
    let base = parseFloat(document.getElementById("base").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let resultado;

    if (document.getElementById("rectangulo").checked)
    {
        resultado = base * altura;
    } else if (document.getElementById("triangulo").checked)
    {
        resultado = (base * altura) / 2;
    } else {
        resultado = "Resultado no valido";
    }
    document.getElementById("resultado").value = resultado;
    //alert(resultado);
}
const calcular = () => {
    
    var figura = document.getElementById("figura").value;
    var base = parseFloat(document.getElementById("base").value);
    var altura = parseFloat(document.getElementById("altura").value);
    let resultado;

    if (figura === "rectangulo")
    {
        resultado = num1 * num2;
    }else if (figura === "triangulo")
    {
        resultado = (num1 * num2) / 2;
    } else {
        resultado = "Resultado no valido";
    }
    //document.getElementById("resultado").value = resultado;
    alert(resultado);
};

const borrar = () => {
    document.getElementById("base").value = "";
    document.getElementById("altura").value = "";
    document.getElementById("resultado").value = "";
};

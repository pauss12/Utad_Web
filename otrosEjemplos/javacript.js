const option = +prompt("Introduce un tipo de operacion: \n1.Multiplicacion\n2.Mayor\n3.Encabezado\n");

const multiplica = () => {
    let num1 = +prompt("Introduce el primer numero: ");
    let num2 = +prompt("Introduce el segundo numero: ");
    alert(num1 * num2);
};

const mayor = () => {
    let num1 = +prompt("Introduce el primer numero: ");
    let num2 = +prompt("Introduce el segundo numero: ");
    if (num1 > num2) {
        alert(num1);
    } else {
        alert(num2);
    }
};

switch (option) {
    case 1:
        multiplica();
        break;

    case 2:
        mayor();
        break;

    case 3:
        encabezado();
        break;

    default:
        alert("Opcion no valida");

};
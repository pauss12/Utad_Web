let cont = 0;
const fotos = ["./images/moto01.jpg", "./images/moto02.jpg", "./images/moto03.jpg"];
const prev = () => {
    cont--;
    if (cont < 0)
        cont = fotos.length - 1;
    document.getElementById("image").src = fotos[cont];
};

const next = () => {
    cont++;
    if (cont >= fotos.length)
        cont = 0;
    document.getElementById("image").src = fotos[cont];
};

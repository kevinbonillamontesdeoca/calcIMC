// Ingreso datos

let edad = parseFloat(prompt("Ingresa tu edad:"));
let altura = parseFloat(prompt("Ingres su estatura:"));
let peso = parseFloat(prompt("Ingrese su peso:"));
let IMC = peso / (altura * altura);
let composicion;

alert("Según tu edad tu IMC es: " + IMC.toFixed(2) + "%")

if (edad <= "59") {
    if (IMC < 16){
        alert ("Desnutrición severa");
    } else if ((IMC >= 16.5) && (IMC <= 22)){
        alert ("Bajo Peso");
    } else if ((IMC >= 22.1) && (IMC <= 24.9)){
        alert ("Peso Normal");
    } else if ((IMC >= 25) && (IMC <= 29.9)){
        alert ("Sobrepeso");
    } else if ((IMC >= 30) && (IMC <= 35)){
        alert ("Obesidad tipo 1");
    } else {
        alert ("Obesidad tipo 3");
    }

} else{
    if (IMC < 23){
        composicion ="Bajo peso";
    } else if ((IMC >= 23.1) && (IMC <= 27.9)){
        composicion ="Normal";
    } else if ((IMC >= 28) && (IMC <= 31.9)){
        composicion ="Sobrepeso";
    } else {
        composicion ="Obesidad";
    }
    alert("Composición corportal: " + composicion);
}


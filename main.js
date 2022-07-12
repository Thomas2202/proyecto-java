const COTIZACION_DOLAR = 127;
const cotizarDolar = (pesos) => pesos / COTIZACION_DOLAR;
const cotizarPesos = (dolar) => dolar * COTIZACION_DOLAR;
let seleccion = prompt("Seleccionar cotizacion \n 1 - Dolares a pesos argentinos \n 2 -  Pesos argentinos a dolar ");
let valor = prompt("VALOR");
switch (seleccion) {
    case "1":
        alert(cotizarPesos(valor));
        break;
    case "2":
        alert(cotizarDolar(valor));
        break;
    default:
        break;
}

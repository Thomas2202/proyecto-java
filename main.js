const listadoNotas = [parseInt(prompt('ingresar primera nota: ')), parseInt(prompt('Ingresar segunda nota: ')), parseInt(prompt('Ingresar tercera nota: '))] 

let contadorDeNotas = 0;

for (let i = 0; i < 3; i++){
    contadorDeNotas += listadoNotas[i];
}

const promedio = contadorDeNotas/3;
console.log(promedio);

if(promedio >= 7){
    console.log("Esta aprobado con un promedio de: " + promedio);
}else{
    console.log("Esta desaprobado con un promedio de: " + promedio);
}
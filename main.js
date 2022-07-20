let concesionaria = {
    marca: 'Ford',
    modelo: 'Focus',
    año: '2012',
    km: '12.000km'
};

let marca = concesionaria['marca'];
let modelo = concesionaria['modelo'];
let año = concesionaria['año'];
let km = concesionaria['km'];

frase = `Marca: ${marca}
Modelo: ${modelo}
Año de fabricacion: ${año}
Cantidad KM recorridos: ${km}`;

console.log(frase);
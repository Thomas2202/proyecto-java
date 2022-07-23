let productos = [
    {
        nombre: "Hamburguesa",
        precio: 1500,
    },
    {
        nombre: "Papas",
        precio: 150,
    },
    {
        nombre: "Lomitos",
        precio: 1700,
    },
    {
        nombre: "Empanadas",
        precio: 400,
    },
  ];

let opcion = parseInt(prompt("Que queres comprar? \n 1. Hamburguesa \n 2. Papas \n 3. Lomitos \n 4. Empanadas "));
while (opcion < 1 || opcion > 4){
    opcion = prompt("Que queres comprar? \n 1. Hamburguesa \n 2. Papas \n 3. Lomitos \n 4. Empanadas ");
}


let buscarProducto = (opcion) => {
    let resultado = [];
    let cantidad = 0;
    let total = 0;
    let totalPersonas = 0;
    let totalDivision = 0;

    switch(opcion){
        case 1:
            resultado = productos.find(productos => productos.nombre == "Hamburguesa");

            cantidad = parseInt(prompt(`Cuanta ${resultado.nombre} queres comprar?`));

            total = resultado.precio * cantidad;

            totalPersonas = parseInt(prompt("Entre cuantas personas se divide la compra?"));

            if(totalPersonas == 0 || totalPersonas == 1){
                return `El total a pagar es de: $${total}`;
            }else{
                    totalDivision = totalPagar(total, totalPersonas);
                    return `El total a pagar es de $${total} y cada uno debe pagar $${totalDivision}`;
                }
            
        case 2:
            resultado = productos.find(productos => productos.nombre == "Papas");

            cantidad = parseInt(prompt(`Cuantas ${resultado.nombre} queres comprar?`));

            total = resultado.precio * cantidad;

            totalPersonas = parseInt(prompt("Entre cuantas personas se divide la compra?"));

            if(totalPersonas == 0 || totalPersonas == 1){
                return `El total a pagar es de: $${total}`;
            }else{
                    totalDivision = totalPagar(total, totalPersonas);
                    return `El total a pagar es de $${total} y cada uno debe pagar $${totalDivision}`;
                }
        
        case 3:
            resultado = productos.find(productos => productos.nombre == "Lomitos");

            cantidad = parseInt(prompt(`Cuantas ${resultado.nombre} queres comprar?`));

            total = resultado.precio * cantidad;

            totalPersonas = parseInt(prompt("Entre cuantas personas se divide la compra?"));

            if(totalPersonas == 0 || totalPersonas == 1){
                return `El total a pagar es de: $${total}`;
            }else{
                    totalDivision = totalPagar(total, totalPersonas);
                    return `El total a pagar es de $${total} y cada uno debe pagar $${totalDivision}`;
                }

        
        case 4:
            resultado = productos.find(productos => productos.nombre == "Empanadas");

            cantidad = parseInt(prompt(`Cuantos ${resultado.nombre} queres comprar?`));

            total = resultado.precio * cantidad;

            totalPersonas = parseInt(prompt("Entre cuantas personas se divide la compra?"));

            if(totalPersonas == 0 || totalPersonas == 1){
                return `El total a pagar es de: $${total}`;
            }else{
                    totalDivision = totalPagar(total, totalPersonas);
                    return `El total a pagar es de $${total} y cada uno debe pagar $${totalDivision}`;
                }

    }
}

let totalPagar = (total,personas) => {
    return total/personas;
}

alert(buscarProducto(opcion));
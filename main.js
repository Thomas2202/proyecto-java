const edadPersona = 20;
const dineroEnBolsillo = 1000;

if(edadPersona >= 18 && dineroEnBolsillo >= 1000){
    console.log("Bienvenido a nuestro bar")
    if (edadPersona != 18){
        console.log("Felicitaciones, sos mayor pero no tenes 18")
    }
} else{
    console.log("No podes entrar, sos menor :(")
}
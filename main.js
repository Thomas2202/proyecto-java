const edadPersona = 18;
const dineroEnBolsillo = 1000;
const dineroDeLaEntrada = 1000;
const nombrePersona = 'jorge'

if(((edadPersona >= 18) || dineroEnBolsillo >= dineroDeLaEntrada) || nombrePersona == 'Thomas'){
    console.log("Bienvenido a nuestro bar")
    if (edadPersona != 18){
        console.log("Felicitaciones, sos mayor pero no tenes 18")
    }
} else{
    console.log("No podes entrar, sos menor :(")
}
const edadPersona = prompt('Ingrese su edad:' )
const dineroEnBilletera = prompt('Ingrese su dinero: ')
const valorEntrada = 2000
const nombrePersona = prompt('Ingrese su nombre: ') 
let pase = 'Bienvenido. Podes pasar.'
let noPasa = 'Lo sentimos. No podes pasar.'

if(((edadPersona >= 18) && dineroEnBilletera >= valorEntrada) || nombrePersona == 'Thomas'){
  console.log('Podes pasar')
  alert(pase + ' ' + nombrePersona)
}
else{
  console.log('No podes pasar')
  alert(noPasa + ' ' + nombrePersona)
}
// Precio de los productos:
// Caramelos $10 los 8
// Chupetin $15
// Chocolate $50
// Pitusas $150
// Coca 500ml $200


alert('Hola, Bienvenido a mi negocio. Si no sabés que comprár, Decíme cuánto tenés y yo te digo que te alcanza.')
const walletCash = prompt('Ingresár dínero disponible: ')


if (walletCash >= 10 && walletCash < 15){
    alert('Te alcanzan 8 caramelos. Y cuesta $10')
    alert('Y te sobran ' + '$' + (walletCash - 10))
}

else if (walletCash >= 15 && walletCash < 50){
    alert('Te alcanza un chupetin. Y cuesta $15 Cada uno.')
    alert('Y te sobran ' + '$' + (walletCash - 15))
}

else if (walletCash >= 50 && walletCash < 150){
    alert('Te alcanza un chocolate. Y cuesta $50 Cada uno')
    alert('Y te sobran ' + '$' + (walletCash - 50))
}

else if (walletCash >= 150 && walletCash < 150){
    alert('Te alcanzan unas pitusas. Y cuesta $150 Cada uno')
    alert('Y te sobran ' + '$' + (walletCash - 150))
}

else if (walletCash >= 200){
    alert('Te alcanza una coca de 500ml. Y cuesta $200 Cada uno')
    alert('Y te sobran ' + '$' + (walletCash - 200))
}

else(alert('No te alcanza nada. Anda a laburar pibe.'))
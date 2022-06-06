
var now = new Date()
var hora = now.getHours()
var minuto = now.getMinutes()
console.log(`Agora sao exatamente ${hora}:${minuto} minutos.`)
if (hora < 12 ){
    console.log('Bom Dia')
} else if (hora <= 18){
    console.log('Boa Tarde')
} else if (hora <= 24 ){
    console.log('Boa Noite')
} 
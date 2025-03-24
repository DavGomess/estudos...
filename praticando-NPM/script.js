const dayjs = require('dayjs')

function aniversario(Date) {
    const aniversario = dayjs(Date)
    const hoje = dayjs()

    const idadeEmAno = hoje.diff(aniversario, 'year')
    const proximoAniversario = aniversario.add(idadeEmAno + 1, 'year')
    const proximoAniversarioEmDia = proximoAniversario.diff(hoje, 'day') + 1

    console.log('---------------------------------------------------------------------------------------------------------------------------')
    console.log(`Idade atual: ${idadeEmAno}`)
    console.log(`Data do proximo aniversario: ${proximoAniversario.format("DD/MM/YYYY")}`)
    console.log(`Dias que falta para completar ${idadeEmAno + 1} Anos: ${proximoAniversarioEmDia} Dias`)
    console.log('---------------------------------------------------------------------------------------------------------------------------')
}
aniversario('2000-05-18')
//const dataNascimento = document.querySelector('#nascimento')

//dataNascimento.addEventListener('blur', (evento) => {
    //validaDataNascimento(evento.target)
//}) Criando uma função genérica:

export function valida(input) {
    const tipoDeInput = input.dataset.tipo

    if(validadores[tipoDeInput]) {
        validadores[tipoDeInput](input)
    }
}

const validadores = {
    dataNascimento:input => validaDataNascimento(input)
}

function validaDataNascimento(input) {
    const dataRecebida = new Date(input.value)
    let mensagem = ''

    if(!maiorQue18(dataRecebida)) {
    mensagem = 'Você deve ser maior que 18 anos para se cadastrar.'
    }

    input.setCustomValidity(mensagem)
}

function maiorQue18(data) {
    const dataAtual = new Date() //sem receber um valor dentro, ele coloca exatamente a data de hoje
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());

    return dataMais18 <= dataAtual

}
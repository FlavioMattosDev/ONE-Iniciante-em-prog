alert('Boas vindas ao nosso site!')

const nome = prompt('Digite o seu nome:')
const idade = prompt('Digite sua idade:');
// let numeroDeVendas = 50;
// let saldoDisponivel = 1000;

const mensagemDeErro = "Erro! Preencha todos os campos";

if (!nome || !idade) {
    alert(mensagemDeErro)
} else if (idade >= 18) {
    alert(`Olá ${nome}, você tem ${idade} anos, então pode tirar a habilitação!`)
} else {
    alert(`Olá ${nome}, você tem ${idade} anos, então NÃO pode tirar a habilitação!`)
}



let numeroMaximo = 50;
let secretNumber = parseInt(Math.random() * numeroMaximo + 1);
console.log(secretNumber);
alert('Boas vindas ao jogo do número secreto!');
let userNumber = 0;
let attempts = 1;

while (userNumber != secretNumber) {
	userNumber = parseInt(prompt(`Digite um número entre 1 e ${numeroMaximo}:`));

	if (userNumber == secretNumber) {
		attempts > 1 ? alert(`Isso ai! Você acertou o número secreto (${secretNumber}) com ${attempts} tentativas.`) : alert(`Isso ai! Você acertou o número secreto (${secretNumber}) com ${attempts} tentativa apenas!.`);
		
	} else {
		if (userNumber > secretNumber) {
			alert(`Você errou, o número secreto é menor.`);
		} else {
			alert(`Você errou, o número secreto é maior.`);
		}
        attempts++
	}
}

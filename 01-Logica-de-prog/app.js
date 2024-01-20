let secretNumber = 28;
alert('Boas vindas ao jogo do número secreto!');
let userNumber = 0;
let attempts = 1;

while (userNumber != secretNumber) {
	userNumber = parseInt(prompt('Digite um número entre 1 e 100:'));

	if (userNumber == secretNumber) {
		alert(`Isso ai! Você acertou o número secreto (${secretNumber}) com ${attempts} tentativas.`);
	} else {
		if (userNumber > secretNumber) {
			alert(`Você errou, o número secreto é menor.`);
		} else {
			alert(`Você errou, o número secreto é maior.`);
		}
        attempts++
	}
}

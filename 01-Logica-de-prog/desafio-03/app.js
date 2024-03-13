let menu = parseInt(
	prompt(
		'Digite o número do programa que deseja ir (veja o resultado no console): \n 1. Contador de 1 a 10\n 2. Contador de 10 a 0\n 3. Contagem regressiva\n 4. Contagem progressiva'
	)
);

let userNumber;

switch (menu) {
	case 1:
		oneToTen();
		break;
	case 2:
		tenToZero();
		break;
	case 3:
		counterToZero();
		break;
	case 4:
		zeroToCounter();
		break;
	default:
		alert('Digite um número válido para o menu!');
		break;
}

function oneToTen() {
	let counter = 1;
	while (counter < 11) {
		console.log(counter);
		counter++;
	}
}

function tenToZero() {
	let counter = 10;
	while (counter > -1) {
		console.log(counter);
		counter--;
	}
}

function counterToZero(userNumber) {
	userNumber = parseInt(prompt('Digite um número'));

	while (userNumber > -1) {
		console.log(userNumber);
		userNumber--;
	}
}

function zeroToCounter(userNumber) {
	let counter = 0
	userNumber = parseInt(prompt('Digite um número'));

	while (counter <= userNumber) {
		console.log(counter);
		counter++;
	}
}

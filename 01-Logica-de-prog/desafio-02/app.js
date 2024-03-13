let menu = parseInt(
	prompt(
		'Digite o número do programa que deseja ir: \n 1. Qual o dia da semana\n 2. Número positivou ou negativo\n 3. Sistema de pontuação\n 4. Qual o seu saldo\n 5. Boas vindas'
	)
);

switch (menu) {
	case 1:
		weekDay();
		break;
	case 2:
		verifyNumber();
		break;
	case 3:
		questionsChallenge();
		break;
	case 4:
		bankAccount();
		break;
	case 5:
		userName();
		break;
	default:
		alert('Digite um número válido para o menu!');
		break;
}

function weekDay(userDay) {
	userDay = prompt('Qual é o dia da semana?');
	console.log(userDay);
	if (userDay == 'sábado' || userDay == 'sabado' || userDay == 'domingo') {
		alert('Bom fim de semana!');
	} else {
		alert('Boa semana!');
	}
}

function verifyNumber(userNumber) {
	userNumber = parseInt(prompt('Digite um número:'));
	if (userNumber >= 0) {
		alert(`O número ${userNumber} é positivo!`);
	} else {
		alert(`O número ${userNumber} é negativo!`);
	}
}

function questionsChallenge() {
	let points = 0;

	alert(
		'Responda as perguntas a seguir para pontuar, cada pergunta vale 25 pontos'
	);

	const questionOne = prompt('Qual o maior time do norte / nordeste?');
	const questionTwo = prompt('Qual é o mascote do time Fortaleza?');
	const questionThree = prompt('Qual é o melhor jogo do ano de 2018?');
	const questionFour = parseInt(prompt('Quanto é 5 + 10'));

	if (questionOne.toLowerCase() === 'fortaleza') {
		points = points + 25;
	}
	if (questionTwo.toLowerCase() === 'leao') {
		points = points + 25;
	}
	if (questionThree.toLowerCase() === 'god of war') {
		points = points + 25;
	}
	if (questionFour === 15) {
		points = points + 25;
	}

	if (points >= 100) {
		alert('Parabéns, você venceu!');
	} else {
		alert('Que pena, você perdeu, tente novamente!');
	}
}

function bankAccount() {
	let money = 599.99;
	alert(`Você tem $: ${money} na sua conta do banco.`);
}

function userName(name) {
	name = prompt('Digite o seu nome:');
	alert(`Boas-vindas ${name}`);
}

const nome = document.querySelector('input[name="nome"]');
const email = document.querySelector('input[name="email"]');
const telefone = document.querySelector('input[name="telefone"]');
const cpf = document.querySelector('input[name="cpf"]');
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
	let novopaciente = new NovoPaciente(
		nome.value,
		email.value,
		telefone.value,
		cpf.value
	);

	let verifica = novopaciente.newPaciente();

	if (verifica.status == 'success') {
		nome.value = '';
		email.value = '';
		telefone.value = '';
		cpf.value = '';

		alert(verifica.message);

		console.log(verifica.message);
	} else {
		alert(verifica.message);

		console.log(verifica.message);
	}
});
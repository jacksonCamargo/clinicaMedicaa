const nome = document.querySelector('input[name="nome"]');
const crm = document.querySelector('input[name="crm"]');
const especialidade = document.querySelector('input[name="especialidade"]');
const email = document.querySelector('input[name="email"]');
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
	let novomedico = new NovoMedico(
		nome.value,
		email.value,
		crm.value,
		especialidade.value
	);

	let verifica = novomedico.newMedico();

	if (verifica.status == 'success') {
		nome.value = '';
		email.value = '';
		crm.value = '';
		especialidade.value = '';

		alert(verifica.message);

		console.log(verifica.message);
	} else {
		alert(verifica.message);

		console.log(verifica.message);
	}
});

// let paciente = new Agendamento(
// 	'30/11/2019',
// 	'Ana',
// 	'Higor',
// 	'1199999999',
// 	'19/12/2000',
// 	'82198291289182',
// 	'higor@cleantech.com'
// );

// console.log(paciente.newConsulta());

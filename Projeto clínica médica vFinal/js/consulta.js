const paciente = document.querySelector('select[name="paciente"]');
const data = document.querySelector('input[name="data"]');
const medico = document.querySelector('select[name="medico"]');
const horario = document.querySelector('select[name="horario"]');
const btn = document.querySelector('#btn');

let listMedico = localStorage.getItem('medico');
listMedico = JSON.parse(listMedico);

let listPaciente = localStorage.getItem('paciente');
listPaciente = JSON.parse(listPaciente);

for (let i = 1; i < listMedico.medicos.length; i++) {
	medico.innerHTML += `<option value='${listMedico.medicos[i].nome} - ${listMedico.medicos[i].especialidade}'>${listMedico.medicos[i].nome} - ${listMedico.medicos[i].especialidade}</option>`;
}
for (let i = 1; i < listPaciente.pacientes.length; i++) {
	paciente.innerHTML += `<option value='${listPaciente.pacientes[i].nome}'>${listPaciente.pacientes[i].nome}</option>`;
}

	
btn.addEventListener('click', () => {
	let agendar = new Agendamento(data.value, horario.value, medico.value, paciente.value);

	console.log('Isso é do event: ' + agendar.verificaConsulta());

	let verifica = agendar.newConsulta();

	if (verifica.status == 'success') {
		data.value = '';
		medico.value = '';
		paciente.value = '';
		horario.value = '';

		alert(verifica.message);
		console.log(verifica.message);
	} else {
		alert(verifica.message);

		console.log(verifica.message);
	}
});

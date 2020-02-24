const lista = document.querySelector('#lista');

let busca = localStorage.getItem('consulta');
busca = JSON.parse(busca);

for (let i = 1; i < busca.agendada.length; i++) {
	let dataInicial = new Date(busca.agendada[i].data);
	let dia = dataInicial.getDate() + 1;
	dataInicial.setDate(dia);

	let dataConvertida = dataInicial.toLocaleDateString('pt-BR');

	lista.innerHTML += `<tr><td>${busca.agendada[i].nome}</td><td>${dataConvertida}</td><td>${busca.agendada[i].horario}</td><td>${busca.agendada[i].medico}</td></tr>`;
	console.log(dataConvertida);
}

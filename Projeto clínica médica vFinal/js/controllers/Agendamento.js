class Agendamento {
	_data = '';
	_medico = '';
	_nomePaciente = '';
	_hora = '';

	constructor(data, hora, medico, nome) {
		this._data = data;
		this._medico = medico;
		this._nomePaciente = nome;
		this._hora = hora;

		if (!localStorage.getItem('consulta')) {
			let add = {
				agendada: [{}]
			};

			localStorage.setItem('consulta', JSON.stringify(add));
		}

		this.verificaConsulta();

	}

	verificaConsulta() {
		let consulta = localStorage.getItem('consulta');
		consulta = JSON.parse(consulta);
		let retorno = false;

		for (let i = 0; i < consulta.agendada.length; i++) {
			if ((consulta.agendada[i].data == this._data) && (consulta.agendada[i].medico == this._medico) && (consulta.agendada[i].horario == this._hora)) {
				retorno = false;
			} else {
				retorno = true;
			}
		}

		return retorno;
	}

	newConsulta() {
		let consulta = localStorage.getItem('consulta');
		consulta = JSON.parse(consulta);

		if (this.verificaConsulta()) {
			let novo = consulta.agendada.push({
				nome: this._nomePaciente,
				data: this._data,
				horario:  this._hora,
				medico: this._medico
			});

			let db = JSON.stringify(consulta);

			localStorage.setItem('consulta', db);

			return {
				status: 'success',
				message: 'Consulta agendada com sucesso!!'
			};
		} else {
			return {
				status: 'warning',
				message: 'Ops, parece que já tem um consulta com esse medico nessa data e horario!'
			}
		}
	}
}

class NovoPaciente {
    _nome = '';
    _email = '';
    _telefone = ''
    _cpf = '';

    constructor(nome, email, telefone, cpf){
        this._nome = nome;
        this._email = email;
		this._telefone = telefone;
        this._cpf = cpf;
		

        if (!localStorage.getItem('paciente')) {
			let add = {
				pacientes: [{}]
			};
			localStorage.setItem('paciente', JSON.stringify(add));
		}
    }

    
	verificaPaciente() {
		let paciente = localStorage.getItem('paciente');
		paciente = JSON.parse(paciente);
		let retorno = false;

		for (let i = 0; i < paciente.pacientes.length; i++) {
			if (
				paciente.pacientes[i].crm == this._cpf
			) {
				retorno = false;
			} else {
				retorno = true;
			}
		}

		return retorno;
    }
    
    newPaciente() {
        let paciente = localStorage.getItem('paciente');
		paciente = JSON.parse(paciente);

		if (this.verificaPaciente()) {
			let novo = paciente.pacientes.push({
				nome: this._nome,
				email: this._email,
				telefone: this._telefone,
				cpf: this._cpf,
			});

			let db = JSON.stringify(paciente);

			localStorage.setItem('paciente', db);

			return {
				status: 'success',
				message: 'Paciente cadastrado com sucesso!'
			};
		} else {
			return {
				status: 'erro',
				message: 'Esse paciente já existe em nossa base de dados!'
			};
		}
    }
}
class NovoMedico {
    _nome = '';
    _email = '';
    _crm = '';
    _especialidade = '';

    constructor(nome, email, crm, especialidade){
        this._nome = nome;
        this._email = email;
		this._crm = crm;
        this._especialidade = especialidade;
		

        if (!localStorage.getItem('medico')) {
			let add = {
				medicos: [{}]
			};
			localStorage.setItem('medico', JSON.stringify(add));
		}

		this.verificaMedico()
    }

    
	verificaMedico() {
		let medico = localStorage.getItem('medico');
		medico = JSON.parse(medico);
		let retorno = false;

		for (let i = 0; i < medico.medicos.length; i++) {
			if (
				medico.medicos[i].crm == this._crm
			) {
				retorno = false;
			} else {
				retorno = true;
			}
		}

		return retorno;
    }
    
    newMedico() {
        let medico = localStorage.getItem('medico');
		medico = JSON.parse(medico);

		if (this.verificaMedico()) {
			let novo = medico.medicos.push({
				nome: this._nome,
				email: this._email,
				especialidade: this._especialidade,
				crm: this._crm,
			});

			let db = JSON.stringify(medico);

			localStorage.setItem('medico', db);

			return {
				status: 'success',
				message: 'Médico cadastrado com sucesso!!'
			};
		} else {
			return {
				status: 'erro',
				message: 'Essa CRM já está cadastrada'
			};
		}
    }
}
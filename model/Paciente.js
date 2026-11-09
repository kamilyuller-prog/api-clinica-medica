export class Paciente {
    #id_paciente
    constructor (nome, cpf, data_nascimento){
        this.cpf = cpf;
        this.data_nascimento = data_nascimento;
        this.nome = nome;
        this.#id_paciente = id_paciente;
    }
}
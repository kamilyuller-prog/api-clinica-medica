export class Paciente {
    #id
    constructor (nome, cpf, data_nascimento){
        this.cpf = cpf;
        this.data_nascimento = data_nascimento;
        this.nome = nome
    }
}
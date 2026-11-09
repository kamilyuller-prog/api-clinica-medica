export class Consulta {
    #status
    #id_consulta
    constructor(data_hora, motivo){
        this.data_hora = data_hora;
        this.motivo = motivo;
        this.#id_consulta = id_consulta;
        this.status = this.#status;
    }
}
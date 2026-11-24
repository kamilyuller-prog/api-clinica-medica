import conexao from "../database/conexao.js";

export async function buscarPorId(id) {
    const sql = "SELECT * FROM consulta WHERE id_consulta = ?";
    const [consulta] = await conexao.execute (sql,[id]);

    return consulta[0];
}


export async function listar() {
    const sql = "SELECT * FROM consulta";
    const [consulta] = await conexao.execute (sql);

    return consulta;
}

export async function cadastrar(consulta) {
    const sql = "INSERT INTO consulta (data_hora, motivo, status, id_medico, id_paciente) VALUES (?, ?, ?, ?, ?)";
    const [resultado] = await conexao.execute(sql,[
        consulta.data_hora,
        consulta.motivo,
        consulta.status,
        consulta.id_medico ?? null,
        consulta.id_paciente ?? null
    ]);

    return resultado.insertId;
}

export async function atualizar(id, consulta) {
    const sql = "UPDATE consulta SET  data_hora = ?, motivo = ?, status = ? WHERE id_consulta = ?";
    const [resultado] = await conexao.execute(sql, [
        consulta.data_hora,
        consulta.motivo,
        consulta.status,
       id
    ]);

    return resultado.affectedRows;
}


export async function excluir(id){
    const sql = "DELETE FROM consulta WHERE id_consulta = ?";
    const [resultado] = await conexao.execute(sql, [id]);

    return resultado.affectedRows;
}

export async function vincularMedico(id_consulta, id_medico) {
    const sql = "UPDATE consulta SET id_medico = ? WHERE id_consulta = ?";

    const [resultado] = await conexao.execute(sql, [
        id_medico,
        id_consulta
    ]);

    return resultado.affectedRows;
}

export async function vincularPaciente(id_consulta, id_paciente) {
    const sql = "UPDATE consulta SET id_paciente = ? WHERE id_consulta = ?";

    const [resultado] = await conexao.execute(sql, [
        id_paciente,
        id_consulta
    ]);

    return resultado.affectedRows;
}
export async function removerMedico(id_consulta) {
    const sql = "UPDATE consulta SET id_medico = NULL WHERE id_consulta = ?";

    const [resultado] = await conexao.execute(sql, [id_consulta]);

    return resultado.affectedRows;
}

export async function removerPaciente(id_consulta) {
    const sql = "UPDATE consulta SET id_paciente = NULL WHERE id_consulta = ?";

    const [resultado] = await conexao.execute(sql, [id_consulta]);

    return resultado.affectedRows;
}



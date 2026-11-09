import conexao from "../databese/conexao.js";


export async function buscarPorId(id) {
    const sql = "SELECT * FROM medico WHERE id_medico = ?";
    const [medico] = await conexao.execute (sql,[id]);

    return medico[0];
}


export async function listar() {
    const sql = "SELECT * FROM medico";
    const [medico] = await conexao.execute (sql);

    return medico;
}

export async function cadastrar(medico) {
    const sql = "INSERT INTO medico (nome, crm, especialidade) VALUES (?, ?, ?)";
    const [resultado] = await conexao.execute(sql,[
       medico.nome,
       medico.crm,
       medico.especialidade
      
    ]);

    return resultado.insertId;
}

export async function atualizar(id, medico) {
    const sql = "UPDATE medico SET  nome = ?, crm = ?, especialidade = ? WHERE id_medico = ?";
    const [resultado] = await conexao.execute(sql, [
        medico.nome,
       medico.crm,
       medico.especialidade,
       id
      
    ]);

    return resultado.affectedRows;
}


export async function excluir(id){
    const sql = "DELETE FROM medico WHERE id_medico = ?";
    const [resultado] = await conexao.execute(sql, [id]);

    return resultado.affectedRows
}
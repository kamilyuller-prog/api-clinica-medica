import express from "express";
import conexao from "./database/conexao";
import pacienteRoutes from "./routes/pacienteRoutes.js";
import medicoRoutes from "./routes/medicoRoutes.js";
import consultaRoutes from "./routes/consultaRoutes.js";


const app = express();

app.use(express.json());
app.use("/pacientes", pacienteRoutes);
app.use("/medicos", medicoRoutes);
app.use("/consultas", consultaRoutes);

async function iniciarServidor() {
    try {
        await conexao.execute("SELECT 1");
        console.log("Banco de dados conectado");

        app.listen(process.env.PORT, () => {
            console.log(
                "API executando em http://localhost" + process.env.PORT
            );
        });
    } catch (erro){
        console.log("Não foi possivel conectar ao banco de dados");
    }
}
iniciarServidor();
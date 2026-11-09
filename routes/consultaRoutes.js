import { Router } from "express"
import { buscar, atualizar, cadastrar, listar } from "../controller/consultaController.js";

const router = Router();

router.post("/", buscar);
router.post("/", atualizar);
router.post("/",cadastrar);
router.post("/", listar);

export default router;
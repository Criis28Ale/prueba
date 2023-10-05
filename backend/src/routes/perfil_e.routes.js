import { Router } from "express";
import {createperfil_e, getperfiles_e, deleteperfil_e, comPerfil} from '../controllers/perfil_e.controllers'
import { compDatos, createDatos } from '../controllers/perfil.controllers'

const router = Router()

router.get('/perfil_e', getperfiles_e)
router.post('/perfil_e', createperfil_e)
router.post('/Ob_datosE', comPerfil)
router.delete('/perfil_e/:id', deleteperfil_e)

router.post('/datos', createDatos)
router.post('/Ob_datos', compDatos)

export default router
import { Router } from 'express'
import { cidadeController } from '../controllers/cidade'

const rotasPublicas = Router()

rotasPublicas.get('/create', cidadeController.created)
rotasPublicas.get('/get', cidadeController.get)
rotasPublicas.put('/put', cidadeController.put)
rotasPublicas.delete('/del', cidadeController.del)

export { rotasPublicas } 
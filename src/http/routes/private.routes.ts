import { Router } from 'express'
import { validateToken } from '../middleware'
import { cityController } from '../controllers'

const private_routes = Router()

private_routes.post('/', validateToken, cityController.getAll)

export { private_routes }

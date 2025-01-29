import { Router } from 'express'
import { cityController,loginController } from '../controllers'
import { validateToken } from '../middleware'
import { log } from 'console'

const public_routes = Router()

public_routes.post('/', validateToken ,cityController.getAll as any)

public_routes.post('/login', loginController.login_auth as any)

export { public_routes } 
import { Router } from 'express'
import { loginController } from '../controllers'

const public_routes = Router()

public_routes.post('/login', loginController.login_auth)

export { public_routes }

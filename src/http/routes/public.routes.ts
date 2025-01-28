import { Router } from 'express' //rotas do express
import { StatusCodes } from 'http-status-codes' //status codes do http
import { request, response } from 'express' //tipagem do typescript do express

const rotasPublicas = Router() //onde vai estar minhas rotas

rotasPublicas.get('/', (req: typeof request, res: typeof response) => {
    res.send('rota publica incial')
})

rotasPublicas.get('/login', (req: typeof request, res: typeof response) => {
    res.status(StatusCodes.OK).json({ 'nome': 'joao' })
})

export { rotasPublicas }
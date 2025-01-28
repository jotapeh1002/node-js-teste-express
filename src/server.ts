import express from 'express'
import { rotasPublicas } from '../src/http/routes/public.routes' //onde esta minha rota 
import 'dotenv/config' //importando o dotenv

const app = express() //meu express 

app.use(express.json()) //indicanddo que vou usar json no express

app.use(rotasPublicas) //registrando minhas rotas igual e feito no fastify

app.listen(process.env.PORT || 3333, () => {
    console.log('Servidor rodando na porta 3303')
})
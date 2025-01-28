import express from 'express'
import { rotasPublicas } from '../src/http/routes/public.routes' 
import 'dotenv/config' 
import cors from 'cors'

const app = express() 

app.use(cors())

app.use(cors({
    origin: '*'
}))

app.use(express.json()) 

app.use(rotasPublicas) 

app.listen(process.env.PORT || 1111, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT}`)
})
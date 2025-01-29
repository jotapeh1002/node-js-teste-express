import express from 'express'
import { public_routes } from '../http/routes/public.routes'
import 'dotenv/config' 
import cors from 'cors'

const app = express() 

app.use(cors())

app.use(cors({
    origin: '*'
}))

app.use(express.json()) 

app.use(public_routes) 

app.listen(process.env.PORT || 1111, () => {
    console.log(`Server running on port ${process.env.PORT}`)
})
import express from 'express'
import { private_routes } from './routes/private.routes'
import { public_routes } from './routes/public.routes'
import 'dotenv/config'
import cors from 'cors'

const app = express()

const _Port = process.env.PORT || 1111

app.use(cors())

app.use(
    cors({
        origin: '*',
    })
)

app.use(express.json())

app.use(public_routes)

app.use(private_routes)

app.listen(_Port, () => {
    console.log(`Server running on port ${_Port}`)
})

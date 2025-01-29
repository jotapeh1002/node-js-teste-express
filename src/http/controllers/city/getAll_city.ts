import { request, response } from 'express'
import { StatusCodes } from 'http-status-codes'
import z from 'zod'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

const getAllSchema = z.object({
    name: z.string(),
    email: z.string(),
    password: z.string()
})

export const getAll = async (req: typeof request, res: typeof response) => {

    const { name, email, password } = getAllSchema.parse(req.body)

    const passwordHash = await bcrypt.hash(password, 10)

    try {
        await prisma.table_user.create({
            data: {
                name,
                email,
                password: passwordHash
            }
        })

        res.status(StatusCodes.CREATED).json({ name, email, password })

    } catch (error) {
        console.log(error)
        return res.status(StatusCodes.BAD_REQUEST).json(error)
    }

}
import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { z } from 'zod'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import 'dotenv/config'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()

const loginSchema = z.object({
    email: z.string(),
    password: z.string(),
})

export const login_auth = async (
    req: Request,
    res: Response
): Promise<void> => {
    const { email, password } = loginSchema.parse(req.body)

    const user = await prisma.table_user.findUnique({
        where: {
            email,
        },
    })

    if (!user) {
        res.status(StatusCodes.NOT_FOUND).json({
            message: 'user not authorized',
        })
    } else {
        const passwordMatch = await bcrypt.compare(password, user.password)

        if (!passwordMatch) {
            res.status(StatusCodes.UNAUTHORIZED).json({
                message: 'user not authorized',
            })
        }

        const token = process.env.SECRET_KEY
            ? jwt.sign({ email }, process.env.SECRET_KEY, { expiresIn: '1d' })
            : console.log('SECRET_KEY not found!')

        res.status(StatusCodes.OK).json({
            message: `user ${user.name} authorized`,
            token: token,
        })
    }
}

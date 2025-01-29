import { request, response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

export const validateToken = (req: typeof request, res: typeof response, next: NextFunction): void => {

    if (req.headers.authorization) {
        try {
            const token = req.headers.authorization.split(' ')[1] as string
            jwt.verify(token, process.env.SECRET_KEY as string)
            next()
        } catch (error) {
            res.status(401).json({ message: 'unauthorized' })
            return
        }
    }
}
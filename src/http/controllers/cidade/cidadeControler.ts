import { request, response } from 'express'
import { StatusCodes } from 'http-status-codes'

export const created = async (req: typeof request, res: typeof response) => {
    res.status(StatusCodes.CREATED).send('create cidade')
}

export const del = async (req: typeof request, res: typeof response) => {
    res.status(StatusCodes.OK).send('create cidade')
}

export const put = async (req: typeof request, res: typeof response) => {
    res.status(StatusCodes.OK).send('create cidade')
}

export const get = async (req: typeof request, res: typeof response) => {
    res.status(StatusCodes.OK).send('create cidade')
}
import { Router } from 'express'
import { TwitService } from './twit.service.js'
import { authMiddleware } from '../auth.middleware'

const twitRouter = Router()

const twitService = new TwitService()

twitRouter.post('/', authMiddleware, (req, res) => {
    if(!req.body?.text?.length){
        return res.status(400).json({message: 'Massage is required'})
    }
    const twit = twitService.createTwit(req.body)
    res.send(`Text twit ${res.json(twit)}`)
})

export { twitRouter } 


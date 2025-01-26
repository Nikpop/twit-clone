import { Router } from 'express'
import { TwitService } from './twit.service.js'

const twitRouter = Router()

const twitService = new TwitService()

twitRouter.post('/', (req, res) => {
    const twit = twitService.createTwit(req.body)
    res.send(`Text twit ${res.json(twit)}`)
})

export { twitRouter } 
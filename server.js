import express from 'express'
import { twitRouter }  from './src/twit/twit.controller.js'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

async function main() {
    app.use(express.json())

    app.use('/api/twit', twitRouter)

    app.listen(procces.env.PORT || 4200, () => console.log('Start server'))
}

main()
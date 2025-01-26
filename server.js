import express from 'express'
import { twitRouter }  from './src/twit/twit.controller.js' 

const app = express()

async function main() {
    app.use(express.json())

    app.use('/api/twit', twitRouter)

    app.listen(4200, () => console.log('Start server'))
}

main()
import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './mongodb/connect.js'
import routerMain from './routes/main.route.js'
import routerSub from './routes/sub.route.js'
import routerJob from './routes/job.route.js'
import routerTask from './routes/task.route.js'
import routerUser from './routes/user.route.js'
dotenv.config()

const app = express()
app.use(cors())
app.use(express.json({ limit: '50mb' }))

app.get('/', (req, res) => {
    res.send({ message: "Hello World"})
})

app.use('/api/v1/main', routerMain)
app.use('/api/v1/sub', routerSub)
app.use('/api/v1/job', routerJob)
app.use('/api/v1/task', routerTask)
app.use('/api/v1/user', routerUser)

const startServer = async () => {
    try {
        connectDB(process.env.MONGODB_URL)
        app.listen(8080, () => console.log('Server started on port http://localhost:8080'))
    } catch (error) {
        console.log(error)
    }
}
startServer()
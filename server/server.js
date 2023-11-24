import express from 'express'
import cors from 'cors'
import db from './connection/database/database.js'
import userRouter from './routes/user-router.js'
import authRouter from './routes/auth-router.js'
import newsRouter from './routes/news-router.js'
import eventsRouter from './routes/events-router.js'
import resourcesRouter from './routes/resources-router.js'
import storiesRouter from './routes/stories-router.js'
import messagesRouter from './routes/messages-router.js'
import classifiedsRouter from './routes/classifieds-router.js'
import dotenv from 'dotenv';
dotenv.config();

//server config
const app = express()
const PORT = process.env.PORT || 3000;

//server parsing and format helpers
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(express.json())

//server routes
app.use('/api', userRouter)
app.use('/api', messagesRouter)
app.use('/api', authRouter)
app.use('/api', newsRouter)
app.use('/api', eventsRouter)
app.use('/api', resourcesRouter)
app.use('/api', storiesRouter)
app.use('/api', classifiedsRouter)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
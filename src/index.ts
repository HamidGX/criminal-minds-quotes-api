import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import corsOptions from './middleware/cors'
import connectDB from './config/database'
import quotesRoutes from './routes/quotesRoutes'

dotenv.config()

const app = express()

app.use(cors(corsOptions))
app.use(express.json()) // Processes JSON data

connectDB()

app.use('/api/quotes', quotesRoutes)

const PORT = process.env.PORT

app.listen(PORT, () => {
	console.log(`Server is running on port: ${PORT}`)
})

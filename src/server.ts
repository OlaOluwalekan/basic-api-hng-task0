import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import 'express-async-errors'
import NotFound from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'
import userRoutes from './routes/users.routes.js'

const app = express()

// routes middleware
app.use('/', userRoutes)

// error middleware
app.use(NotFound)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`server listening on port ${port}...`)
})

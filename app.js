const express = require('express')
const cors = require('cors')
// const rateLimit = require('express-rate-limit')
require('dotenv').config()

const PORT = process.env.PORT || 5000

const app = express()

// const limiter = rateLimit({
//     max: 50,
//     windowMs: 5 * 60 * 1000,
//     message: 'Too many requests from this IP, please try again in half an hour!'
// })

// app.use(limiter)
// app.set('trust proxy', 1)

app.use(express.static('public'))

app.use('/api', require('./routes/proxyRoutes'))

app.use(cors())

app.listen(PORT, () => {
    console.log(`Server running on ${PORT} port`)
})
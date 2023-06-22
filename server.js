require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const proudctRoute = require('./routers/productRouter');


const app = express()

const PORT = process.env.PORT || 3000 
const MONGO_URL = process.env.MONGO_URL


app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.use('/products', proudctRoute);

//app.use('/api/products', proudctRoute);

app.get('/', (req, res) => {
    res.send('Home')
})

app.get('/Manage', (req, res) => {
    res.send('Manage product')
})


mongoose.set("strictQuery", false)
mongoose.
connect(MONGO_URL)
.then(() => {
    console.log('connected to MongoDB')
    app.listen(PORT, ()=> {
        console.log(`Node API app is running on port ${PORT}`)
    });
}).catch((error) => {
    console.log(error)
})
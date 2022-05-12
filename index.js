const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://kimheesu:1234@boilerplate.ptsgy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(() => console.log('MongoDB Connected...'))
.catch((e) => console.log('MongoDB error: ', e))


app.get('/', (req, res) => res.send('Hello World! ohyeah~'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
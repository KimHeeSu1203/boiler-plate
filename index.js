const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');
const {User} = require("./models/User");

app.use(bodyParser.urlencoded({extended : true}));

app.use(bodyParser.json() );

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://kimheesu:1234@boilerplate.ptsgy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(() => console.log('MongoDB Connected...'))
.catch((e) => console.log('MongoDB error: ', e))


app.get('/', (req, res) => res.send('Hello World! ohyeah~ 새해 복 많이 받으세요 오신기'))

app.post('/register',(req, res) => {
    //회원가입할 때 필요한 정보들을 클라이언트에서 가져오면 
    //그것들을 데이터베이스에 넣어준다.

    const user = new User(req.body)
    user.save((err,doc) => {
        if(err) return res.json({success: false, err})
        return res.status(200).json({
            success : true
        })
    })

})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
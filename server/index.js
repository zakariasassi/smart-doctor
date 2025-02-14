const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000
const placeRouter = require('./router/placeRouter')
const resulteRouter = require('./router/resulteRouter')
const questionRouter = require('./router/questionRouter')
const userRouter = require('./router/UserRouter')

const cors = require('cors')
const User = require('./schema/User')
const Resulte = require('./schema/Resulte')

mongoose.connect('mongodb://localhost/SmartDoctor' , {
    useNewUrlParser : true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB Connected 👍🏼")
}).catch((err) => {
    console.log(err)
})


app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.use('/places', placeRouter);
app.use('/questions', questionRouter);
app.use('/resulte', resulteRouter);
app.use('/user', userRouter);



app.listen(port, () => console.log(`Example app listening on port ${port}!`))
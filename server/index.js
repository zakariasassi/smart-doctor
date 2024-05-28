const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000
const placeRouter = require('./router/placeRouter')
const resulteRouter = require('./router/resulteRouter')
const questionRouter = require('./router/questionRouter')
const cors = require('cors')

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



app.listen(port, () => console.log(`Example app listening on port ${port}!`))
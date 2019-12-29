const express = require('express');
const app = express();
const http = require('http').createServer(app);
const userRouter = require('./routes/createUser');
const mongoose = require('mongoose');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', userRouter);

mongoose.Promise = global.Promise;

// Connect MongoDB at default port 27017.
mongoose.connect('mongodb://localhost:27017/employees', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded.')
    } else {
        console.log('Error in DB connection: ' + err)
    }
});
const port = 3000;
http.listen(3000, () => console.log(`server ${port} üzerinde ayakta`));
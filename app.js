import HTTP from 'http';
import express from 'express';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

console.log("run")

app.get('/', function (req, res) {
    res.send('Hello World');
})

var server = app.listen("localhost", process.env.PORT, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})

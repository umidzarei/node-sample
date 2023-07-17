import HTTP from 'http';
import express from 'express';
const app = express();

app.get('/', function (req, res) {
    res.send('Hello World');
})


var server = app.listen('localhost', 7041, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})

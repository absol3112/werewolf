/**
 * Created by absol3112 on 2019/02/28.
 */
let express = require('express');

let http = require('http');

var app = express();
var request = require('request');

var httpServer = http.createServer(app);

var io = require('socket.io')(httpServer);

let PORT = process.env.PORT || 80;

app.post('/webhook',function(req, res){
    console.log('worked');
    res.status(200).end();
});

httpServer.listen(PORT, () => console.log('Running!!! Listenning on ' + PORT));
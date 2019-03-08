/**
 * Created by absol3112 on 2019/02/28.
 */
let express = require('express');

let http = require('http');

var app = express();

var httpServer = http.createServer(app);

let PORT = process.env.PORT || 80;

app.get('/',function(req, res){
    console.log('worked');
    res.status(200).send();
});

httpServer.listen(PORT, () => console.log('Running!!! Listenning on ' + PORT));
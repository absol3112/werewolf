/**
 * Created by absol3112 on 2019/02/28.
 */
let express = require('express');

let http = require('http');

var app = express();

var httpServer = http.createServer(app);

let PORT = process.env.PORT || 80;

let discordApiUrl = process.env.DISCORD_API_URL || 'https://discordapp.com/api';

let discordServerId = process.env.DISCORD_SEVER_ID || '545425833351839771';

app.get('/',function(req, res){

    console.log(res);
    res.status(200).send();
});

app.get(discordApiUrl + '/users/@me',function(req, res){
    // var url = discordApiUrl + '/users/@me';
    console.log(res);
    res.status(200).send();
});

httpServer.listen(PORT, () => console.log('Running!!! Listenning on ' + PORT));
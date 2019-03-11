/**
 * Created by absol3112 on 2019/02/28.
 */
let express = require('express');

let http = require('http');

var app = express();

var httpServer = http.createServer(app);

let PORT = process.env.PORT || 80;

let discordApiUrl = process.env.DISCORD_API_URL || 'https://discordapp.com/api/v6';

let discordServerId = process.env.DISCORD_SEVER_ID || '545425833351839771';

const CLIENT_ID = '554486406190333963';

const SECRET_CLIENT_ID = 'mq4taSG_zO04d87vE5UrSJcK9HezzFbo';

app.get('/',function(req, res){

        console.log(req.query.code);
});

app.post(discordApiUrl + '/users/@me',function(req, res){
    // var url = discordApiUrl + '/users/@me';
    console.log(res);
    res.status(200).send();
});

httpServer.listen(PORT, () => console.log('Running!!! Listenning on ' + PORT));
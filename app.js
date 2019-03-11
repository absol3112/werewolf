/**
 * Created by absol3112 on 2019/02/28.
 */
let express = require('express');

let http = require('http');

var app = express();

const request = require('request');

var httpServer = http.createServer(app);

let PORT = process.env.PORT || 80;

let discordApiUrl = process.env.DISCORD_API_URL || 'https://discordapp.com/api/v6';

let discordServerId = process.env.DISCORD_SEVER_ID || '545425833351839771';

const CLIENT_ID = '554486406190333963';

const CLIENT_SECRET = 'mq4taSG_zO04d87vE5UrSJcK9HezzFbo';

app.get('/',function(req, res){
    var code = req.query.code;
    // exchange_code(code);
    options = {
        url: discordApiUrl +'/oauth2/token',
        data : {
            'client_id': CLIENT_ID,
            'client_secret': CLIENT_SECRET,
            'grant_type': 'authorization_code',
            'code': code,
            'redirect_uri': 'https://discord-werewolf-31121994.herokuapp.com/',
            'scope': 'identify email connections'
        },
        headers : {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
    };
    request.post(options, function(error, response, body){
      console.log(body);
      res.status(200).send();
    });
    
});


httpServer.listen(PORT, () => console.log('Running!!! Listenning on ' + PORT));
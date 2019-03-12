/**
 * Created by absol3112 on 2019/02/28.
 */
let express = require('express');

let http = require('http');

var app = express();

const request = require('request');

var Discord = require('discord.io');

var httpServer = http.createServer(app);

let PORT = process.env.PORT || 80;

let discordApiUrl = process.env.DISCORD_API_URL || 'https://discordapp.com/api/v6';

let discordServerId = process.env.DISCORD_SEVER_ID || '545425833351839771';

let discordChannelId = process.env.DISCORD_CHANNEL_ID || '548482050370306082';

const CLIENT_ID = '554486406190333963';

const CLIENT_SECRET = 'mq4taSG_zO04d87vE5UrSJcK9HezzFbo';
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
console.log(auth.token);
// Initialize Discord Bot
var bot = new Discord.Client({
    token: auth.token,
    autorun: true
});
console.log(bot);
bot.on('ready', function() {
    console.log('Logged in as %s - %s\n', bot.username, bot.id);
});

bot.on('message', function(user, userID, channelID, message, event) {
    if (message === "ping") {
        bot.sendMessage({
            to: channelID,
            message: "pong"
        });
    }
});

app.get('/',function(req, res){
    request.post(options, function(error, response, body){
      console.log(body);
      res.status(200).send();
    });
    
});


httpServer.listen(PORT, () => console.log('Running!!! Listenning on ' + PORT));
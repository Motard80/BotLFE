const discord = require('discord.js');
const bot = new discord.Client( {intents: 3276799});
const config = require('./config.js');

bot.on('ready', async() => {
    console.log(`Bot ${bot.user.tag} en ligne !`);
});

bot.login(config.token);
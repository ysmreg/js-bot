const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

client.once('ready', () => {
    console.log('Bot is online!');
});

client.on('messageCreate', message => {
    if (message.author.bot) return; // ボットのメッセージは無視

    const content = message.content.toLowerCase();

    if (content.includes('js')) {
        message.channel.send('**WARNING: "JS" means JavaScript. It doesn\'t mean 女子小学生**');
    }
});

client.login(process.env.TOKEN);

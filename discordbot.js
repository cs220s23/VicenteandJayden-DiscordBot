// Initialize dotenv
require('dotenv').config();

// v14
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [ 
  GatewayIntentBits.DirectMessages,
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildBans,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent,]
   });

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
});

// Log In our bot
client.login(process.env.CLIENT_TOKEN);

client.on("messageCreate", msg => {
// You can view the msg object here with console.log(msg)
 if (msg.content === "Hello") {
   msg.reply({ content: `Hello Sir ${msg.author.username}`});
 }
});
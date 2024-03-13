const {Client, IntentsBitField} = require("discord.js");
require('dotenv').config();

//Handle client flags
const client = new Client({
	intents: [
		IntentsBitField.Flags.Guilds,
		IntentsBitField.Flags.GuildMembers,
		IntentsBitField.Flags.GuildMessages,
		IntentsBitField.Flags.MessageContent
	]
})

client.on('ready', (c) => {
	console.log(`Planner Peon is Ready!`);
});

client.login(`${process.env.API_KEY}`);

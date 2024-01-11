const {Client, IntentsBitField} = require("discord.js");

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

client.login("MTE5NTEwMDM1MzE4MDQ3NTQwMw.GOx0v7.rEWHr79JxgTzUs4GUOrHAMPw-g5NFGNgEdUcAA");

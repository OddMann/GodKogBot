require('dotenv').config();
const cron = require("cron");
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });


function coinflip(){
  return Math.random() >= 0.5 ? "Heads" : "Tails";
}

function randomteams(){
  return ("Teams?");
}

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'thori') {
    await interaction.reply("https://i.imgur.com/bnjjOzL.png");
  }

  if (interaction.commandName === 'coinflip'){
    await interaction.reply(coinflip());
  }

  /*if (interaction.commandName === 'randomteams'){
    const channel = interaction.guild.channels.cache.find(ch => ch.name === 'channel name');

    if (channel.type !== 'GUILD_VOICE') return; // returns the command if the channel is not a voice channel

    channel.members.array().forEach(member => {
    console.log(member.user.username);
    });
    //if(!vC){
    //  await interaction.reply({ content: "You need to join a voice channel first", ephemeral: true });
    //}
  }*/
  });

let job = new cron.CronJob('* * * * *', () => {
  client.channels.cache.get(process.env.GUILD_ID_WUB).send(`<@${133693382252953600}>`);
  client.channels.cache.get(process.env.GUILD_ID_WUB).send("https://i.imgur.com/bnjjOzL.png");
  console.log("Sendt automatic message");
});

job.start();

client.login(process.env.TOKEN);
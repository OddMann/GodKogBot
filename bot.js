require('dotenv').config();
const cron = require("cron");
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

let channel = "218739376413212674";

function coinflip(){
  return Math.random() >= 0.5 ? "Heads" : "Tails";
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
});

let job = new cron.CronJob('59 20 * * *', () => {
  client.channels.cache.get(channel).send("https://i.imgur.com/bnjjOzL.png")
  })

job.start()

client.login(process.env.TOKEN);
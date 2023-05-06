require('dotenv').config();
const cron = require("cron");
const { Client, Intents, Guild } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });


function coinflip(){
  return Math.random() >= 0.5 ? "Heads" : "Tails";
}

function randomteams(){
  return ("Teams?");
}

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  let d = new Date();
  console.log(d);
  client.user.setActivity('Farmen', { type: 'WATCHING'});
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'thori') {
    const message = await interaction.reply({ content: "https://i.imgur.com/bnjjOzL.png", fetchReply: true});
    
    try {
      await message.react("<:PogU:893909890056200233>");
    } catch (error) {
      console.error('React Emoji Failed', error);
    }

    try {
      await message.react('🇹');
      await message.react('🇭');
      await message.react('🇴');
      await message.react('🇷');
      await message.react('🇮');
    } catch (error) {
      console.error('React Emoji Failed', error);
    }
  }

  if (interaction.commandName === 'coinflip'){
    await interaction.reply(coinflip());
  }

  if (interaction.commandName === 'randomteams'){
    //channel.members.array().forEach(member => {
    //console.log(member.user.username);
    //});

    //let userInVoice = [];

    //interaction.member.voice.channel.members.each(member => {
    //  userInVoice.push(member.user.tag)
    //  console.log(member.user.tag)
    //})

    await interaction.reply({ content: "Command not implemented", ephemeral: true });

  }
  });

  /* let job = new cron.CronJob('00 00 20 * * *', async() => {
  client.channels.cache.get(process.env.GUILD_ID_WUB).send(`<@${170242031342321675}>`);
  const message = await client.channels.cache.get(process.env.GUILD_ID_WUB).send({ content: "https://i.imgur.com/bnjjOzL.png", fetchReply: true});

  try {
    await message.react("<:PogU:893909890056200233>");
  } catch (error) {
    console.error('React Emoji Failed', error)
  }

  try {
    await message.react('🇹');
    await message.react('🇭');
    await message.react('🇴');
    await message.react('🇷');
    await message.react('🇮');
  } catch (error) {
    console.error('React Emoji Failed', error)
  }

  console.log("Sendt automatic message");
}); */

//job.start();

client.login(process.env.TOKEN);
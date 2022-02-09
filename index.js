const Discord = require('discord.js');
const client = new Discord.Client({ ws: { intents: new Discord.Intents(Discord.Intents.ALL) } });
const config = require('./config.json');
const token = config.token;
const { greenBright } = require('chalk')
const { yellow } = require('chalk')
const prefix = config.prefix;
const noob = config.ID;


client.on("ready", () => {
  console.log(`Subscribe to SneaX!`)
  console.log(`Prefix : ${prefix}`)
  console.log(`https://discord.gg/PHx7v724Fc`)
  client.user.setActivity({ type: "WATCHING", name: `SneaX<3` });
});


client.on("message", message => {

if (message.content.startsWith(prefix + 'dm')) {
    if (message.author.id != noob) {
      return message.reply(`Couldn't find your User ID in Database.`)
    }
    else {
      args = message.content.split(" ").slice(1);
      var argresult = args.join(' ');

      message.guild.members.cache.forEach(member => {
        member.send(argresult).then(console.log(greenBright(` [+] Successfull DM | ${member.user.username}#${member.user.discriminator}`))).catch(e => console.error(yellow(`[+] Retrying | ${member.user.username}#${member.user.discriminator}`)));
      })
    }
  }

})

console.log(`[E] Successfull.`)
console.log(`Subscribe to SneaX on YouTube!`)



client.login(token);

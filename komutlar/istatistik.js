const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (bot, message, args) => {

  const i = new Discord.MessageEmbed()
   .addField("» **Kullanıcılar** |" , bot.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
   .addField("» **Sunucular** |", bot.guilds.cache.size.toLocaleString(), true)
  .addField("» **Ping**", `${bot.ws.ping}`, true)
  return message.channel.send(i)
   };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['i', 'istatistik'],
  permLevel: 0
};

exports.help = {
  name: "istatistik",
  description: "Bot i",
  usage: "istatistik"
};
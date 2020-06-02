const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async(client, message) => {

let kanal = message.mentions.channels.first()
if (!kanal) {
  const kanal = new Discord.MessageEmbed()
  .setTitle('Başarısız')
  .setDescription('Lütfen Kanal Belirtin!')
  return message.channel.send(kanal)
}

  db.set(`UyarıLog_${message.guild.id}`,kanal.id)
  const yes = new Discord.MessageEmbed()
  .setTitle('Başarılı')
  .setDescription(`Log Kanalı Başarıyla ${kanal} olarak ayarlandı`)
  return message.channel.send(yes)
};
exports.conf = {
enabled: false,
guildOnly: false,
aliases: [],
permLevel : 0
};
exports.help = {
name: 'uyarı-log-ayarla'
};

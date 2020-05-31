const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');


exports.run = async(client, message, args) => {
  
let p = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix

if (!args[0]) {
  const sa = new Discord.MessageEmbed()
  .setTitle('Hatalı Kullanım!')
  .setDescription(`Bunumu Arıyorsun? ${p}modlog aç/kapat`)
  return message.channel.send(sa)
}
};
exports.conf = {
  enabled: true,  
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'modlog'
}; 
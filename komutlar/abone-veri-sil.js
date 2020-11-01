const { MessageEmbed } = require('discord.js');
const db = require('quick.db');
const settings = require('../ayarlar.json')


exports.confing = {
  name: 'abone-veri-sil',
  enabled: true,
  guildOnly: true,
  aliases: ["abone"],
  permLevel: 0, 
  description: "Herkesin Verilerini Siler",
  usage: `${settings.bot.prefix}abone-veri-sil`
}


exports.run = async (client, message, args) => {

 if(!message.member.roles.cache.has(settings.roles.kurucu)){
 	  return message.react(settings.emojis.uyarı)
 }

  db.delete(`aboneyetkili`)
  
  return message.channel.send("Başarıyla Herkesin Verisi Silindi!").then(a => a.delete({timeout:4000}))

 // message.guild.owner.send("Herkesin Verisini Sildim!")
  
};

const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
 
exports.run = async(client, message, args) => {

let prefix = ayarlar.prefix
  
  
  if (!args[0]) {
    const sa = new Discord.MessageEmbed()
    .setDescription(`Bunu mu Arıyorsun? ${prefix}rol-koruma aç/kapat`)
    .setTimestamp()
    return message.channel.send(sa)
  }
  if (args[0] === 'aç') {
    
    db.set(`rolk_${message.guild.id}`, "Aktif")
       const sa = new Discord.MessageEmbed()
    .setDescription(`Rol Koruma Başarıyla Açıldı!`)
    .setTimestamp()
    return message.channel.send(sa)
  }
   if (args[0] === 'kapat') {
    
    db.delete(`rolk_${message.guild.id}`)
       const sa = new Discord.MessageEmbed()
    .setDescription(`Kanal Koruma Başarıyla Kapatıldı!`)
    .setTimestamp()
    return message.channel.send(sa)
  }
};
exports.conf = {
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'rol-koruma'
}; 
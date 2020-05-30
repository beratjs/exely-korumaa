const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
const db = require('quick.db')
exports.run = async(client, message ) => {
  let p = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  
  const yardımm = new Discord.MessageEmbed()
  .addField('**Yardım Menüsü**', `sa`)
  return message.channel.send(yardımm)

}
exports.conf = {
  enabled: true,  
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'm'
}; 
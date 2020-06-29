const Discord = require('discord.js')
const db = require('quick.db');

exports.run = async (client, message, args) => {
 

let önericik = args.slice(0).join(' ')
if (!önericik) return message.channel.send('Heyyy! Öneri Belirtki Atayım')



const sa = new Discord.MessageEmbed()
.setTitle('Öneri Var!')
.setTimestamp()

.setFooter('Öneri Sistemi')
.setDescription(`Kullanıcı : ${message.author.tag} \n Sunucu : ${message.guild.name} \n Önerisi : ${önericik} `)
client.channels.cache.get('713478784908656723').send(sa)
                
}
exports.conf = {
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: "öneri"
}
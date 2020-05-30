const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')

exports.run = async(client, message, args,) => {

  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
 let otorol = message.mentions.roles.first()
 let ototakipkanal = message.mentions.channels.first()
 if (!otorol) {
   const rol = new Discord.MessageEmbed()
   .setTitle('B')
 }


}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['otorol'],
    permLevel: 0
}

exports.help = {
    name: 'otorol'
}
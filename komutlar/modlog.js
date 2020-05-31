const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db')

const prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {
  
  if (!message.member.permissions.has(      
      "ADMINISTRATOR")) return message.reply(`Bunu yapabilmek için gerekli yetkiye sahip değilsiniz!`)
  
  let modlogs = db.get(`modlog_${message.guild.id}`)
  
  if(!modlogs) {
    let kanal = message.mentions.channels.first();
    if(!kanal) return message.channel.send(` Hatalı kullandın! Örnek Kullanım: \n\n\`${prefix}modlog <#kanal>\`.`)

    db.set(`modlog_${message.guild.id}`, kanal.id)
    const modlogkanal = message.guild.channels.find(kanal => kanal.id === modlogs);
    message.channel.send(` Modlog kanalı başarılı bir şekilde ayarlandı`)
    
    
    }
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['modlog'],
    permLevel: 2
}

exports.help = {
    name: 'mod-log',
    description: '...',
    usage: 'modlog <#kanal>'
}

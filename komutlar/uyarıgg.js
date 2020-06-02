const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async(client, message) => {
  
  message.guild.members.cache.forEach(user => {
 db.delete(`UyarıKullanıcı_${message.guild.id}_${user.user.id}`)
    })
 db.delete(`UyarıLog_${message.guild.id}`)
message.channel.send('Uyarı Sistemini Sıfırlandın!')
};
exports.conf = {
enabled: false,
guildOnly: false,
aliases: [],
permLevel : 0
};
exports.help = {
name: 'uyarı-sistemi-kapat'
};

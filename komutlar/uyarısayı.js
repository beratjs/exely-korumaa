const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async(client, message) => {

let user = message.mentions.users.first() || message.author
let uyarısayı = await db.fetch(`UyarıKullanıcı_${message.guild.id}_${user.id}`)||0
const sayı = new Discord.MessageEmbed()
.setDescription(`${user}ın ${uyarısayı} kadar uyarısı var`)
return message.channel.send(sayı)


};
exports.conf = {
enabled: false,
guildOnly: false,
aliases: [],
permLevel : 0
};
exports.help = {
name: 'uyarısayı'
};

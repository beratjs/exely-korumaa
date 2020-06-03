const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');

exports.run = async(client, message, args) => {
  let p = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  let kanal = message.mentions.channels.first()
  
if (!message.member.permissions.has('MANAGE_SERVER')) {
    const izinyok34 = new Discord.MessageEmbed()
    .setTitle('Başarısız')
    .setDescription('Bu Komut İçin Yetkin Yok!')
    return message.channel.send(izinyok34)
  }
  if (!args [0]) {
    const sv = new Discord.MessageEmbed()
    .setTitle('Başarısız')
    .setDescription(`Bunumu Arıyorsun? \n ${p}davet-takip kapat `)
    return message.channel.send(sv)
  }
 
  
  if (args [0] == 'kapat') {
    
    db.delete(`davettakip_${message.guild.id}`)

   const küfürengelcim222 = new Discord.MessageEmbed()
    .setTitle('Başarılı')
    .setDescription('Davet Takip Sistemini Kapattım!')
    return message.channel.send(küfürengelcim222)
   
  }

    
};
exports.conf = {
  enabled: true,  
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'davet-takip'
}; 
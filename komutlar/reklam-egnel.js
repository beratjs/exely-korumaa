const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');

exports.run = async(client, message, args) => {
  
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix

  if (!message.member.permissions.has('KICK_MEMBERS')) return message.channel.send(`**Hey Sen** Evet Sen! Bu Komut İçin Yeterli Yetkin Yok!`)
  if (!args[0]) return message.channel.send(`Bunumu Arıyorsun? ${prefix}reklam-engel aç/kapat`)
   
  if (args [0] == 'aç') {
    
    let i = await db.fetch(`reklamengel_${message.guild.id}`)
    
    const reklamengelcim = new Discord.MessageEmbed()
    .setTitle('Başarılı')
    .setDescription('**Reklam Engeli Açtım**')
    return message.channel.send(reklamengelcim)
   db.set(`reklamengel_${message.guild.id}`, 'açık')
  }
  
  if (args [0] == 'kapat') {
      
    db.delete(`reklamengel_${message.guild.id}`)

   const küfürengelcim22 = new Discord.MessageEmbed()
    .setTitle('Başarılı')
    .setDescription('**Reklam Engeli Kapattım**')
    return message.channel.send(küfürengelcim22)
  }

  
  
  
};
exports.conf = {
 enabled: true,
 guildOnly: false,
  aliases: ['reklam-engel'],
 permLevel: 0
};

exports.help = {
 name: 'reklam-engelle'
};
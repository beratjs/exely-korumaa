const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');

exports.run = async(client, message, args) => {
  
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix

  if (!message.member.permissions.has('KICK_MEMBERS')) return message.channel.send(`**Hey Sen** Evet Sen! Bu Komut İçin Yeterli Yetkin Yok!`)
  if (!args[0]) return messag
    const küfürengelcim3 = new Discord.MessageEmbed()
    .setTitle('Başarılı')
    .setDescription('Küfür Engeli Kapattım')
    return message.channel.send(küfürengelcim3)
  
  if (args [0] == 'aç') {
    db.set(`küfürengel_${message.guild.id}`, 'açık')
    let lu = await db.fetch(`küfürengel_${message.guild.id}`)
    
    const küfürengelcim = new Discord.MessageEmbed()
    .setTitle('Başarılı')
    .setDescription('Küfür Engeli Açtım')
    return message.channel.send(küfürengelcim)

  }
  
  if (args [0] == 'kapat') {
      
    db.delete(`küfürengel_${message.guild.id}`)

   const küfürengelcim2 = new Discord.MessageEmbed()
    .setTitle('Başarılı')
    .setDescription('Küfür Engeli Kapattım')
    return message.channel.send(küfürengelcim2)
  }

  
  
  
};
exports.conf = {
 enabled: true,
 guildOnly: false,
  aliases: ['küfür-engel'],
 permLevel: 0
};

exports.help = {
 name: 'küfür-engelle'
};
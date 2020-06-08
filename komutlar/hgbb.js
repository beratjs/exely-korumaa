const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');

exports.run = async(client, message, args) => {
  
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  let kanal = message.mentions.channels.first();

  if (!message.member.permissions.has('KICK_MEMBERS')) {
    const izinyok = new Discord.MessageEmbed()
    .setTitle('Başarısız')
    .setDescription('Bu Komut İçin Yetkin Yok!')
    return message.channel.send(izinyok)
  }
  if (!args[0])  {
    const küfürcuk32 = new Discord.MessageEmbed()
    .setTitle('Başarısız')
    .setDescription(`Bunumu Arıyorsun? \n ${prefix}hg-bb aç/kapat`)
      return message.channel.send(küfürcuk32)

  }
  if (!kanal) {
    const hgbb = new Discord.MessageEmbed()
    .setTitle('Başarısız')
    .setDescription(`Kanal Belitmen Lazım`)
      return message.channel.send(hgbb)
  }
    db.set(`hgbb_${message.guild.id}`,kanal.id)
    let lu = await db.fetch(`hgbb_${message.guild.id}`,kanal.id)
    
    const küfürengelcim6 = new Discord.MessageEmbed()
    .setTitle('Başarılı')
    .setDescription('Hg-bbyi Açtım')
    .setColor("RED")
    return message.channel.send(küfürengelcim6)

  
  
  
  
  
};
exports.conf = {
 enabled: true,
 guildOnly: false,
  aliases: ['hg-bb'],
 permLevel: 0
};

exports.help = {
 name: 'hgbb'
};
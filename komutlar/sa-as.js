const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');

exports.run = async(client, message, args) => {
  
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  

  if (!message.member.permissions.has('KICK_MEMBERS')) {
    const izinyok = new Discord.MessageEmbed()
    .setTitle('Başarısız')
    .setDescription('Bu Komut İçin Yetkin Yok!')
    return message.channel.send(izinyok)
  }
  if (!args[0])  {
    const küfürcuk0 = new Discord.MessageEmbed()
    .setTitle('Başarısız')
    .setDescription(`Bunumu Arıyorsun? \n ${prefix}sa-as aç/kapat`)
      return message.channel.send(küfürcuk0)

  }
  if (args [0] == 'aç') {
    db.set(`saas_${message.guild.id}`, 'acik')
    let saascı = await db.fetch(`saas_${message.guild.id}`)
    
    const küfürengelcim5 = new Discord.MessageEmbed()
    .setTitle('Başarılı')
    .setDescription('Selam Verildiğinde Cevap Vereceğim!')
    return message.channel.send(küfürengelcim5)

  }
  
  if (args [0] == 'kapat') {
    
    db.delete(`saas_${message.guild.id}`, 'kapali')

   const küfürengelcim89 = new Discord.MessageEmbed()
    .setTitle('Başarılı')
    .setDescription('Selam Verildiğinde Cevap Vermeyeceğim')
    return message.channel.send(küfürengelcim89)
   
  }

  
  
  
};
exports.conf = {
 enabled: true,
 guildOnly: false,
  aliases: ['saas'],
 permLevel: 0
};

exports.help = {
 name: 'sa-as'
};
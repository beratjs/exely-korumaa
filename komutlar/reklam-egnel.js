const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');

exports.run = async(client, message, args) => {
  
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  

  if (!message.member.permissions.has('KICK_MEMBERS')) {
    const izinyok2 = new Discord.MessageEmbed()
    .setTitle('Başarısız')
    .setDescription('Bu Komut İçin Yetkin Yok!')
    return message.channel.send(izinyok2)
  }
  if (!args[0])  {
    const küfürcuk8888 = new Discord.MessageEmbed()
    .setTitle('Başarısız')
    .setDescription(`Bunumu Arıyorsun? \n ${prefix}reklam-engel aç/kapat`)
      return message.channel.send(küfürcuk8888)

  }
  if (args [0] == 'aç') {
    db.set(`reklamengel_${message.guild.id}`, 'açık')
    let lu = await db.fetch(`reklamengel_${message.guild.id}`)
    
    const küfürengelcim9 = new Discord.MessageEmbed()
    .setTitle('Başarılı')
    .setDescription('Reklam Engeli Açtım')
    return message.channel.send(küfürengelcim9)

  }
  
  if (args [0] == 'kapat') {
    
    db.delete(`reklamengel_${message.guild.id}`)

   const küfürengelcim23 = new Discord.MessageEmbed()
    .setTitle('Başarılı')
    .setDescription('Reklam Engeli Kapattım')
    return message.channel.send(küfürengelcim23)
   
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
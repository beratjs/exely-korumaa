const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');

exports.run = async(client, message, args) => {
  
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  

  if (!message.member.hasPermissions('KICK_MEMBERS')) {
    const izinyok34 = new Discord.RichEmbed()
    .setTitle('Başarısız')
    .setDescription('Bu Komut İçin Yetkin Yok!')
    return message.channel.send(izinyok34)
  }
  if (!args[0])  {
    const küfürcuk = new Discord.RichEmbed()
    .setTitle('Başarısız')
    .setDescription(`Bunumu Arıyorsun? \n ${prefix}capslock-engel aç/kapat`)
      return message.channel.send(küfürcuk)

  }
  if (args [0] == 'aç') {
    db.set(`capslock_${message.guild.id}`, 'açık')
    let lu = await db.fetch(`capslock_${message.guild.id}`)
    
    const küfürengelcim23 = new Discord.RichEmbed()
    .setTitle('Başarılı')
    .setDescription('CapsLock Engeli Açtım')
    return message.channel.send(küfürengelcim23)

  }
  
  if (args [0] == 'kapat') {
    
    db.delete(`capslock_${message.guild.id}`)

   const küfürengelcim222 = new Discord.RichEmbed()
    .setTitle('Başarılı')
    .setDescription('Capslock Engeli Kapattım')
    return message.channel.send(küfürengelcim222)
   
  }

  
  
  
};
exports.conf = {
 enabled: true,
 guildOnly: false,
  aliases: ['caps-lock'],
 permLevel: 0
};

exports.help = {
 name: 'capslock'
};
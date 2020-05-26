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
  if (!args[0]) return message.channel.send(`Bunumu Arıyorsun? ${prefix}küfür-engel aç/kapat`)
   
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
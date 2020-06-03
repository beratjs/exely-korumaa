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
    .setDescription(`Bunumu Arıyorsun? \n ${p}davettakipayarla `)
    return message.channel.send(sv)
  }
  if (!kanal) {
       const sv2 = new Discord.MessageEmbed()
    .setTitle('Başarısız')
    .setDescription(`Kanal Belirtmeyi Unuttun!`)
    return message.channel.send(sv2)
  }
  if  (args [0] == 'aç') {
    db.set(`davettakip_${message.guild.id}`,kanal.id)
    let lu2 = await db.fetch(`davettakip_${message.guild.id}`)
    
    const küfürengelcim23 = new Discord.MessageEmbed()
    .setTitle('Başarılı')
    .setDescription('CapsLock Engeli Açtım')
    return message.channel.send(küfürengelcim23)

  }
  
  if (args [0] == 'kapat') {
    
    db.delete(`davettakip_${message.guild.id}`)

   const küfürengelcim222 = new Discord.MessageEmbed()
    .setTitle('Başarılı')
    .setDescription('Davet Takip Siste')
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
  name: 'd'
}; 
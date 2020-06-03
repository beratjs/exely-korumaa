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
    .setDescription(`Bunumu Arıyorsun? \n ${p}davet-takip aç #kanal `)
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
    .setDescription(`Davet Sistemi Açıldı! \n Kanal : ${kanal} olarak ayarlandı!`)
    .setColor("RED")
    return message.channel.send(küfürengelcim23)

  }
  

    
};
exports.conf = {
  enabled: true,  
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'davet-takip '
}; 
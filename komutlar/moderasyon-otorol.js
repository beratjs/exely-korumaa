const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')

exports.run = async(client, message, args) => {

  let p = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
 let otorol = message.mentions.roles.first()
 let ototakipkanal = message.mentions.channels.first()
 if (!args[0]) {
  const sa = new Discord.MessageEmbed()
  .setTitle('Hatalı Kullanım!')
  .setDescription(`Bunumu Arıyorsun? ${p}otorol aç @rol #kanal`)
  return message.channel.send(sa)
}
 if (!otorol) {
   const rol = new Discord.MessageEmbed()
   .setTitle('Başarısız!')
   .setDescription(`Rol Belirtmen Lazım!`)
   return message.channel.send(rol)
 }
if (!ototakipkanal) {
  const kanal = new Discord.MessageEmbed()
  .setTitle('Başarısız!')
  .setDescription(`Kanal Belirtmen Lazım!`)
  return message.channel.send(kanal)
}
  if (args [0] == 'aç') {
    db.set(`otorol_${message.guild.id}`, 'açık')
    let lu = await db.fetch(`otorol_${message.guild.id}`)
    const otorols = new Discord.MessageEmbed()
    .setTitle('Başarılı')
    .setDescription('Otorolü Ayarladım')
    return message.channel.send(otorols)
    }
  if (args [0] == 'kapat') {
    
    db.delete(`otorol_${message.guild.id}`)
    
    const nedenn = new Discord.MessageEmbed()
    .setTitle('Başarılı!')
    .setDescription('Otorolü Kapattım!')
    return message.channel.send(nedenn)
  }
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['otorol'],
    permLevel: 0
}

exports.help = {
    name: 'otorol'
}
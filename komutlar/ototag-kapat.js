const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../ayarlar.json'),
      prefix = ayarlar.prefix
exports.run = async(client, message, args) =>{
  
let frenzy_ibrahim = await db.fetch(`Frenzy?Code?Ototag_${message.guild.id}`) || await db.fetch(`Frenzy?Code?OtotagKanal_${message.guild.id}`)
if(!frenzy_ibrahim) return message.reply(`:x: Bu sistem zaten kapalı durumda. Açmak için **${prefix}ototag Tag kanal**`)
db.delete(`Frenzy?Code?Ototag_${message.guild.id}`) 
db.delete(`Frenzy?Code?OtotagKanal_${message.guild.id}`)
message.channel.send(`Ototag kapatıldı!\nYeni gelen kullanıcılara hiç bir Tag vermeyeceğim.`)
};  
exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['ototag-kapat'],
  permLevel: 0 
};
exports.help = {
  name: 'ototagkapat',
  description: 'Ototag Sistemi - Frenzy Code',
  usage: 'ototagkapat'
};

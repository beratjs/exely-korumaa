const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../ayarlar.json'),
      prefix = ayarlar.prefix
exports.run = async(client, message, args) =>{
  
let frenzy_ibrahim = await db.fetch(`Frenzy?Code?Ototag_${message.guild.id}`) || await db.fetch(`Frenzy?Code?OtotagKanal_${message.guild.id}`)
if(frenzy_ibrahim) return message.reply(`:x: Bu sistem zaten aktif durumda. Kapatmak için **${prefix}ototagkapat**`)
let frenzy_kanal = message.mentions.channels.first()
let frenzy_tag = args.slice(1).join(' ')
if(!frenzy_kanal || !frenzy_tag) return message.reply(`Ototag sistemini ayarlamak için **kanal ve tag** belirtmelisin.`)
  
db.set(`Frenzy?Code?Ototag_${message.guild.id}`,frenzy_tag) 
db.set(`Frenzy?Code?OtotagKanal_${message.guild.id}`,frenzy_kanal.id)
message.channel.send(`Ototag aktif edildi!\nYeni gelen kullanıcılara **${frenzy_tag}** vereceğim.`)
};  
exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['ototagayarla'],
  permLevel: 0 
};
exports.help = {
  name: 'ototag',
  description: 'Ototag Sistemi - Frenzy Code',
  usage: 'ototag kanal tag'
};

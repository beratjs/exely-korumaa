const Discord = require('discord.js')
const db = require("quick.db");
const settings = require('../ayarlar.json')

exports.confing = {
   name: "herkesi-çek",
  aliases: ['herkesi-cek'],
  description: "Belirtien Kanala Herkesi Çeker.",
  usage: `${settings.bot.prefix}herkesi-çek [id]`
};

exports.run =  (client ,message ,args) => {
  

   if(!message.member.roles.cache.has(settings.roles.kurucu)){
    return message.react(settings.emojis.uyarı)
   }
  
const id = args[0]
if (!id) return message.channel.send("Çekmek istediğniz Kanal İd Giriniz.")
message.guild.members.cache.filter(a => a.voice.setChannel(id))
message.channel.send(`Sesli kanallarda bulunan herkes <#${id}> isimli odaya çekildi!`)
};

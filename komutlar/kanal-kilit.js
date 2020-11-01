const Discord = require('discord.js')
const db = require("quick.db");
const settings = require('../ayarlar.json')
const ms = require('ms')

exports.confing = {
   name: "kilit",
  aliases: [],
  description: "Kanalı Süreli Olarak Kilitler.",
  usage: `${settings.bot.prefix}kilit [süre]`
};

exports.run = (client, message, args) => {
   if(!message.member.roles.cache.has(settings.roles.kurucu)){
    return message.react(settings.emoji.uyarı)
 }
 
  let süre = args[0]
  if(!süre) return message.channel.send("Bir Süre Giriniz.").then(a => a.delete({timeout:4000}))
  
  /*
    message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: null
          }).then(message.channel.send('**Kanalın kilidi açıldı **')).catch(console.error);
          delete client.lockit[message.channel.id];
        }, ms(time))
  
  */
  
  let uye = "747121110281224215"
  
  message.channel.createOverwrite(uye, {
          SEND_MESSAGES: false,
        }).then(message.channel.send('**Kanal Kilitlendi.**')).catch(console.error);
      
  
  setTimeout(async() => {
  message.channel.createOverwrite(uye, {
          SEND_MESSAGES: true,
        }).then(message.channel.send('**Kanalın Kilidi Açıldı.**')).catch(console.error);
      
  },ms(süre))
  
}



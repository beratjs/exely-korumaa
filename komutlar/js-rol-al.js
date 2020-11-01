const Discord = require('discord.js')
const db = require("quick.db");
const settings = require('../ayarlar.json')

exports.confing = {
   name: "js",
  aliases: [],
  description: "Js Rolü Alrısınız.",
  usage: `${settings.bot.prefix}js`
};

exports.run =  (client ,message ,args) => {
  
  if(message.channel.id != settings.channels.botkomut) return message.channel.send("Bu Komutu Sadece \"Bot-Komut\" Kanalında Kullanabilirsin. ").then(a => a.delete({timeout:3000}))
  
  
 if(message.member.roles.cache.has(settings.roles.js)){
    message.reply('Js Rolün Zaten Var.').then(a => a.delete({timeout:3000}))
  } else {
    
message.member.roles.add(settings.roles.js)
    message.reply(`
- Kodlarımız Sıte Uzerınde Paylaşılmaktadır.
- İnvite Yaparak Daha İyi Kodlara Sahip Olabilirsiniz.   
- Sitemiz: https://kobscode.xyz/
`)
  }

};

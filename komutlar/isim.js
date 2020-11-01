const Discord = require('discord.js')
const db = require("quick.db");
const settings = require('../ayarlar.json')


exports.confing = {
   name: "isim",
  aliases: ['nick'],
  description: "Belirtien Kullanıcın İsmini Değiştirir.",
  usage: `${settings.bot.prefix}isim [üye] [isim]`
};


exports.run = async (client, message, args) => {
  
  if(message.channel.id != settings.channels.botkomut) return message.channel.send("Bu Komutu Sadece \"Bot-Komut\" Kanalında Kullanabilirsin. ").then(a => a.delete({timeout:3000}))
  

 if(!message.member.roles.cache.has(settings.roles.kurucu)){
 	  return message.react(settings.emojis.uyarı)
 }
const user = message.mentions.members.first()

if (!user) return message.reply("Bir kullancı etiketlemelisin.")

const nick = args.slice(1).join(" ")


if (!nick) return message.reply("Bir İsim Girin")
  
  db.add(`yetkili.${message.author.id}.isim`,1)
  
  
user.setNickname(nick).then(() => {
return message.channel.send(`Başarıyla, ${user} kullancısın ismi \`${nick}\` olarak Ayarlandı.`)
}).catch(err => message.channel.send("Isim değiştirirken hata meydana geldi."))
}

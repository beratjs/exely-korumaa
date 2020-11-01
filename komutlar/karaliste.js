const db = require('quick.db')
const Discord = require('discord.js')
const client = new Discord.Client();
const settings = require('../ayarlar.json')


exports.confing = {
  name: "karaliste",
  aliases: [], 
  description: "Etiketlenen Kişiyi Karalisteye Atar.",
  usage: `${settings.bot.prefix}karaliste at/çıkar [user] [sebep]`
};

exports.run = async (bot, message, args) => {
  
    if(!message.member.roles.cache.has(settings.roles.karalisteyetkili)){
    	  return message.channel.send("Bu Komutu Kullanmak İçin Yetkili Olmalısın!")
    }
  
if(!args[0]) return message.channel.send(`Doğru Kullanım: **${this.confing.usage}**`)
  
  if(args[0] == "at"){
    
let member = args[1]
if(!member) return message.channel.send("Lütfen Bir Kullanıcı İdsi Giriniz.").then(a => a.delete({timeout:4000}))
if(isNaN(member)) return message.channel.send("Sayı Olarak").then(a => a.delete({timeout:4000}))
                                                                                 
  let uye = message.guild.members.cache.get(member)
                                                                  
 let zaten = db.get(`ceza.${member}.karaliste`)
  if(zaten) return message.channel.send("Kullanıcı Zaten Karalistede!").then(a => a.delete({timeout:4000}))
  
  let sebep  = args.slice(2).join(' ')
  if(!sebep) return message.channel.send("Bir Sebep Giriniz.").then(a => a.delete({timeout:4000}))
  
  db.set(`ceza.${member}.karaliste`,'karaliste')
  
  uye.roles.set(["747121110281224215"])
  
  message.channel.send(`<@${member}> Adlı Kullanıcıın Rollerini Alarak  Karalisteye Attım!`)

  }
  
    if(args[0] == "çıkar"){
    
let member = args[1]
if(!member) return message.channel.send("Lütfen Bir Kullanıcı İdsi Giriniz.").then(a => a.delete({timeout:4000}))
if(isNaN(member)) return message.channel.send("Sayı Olarak").then(a => a.delete({timeout:4000}))
                                                                                 
  let uye = message.guild.members.cache.get(member)
                                                                    
  let sebep  = args.slice(2).join(' ')
  if(!sebep) return message.channel.send("Bir Sebep Giriniz.").then(a => a.delete({timeout:4000}))
  
  db.delete(`ceza.${member}.karaliste`)
  
  
  message.channel.send(`<@${member}> Adlı Kullanıcı Başarıyla Karalisteden Çıkarıldı!`)

  }
  
}

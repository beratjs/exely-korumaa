const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const settings = require('../ayarlar.json')
const moment = require('moment');
moment.locale("tr")

exports.confing = {
  name: "ban",
  aliases: [], 
  description: "Etiketlenen Kişiyi Sunucudan Banlar.",
  usage: `${settings.bot.prefix}ban [user] [sebep]`
};


exports.run = async (client, message, args) => {

  let yetkiyok = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(`${message.author.username}`,message.author.avatarURL({dynamic:true}))
    .setDescription(`Bu komutu kullanabilmek için gerekli rollere sahip değilsin!`)
  
  if(!message.member.roles.cache.has(settings.roles.banyetkili)) {
      return message.channel.send(yetkiyok).then(a => a.delete({timeout:4000}))
    }
  

  
  
let user =  message.mentions.members.first()
if(!user) return message.channel.send(new MessageEmbed().setColor("#dd479a").setAuthor(`${message.author.username}`,message.author.avatarURL({dynamic:true})).setDescription(`Bir kullanıcı etiketle veya idsini gir.`)).then(a => a.delete({timeout:4000}))
  let sebep = args.slice(1).join(" ")
  if (!sebep) return message.channel.send('Ban Sebepini Giriniz.')
    if(user.id === client.user.id) {
       
      const  mebed  = new MessageEmbed()
      .setColor("RANDOM")
      .setDescription(':x: **|** Botu banlayamazsın')
      return message.channel.send(mebed).then(a => a.delete({timeout:4000}))
     }
  
  if(user.id === message.guild.ownerID) {
       
      const  mebed  = new MessageEmbed()
      .setColor("RANDOM")
      .setDescription(':x: **|** Sunucu sahibini  banlayamazsın')
      return message.channel.send(mebed).then(a => a.delete({timeout:4000}))
     }
  
    if(user.id === message.author.id) {
       
      const  mebed  = new MessageEmbed()
      .setColor("RANDOM")
      .setDescription(':x: **|** Kendi Kendini banlayamazsın')
      return message.channel.send(mebed).then(a => a.delete({timeout:4000}))
     }
  
    
    
  user.ban({reason: `${sebep}`})
  
  db.add(`ceza.${user.id}.ban`,1)
 db.add(`yetkili.${message.author.id}.ban`,1)
  
  db.add(`serino.${message.guild.id}.ban`,1)
  
  let serino = db.fetch(`serino.${message.guild.id}.ban`)
  
  let embed  = new MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`${user} üyesi başarıyla banlandı.

• Ban ID: \`#${serino}\`
• Ban Atılan Üye: ${user} \`(${user.user.tag}\` - \`${user.id})\`
• Banlayan Yetkili: ${message.author} \`(${message.author.tag}\` - \`${message.author.id})\`
• Banlama Tarihi: \`${moment().add(3, "hours").format("D MMM YYYY  HH:mm")}\`
• Ban Sebebi: \`${sebep}\` `)
  
  client.channels.cache.get(settings.channels.banlog).send(embed)
  

}
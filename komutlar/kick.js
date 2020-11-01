const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const settings = require('../ayarlar.json')
const moment = require('moment');
moment.locale("tr")

exports.confing = {
  name: "kick",
  aliases: [], 
  description: "Etiketlenen Kişinin Avatarını Atar.",
  usage: `${settings.bot.prefix}kick [user] [sebep]`
};


exports.run = async (client, message, args) => {

  let yetkiyok = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(`${message.author.username}`,message.author.avatarURL({dynamic:true}))
    .setDescription(`Bu komutu kullanabilmek için gerekli rollere sahip değilsin!`)
  
  if(!message.member.roles.cache.has(settings.roles.banyetkili)) {
      return message.channel.send(yetkiyok).then(a => a.delete({timeout:4000}))
    }
  

  
  
let user =  message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0]);
if(!user) return message.channel.send(new MessageEmbed().setColor("#dd479a").setAuthor(`${message.author.username}`,message.author.avatarURL({dynamic:true})).setDescription("Bir Kullanıcı Etiketle!")).then(a => a.delete({timeout:4000}))
  
    let sebep = args.slice(1).join(' ')
    if(!sebep) return message.channel.send("Bir Sebep Giriniz.").then(a => a.delete({timeout:4000}))
    
    if(user.id === client.user.id) {
       
      const  mebed  = new MessageEmbed()
      .setColor("RANDOM")
      .setDescription(':x: **|** Botu Atamassın!')
      return message.channel.send(mebed).then(a => a.delete({timeout:4000}))
     }
  
  if(user.id === message.guild.ownerID) {
       
      const  mebed  = new MessageEmbed()
      .setColor("RANDOM")
      .setDescription(':x: **|** Sunucu sahibini  Atamassın!')
      return message.channel.send(mebed).then(a => a.delete({timeout:4000}))
     }
  
    if(user.id === message.author.id) {
       
      const  mebed  = new MessageEmbed()
      .setColor("RANDOM")
      .setDescription(':x: **|** Kendi Kendini Atamassın!')
      return message.channel.send(mebed).then(a => a.delete({timeout:4000}))
     }
  
    
    
  user.kick({reason: `${sebep}`})
  
  db.add(`ceza.${user.id}.kick`,1)
 db.add(`yetkili.${message.author.id}.kick`,1)
  
  db.add(`serino.${message.guild.id}.kick`,1)
  
  let serino = db.fetch(`serino.${message.guild.id}.kick`)
  
  let embed  = new MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`${user} üyesi başarıyla Atıldı.

• Kıck ID: \`#${serino}\`
• Kıck Atılan Üye: ${user} \`(${user.user.tag}\` - \`${user.id})\`
• Kıck Atan Yetkili: ${message.author} \`(${message.author.tag}\` - \`${message.author.id})\`
• Kıck Tarihi: \`${moment().add(3, "hours").format("D MMM YYYY  HH:mm")}\`
• Kıck Sebebi: \`${sebep}\` `)
  
  client.channels.cache.get(settings.channels.kicklog).send(embed)
  

  
}
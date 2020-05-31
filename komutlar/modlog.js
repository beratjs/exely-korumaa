const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');


exports.run = async(client, message, args) => {
  
  let modlogs = db.get(`modlog_${message.guild.id}`)
  
  
  
let p = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
if (!message.member.permissions.has('KICK_MEMBERS')) {
    const izinyok = new Discord.MessageEmbed()
    .setTitle('Başarısız')
    .setDescription('Bu Komut İçin Yetkin Yok!')
    return message.channel.send(izinyok)
}
if (!args[0]) {
  const sa = new Discord.MessageEmbed()
  .setTitle('Hatalı Kullanım!')
  .setDescription(`Bunumu Arıyorsun? ${p}modlog #kanal aç/kapat`)
  return message.channel.send(sa)
}
    
  
    let kanal = message.mentions.channels.first();
  
    if(!kanal) {
      const bulunamadi = new Discord.MessageEmbed()
      .setTitle('Hatalı Kullanım')
      .setDescription(`Kanal Belirtmedin!`)
      return message.channel.send(bulunamadi)
      }
  
  if (args [0] == 'aç') {
    db.set(`modlog_${message.guild.id}`, 'açık')
    let modlogbyme = await db.fetch(`modlog_${message.guild.id}`)

    
    let kanal = message.mentions.channels.first();
    if(!kanal) {
      const bulunamadi = new Discord.MessageEmbed()
      .setTitle('Hatalı Kullanım')
      .setDescription(`Kanal Belirtmedin!`)
      return message.channel.send
      }
     
    db.set(`modlog_${message.guild.id}`, kanal.id)
    const modlogkanal = message.guild.channels.find(kanal => kanal.id === modlogs);
    const küfürengelcim = new Discord.MessageEmbed()
    .setTitle('Başarılı')
    .setDescription('Modlogu Açtım')
    return message.channel.send(küfürengelcim)

  }
  
  if (args [0] == 'kapat') {
    
    db.delete(`modlog_${message.guild.id}`)

   const küfürengelcim2 = new Discord.MessageEmbed()
    .setTitle('Başarılı')
    .setDescription('Modlogu Kapattım')
    return message.channel.send(küfürengelcim2)
   
  }


};
exports.conf = {
  enabled: true,  
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'modlog'
}; 
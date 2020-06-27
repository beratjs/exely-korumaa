
 const Discord = require('discord.js');
 const db = require('quick.db')
 exports.run = async (client, message, args) => {
   if(!message.member.roles.has('id koy bea')) {
               const sa = new Discord.RichEmbed()
     .setTitle('Rol Yok')
     .setDescription('Bu Komut İçin <@id> Rolüne Sahip Olmalısın ')
     return message.channel.send(sa)
   }

  let kanal = message.mentions.channels.first()
  
  if (!kanal) {
      const sa = new Discord.RichEmbed()
     .setTitle('Kanal Belirtmedin')
     .setDescription('Kanal Belirt!')
     return message.channel.send(sa)
  }
   db.set(`kayıtlog_${message.guild.id}`,kanal.id)
    const sa = new Discord.RichEmbed()
     .setTitle('Başarılı')
     .setDescription(`Kayıt Log Başarıyla ${kanal} Olarak Ayarlandı`)
     return message.channel.send(sa)
 };
 
 exports.conf = {
   aliases: [],
   permLevel: 0
 }
 exports.help = {
   name: 'kayıt-log'
 } 
 
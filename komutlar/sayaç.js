const Discord = require('discord.js'),
 db = require('quick.db')

exports.run = async (client, message, args) => {
   let sayaç_sayı = args[1]
   let kanal = message.mentions.channels.first()
   
  if(!message.member.permissions.has('MANAGE_SERVER')) {
    const a = new Discord.RichEmbed()
    .setTitle('Yetkin Yok!')
    .setDescription('Bu Komut İçin `Sunucuyu Yönet` Yetkisine Sahip Olmalısın')
    return message.channel.send(a)
  }
  
   if(!kanal) {
    const a = new Discord.RichEmbed()
    .setTitle('Hata!')
    .setDescription('Kanal Belirtmen Lazım!')
    return message.channel.send(a)
   }
  
  
  
  
  
  
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sayaç'],
  permLevel: 0
}
exports.help = {
  name: "sayaç"
}
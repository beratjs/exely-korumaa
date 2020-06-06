const Discord = require('discord.js'),
 db = require('quick.db')

exports.run = async(client, message, args) =>{
  if (args [0] === 'kapat') {
   const a = new Discord.MessageEmbed()
    .setTitle('Başarılı')
    .setDescription('Sayaç Sistemini Kapattım!')
   .setColor("RED")
    return message.channel.send(a)
  }

}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sayac-kapat'],
  permLevel: 0
}
exports.help = {
  name: "sayaç-kapat"
}
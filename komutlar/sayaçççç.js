const Discord = require('discord.js')
const db = require('quick.db');

exports.run = async (client, message, args) => {
 let kanal = message.mentions.channels.first()
 let hedef = args[1]
    if(!message.member.permissions.has('MANAGE_SERVER')) {
        const a = new Discord.MessageEmbed()
        .setTitle('Yetkin Yok!')
        .setDescription('Bu Komut İçin `Sunucuyu Yönet` Yetkisine Sahip Olmalısın')
        return message.channel.send(a)
      }


      if (!kanal) {
     return message.reply('Kanal Belirt Dostum!')
      }
      if (!hedef) {
       return message.reply('Sayı Belirt')
      }
      if (!isNaN(hedef)) {
          return message.reply('Dostum Hedef Sadece Rakamlardan Oluşabilir')
      }
      if (hedef > message.guild.memberCount) {
     return message.reply('Dostum Üye Sayısından Küçük Sayı Belirtemezssin')

      }
}
exports.conf = {
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: "sayaç"
}
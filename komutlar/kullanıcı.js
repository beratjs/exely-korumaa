const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
const db = require('quick.db')

exports.run = async(client, message) => {
  
  let p = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  
  const yardımm2 = new Discord.MessageEmbed()

  .setTitle('Lexium Kullanıcı Menüsü')
  .setDescription(`:white_small_square: = **${p}korona** = Korona İstatistik Gösterir \n :white_small_square: = **${p}davet** = Botun Davet Bağlantılarını Gösterir \n :white_small_square: = **${p}canlıdestek** = Canlı Destek Talebi Açar`)
  .setFooter(`${message.author.tag} tarafından istendi`)
  .setThumbnail(client.user.avatarURL)
  .addField('Linkler:',`[Botu Davet Et](https://discordapp.com/oauth2/authorize?client_id=710788576320815164&scope=bot&permissions=8) | [Destek Sunucumuz](https://discord.gg/AP9SgEk)`)
  return message.channel.send(yardımm2)

}
exports.conf = {
  enabled: true,  
  guildOnly: false,
  aliases: ['k'],
  permLevel: 0
};
exports.help = {
  name: 'kullanıcı'
}; 
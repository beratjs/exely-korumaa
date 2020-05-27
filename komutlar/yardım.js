const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '!!'
let yardım = new Discord.MessageEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL)
.setColor('ff0000')
.addField('Rays Yardım Menüsü',`
**:white_small_square: = \`!!kullanıcı\` : Kullanıcı Komutları Açar.**
**:white_small_square: = \`!!moderasyon\` : Moderasyon Komutları Açar.**
**:white_small_square: = \`!!moderasyon2\` : Moderasyon Komutları Açar.**
**:white_small_square: = \`!!eğlence\` : Eğlence Komutları Gösterir.**
**:white_small_square: = \`!!bot-bilgi\` : Bot İstatistik Gösterir.**
**:white_small_square: = \`!!canlı-destek\` : Canlı Destek Talep Bildirir.**
**:white_small_square: = \`!!sunucutanıt\` : Sunucu Tanıtır.**
**:white_small_square: = \`!!oy\` : Bota Oy Atarsınız.**`)
.setFooter(`${message.author.tag} Tarafından İstendi (Not Bot Sistemi Yenilendi Herşey Sıfırlanmış Olabilir).`, message.author.avatarURL)
.addField('Linkler:',`[Botu Davet Et](https://discord.com/oauth2/authorize?client_id=703139921774248007&scope=bot&permissions=8) | [Destek Sunucumuz](https://discord.gg/HGpXtB9) | [Oy](https://top.gg/bot/703139921774248007/vote)`)
.setImage(`https://cdn.discordapp.com/attachments/707322633481355355/707360405390884864/145.gif`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false,
  aliases: ["help","y"],
  permLevel: 0
};
exports.help = {
  name: 'yardım'
}; 
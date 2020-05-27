const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '!!'
let yardım = new Discord.RichEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL)
.setColor('ff0000')
.addField('Rays Moderasyon Menüsü',`
**:white_small_square:  = \`!!sayaç\` = Sunucuda Sayaç Ayarlar.**
**:white_small_square:  = \`!!sayaç-kapat\` = Sunucuda Sayaç Kapatır.**
**:white_small_square:  = \`!!otorol\` = Otorol Ayarlarsınız.**
**:white_small_square:  = \`!!otorolkapat\` = Otorol Kapatırsınız.**
**:white_small_square:  = \`!!ototag\` = Otomatik Tag Verir**
**:white_small_square:  = \`!!ototag-kapat\` = Ototag Kapatır.**
**:white_small_square:  = \`!!rol-koruma\` = Rol Koruma Sistemini Aktif Eder.**
**:white_small_square:  = \`!!ban\` = Sınırsız Ban Atar.**
**:white_small_square:  = \`!!mod-log\` = Log Kanalı Ayarlarsınız.**
**:white_small_square:  = \`!!canlı-destek\` = Canlı Destek Alırsınız.**
**:white_small_square:  = \`!!sunucupanelkur\` = Sunucu Panel.**
**:white_small_square:  = \`!!sunucu-kur\` = Hazır Sunucu Kurar.**
**:white_small_square:  = \`!!reklam-engel\` = Reklam Engeller**
**:white_small_square:  = \`!!emoji\` = Sunucudaki Emojileri Gösterir.**
**:white_small_square:  = \`!!küfür\` = Küfür Engel Açar.**`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
.addField('Linkler:',`[Botu Davet Et](https://discord.com/oauth2/authorize?client_id=703139921774248007&scope=bot&permissions=8) | [Destek Sunucumuz](https://discord.gg/HGpXtB9)`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["m2"], 
  permLevel: 0
};
exports.help = {
  name: 'moderasyon2'
}; 
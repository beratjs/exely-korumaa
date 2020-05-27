const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '!!'
let yardım = new Discord.MessageEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL)
.setColor('ff0000')
.addField('Rays Kullanıcı Menüsü',`
**:white_small_square:  = \`!!avatar\` = Avatarınızı Gösterir.**
**:white_small_square:  = \`!!istatistik\` = Botun İstatistik'lerini Gösterir.**
**:white_small_square:  = \`!!kullanıcıbilgim\` = Kendi Kullanıcı Bilginizi Gösterir.**
**:white_small_square:  = \`!!dc\` = Sunucunuzun Sınırsız Davetini Atar.**
**:white_small_square:  = \`!!resimliyazı\` = Bota Resimli Yazı Yazdırır.**`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
.addField('Linkler:',`[Botu Davet Et](https://discord.com/oauth2/authorize?client_id=703139921774248007&scope=bot&permissions=8) | [Destek Sunucumuz](https://discord.gg/HGpXtB9)`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["kullanıcı"], 
  permLevel: 0
};
exports.help = {
  name: 'kullanıcı'
}; 
const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '!!'
let yardım = new Discord.RichEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL)
.setColor('ff0000')
.addField('Rays Moderasyon Menüsü',`
**:white_small_square:  = \`!!ping\` = Botun Ping'ini Gösterir.  **
**:white_small_square:  = \`!!sil\` = İstediğiniz Kadar Mesaj Siler.  **
**:white_small_square:  = \`!!davet\` = __Rays__ Botunun Davet Linklerin.  **
**:white_small_square:  = \`!!oylama\` = Oylama Atarsınız.  **
**:white_small_square:  = \`!!mute\` = Mute Atar. **
**:white_small_square:  = \`!!rolinfo\` = Rolün İnfosunu Gösterir. **
**:white_small_square:  = \`!!hgbb-ayarla\` = Yazılı __HG-BB__ Ayarlar. **
**:white_small_square:  = \`!!hgbb-kapat\` = Yazılı __HG-BB__ Kapatır.**
**:white_small_square:  = \`!!banlimit\` = Ban Limit Açar. **
**:white_small_square:  = \`!!banlist\` = Ban List Gösterir.**
**:white_small_square:  = \`!!kick\` = Sunucudan Atarsınız. **
**:white_small_square:  = \`!!yavaş-mod\` = Yavaş Mod Ayarlarsınız. **
**:white_small_square:  = \`!!sa-as\` = Sa As Açarsınız.**
**:white_small_square:  = \`!!mrb\` = Merhaba Sistemini Açarsınız**`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
.addField('Linkler:',`[Botu Davet Et](https://discord.com/oauth2/authorize?client_id=703139921774248007&scope=bot&permissions=8) | [Destek Sunucumuz](https://discord.gg/HGpXtB9)`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["m"], 
  permLevel: 0
};
exports.help = {
  name: 'moderasyon'
}; 
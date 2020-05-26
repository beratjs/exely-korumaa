const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '!!'
let yardım = new Discord.MessageEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL)
.setColor('ff0000')
.addField('Rays Yardım Menüsü',`
**<a:m_:713381402690715721>= \`!!kullanıcı\` : Kullanıcı Komutları Açar.**
**<a:vumpus:713380185659146291>= \`!!moderasyon\` : Moderasyon Komutları Açar.**
**<a:vumpus:713380185659146291>= \`!!moderasyon2\` : Moderasyon Komutları Açar.**
**<a:2198_blob_happy:708594602202103870>= \`!!eğlence\` : Eğlence Komutları Gösterir.**
**<a:687673644415058069:699974243907010631>= \`!!bot-bilgi\` : Bot İstatistik Gösterir.**
**<a:666710081852932137:699974253885259847>= \`!!canlı-destek\` : Canlı Destek Talep Bildirir.**
**<a:693873068422201485:699974314664919051>= \`!!sunucutanıt\` : Destek Sunucunuzda Tanıtır.**
**<a:sdfgsdgs:699974128219848834>= \`!!oy\` : Bota Oy Atarsınız.**`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
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
const { MessageEmbed } = require('discord.js');
const db = require('quick.db');
const settings = require('../ayarlar.json')


exports.confing = {
  name: 'abone',
  enabled: true,
  guildOnly: true,
  aliases: ["abone"],
  permLevel: 0, 
  description: "Abone Sıstemı",
  usage: `${settings.bot.prefix}abone [üye]`
}


exports.run = async (client, message, args) => {
   let ver = settings.roles.abone 
   
 if(message.channel.id !== settings.channels.botkomut) return message.channel.send('Bot komutlarını bu kanalda kullanamazsın kullanıcaksan <#757558688121749545> adlı kanalda kullanabilirsin!').then(message => message.delete(6000));
 if(!message.member.roles.cache.has(settings.roles.abonerolverici)){
 	  return message.react(settings.emojis.uyarı)
 }
  
    let member = message.mentions.members.first()
if(!member) return message.channel.send("Bir Kullanıcı Etiketle").then(a => a.delete({timeout:4000}))
  
  if (member.roles.cache.has(ver))return message.channel.send('Bu Kullanıcı Zaten Bu Rolde')
  let user = message.mentions.users.first()

 const kl = db.fetch(`istatistik.${user.id}.karaliste`);
 if(kl) return message.channel.send("Karalistede Olan Birisine Rol Veremessin.")


  member.roles.add(ver);

  db.add(`aboneyetkili.${message.author.id}`, 1)
db.add(`uyestat.${user.id}.abone`,1)


  
  const sa = new MessageEmbed()
    .setColor("RED")
    .setTitle("Sende Artık Kob's Ailesinin Bir Üyesisin")
    .setThumbnail(message.author.avatarURL)
    .addField( `<:YouTube:747563700927594618> Abone Rolü Alan Kullanıcı`, `・ ${member.user}`,true) 
    .addField( `<a:hype:747520551001522296> Verilen Rol ` , `・<@&757553845307047946>`)
    .addField( `<a:732276239699542097:747520522157293589> Rolü Veren Yetkili :`, `・  <@${message.author.id}>`)
    .setDescription('Not : Alt Yapılar Sunucu İçersinde Paylaşılmamaktadır,Alt Yapılarımız Sitede Paylaşılmaktadır,Aşağıda Linklerden Siteye Tıklayarak Discord Hesabınızla Giriş Yapınız Ne Yapacağınızı Tam Olarak Bilmiyorsanız Site İçersinde Bilgilendirme Kategorisini Okuyunuz !')
    .addField(`Linkler`,`[Youtube Kanalına Gitmek İçin Tıkla](https://www.youtube.com/ogünsertkobs) | [Siteye Gitmek İçin Tıkla](https://kobscode.xyz/) `)
message.channel.send(sa)
  
    
  
};

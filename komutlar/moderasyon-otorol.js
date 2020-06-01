const Discord = require('discord.js')
const db = require('quick.db');
exports.run = async(client, message, args) => {

  if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(':no_entry: Otorol ayarlamak için `Rolleri Yönet` yetkisine sahip olman gerek.')

  
    if (args[0] == 'ayarla') {
   var pingRol1;
  var pingRol2;
let anarol= message.mentions.roles.first() || message.guild.roles.get(args.join(' '));
  if (!anarol) return message.channel.send( ' Yeni kişilere vereceğim rolü etiketlemelisin. Kullanım: `!otorol ayarla @Rol #kanal`')
  else pingRol1 = message.mentions.roles.first().id
 
      let rolisim = message.mentions.roles.first().name  
  let kanal = message.mentions.channels.firsCt();
  if (!kanal) return message.channel.send( ' Bilgilendirme mesajlarını atacağım yeri etiketlemelisin. Kullanım: `!otorol ayarla @Rol #kanal`')
    db.set(`otorolisim_${message.guild.id}`, rolisim)
  
      let rolKanal = await  db.set(`otorolKanal_${message.guild.id}`, message.mentions.channels.first().id)
      
  let otorol = await db.set(`otorol_${message.guild.id}`,  pingRol1)
  if (!message.guild.roles.get(pingRol1)) return message.channel.send(" Etiketlediğin rolü bulamadım. Rolün etiketlenebilir olduğundan emin olmalısın.")
    message.channel.send(` Başarılı, gerekli ayarlamalar yapıldı.\nYeni kişilere vereceğim rol \`${rolisim}\` olarak ayarlandı.\n Bilgilendirme kanalı <#${rolKanal}> olarak ayarlandı.`)  
     
  } 

  if (args[0] == 'kapat') {
    

    
    
    db.delete(`otorolisim_${message.guild.id}`)
        db.delete(`otorolKanal_${message.guild.id}`)
    db.delete(`otorol_${message.guild.id}`)

    message.channel.send(` Otorol başarıyla kapatıldı.`)
  }
};
  
  
    
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
}

exports.help = {
    name: 'otorol',
    description: 'Ping oto rol kodu.',
    usage: 'otorol ayarla <@rol> #kanal'
}
const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')
exports.run = async(client, message, args) => {

    let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix

  if (!message.member.permissions.has('MANAGE_ROLES')) {
    const yetkı = new Discord.MessageEmbed()
    .setTitle('Yetki Yok!')
    .setDescription('Bu Komut İçin `Rolleri Yönet` Yetkisine Sahip Olmalısın')
    return message.channel.send(yetkı)
  }
  if (!args[0])  {
    const küfürcuk32 = new Discord.MessageEmbed()
    .setTitle('Başarısız')
    .setDescription(`Bunumu Arıyorsun? \n ${prefix}otorol ayarla @rol #kanal`)
      return message.channel.send(küfürcuk32)

  }
  
    if (args[0] == 'ayarla') {
   var pingRol1;
  var pingRol2;
let anarol= message.mentions.roles.first() || message.guild.roles.cache.get(args.join(' '));
  if (!anarol) {
      const küfürcuk323 = new Discord.MessageEmbed()
    .setTitle('Başarısız')
    .setDescription(`Rol Belirtmen Lazım!`)
      return message.channel.send(küfürcuk323)
  }
  else pingRol1 = message.mentions.roles.first().id
 
      let rolisim = message.mentions.roles.first().name  
  let kanal = message.mentions.channels.first();
  if (!kanal) {
      const küfürcuk321 = new Discord.MessageEmbed()
    .setTitle('Başarısız')
    .setDescription(`Kanal Belirtmen Lazım!`)
      return message.channel.send(küfürcuk321)
  }
    db.set(`otorolisim_${message.guild.id}`, rolisim)
  
      let rolKanal = await  db.set(`otorolKanal_${message.guild.id}`, message.mentions.channels.first().id)
      
  let otorol = await db.set(`otorol_${message.guild.id}`,  pingRol1)
  if (!message.guild.roles.cache.get(pingRol1)) return message.channel.send(" Etiketlediğin rolü bulamadım. Rolün etiketlenebilir olduğundan emin olmalısın.")
    message.channel.send(` .\nYeni kişilere vereceğim rol \`${rolisim}\` olarak ayarlandı.\n Bilgilendirme kanalı <#${rolKanal}> olarak ayarlandı.`)  
     
  } 

  if (args[0] == 'kapat') {
    

    
    
    db.delete(`otorolisim_${message.guild.id}`)
        db.delete(`otorolKanal_${message.guild.id}`)
    db.delete(`otorol_${message.guild.id}`)

    message.channel.send(`Otorol başarıyla kapatıldı.`)
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
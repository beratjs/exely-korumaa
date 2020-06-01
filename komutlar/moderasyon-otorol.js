const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')
exports.run = async(client, msg, args) => {
    let p = await require('quick.db').fetch(`prefix_${msg.guild.id}`) || ayarlar.prefix

  //üşendin dim i qedapgoaskpaıgjsdfapsıdjgamsdofaksmdfewq
  if (!msg.member.permissions.has('MANAGE_ROLES')) {
    const yetkiyok = new Discord.MessageEmbed()
    .setTitle('Başarısız!')
    .setDescription(`Bunumu Arıyorsun? ${p}otorol`)
    return msg.channel.send(yetkiyok)
  }
  
  if (args[0] == 'ayarla') {
    var rol1;
    var rol2;
    
    let otoRol = msg.mentions.roles.first() || msg.guild.roles.get(args.join(' '));
    
    if (!otoRol) {
  const yetkiyok = new Discord.MessageEmbed()
    .setTitle('Başarısız!')
    .setDescription(`Rol etiketlemen lazım!`)
    return msg.channel.send(yetkiyok)
  
  }   
    }
    
    else rol1 = msg.mentions.roles.first().id
    
    let rolIsim = msg.mentions.roles.first().name
    let otoKanal = msg.mentions.channels.first();
    
    if(!otoKanal) {
      const kanalyok = new Discord.MessageEmbed()
    .setTitle('Başarısız!')
    .setDescription(`Kanal Etiketlemen Lazım!`)
    return msg.channel.send(kanalyok)
    }
    db.set(`otorolIsim_${msg.guild.id}`, rolIsim)
    
    let rolKanal = await db.set(`otorolKanal_${msg.guild.id}`, msg.mentions.channels.first().id)

    let otorol = await db.set(`otorol_${msg.guild.id}`, rol1)
    if(!msg.guild.roles.get(rol1)) {
      const rolyok = new Discord.MessageEmbed()
    .setTitle('Başarısız!')
    .setDescription(`Rol Bulunamadı`)
    return msg.channel.send(rolyok)
    }
    msg.channel.send("Otorol sistemi hazır..")
    
  
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'otorol',
  description: 'ayberk abin otorol yaptı ewqewwq',
  usage: 'otorol yapıyon işte sadpgoaks bunlara gerek yok usage description genellıkle siliyorumdlf'
}
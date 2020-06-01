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
  }
  
  if (args[0] == 'ayarla') {
    var rol1;
    var rol2;
    
    let otoRol = msg.mentions.roles.first() || msg.guild.roles.get(args.join(' '));
    
    if (!otoRol) {
      const rolyok = new Discord.MessageEmbed()
      
    }
    
    else rol1 = msg.mentions.roles.first().id
    
    let rolIsim = msg.mentions.roles.first().name
    let otoKanal = msg.mentions.channels.first();
    
    if(!otoKanal) return msg.channel.send("Bi tane kanal etiketlicen yoksa nereye atıcam o mesajları?")
    
    db.set(`otorolIsim_${msg.guild.id}`, rolIsim)
    
    let rolKanal = await db.set(`otorolKanal_${msg.guild.id}`, msg.mentions.channels.first().id)

    let otorol = await db.set(`otorol_${msg.guild.id}`, rol1)
    if(!msg.guild.roles.get(rol1)) return msg.channel.send("Etiketlenen rolü bulamadım mk. Düzgün etiketle şunu")
    msg.channel.send("Otorol sistemi hazır..")
    
  }
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
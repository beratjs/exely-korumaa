const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')
exports.run = async(client, msg, args) => {
    let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix

  //üşendin dim i qedapgoaskpaıgjsdfapsıdjgamsdofaksmdfewq
  if (!msg.member.permissions.has('MANAGE_ROLES')) {
    const yetkiyok = new Discord.MessageEmbed()
    .setTitle('Başarısız!')
    .setDescription(`Bunumu Arıyorsun? !otorol`)
  }
  
  if (args[0] == 'ayarla') {
    var rol1;
    var rol2;
    
    let otoRol = msg.mentions.roles.first() || msg.guild.roles.get(args.join(' '));
    
    if (!otoRol) return msg.channel.send('Rol etiketlesene aq')
    
    else rol1 = msg.mentions.roles.first().id
    
    let rolIsim = msg.mentions.roles.first().name
    let otoKanal = msg.mentions.channels.first();
    
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
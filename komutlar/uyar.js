const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async(client, message, args ) => {
  
let a = message.mentions.users.first()
let sebep = args.slice(1).join(' ')
let sa = await db.fetch(`uyarısayısı_${a.id}`)
if (sa == null) sa = '0'
if (!a || !sebep) return message.channel.send(`Kişi Ve Sebep Belirt`)
  message.channel.send(`Kullanıcı Uyarıldı Bu Onun ${sa}. Uyarılışı!`)
  
  db.add(`uyarısayısı_${a.id}`, 1)
a.send(` ${message.guild.name} Sunucusundan ${message.author.tag} Adlı Yetkili Tarafından ${sebep} Sebebinden Dolayı Uyarıldın! Bu Senin ${sa}. Uyarılışın`)
  message.guild.owner.send(` ${message.guild.name} Sunucusundan ${message.author.tag} Adlı Yetkili ${a} Adlı Kullanıcıyı ${sebep} Sebebinden Dolayı Uyardı! Bu Kullanıcının ${sa}. Uyarısı`)
  
  if (sa > 5) {
    a.send(` ${message.guild.name} Sunucusundan ${message.author.tag} Adlı Yetkili Tarafından ${sebep} Sebebinden Dolayı Uyarıldın! Topşam Uyarın 5 Olduğu İçin Kicklendin!`)
message.guild.member(a).kick()
  message.guild.owner.send(` ${message.guild.name} Sunucusundan ${message.author.tag} Adlı Yetkili ${a} Adlı Kullanıcıyı ${sebep} Sebebinden Dolayı Uyardı! Bu Kullanıcının 5. Uyarısı Olduğu İçin Sunucudan Kicklendi!`)

    
  }
};
exports.conf = {
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'uyar'
}; 
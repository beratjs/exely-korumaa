const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db')

const prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {
        if(db.fetch(`bakim`)) return message.channel.send('<a:tamir:708594410467885057> Size Daha İyi Hizmet Vermek İçin Bakımdayız \n <a:yesbe:707495628112134145> En Yakın Zamanda Tekrar Kodlarımızı Sunacağız')

  if  (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`**<a:hayrbe:707495526114787328> Bu Komutu Kullanmak İçin \`Yönetici\` Yetkisine Sahip Olmalısın**`);
  
  let modlogs = db.get(`tc-mod-log_${message.guild.id}`)
  
  if(!modlogs) {
    let kanal = message.mentions.channels.first();
    if(!kanal) return message.channel.send(` Hatalı kullandın! Örnek Kullanım: \n\n\`${prefix}modlog <#kanal>\`.`)

    db.set(`tc-modlog_${message.guild.id}`, kanal.id)
    const modlogkanal = message.guild.channels.find(kanal => kanal.id === modlogs);
    message.channel.send(` Modlog kanalı başarılı bir şekilde ayarlandı`)
    
    
    }
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['modlog'],
    permLevel: 2
}

exports.help = {
    name: 'mod-log',
    description: 'LORD CREATİVE',
    usage: 'modlog <#kanal>'
}
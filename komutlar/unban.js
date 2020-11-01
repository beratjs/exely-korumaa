//757554152791343146
const Discord = require('discord.js');
const db = require("quick.db");
const settings = require('../ayarlar.json')
const moment = require('moment')
exports.confing = {
  name: "unban",
  aliases: [],
  description: "Kullanıcın Banını Kaldırır.",
  usage: `${settings.bot.prefix}unban [id]`
};

exports.run = async(client, message, args) => {

  if(!message.member.roles.cache.has(settings.roles.banyetkili)) return message.channel.send('Bu Komutu Kullanabilmek İçin Gerekli Yetkiye Sahip Değilsin.!')
  
  if(!args[0]) return message.reply('Banı Kaldırılcak Kişinin İdsini Girmelisin.')
    if(args[0] === "herkes") {
      if(!message.member.hasPermission(settings.roles.kurucu)) return message.reply('Bu özelliği kullanabilmek için "Yönetici" iznine sahip olmalısın!')
        message.guild.fetchBans().then(bans => {
          bans.forEach(user => {
            message.guild.members.unban(user)
          });
        });
        message.channel.send(`Sunucudaki Herkesin Banı Kaldırılıyor.`)
      return
    }
    if(isNaN(args[0])) return message.reply('Bir Kullanıcı ID gir.').then(x => x.delete(5000))
    try {
      message.guild.members.unban(args[0])
      client.users.fetch(args[0]).then(x => client.channels.cache.get(settings.channels.unbanlog).send(new Discord.MessageEmbed().setAuthor(message.author.username,message.author.avatarURL({dynamic:true})).setTimestamp().setColor("PİNK").setFooter(message.guild.name, message.guild.iconURL).setDescription(`
• Banı Kaldırılan Üye: ${x} (\`${x.tag}\` - \`${x.id}\`)
• Banı Kaldıran Yetkili: ${message.author} (\`${message.author.tag}\` - \`${message.author.id}\`)
• Banı Kaldırma Tarihi:\`${moment().add(3, "hours").format("D MMM YYYY  HH:mm")}\`
• Banı Kaldırma Nedeni: ${args[1] ? args[1]: "Sebep Yok!"}`)))
    } catch(err) { message.reply('Banını Kaldırırken Bir Hata Oluştu!').then(x => x.delete(5000)) }
};


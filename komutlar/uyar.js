const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async(client, message, args) => {

let user = message.mentions.users.first()
let sebep = args.slice(1).join(' ')

if (!log) {
  const m = new Discord.MessageEmbed()
  .setTitle('Başarısız')
  .setDescription('Log Kanalı Belirt!')
  return message.channel.send(m)
}
if (!(user||sebep)) return message.reply('Kişi ve sebep belirt')
let uyarısayı = await db.fetch(`UyarıKullanıcı_${message.guild.id}_${user.id}`)
let log = await db.fetch(`UyarıLog_${message.guild.id}`)

if (!uyarısayı) {
db.add(`UyarıKullanıcı_${message.guild.id}_${user.id}`,1)
message.reply(`Başarıyla ${user.username} ı ${sebep} i ile Uyardınız! Kullanıcının Uyarı Sayısı 1!`)
  message.guild.channels.cache.get(log).send(`Başarıyla ${message.author.name} tarafından ${user.username} ı ${sebep} i ile Uyarıldı! Kullanıcının Uyarı Sayısı 1!`)
user.send(`${message.guild.name} Sunucusundan ${sebep} i ile Uyarı Aldınız! Bu İlk Uyarın`).catch(err=> {})
} else {




db.add(`UyarıKullanıcı_${message.guild.id}_${user.id}`,"")
       
message.reply(`Kullanıcı Uyarıldı! Başarıyla ${user.username} ı ${sebep} i ile Uyardınız.Toplamda ${uyarısayı} kadar uyarısı var!`)
    message.guild.channels.cache.get(log).send(`Başarıyla ${message.author.name} tarafından ${user.username} ı ${sebep} i ile Uyarıldı! Toplamda ${uyarısayı} kadar uyarısı var!`)

user.send(`${message.guild.name} Sunucusundan ${sebep} i ile Uyarı Aldınız! Toplam Uyarın ${uyarısayı}`).catch(err=> {})
}
if(uyarısayı >= 5) {
user.kick(sebep).catch(err => {console.log(err)})
message.reply('Kullanıcı Sunucudan Kicklendi Çünkü Uyarı Sayısı 5 oldu!')
db.delete(`UyarıKullanıcı_${message.guild.id}_${user.id}`)
   message.guild.channels.cache.get(log).send(`Başarıyla ${message.author.name} tarafından ${user.username} ı ${sebep} i ile Uyarıldı! Toplamda ${uyarısayı} oldu ve sunucudan kicklendi!`)
user.send(`${message.guild.name} Sunucusundan ${sebep} i ile Uyarı Aldınız! Toplam Uyarın ${uyarısayı} olduğu için Sunucudan Atıldın`).catch(err=> {})
}

};
exports.conf = {
enabled: false,
guildOnly: false,
aliases: [],
permLevel : 0
};
exports.help = {
name: 'uyar'
};

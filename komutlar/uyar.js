const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async(client, message, args) => {

let user = message.mentions.users.first()
let sebep = args.slice(1).join(' ')

if (!(user||sebep)) return message.reply('Kişi ve sebep belirt')
let uyarısayı = await db.fetch(`UyarıKullanıcı_${message.guild.id}_${user.id}`)

if (!uyarısayı) {
db.set(`UyarıKullanıcı_${message.guild.id}_${user.id}`,1)
message.reply(`Başarıyla ${user.username} ı ${sebep} i ile Uyardınız! Kullanıcının Uyarı Sayısı 1!`)
user.send(`${message.guild.name} Sunucusundan ${sebep} i ile Uyarı Aldınız! Bu İlk Uyarın`).catch(err=> {})
} else {




db.add(`UyarıKullanıcı_${message.guild.id}_${user.id}`,1)
message.reply(`Kullanıcı Uyarıldı! Başarıyla ${user.username} ı ${sebep} i ile Uyardınız.Toplamda ${uyarısayı} kadar uyarısı var!`)
user.send(`${message.guild.name} Sunucusundan ${sebep} i ile Uyarı Aldınız! Toplam Uyarın ${uyarısayı}`).catch(err=> {})
}

if (uyarısayı > 5) {

user.kick(sebep)
message.reply('Kullanıcı Sunucudan Kicklendi Çünkü Uyarı Sayısı 5 oldu!')
db.delete(`UyarıKullanıcı_${message.guild.id}_${user.id}`)
user.send(`${message.guild.name} Sunucusundan ${sebep} i ile Uyarı Aldınız! Toplam Uyarın ${uyarısayı} olduğu için Sunucudan Atıldın`)
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

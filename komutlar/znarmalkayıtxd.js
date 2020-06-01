const Discord = require("discord.js");

exports.run = async (client, message, args) => {
if (!message.member.hasPermission("MANAGE_NICKNAMES"))
return message.channel.send(
`:x: Bu Komutu Kullanabilmek için \`İsimleri Yönet\` Yetkisine Sahip Olmalısın!`
);
let member = message.mentions.members.first();
let isim = args.slice(1).join(" ");
let yas = args.slice(1).join(" ");
if (!member) return message.channel.send("**Bir Üye Etiketle!**");
if (!isim) return message.channel.send("**Bir İsim ve Yaş Yaz!**");
member.setNickname(`${isim}`);
member.addRole('713791300281040967')  //verilecek röl
member.removeRole('713791301384142878') //silinecek röl
const embed = new Discord.MessageEmbed()


.addField(`Rays Kayıt Sistemi`,
`\nKayıt Edilen Kullanıcı: ${member.user} \nKayıt Eden Yetkili: \`${message.author.username}\``)
client.channels.get('714214405704777748').send(embed) //kanal id
};

exports.conf = {
enabled: true,
guildOnly: true,
aliases: ['kr'],
permLevel: 0
};
exports.help = {
name: "rkayıt",
description: "Vonx Sistemi",
usage: "Vonx Kayıt"
};
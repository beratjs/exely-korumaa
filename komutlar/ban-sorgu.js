const Discord = require('discord.js');
const db = require("quick.db");
const settings = require('../ayarlar.json')

exports.confing = {
   name: "ban-sorgu",
  aliases: [],
  description: "Idsi girilen kullanıcın ban nedenini atar.",
  usage: `${settings.bot.prefix}ban-sorgu [id]`
};

exports.run = (client, message, args) => {
   if(!message.member.hasPermission("ADMINISTRATOR")){
    return message.react(settings.emojis.uyarı)
   }
    let kullanici = args[0];
    if (!kullanici) return message.channel.send("Bir kullanici Id Gırınız.")
    message.guild.fetchBans()
        .then(bans => {
            if (!bans.has(kullanici)) {
                return message.channel.send(`Bu kullanıcı Banlanmamış.`)
            }
        })
    message.guild.fetchBan(kullanici).then(({ user, reason }) => {
        message.channel.send(`${user.tag} adlı kullanıcın ban nedeni: **${reason}**`)

    })
}


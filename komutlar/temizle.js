const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const settings = require('../ayarlar.json')

exports.confing = {
  name: "sil",
  aliases: [],
  description: "Belirtien Sayı Kadar Mesaj Siler.",
  usage: `${settings.bot.prefix}sil 1-100`
};


exports.run = async(client, message, args) => {
if(!message.member.hasPermission("MANAGE_MESSAGES")){
	    return message.react(settings.emojis.uyarı)
}
if(!args[0]) return message.channel.send("**Lütfen Silinicek Mesaj Miktarını Yazın!**");
message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(` ${args[0]} Adet Mesajı Sildim. ✅`).then(msg => msg.delete({timeout:5000}));
})
}


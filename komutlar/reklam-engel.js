const Discord = require('discord.js');
const settings = require('../ayarlar.json')
const db = require('quick.db')
exports.confing = {
  name: "reklam-engel",
  aliases: [],
  description: "Sunucuda Reklam Yapılmasını Engeller.",
  usage: `${settings.bot.prefix}reklam-engel aç/kapat`
};


exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission('ADMINISTRATOR')){
    	    return message.channel.send("Bu Komutu Kullanabilmek İçin Yönetici Olmalısın.!")
    }

    if (!args[0]) return message.reply(`Doğru Kullanım: **${this.confing.usage}**`);

    if (args[0] == 'aç') {
        var durum = await db.fetch(`sunucu.${message.guild.id}.reklamengel`)            
        if (durum == "açık") return message.channel.send("Reklam Engel Sistemi Zaten Açık!");
        db.set(`sunucu.${message.guild.id}.reklamengel`, 'açık')
        message.channel.send(`Reklam Engel Sistemini Başarıyla Açtım!`)
    }

    if (args[0] == 'kapat') {
        var durum = await db.fetch(`sunucu.${message.guild.id}.reklamengel`)            
        if (durum == "kapalı") return message.channel.send("Reklam Engel Sistemi Zaten Kapalı!");
        db.delete(`sunucu.${message.guild.id}.reklamengel`)
        message.channel.send(`Reklam Engel Sistemini Başarıyla Kapattım!`)
    }

}

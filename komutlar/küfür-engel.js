const Discord = require('discord.js');
const settings = require('../ayarlar.json')
const db = require('quick.db')
exports.confing = {
  name: "kufur-engel",
  aliases: ['küfür-engel'],
  description: "Sunucuda Küfür Edilmesini Engeller.",
  usage: `${settings.bot.prefix}kufur-engel aç/kapat`
};


exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission('ADMINISTRATOR')){
    	    return message.channel.send("Bu Komutu Kullanabilmek İçin Yönetici Olmalısın.!")
    }

    if (!args[0]) return message.reply(`Doğru Kullanım: **${this.confing.usage}**`);

    if (args[0] == 'aç') {
        var durum = await db.fetch(`sunucu.${message.guild.id}.kufurengel`)            
        if (durum == "açık") return message.channel.send("Kufur Engel Sistemi Zaten Açık!");
        db.set(`sunucu.${message.guild.id}.kufurengel`, 'açık')
        message.channel.send(`Kufur Engel Sistemini Başarıyla Açtım!`)
    }

    if (args[0] == 'kapat') {
        var durum = await db.fetch(`sunucu.${message.guild.id}.kufurengel`)            
        if (durum == "kapalı") return message.channel.send("Kufur Engel Sistemi Zaten Kapalı!");
        db.delete(`sunucu.${message.guild.id}.kufurengel`)
        message.channel.send(`Kufur Engel Sistemini Başarıyla Kapattım!`)
    }

}

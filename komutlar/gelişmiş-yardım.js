const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')

exports.run = async(client, message) => {
    let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix

    const y = new Discord.MessageEmbed()
    .addField('Moderasyon', '`bişikoy`,`bişikoy`,`bişikoy`,`bişikoy`,`bişikoy`,`bişikoy`,bişikoy`,`bişikoy`,`bişikoy`,`bişikoy`,`bişikoy`,`bişikoy`,`bişikoy`,`bişikoy`')
    return message.channel.send(y)
};
exports.conf = {
 enabled: true,
 guildOnly: false,
  aliases: ['y2'],
 permLevel: 0
};

exports.help = {
 name: 'yardım2'
};

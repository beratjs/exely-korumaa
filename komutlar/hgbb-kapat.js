  const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');

exports.run = async(client, message, args) => {
  
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  let kanal = message.mentions.channels.first();



    
    db.delete(`hgbb_${message.guild.id}`,)

   const küfürengelcim21 = new Discord.MessageEmbed()
    .setTitle('Başarılı')
    .setDescription('Hg-bbyi Kapattım')
    return message.channel.send(küfürengelcim21)
   
  
  
};
exports.conf = {
 enabled: true,
 guildOnly: false,
  aliases: ['hg-bb-kapat'],
 permLevel: 0
};

exports.help = {
 name: 'hgbb-kapat'
};
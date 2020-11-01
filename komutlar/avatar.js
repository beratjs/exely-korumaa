const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const settings = require('../ayarlar.json')

exports.confing = {
   name: "avatar",
  aliases: ['pp'],
  description: "Etiketlenen Kullanıcın Avatarını Atar.",
  usage: `${settings.bot.prefix}avatar [üye]`
};

exports.run = async (client, message, args) => {

  if(message.channel.id != settings.channels.botkomut) return message.channel.send("Bu Komutu Sadece \"Bot-Komut\" Kanalında Kullanabilirsin. ").then(a => a.delete({timeout:3000}))
  

  let avataruser =  message.mentions.members.first() || message.author;
  
  let embed = new MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`[GİF](${avataruser.avatarURL({dynamic:true, format: 'gif'})}) - [PNG](${avataruser.avatarURL({format: 'png'})}) - [JPG](${avataruser.avatarURL({format: 'jpg'})}) `)
  .setAuthor(`${message.author.tag}`,message.author.avatarURL({dynamic:true}))
  .setImage(avataruser.avatarURL({dynamic:true}))
  message.channel.send(embed)
};


  




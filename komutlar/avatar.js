const Discord = require('discord.js');

exports.run = (client, message, args) => {
  
 let avatarcım = new Discord.MessageEmbed()
  
  .setTitle('Buyur Avatarın')
  .setImage(`${message.author.avatarURL()}`)
  //çalanı düvürim
  message.channel.send(avatarcım)
  
  };
 exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: [],
   permLevel: 0
 };
 exports.help = {
   name: 'avatar'
 };
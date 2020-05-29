const Discord = require('discord.js');

 exports.run = (client, message, args) => {
   message.delete();

   let question = args.join(' ');

   let user = message.author.username

   if (!question) return message.channel.sendEmbed(
   new Discord.MessageEmbed()
    .setTitle('Hatalı!')
     .setDescription('Neyi Oylayacaksın')
const Discord = require('discord.js');

 exports.run = (client, message, args) => {
    message.delete();


   
   let question = args.join(' ');

   let user = message.author.username

   if (!question) return message.channel.send(
   new Discord.MessageEmbed()
    .setTitle('Hatalı!')
     .setDescription('Neyi Oylayacaksın?')).then(m => m.delete(5000));
        message.channel.send(

       new Discord.MessageEmbed()

       .setTimestamp()
       .addField(`**Oylama**`, `**${question}**`)).then(function(message) {

         message.react('✅');

         message.react('❌');
           setTimeout(()=> {




},240000).then.channel.send('Süre Bitti!')
        });
      
       
 };

     exports.conf = {
       enabled: true,
       guildOnly: false,
       aliases: ['oylama'],

  permLevel: 2
};

exports.help = {
  name: 'oylama',
  description: 'Oylama yapmanızı sağlar.',
  usage: 'oylama <oylamaismi>'
};
     
 
https://cdn.discordapp.com/avatars/343412762522812419/a_d92792baf69212625e35b8c9362ffaac.gifacaksın?')).then(m => m.delete(5000));
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
  name: 'oylama'
};
     
 
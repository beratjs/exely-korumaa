const Discord = require('discord.js');

 exports.run = (client, message, args) => {
    message.delete();

if (!message.member.permissions.has('ADMINISTRATOR')) {
    const izinyok = new Discord.MessageEmbed()
    .setTitle('Başarısız')
    .setDescription('Bu Komut İçin Yetkin Yok!')
    return message.channel.send(izinyok)
  }
   
   let question = args.join(' ');

   let user = message.author.username

   if (!question) return message.channel.send(
   new Discord.MessageEmbed()
    .setTitle('Hatalı!')
     .setDescription('Duyuru Mesajı Girin!')).then(m => m.delete(5000));
        message.channel.send(

      new Discord.MessageEmbed()
     .setFooter(`${message.author.tag} Duyuru Yaptı`)
     .setDescription( `**${question}** `)).then(function(message) {
     

     
           setTimeout(()=> {




},240000).then.channel.send('Süre Bitti!')
        });
      
       
 };

     exports.conf = {
       enabled: true,
       guildOnly: false,
      aliases: ['duyruru'],
  permLevel: 0
};

exports.help = {
  name: 'duyuru'
};
     
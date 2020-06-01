const Discord = require('discord.js')
exports.run = (bot, message, args) =>
{
  let Discord = require('discord.js');
    var userlist = message.guild.fetchBans();
   userlist.then(collection =>
   {
     if(collection.first() == null)
     {
       const embed = new Discord.MessageEmbed()
       .setTitle(`:no_entry_sign: Banlanan Kullanıcı bulunamadı :no_entry_sign:`)
       .setColor("ff0000");
       message.channel.send(embed);
     }
     else
     {
       const embed = new Discord.MessageEmbed()
       .setTitle(":no_entry_sign: Banlistesi | Sunucudan Banlananlar")
       .setColor("ff0000");
       for(userlist of collection)
       {
           var user = userlist[1];
           embed.addField(` **${user.tag}**`, `_________ _____________`);
       }
       message.channel.send(embed);
     }
   });
 }
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["banlılar","banliste"],
  permLevel: 0
};
module.exports.help = {
  name: 'banlist',
  description: 'Sunucundan Banlanan üyeleri gösterir.',
  usage: 'banlananlar'
};
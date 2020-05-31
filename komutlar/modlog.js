const Discord = require('discord.js')

exports.run = async(client, message, args) => {

if (!args[0]) {
  const sa = new Discord.MessageEmbed()
  .setTitle('Başarısız')
}
};
exports.conf = {
  enabled: true,  
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'modlog'
}; 
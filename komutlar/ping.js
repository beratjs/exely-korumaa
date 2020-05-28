const Discord = require('discord.js')

exports.run = async(client, message ) => {

const ping = new Discord.MessageEmbed()
.setTitle('Ping Pong')
.setDescription(`${client.ws.ping}`)
return message.channel.send(ping)
};
exports.conf = {
  enabled: true,  
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'pingim'
}; 
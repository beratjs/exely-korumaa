const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const  settings =  require('../ayarlar.json')

exports.confing = {
  name: "yardım",
  aliases: ['help'],
  description: "Botdaki Komutları Gösterir.",
  usage: `${settings.bot.prefix}yardım`
};


exports.run = async (client, message, args) => {
  
  if(!message.member.roles.cache.has(settings.roles.anayetki)) {
      return message.react(settings.emojis.uyarı)
    }
    
    let help = new MessageEmbed()
  .setColor("#dd479a")
  .setAuthor(`${message.author.username}`,message.author.avatarURL({dynamic:true}))
  .setDescription(` \`${client.commands.map(a => a.confing.usage).join("\n")}\`   `)
message.channel.send(help)

};


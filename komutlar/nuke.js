const Discord = require('discord.js');
const settings = require('../ayarlar.json')

exports.confing = {
  name: "nuke",
  aliases: [],
  description: "Mesajdaki Kanalı Siler ve aynısını oluşturur.",
  usage: `${settings.bot.prefix}nuke`
};


exports.run = async (client, message, args) => {
if(!message.member.roles.cache.has(settings.roles.kobs)){
    return message.react(settings.emojis.uyarı)
   }
  
  let every = message.guild.roles.cache.find(a => a.name == "@everyone")
  let channel = client.channels.cache.get(message.channel.id);
  var pozisyon = channel.position;
 message.guild.channels.cache.find(x => x.name === args.slice(0).join('-'))
  channel.clone().then(channel2 => {
    channel2.setPosition(pozisyon);
 channel2.createOverwrite(every, {
          SEND_MESSAGES: false,
    READ_MESSAGES: false,
 })
    channel.delete();
    channel2.setParent(channel.parentID)
    channel2.send("Nuked this channel. \nhttps://imgur.com/LIyGeCR", {});
  });
};


const { MessageEmbed } = require('discord.js');
const ms = require('ms');
const db = require("quick.db");
const settings = require('../ayarlar.json')

exports.confing = {
   name: "boost",
  aliases: [],
  description: "Boost Seviyesini ve Boost Basanları Sıralar.",
  usage: `${settings.bot.prefix}boost`
};

exports.run = async(client, message, args) => {
  if (!message.member.roles.cache.has(settings.roles.kurucu)) {
      return message.react(settings.emojis.uyarı)
}



    let embed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`Sunucun Boost Sayısı: **${message.guild.premiumSubscriptionCount}**  \`(${message.guild.premiumTier} Level)\``)
    message.channel.send(embed)
  
  
    
  
}
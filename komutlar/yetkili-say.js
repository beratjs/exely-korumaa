const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const settings = require('../ayarlar.json')

exports.confing = {
  name: "yetkili-say",
  aliases: [],
  description: "Sunucudaki Yetkilileri Sayar.",
  usage: `${settings.bot.prefix}yardım`
};


exports.run = async (client, message, args) => {

      
  if(!message.member.roles.cache.has(settings.roles.kurucu)) {
      return message.react(settings.emojis.uyarı)
    }
  let booster = message.guild.roles.cache.find(role => role.name === "・Özel Oda");
  

message.channel.send(booster.members.map(a=>a).join(','))

};


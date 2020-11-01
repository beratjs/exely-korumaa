const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const settings = require('../ayarlar.json')

exports.confing = {
  name: "say",
  aliases: [],
  description: "Sunucu İstatisliklerini Gösterir.",
  usage: `${settings.bot.prefix}yardım`
};


exports.run = async (client, message, args) => {
  
      let embed = new MessageEmbed()
  .setColor("#dd479a")
  .setAuthor(`${message.author.username}`,message.author.avatarURL({dynamic:true}))
  .setTimestamp()
  .setThumbnail(message.guild.iconURL({dynamic:true}))
  if(!message.member.roles.cache.has(settings.roles.kurucu)) {
      return message.react(settings.emojis.uyarı)
    }
  let booster = message.guild.roles.cache.find(role => role.name === "🌺・Destekçi");
  
  let js = message.guild.roles.cache.find(role => role.name === "・Normal Kodlar");
  
    let abone = message.guild.roles.cache.find(role => role.name === "・Abone");

message.channel.send(embed.setDescription(`<a:wumpus_4:759671316784873494> Sunucudaki Üye Sayısı: \`${message.guild.memberCount}\` \n<a:wumpus_4:759671316784873494> Booster Sayısı: \`${booster.members.size}\` \n<a:wumpus_4:759671316784873494> Abone Rolü Olan Kullanıcılar: \`${abone.members.size}\` \n<a:wumpus_4:759671316784873494> Normal Kodlardakı Uye Sayısı: \`${js.members.size}\` \n<a:wumpus_4:759671316784873494> Online Sayısı: \`${message.guild.members.cache.filter(a => a.presence.status != "offline").size}\` `)) 

};


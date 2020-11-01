const Discord = require("discord.js");
const ms = require("ms");
const db = require('quick.db');
const settings  =  require('../../settings.json')

exports.confing = {
  name: "unvmute",
  aliases: [],
  description: "Etiketlenen Kişinin Sesde Mutesını Açar.",
  usage: `${settings.bot.prefix}unvmute [üye]`
};


exports.run = async(client, message, args) => {
   const xd = new Discord.MessageEmbed()
 .setColor("BLACK")
 .setAuthor(message.author.username,message.author.avatarURL({dynamic:true}))

  
  if (!message.member.roles.cache.has(settings.roles.vmuteyetkili)) return message.channel.send(xd.setDescription(`Yeterli Yetkin Bulunmamakta.`))

  let log = message.guild.channels.cache.find(c => c.id === settings.channels.sesmutelog);

  if (!log) return;
  let kullanici = message.mentions.members.first();
  let sebep = args.slice(1).join(' ')
  if (!kullanici)
    return message.channel.send('Susturlması Açılcak Kullanıcıyı Etiketle.');
  if(!kullanici.voice.channel) return message.channel.send('Kullanıcı Sesde Yok');
  if (!sebep) return message.reply('Sebep Giriniz.');
  
  db.add(`ceza.${kullanici.id}.unvmute`,1)
  db.add(`yetkili.${message.author.id}.unvmute`,1)
  
  await kullanici.voice.setMute(false)
  
message.channel.send(xd.setDescription(`**${kullanici}** Adlı Kullanıcın Ses Mutesi Başarıyla Açıldı`))



};


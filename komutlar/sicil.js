const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const settings = require('../ayarlar.json')

exports.confing = {
    name: "sicil",
  aliases: [],
  description: "Kısının Şuana Kadar Ne Kadar Mute Yedıgını ve Ban Yedıgını vs Gösterir.",
  usage: `${settings.bot.prefix}sicil [üye]`
};


exports.run = async (client, message, args) => {

    
    let yetkinyok = new MessageEmbed()
  .setColor("#dd479a")
  .setAuthor(`${message.author.username}`,message.author.avatarURL({dynamic:true}))
  .setDescription(`Bu komutu kullanabilmek için gerekli rollere sahip değilsin!`)
  
    if(!message.member.roles.cache.has(settings.roles.anayetki)) {
      return message.channel.send(yetkinyok).then(a => a.delete({timeout:4000}))
    }
    
  
    let user = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0]);
  if(!user) return message.channel.send("Bir kullanıcı etiketle veya idsini gir.").then(a => a.delete({timeout:4000}))
  

  
  let embed = new MessageEmbed()
  .setColor("RANDOM")
  .setAuthor(`${user.user.username}`,user.user.avatarURL({dynamic:true}))
  .setDescription(`
**${user.user.username} Toplam alınan cezalar**

:wrench: | Jail: \`${db.get(`ceza.${user.id}.jail`)  || 0}\`
<a:wumpus_1:759671363366813696> | Abone: \`${db.get(`uyestat.${user.id}.abone`)  || 0}\`
:balloon: | Chatmute: \`${db.get(`ceza.${user.id}.mute`)  || 0}\`
:outbox_tray: | Ban:  \`${db.get(`ceza.${user.id}.ban`)   || 0}\`
<a:1558_muted:757847163496562709>  | Vmute:  \`${db.get(`ceza.${user.id}.vmute`)     || 0}\`

`)
  message.channel.send(embed)
};


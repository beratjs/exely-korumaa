const Discord = require("discord.js");
const ms = require("ms");
const db = require('quick.db');
const settings = require('../ayarlar.json')

exports.confing = {
  name: "vmute",
  aliases: [],
  description: "Etiketlenen Kişiye Sesde Muteler.",
  usage: `${settings.bot.prefix}vmute [üye] [süre]`
};


exports.run = async(client, message, args) => {
   const xd = new Discord.MessageEmbed()
 .setColor("BLACK")
 .setAuthor(message.author.username,message.author.avatarURL({dynamic:true}))

  
  if (!message.member.roles.cache.has(settings.roles.vmuteyetkili)) return message.channel.send(xd.setDescription(`Yeterli Yetkin Bulunmamakta.`))

  let log = message.guild.channels.cache.find(c => c.id === settings.channels.sesmutelog);

  if (!log) return;
  let kullanici = message.mentions.members.first();
  let süre = args[1];
  let sebep = args.slice(2).join(' ')
  if (!kullanici)
    return message.channel.send('Susturulcak Kullanıcı Etiketlemelisin.');
  if(!kullanici.voice.channel) return message.channel.send('Kullanıcı Ses Kanalında Yok!');
  if (!süre) return message.reply('Bir Süre Belirt.');
  if (!sebep) return message.reply('Sebep Giriniz.');
  
  db.add(`ceza.${kullanici.id}.vmute`,1)
  db.add(`yetkili.${message.author.id}.vmute`,1)
  
  await kullanici.voice.setMute(true)
  
message.channel.send(xd.setDescription(`**${kullanici}** Adlı Kullanıcı Ses Kanalında **${süre}** Boyunca Susturuldu,Susturulma Sebepi: **${sebep}**`))

  setTimeout(async() => {
    await kullanici.voice.setMute(false);
    message.channel.send(xd.setDescription(`**${kullanici}** Adlı Kullanıcın Ses Kanalındaki Susturulması Bitti!`))
  },ms(süre))

};


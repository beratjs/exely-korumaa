const { MessageEmbed } = require("discord.js");
const settings  =  require('../../settings.json')

exports.confing = {
   name: "çek",
  aliases: [],
  description: "Etiketlenen Kullanıcıyı Kendinize Çekersiniz.",
  usage: `${settings.bot.prefix}çek [üye]`
};

exports.run = async(client, message,args) => {
    if(message.channel.id != settings.channels.botkomut) return message.channel.send("Bu Komutu Sadece \"Bot-Komut\" Kanalında Kullanabilirsin. ").then(a => a.delete({timeout:3000}))
    if (!message.member.hasPermission("ADMINISTRATOR"))  return message.channel.send('Bu Komutu Sadece `Yönetici` Olanlar Kullanabilir. ')
  let uye = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
  let embed = new MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor("RANDOM").setTimestamp();
  if (!uye) return message.channel.send(embed.setDescription("Ses Odasına Gidilcek Üyeyi Etiketle!")).then(x => x.delete({timeout: 5000}));
  if(uye.id === message.author.id) return message.channel.send('Kendi Ses Kanalına Gidemessin.')
  if (!message.member.voice.channel || !uye.voice.channel || message.member.voice.channelID == uye.voice.channelID) return message.channel.send(embed.setDescription("Etiketlenen üye Sesde Değil yada Seninle Aynı Kanalda!")).then(x => x.delete({timeout: 5000}));

uye.voice.setChannel(message.member.voice.channelID);
  message.react(settings.emojis.yes)
  
};

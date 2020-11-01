const { MessageEmbed } = require("discord.js");
const settings = require('../ayarlar.json')

exports.confing = {
   name: "git",
  aliases: [],
  description: "Etiketlenen Kullanıcın Ses Kanalına Gidersin.",
  usage: `${settings.bot.prefix}git [üye]`
};

exports.run = async(client, message,args) => {
    if(message.channel.id != settings.channels.botkomut) return message.channel.send("Bu Komutu Sadece \"Bot-Komut\" Kanalında Kullanabilirsin. ").then(a => a.delete({timeout:3000}))
    let uye = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
  let embed = new MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor("RANDOM").setTimestamp();
  if (!uye) return message.channel.send(embed.setDescription("Ses Odasına Gidilcek Üyeyi Etiketle!")).then(x => x.delete({timeout: 5000}));
  if(uye.id === message.author.id) return message.channel.send('Kendi Ses Kanalına Gidemessin.')
  if (!message.member.voice.channel || !uye.voice.channel || message.member.voice.channelID == uye.voice.channelID) return message.channel.send(embed.setDescription("Etiketlenen üye Sesde Değil yada Seninle Aynı Kanalda!")).then(x => x.delete({timeout: 5000}));
  if (message.member.hasPermission("ADMINISTRATOR")) {
    await message.member.voice.setChannel(uye.voice.channelID);
    message.react(client.emojiler.onay).catch();
  } else {
    const reactionFilter = (reaction, user) => {
      return ['✅'].includes(reaction.emoji.name) && user.id === uye.id;
    };
    message.channel.send(`${uye}`, {embed: embed.setAuthor(uye.displayName, uye.user.avatarURL({dynamic: true, size: 2048})).setDescription(`${message.author} Senin Ses Kanalına Girmek İçin İzin İstiyor! Onaylıyor Musun?`)}).then(async msj => {
      await msj.react('✅');
      msj.awaitReactions(reactionFilter, {max: 1, time: 15000, error: ['time']}).then(c => {
    let cevap = c.first();
    if (cevap) {
      message.member.voice.setChannel(uye.voice.channelID);
          msj.delete();
          message.react(client.emojiler.onay).catch();
    };
      });
    });
  };
};

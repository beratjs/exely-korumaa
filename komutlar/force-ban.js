const Discord = require('discord.js')
const settings = require('../ayarlar.json')

exports.confing = {
     name: 'force-ban',
    aliases: ['force'],
    description: 'Kullanıcıyı Banlar.',
    usage: `${settings.bot.prefix}force-ban [id]`
}

exports.run = async (client, message, args,) => {
	if(!message.member.roles.cache.has(settings.roles.banyetkili)){
			    return message.react(settings.emojis.uyarı)
	}
  let kisi = args[0];
  if (isNaN(kisi)) return message.channel.send("Bir Kullanıcı ID giriniz.");
  const sebep = args.splice(1, args.length).join(" ") || "Sebep Yok"
  message.guild.members.ban(kisi, {reason: `${sebep}`})
    .then(() => {
      message.channel.send(`**${kisi}** ID'li, Kullanıcısı Sunucudan yasaklanmıştır. `
      );
    });
};

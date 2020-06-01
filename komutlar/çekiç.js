const Discord = require('discord.js');

exports.run = (client, message, args) => {
      let opponent = message.mentions.users.first()
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply('**Kime Çekiç Atcağını bana Vahiy mi gelecek?**');
    if (opponent.bot) return message.reply('**Botlara Çekiç Atamazssınız!**');

    const embed = new Discord.MessageEmbed()
    .setAuthor('')
    .setColor(255, 165, 0)
    .setImage(`https://media.giphy.com/media/TlK63EoF34KJy7wt96M/giphy.gif`)
    .setDescription(`** ${mesaj} ` + '@' + message.author.username + ' Sana :hammer: Attı. Canın Acımış Olmalı!**')
    return message.channel.send  (embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'çekiç',
  description: 'İstediğiniz Kişiye Çekiç Atarsınız.',
  usage: 'çekiç'
};
const Discord = require('discord.js');

exports.run = (client, message, args) => {
      let opponent = message.mentions.users.first()
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) {
      const s = new Discord.MessageEmbed()
      .setDescription('Kime Çekiç Atacaksın?')
      return message.channel.send(s)
    }
    if (opponent.bot) return message.reply('**Botlara Çekiç Atamazssınız!**');
  if (opponent.id === message.author.id) return message.reply('Kendine Çekiç Atamazssın!');

    const sa = new Discord.MessageEmbed()
    .setColor("RED")
    .setImage(`https://media.giphy.com/media/EOfarA6ZUqzZu/giphy.gif`)
    .setDescription(`Hey! ${opponent} <@${message.author.id}> Sana Çekiç Attı!`)
    return message.channel.send (sa);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'çekiç'
};
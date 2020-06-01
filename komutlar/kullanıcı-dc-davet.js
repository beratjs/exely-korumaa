const Discord = require(`discord.js`)

exports.run = async (bot, message, args) => {
  try {
    let invite = await message.channel.createInvite({
      maxAge: args.age * 60,
      maxUses: args.uses
    });
      const sunucubilgi = new Discord.MessageEmbed()
    .setColor("ff0000")
    .setTimestamp()
    .setDescription(`**<a:693873272525160459:699974249527377991> Davet kodu oluşturuldu!** (https://discord.gg/${invite.code})`)
      .setFooter(bot.user.username, bot.user.avatarURL)
    return message.channel.send(sunucubilgi).catch(e => {
return
    });
  }
  catch (e) {
return
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['davetoluştur'],
  permLevel: 0
};

exports.help = {
  name: 'dc',
  description: 'davet-oluştur',
  usage: 'davet-oluştur'
};
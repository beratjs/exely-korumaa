const Discord = require('discord.js')

exports.run = async(client, message) => {
  
    const y = new Discord.MessageEmbed()
    .addField('**MODERASYON**','`bişikoy`,`bişikoy`,`bişikoy`,`bişikoy`,`bişikoy`,`bişikoy`,`bişikoy`,`bişikoy`,`bişikoy`,`bişikoy`,`bişikoy`,`bişikoy`,`bişikoy`,`bişikoy`')
    .addField('**KULLANICI**','`bişikoy`,`bişikoy`,`bişikoy`,`bişikoy`,`bişikoy`,`bişikoy`,`bişikoy`,`bişikoy`,`bişikoy`,`bişikoy`,`bişikoy`,`bişikoy`,`bişikoy`,`bişikoy`')
    .addField('**EĞLENCE**','`bişikoy`,`bişikoy`,`bişikoy`,`bişikoy`,`bişikoy`,`bişikoy`,`bişikoy`,`bişikoy`,`bişikoy`,`bişikoy`,`bişikoy`,`bişikoy`,`bişikoy`,`bişikoy`')
    .setFooter(`${client.user.username}`, client.user.avatarURL)
    //yandakı cıkan resım aktıf etmek ıstersenız .setThumbnail(client.user.avatarURL) eger yapacaksın bu bolumu ve acıklamayı sılın ve // bunuda
    return message.channel.send(y)
};
exports.conf = {
 enabled: true,
 guildOnly: false,
  aliases: ['y2'],
 permLevel: 0
};

exports.help = {
 name: 'yardım2'
};

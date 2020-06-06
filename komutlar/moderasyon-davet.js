const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
        
        .setTitle(`<a:694276549737840690:699974338375450734> Davet Menüsü <a:694276549737840690:699974338375450734> `)
         .setDescription('Sıkıntı olursa [destek sunucumuza](https://discord.gg/yxN9t7H) gelebilirsin! \n\n\n **[Davet Et](https://discordapp.com/oauth2/authorize?client_id=703139921774248007&scope=bot&permissions=8)** \n **[Destek Sunucu](https://discord.gg/yxN9t7H)** \n **[Oy Ver](https://top.gg/bot/703139921774248007)** ')
        .setFooter(`${message.author.username} Başarıyla ${ayarlar.prefix}davet Sistemi Kullandı!`, message.author.avatarURL)
    .setColor(`RANDOM`)
    return message.channel.send(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'davet',
  description: '',
  usage: 'davet'
};
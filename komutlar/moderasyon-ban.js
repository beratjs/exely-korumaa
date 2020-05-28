const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {
  
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.reply('Kimi banlayacağını yazmalısın.').catch(console.error);

  if (reason.length < 1) return message.reply('Ban sebebini yazmalısın.');

  if (!message.guild.member(user).bannable) return message.reply('Yetkilileri banlayamam.');
  message.guild.ban(user, 2);

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'ban',
  description: 'İstediğiniz kişiyi banlar.',
  usage: 'ban [kullanıcı] [sebep]'
};
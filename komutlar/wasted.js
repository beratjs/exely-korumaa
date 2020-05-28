const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   message.channel.send(' ``Acaba Kazanabilecek Mi?`` ').then(message => {
      var espriler = ['**WOW 8 Milyon Kazandın**','**Kazıklandın :D**','9 Milyon Kazandın!'];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
            message.edit(`${espri}`);
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'piyangoçek',
  description: 'Acaba Kazanabilecek Misin?',
  usage: 'piyangoçek'
};
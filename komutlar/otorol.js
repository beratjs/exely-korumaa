const Discord = require('discord.js');
const db = require('quick.db');

module.exports.run = async(client, message,args) => {
   
   if (!message.member.permissions.has('MANAGE_ROLES')) {
    const izinyok2 = new Discord.MessageEmbed()
    .setTitle('Başarısız')
    .setDescription('Bu Komut İçin Yetkin Yok!')
    return message.channel.send(izinyok2)
  }
  
  let role =
  message.mentions.roles.first() ||
  message.guild.roles.find(rol => rol.name === args[0]);
  let kanal = message.mentions.channels.first();
  
  if (!role) {
    const rolyok = new Discord.MessageEmbed()
    .setTitle('Başarısız')
    .setDescription('Rol Belirtmen Lazım')
    return message.channel.send(rolyok)
  }
   
  if (!kanal) {
    const rolyok = new Discord.MessageEmbed()
    .setTitle('Başarısız')
    .setDescription('Kanal Belirtmen Lazım')
    return message.channel.send(rolyok)
  }
  const otorol = new Discord.MessageEmbed()
    .setTitle('Başarılı')
    .setDescription('Otorol Ayarlandı! \n ')
    return message.channel.send(otorol)
  }

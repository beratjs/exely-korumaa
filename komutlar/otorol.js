const Discord = require('discord.js');
const db = require('quick.db');

module.exports.run = async(bot, message,args) => {
   
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
    return message.channel.send(
    new Discord.MessageEmbed()
    .setTitle('Başarısız')
    .setDescription('Rol Belirtmen Lazım')
   );
  }
   
  if (!kanal) {
    return message.channel.send(
     new Discord.MessageEmbed()
    .setTitle('Başarısız')
    .setDescription('Kanal Belirtmen Lazım')
    );
  }
  const otorol = new Discord.MessageEmbed()
    .setTitle('Başarılı')
    .setDescription('Otorol Ayarlandı! \n Yeni Gelen Kullanıcılara `${role}`ünü Vericeğim!')
    return message.channel.send(otorol)
  
  db.set(`otokanal_${message.guild.id}`, kanal.id);
  db.set(`otorol_${message.guild.id}`, role.id);
  
  };
module.exports.conf = {
 enabled: true,
 guildOnly: false,
  aliases: ['oto-rol2'],
 permLevel: 0
};

module.exports.help = {
 name: 'otorol2'
};

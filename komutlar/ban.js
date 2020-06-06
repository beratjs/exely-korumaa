const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => {
        if(db.fetch(`bakim`)) return message.channel.send('<a:tamir:708594410467885057> Size Daha İyi Hizmet Vermek İçin Bakımdayız \n <a:yesbe:707495628112134145> En Yakın Zamanda Tekrar Kodlarımızı Sunacağız')

  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first() || client.users.get(args.slice(0).join(' '))
  
  if  (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`**<a:hayrbe:707495526114787328> Bu Komutu Kullanmak İçin \`Yönetici\` Yetkisine Sahip Olmalısın**`);
   if (!user) return message.channel.send('**<a:hayrbe:707495526114787328> Lütfen Banlayacağınız Kişiyi Seçin!**').catch(console.error);
  if (!reason) return message.channel.send('**<a:hayrbe:707495526114787328> Lütfen Bir Sebep Yazınız!**');
  if (!message.guild.member(user)) return message.channel.send('**<a:hayrbe:707495526114787328> Bip Bob Bip Böyle Bir Kullanıcı Bulamadım!**')
  if (!message.guild.member(user).bannable) return message.channel.send('**<a:hayrbe:707495526114787328> Yetkilileri Yasaklayamam Dostum!**');
  
  message.guild.members.ban(user, 2);
  message.channel.send('<a:685083475509772337:699974316326125628> Başarıyla Kullanıcıyı Yasakladım!**')

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ban',
  description: 'İstediğiniz kişiyi banlar.',
  usage: 'ban [kullanıcı] [sebep]'
};
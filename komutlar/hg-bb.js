const Discord = require('discord.js'),
      db = require('quick.db')
module.exports.run = async (client, message, args) => {
          if(db.fetch(`bakim`)) return message.channel.send('<a:tamir:708594410467885057> Size Daha İyi Hizmet Vermek İçin Bakımdayız \n <a:yesbe:707495628112134145> En Yakın Zamanda Tekrar Kodlarımızı Sunacağız')

let channelfc= message.mentions.channels.first()
if (!message.member.hasPermission("BAN_MEMBERS")) {
    const embed = new Discord.RichEmbed()
      .setDescription(`**Bu Komutu Kullanmak İçin \`Üyeleri At\` Yetkisine Sahip Olmalısın**`)
      .setColor("BLACK");

    message.channel.send(embed);
    return;
  }
if(!channelfc) return message.reply('**<a:hayrbe:707495526114787328>Lütfen Bir Kanal Etiketleyiniz!**')
db.set(`FrenzyResimsizHGBB_${message.guild.id}`,channelfc.id)
message.reply('**<a:ee:707495562944970783> Başarıyla Sistem Ayarlandı!**')
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'hg-bb',
  description: 'Frenzy Code',
  usage: 'Frenzy Code'
};
const Discord = require('discord.js'),
db = require('quick.db')
const ayarlar = require('../ayarlar.json')
module.exports.run = async (client, message, args) => {
 
let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix

let channelfc= message.mentions.channels.first()
if (!args[0])  {
    const küfürcu0k = new Discord.MessageEmbed()
    .setTitle('Başarısız')
    .setDescription(`Kanal Belirtmen Lazım!`)
      return message.channel.send(küfürcu0k)

  }   
if (!message.member.hasPermission("BAN_MEMBERS")) {
    const embed = new Discord.RichEmbed()
      .setDescription(`**Bu Komutu Kullanmak İçin \`Üyeleri At\` Yetkisine Sahip Olmalısın**`)
      .setColor("BLACK");

    message.channel.send(embed);
    return;
  }
if(!channelfc) return message.reply('**<a:hayrbe:707495526114787328>Lütfen Bir Kanal Etiketleyiniz!**')
db.set(`FrenzyResimsizHGBB_${message.guild.id}`,channelfc.id)
 const küfürengelcim23 = new Discord.MessageEmbed()
    .setTitle('Başarılı')
    .setDescription('Karşılama Sistemini  Açtım')
    return message.channel.send(küfürengelcim23)

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'hg-bb-aç',
  description: 'Frenzy Code',
  usage: 'Frenzy Code'
};
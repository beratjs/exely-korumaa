const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
          if(db.fetch(`bakim`)) return message.channel.send('<a:tamir:708594410467885057> Size Daha İyi Hizmet Vermek İçin Bakımdayız \n <a:yesbe:707495628112134145> En Yakın Zamanda Tekrar Kodlarımızı Sunacağız')

  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
  if (!message.member.hasPermission("MANAGE_ROLES")) {
    const embed = new Discord.RichEmbed()
      .setDescription(`<a:hayrbe:707495526114787328> Bu Komut İçin \`Rolleri Yönet\` Yetkisine Sahip Olmalısın!`)
      .setColor("RANDOM")
.setFooter(bot.user.username, bot.user.avatar    message.channel.send(embed);
    return;
URL)
  }

  let role =
    message.mentions.roles.first() ||
    message.guild.roles.find(rol => rol.name === args[0]);
  let kanal = message.mentions.channels.first();
  if (!role) {
    return message.channel.send(
      new Discord.RichEmbed()
        .setDescription(`<a:hayrbe:707495526114787328> **Bir  Rol Belirt Lütfen!**`)
        .setColor("RANDOM")
    );
  }
  if (!kanal) {
    return message.channel.send(
      new Discord.RichEmbed()
        .setDescription(`<a:hayrbe:707495526114787328> **Kanal Belirt Lütfen!**`)
        .setColor("RANDOM")
    );
  }
  const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(`<a:4568_aVerified:704749531924922399> **Otorol Başarıyla Ayarlandı Kanal; ${kanal}\nRolü; ${role}** `)
  message.channel.send(embed);

  db.set(`otokanal_${message.guild.id}`, kanal.id);
  db.set(`otorol_${message.guild.id}`, role.id);
};

module.exports.conf = {
  aliases: ["otorol-ayarla","otorol"],
  permLevel: 0,
  enabled: true,
  guildOnly: true,
  kategori: "moderasyon"
};

module.exports.help = {
  name: "oto-rol",
  description: "oto-rol",
  usage: "oto-rol"
};

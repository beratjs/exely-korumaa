const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const settings = require('../ayarlar.json')

exports.confing = {
   name: "ban-liste",
  aliases: [],
  description: "Sunucudaki Banlanmış Üyeleri Gösterir.",
  usage: `${settings.bot.prefix}ban-liste`
};

exports.run = async (client, message, args) => {

   if(!message.member.hasPermission("ADMINISTRATOR")){
    return message.react(settings.emojis.uyarı)
   }
  
    message.guild.fetchBans()
    .then(async bans => {
     await message.channel.send(`${bans.map(a => `${a.user.tag} | (${a.user.id})`).join("\n")}`, {code: 'xl', split: true})
         message.reply(`Toplam \`${bans.size}\` Banlanmış Üye Bulunmakta.`)
    })
};


  




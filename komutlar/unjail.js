const Discord = require('discord.js')
const db = require("quick.db");
const settings  =  require('../../settings.json')
const moment = require('moment');
moment.locale("tr")

exports.confing = {
 name: 'unjail',
  aliases: [],
  permLevel: 0,
  description: 'Etiketlenen Kişiyi Jaile Atar.',
  usage: `${settings.bot.prefix}jail [üye] [sebep]`
};

exports.run = async(client, message, args) => {
  // Üst satýrdaki uyarýda sadece belirtilen rol ve üstü kullanabilir.
  // Alt satýrdaki uyarýda sadece belirtilen rol kullanabilir.
  if(!message.member.roles.cache.has(settings.roles.jailyetkili)) {
      return message.react(settings.emojis.uyarı)
}
  //if (!message.member.roles.has("Komutu Kullanabilecek Rol IDsi")) return message.reply('Bu komut için yeterli iznin yok!');
  let uye = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
  if (!uye) return message.reply(`Doğru Kullanım: **${this.confing.usage}**`);

  

  db.add(`ceza.${uye.id}.unjail`,1)
  
 db.add(`yetkili.${message.author.id}.unjail`,1)
  
  uye.roles.set(["747121110281224215"])
  
    let jail = new Discord.MessageEmbed()
  .setColor("#dd479a") 
  .setAuthor(message.author.username,message.author.avatarURL({dynamic:true}))
  .setDescription(`
${uye} Adlı Kullanıcı ${message.author.id} Tarafından Jailden Çıkarıldı.
`)
client.channels.cache.get(settings.channels.jaillog).send(jail)
 
  

};




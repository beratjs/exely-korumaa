
const Discord = require('discord.js')
const db = require("quick.db");
const settings = require('../ayarlar.json')
const moment = require('moment');
const ms = require("ms");

moment.locale("tr")

exports.confing = {
 name: 'mute',
  aliases: [],
  permLevel: 0,
  description: 'Etiketlenen Kişiyi Muteler.',
  usage: `${settings.bot.prefix}mute [üye] [süre] [sebep]`
};
  
  exports.run = async(client, message, args) => {
   const xd = new Discord.MessageEmbed()
 .setColor("BLACK")
 .setAuthor(message.author.username,message.author.avatarURL({dynamic:true}))

   
   
  if(!message.member.roles.cache.has(settings.roles.muteyetkili)) {
      return message.react(settings.emojis.uyarı)
}

  let uye = message.mentions.members.first() 
  let süre =  args[1]
  let sebep = args.slice(2).join(' ')
  if (!uye) return message.reply(`Doğru Kullanım: **${this.confing.usage}**`).then(a => a.delete({timeout:4000}))
    if(uye.id === message.author.id) return message.channel.send('Kendini Muteleyemissin.').then(a => a.delete({timeout:3000}))
  if(!süre) return message.channel.send('Bir Süre Gir.').then(a => a.delete({timeout:3000}))
  if(!sebep) return message.channel.send("Sebep Belirt.").then(a => a.delete({timeout:3000}))
  let logKanali = message.guild.channels.cache.get(settings.channels.jaillog); // Log Kanalý ID

 
await uye.roles.add(settings.roles.muted)

  
  message.channel.send(`\`${uye.displayName}\` Adlı üye **${sebep}** Nedeniyle Mutelendi.`);
  
  
  

  db.add(`ceza.${uye.id}.mute`,1)
  
 db.add(`yetkili.${message.author.id}.mute`,1)
  
  db.add(`serino.${message.guild.id}.mute`,1)
  
  let serino = db.fetch(`serino.${message.guild.id}.mute`)

  
    let jail = new Discord.MessageEmbed()
  .setColor("#dd479a") 
  .setDescription(`
• Mute ID: \`#${serino}\`
• Mutelenen Üye: ${uye} \`(${uye.user.tag}\` - \`${uye.id})\`
• Mute Atan Yetkili: ${message.author} \`(${message.author.tag}\` - \`${message.author.id})\`
• Mute Tarihi: \`${moment().add(3, "hours").format("D MMM YYYY  HH:mm")}\`
• Mute Sebebi: \`${sebep}\``)
client.channels.cache.get(settings.channels.mutelog).send(jail)
 
  setTimeout(async() => {
    await uye.roles.remove(settings.roles.muted);
    message.channel.send(xd.setDescription(`**${uye}** Adlı Kullanıcın Mute Süresi Bitti!`))
  },ms(süre))

};




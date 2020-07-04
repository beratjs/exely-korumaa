const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async(client, message, args ) => {
  
let banlanıcak = message.mentions.users.first()
let banlimit = await db.fetch(`banlimit_${message.guild.id}`)
 let bansayı= await db.fetch(`bansayı_${message.guild.id}`, 1)

if (!banlanıcak) return message.channel.send(`Kişi Seç!`)
  if (bansayı > banlimit) return message.channel.send(`b`)
  
  let sebep = args.slice(1).join(' ')
  if (!sebep) return message.channel.send('Sebep Belirt')
  
  

  db.add(`bansayı_${message.author.id}`, 1)
  let kanal = await db.fetch(`banlog_${message.guild.id}`)
  if (kanal) {
    const sa = new Discord.MessageEmbed()
    .setTitle('Kullanıcı Banlandı!')
    .setDescription(` ${banlanıcak} Adlı Kullanıcı **${sebep}** Yüzünden <@${message.author.id}> Tarafından Sunucudan Yasaklandı`)
    .setTimestamp()
    client.channels.cache.get(kanal).send(sa)
  }
  

};
exports.conf = {
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'ban'
}; 
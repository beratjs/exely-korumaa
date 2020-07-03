const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async(client, message, args ) => {
  
let banlanıcak = message.mentions.users.first()

if (!banlanıcak) return message.channel.send(`Kişi Seç!`)
  
  
  let sebep = args.slice(1).join(' ')
  if (!sebep) return message.channel.send('Sebep Belirt')
  
  

  
  let kanal = await db.fetch(`banlog_${message.guild.id}`)
  if (kanal) {
    const sa = new Discord.MessageEmbed()
    .setTitle('Kullanıcı Banlandı!')
    .setDescription(``)
  }
  

};
exports.conf = {
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'ban'
}; 
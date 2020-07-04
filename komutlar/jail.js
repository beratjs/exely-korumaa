const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async(client, message,args ) => {

let jailrol = "rol id"
let k = message.mentions.users.first()
let sebep = args.slice(1).join(' ')
 if (!k) return message.channel.send(`Kullanıcı Belirt`)
    if (!sebep) return message.channel.send('Sebep Belirt')

};
exports.conf = {
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'jail'
}; 
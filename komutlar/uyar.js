const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async(client, message, args ) => {
  
let a = message.mentions.users.first()
let sebep = args.slice(1).join(' ')

if (!a || !sebep) return message.channel.send(`Kişi Ve Sebep Belirt`)  

};
exports.conf = {
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'uyar'
}; 
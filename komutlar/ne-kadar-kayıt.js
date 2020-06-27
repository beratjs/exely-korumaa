
 const Discord = require('discord.js');
 const db = require('quick.db')
 exports.run = async (client, message, args) => {

   let üye = message.mentions.members.first() || message.author
   let kayıtsayı = await db.fetch(`kayıtüyetoplam_${üye.id}`)
   
   
   if (kayıtsayı == null) '0'
   
   
   const sa = new Discord.RichEmbed()
   .setTitle('Bilgiler')
   .setDescription(`Kayıt Ettiği Toplam Sayı : ${kayıtsayı}`)
   return message.channel.send(sa)
 };
 
 exports.conf = {
   aliases: [],
   permLevel: 0
 }
 exports.help = {
   name: 'kayıt-ölç'
 } 
 
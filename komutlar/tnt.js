
const Discord = require('discord.js');

const ayarlar = require('../ayarlar.json');

const db = require('quick.db');

const ms = require('ms')







exports.run = async (client, message, args) => {

  

      if(message.author.id !== message.guild.owner.user.id) return message.channel.send(`Bu Komut Sadece Kurucular İçin Geçerlidir!`)



  

  let yavaşmod = 8.64e+7, // 24 Saat

        amount = Math.floor(Math.random() * 1000) + 4000;      



    let lastDaily = await db.fetch(`günlükbea_${message.guild.id}`);

    if (lastDaily !== null && yavaşmod - (Date.now() - lastDaily) > 0) {

        let timeObj = ms(yavaşmod - (Date.now() - lastDaily));



  

      

      return message.reply(`Her 24 Saate Bir Para Alabilirsin`)

      

    } else {

      return message.reply('Sunucun Tanıtıldı!')

          message.channel.createInvite({maxAge: 0}).then((davetlink) => {

    client.channels.cache.get('kanal id').send(`

Sende Beni [Davet Ederek](link) Sunucunu Tanıtabilirsin!





  Sunucu Adı : **${message.guild.name}**

  Sunucu Sahibi : **${message.guild.owner}**

 Sunucu Üye Sayısı : **${message.guild.members.cache.size}**





  ${davetlink.url}



`)

 db.set(`günlükbea_${message.guild.id}`, Date.now());



          })

    }

};



exports.conf = {

  aliases: ["tanıt"],

  permLevel: 0

};



exports.help = {

  name: 'sunucu-tanıt',

  description: 'code master a aittir'

};


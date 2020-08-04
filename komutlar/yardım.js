const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`Kob's Bot`)
.setDescription(`

:white_small_square: **=**  \`!anti-raid\` : **AntiRaid Aç/Kapat**
:white_small_square: **=**  \`!küfür-engel\`:  **Küfür Engel Aç/Kapat**
:white_small_square: **=**  \`!reklam-engel\` :  **Reklam Engel Aç/Kapat**
:white_small_square: **=**  \`!reklam-kick\` :  **Reklam Kick Aç/Kapat**
:white_small_square: **=**  \`!sohbet aç-kapat\` :  **Sohbeti Açıp Kapatırsınız**
:white_small_square: **=**  \`!ban-log\` : **Ban Log Kanal Belirle**
:white_small_square: **=**  \`!banlimit\` : **Ban Limit Belirle**
:white_small_square: **=**  \`!ban\` : **Belirttiğin Kişiyi Sunucudan Banlarsın**
:white_small_square: **=**  \`!unban\`:  **Belirttiğiniz Kişinin Banını Kaldırırsınız**
:white_small_square: **=**  \`!kicklimit\` : **Kick Limit Belirle**
:white_small_square: **=**  \`!kick\` : **Belirttiğiniz Kişiyi Sunucudan Kickler**
:white_small_square: **=**  \`!mod-log\` : **Mod Log Kanalı Belirlersin**
:white_small_square: **=**  \`!modlog-kapat\` : **Mod Log Kanalını Sıfırlarsın**
:white_small_square: **=**  \`!uyar\` : **Bir Kişiyi Uyarırsınız**
:white_small_square: **=**  \`!uyarısay\` : **Belirttiğiniz Kişinin Uyarılarını Sayarsınız**
:white_small_square: **=**  \`!uyarıyı-sil\` : **Belirttiğiniz Kişinin Uyarısını Siler**
:white_small_square: **=**  \`!prefix\` : **Yeni Bir Prefix Belirlersin**
:white_small_square: **=**  \`!prefix-sıfırla\`: **Prefixinizi Sıfırlar Ve Eski Haline Getirir**
:white_small_square: **=**  \`!sa-as\`:  **Sa As Sistemi Aç/Kapt**
:white_small_square: **=**  \`!istatistik\`:  **Botun İstatistiklerini Atar**
:white_small_square: **=**  \`!temizle\`:  **Belirttiğiniz Sayıda Mesajı Siler**
:white_small_square: **=**  \`!ping\`:  **Pinginizi Ölçüp Atar**
:white_small_square: **=**  \`!avatar\`:  **Avatarınızı Atar**

`)
.setImage("https://cdn.discordapp.com/attachments/729334114989375508/731237846173876294/OgunSert_Kobs.png")
.setThumbnail(message.author.avatarURL())
message.channel.send(yardım)

  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['help'], 
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: 'Bizim yaptığımız bir yardım kodu.',
  usage: 'yardım'
};
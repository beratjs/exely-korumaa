const Discord = require('discord.js'),
 db = require('quick.db')

exports.run = async (client, message, args) => {
   let sayaçsayı = args[1]
   let kanal2 = message.mentions.channels.first()
   
  if(!message.member.permissions.has('MANAGE_SERVER')) {
    const a = new Discord.MessageEmbed()
    .setTitle('Yetkin Yok!')
    .setDescription('Bu Komut İçin `Sunucuyu Yönet` Yetkisine Sahip Olmalısın')
    return message.channel.send(a)
  }
  
   if(!kanal2) {
    const a = new Discord.MessageEmbed()
    .setTitle('Hata!')
    .setDescription('Kanal Belirtmen Lazım!')
    return message.channel.send(a)
   }
  if(!sayaçsayı) {
     const a = new Discord.MessageEmbed()
    .setTitle('Hata!')
    .setDescription('Bir Sayaç Hedefi Belirtiniz!')
    return message.channel.send(a)
  }
  if (isNaN(sayaçsayı)) {
     const a = new Discord.MessageEmbed()
    .setTitle('Hata!')
    .setDescription('Sayaç Hedefi Sadece Sayıdan Oluşabilir!')
    return message.channel.send(a)
  }
  
  await db.set(`sayaçsayı_${message.guild.id}`,sayaçsayı)
    await db.set(`kanal2_${message.guild.id}`,kanal2.id)
     const a = new Discord.MessageEmbed()
    .setTitle('Başarılı!')
    .setDescription(`Sayaç Ayarlandı! \n Kanal : ${kanal2} \n Sayaç Hedefi: ${sayaçsayı} Olarak Ayarlandı`)
     .setColor("RED")
  return message.channel.send(a)
  

  
  
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sayaç'],
  permLevel: 0
}
exports.help = {
  name: "sayaç"
}
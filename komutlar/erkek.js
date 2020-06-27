
 const Discord = require('discord.js');
 const db = require('quick.db')
 exports.run = async (client, message, args) => {
   
   let a = await db.fetch(`kayıtlog_${message.guild.id}`)
   
   if(!message.member.roles.has('id koy bea')) {
               const sa = new Discord.RichEmbed()
     .setTitle('Rol Yok')
     .setDescription('Bu Komut İçin <@id> Rolüne Sahip Olmalısın ')
     return message.channel.send(sa)
   }

  let verilecek = "kayıtlı üye rol id"
  let alınacak = "kayıtsız üye rol id"
      let isim = args[1]
   let yaş = args[2]
  
   let datris = message.mentions.members.first();

   if (!datris) {
          const sa = new Discord.RichEmbed()
     .setTitle('Hatalı Kullanım !..')
     .setDescription('Kullanıcı Etiketlemeden Nereyyeee Canım Kardeşim Benim :D?')
     return message.channel.send(sa)
   }
   if (!isim) {
          const sa = new Discord.RichEmbed()
     .setTitle('Hatalı Kullanım !..')
     .setDescription('İsim Belirt!')
     return message.channel.send(sa)
   }
   if (!yaş) {
     const sa = new Discord.RichEmbed()
     .setTitle('Hatalı Kullanım !..')
     .setDescription('Yaş Belirt!')
     return message.channel.send(sa)
   }
   
   datris.addRoles(verilecek);
   datris.removeRoles(alınacak);
      datris.setNickname(`${isim}  ${yaş}`);
   db.add(`kayıtüyetoplam_${message.author.id}`, 1)

 message.channel.send('Kayıt Edildi!')
   
   
   if (a) {
       const sa = new Discord.RichEmbed()
     .setTitle('Kullanıcı Kayıt Edildi')
       .setTimestamp()
     .setDescription(`Kullanıcıyı Kayıt Eden : <@${message.author.id}> \n Kullanıcının Yeni Kayıtı : ${isim} {yaş} \n Kullanıcı : ${datris}`)
       client.channels.get(a).send(sa)
   }
 };
 
 exports.conf = {
   aliases: ["e"],
   permLevel: 0
 }
 exports.help = {
   name: 'erkek'
 } 
 
const Discord = require('discord.js');

exports.run = function (client, message, args) {
    let kanal = message.mentions.channels.first();
    let duyurumetni = args.join(" ").slice(22);
    if(!kanal) return message.channel.send("<a:693873043021365280:700003254259548192> Hata bir kanal etiketlemelisini!");
  if(!duyurumetni) return message.channel.send("<a:693873043021365280:700003254259548192> Hata duyuru metni yazmalısınız!");
  message.delete();
  message.channel.send("<a:77ba453a8bc94763bc49e6a663fd509d:700003210747838525> Başarıyla duyuruldu!");
    kanal.createWebhook("Rays Duyuru", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYMTbkB9kOpUs75-FNXeqPMMMXmXhdD22Rb4VXRtVKyrUWgnHz")
    .then(webhook => webhook.edit("Rays Duyuru", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYMTbkB9kOpUs75-FNXeqPMMMXmXhdD22Rb4VXRtVKyrUWgnHz")
        .then(wb => {
            const duyurucuPing = new Discord.WebhookClient(wb.id, wb.token);
            duyurucuPing.send(duyurumetni + "\n")
            duyurucuPing.delete()
        })
        .catch(console.error))
        .catch(console.error);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: 'duyuru',
  description: 'Duyurucu ping',
  usage: 'duyuru'
};
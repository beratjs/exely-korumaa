const Discord = require('discord.js');
const db = require('quick.db')


exports.run = function(client, message, args) {



    var öneri = args.slice(0).join(' ');

    var guildID = "699974077213048892";

    var channelID = "713478784908656723";

    

    if (!öneri){

        return message.reply("**<a:hayrbe:707495526114787328> Bir Mesaj Belirtin!**");

    } else {

        

        var embed = new Discord.RichEmbed()

            .setTimestamp()

            .addField("Eylem:", "Öneri")

            .addField("Kullanıcı:", message.author.tag)

            .addField("ID", message.author.id)

            .addField("Öneri", öneri)

        

        client.guilds.get(guildID).channels.get(channelID).send(embed);

        message.channel.send("<a:2198_blob_happy:708762979323215973> Önerinizi Başarıyla Sahiplerime Gönderdim Teşekkür Ederiz!");

    };



};



exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ["öner"], 

  permLevel: 0 

};



exports.help = {

  name: 'öneri', 

  description: "bot hakkındaki önerilerinizi bot sahiplerine ulaştırır", 

  usage: 'öneri <mesaj>' 

};


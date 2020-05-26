const Discord = require('discord.js');
const db = require('quick.db')


exports.run = function(client, message, args) {



    var öneri = args.slice(0).join(' ');

    var guildID = "699974077213048892";

    var channelID = "713478784908656723";

    

    if (!öneri){

        return message.reply("**Bir Mesaj Belirtin!**");

    } else {

        

    const embed = new Discord.MessageEmbed()


            .addField("Eylem:", "Öneri")

            .addField("Kullanıcı:", )

            .addField("ID", )

            .addField("Öneri", öneri)

        

        client.guilds.get(guildID).channels.get(channelID).send(embed);

        message.channel.send(" Önerinizi Başarıyla Sahiplerime Gönderdim Teşekkür Ederiz!");

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


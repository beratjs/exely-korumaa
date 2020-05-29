const Discord = require("discord.js");
module.exports.run = async (bot, message) => {
  var emojis = message.guild.emojis.array();
  if (!emojis || emojis === []) return message.reply("");
  if (emojis.length > 1) {
    var page = 1;
    var totalpages = emojis.length;
    var embed = new Discord.Messagembed()
      .setTitle("Emojiler")
      .setDescription(`**Emoji İsmi: \`:${emojis[page - 1].name}:\`\nEmoji ID: \`${emojis[page - 1].id}\`**`)
      .setFooter(
        `Sayfa: ${page}/${totalpages}`
      )
      .setColor("ff0000");
    message.channel
      .send(embed)
      .then(async function(sentEmbed) {
        const emojiArray = ["◀", "▶"];
        const filter = (reaction, user) =>
          emojiArray.includes(reaction.emoji.name) &&
          user.id === message.author.id;
        await sentEmbed.react(emojiArray[0]).catch(function() {});
        await sentEmbed.react(emojiArray[1]).catch(function() {});
        var reactions = sentEmbed.createReactionCollector(filter, {
          time: 300000
        });
        reactions.on("collect", async function(reaction) {
          await reaction.remove(message.author);
          if (reaction.emoji.name === "◀") {
            if (page !== 1) {
              page = page - 1;
            } else {
              page = totalpages;
            }
          } else {
            if (page !== totalpages) {
              page = page + 1;
            } else {
              page = 1;
            }
          }
          embed = new Discord.MessageEmbed()
            .setTitle("🔸 SUNUCUDAKİ EMOJİLER ve ID'Leri🔸")
            .setDescription(`**Emoji İsmi: \`:${emojis[page - 1].name}:\`\nEmoji ID: \`${emojis[page - 1].id}\`**`)
          
            .setFooter(
              `Sayfa: ${page}/${totalpages}`
            )
            .setColor("ff0000");
          sentEmbed.edit(embed).catch(function() {});
        });
        reactions.on("end", () => sentEmbed.edit("⏰ 5 DAKİKA DOLDU! ⏰"));
      })
      .catch(() => {
        message.reply("⚠ HATA OLUŞTU!! ⚠").catch(() => {
          message.author
            .send(`Komut zaten çalışmakta ${message.channel}`)
            .catch(function() {});
        });
      });
  } else {
    let emojiembed = new Discord.MessageEmbed()
      .setTitle("🔸 SUNUCUDAKİ EMOJİLER ve ID'Leri'🔸")
      .setDescription(`**Emoji İsmi: \`:${emojis[0].name}:\`\nEmoji ID: \`${emojis[0].id}\`**`)
     
      .setFooter(`Sayfa: ${1}/${1}`)
      .setColor("ff0000");
    message.channel.send(emojiembed);
  }
};
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["emojiler","emoji-id"],
  permLevel: 0
};

module.exports.help = {
  name: "emoji",
  description: "Sunucudaki Emojileri ve ID Lerini Yollar!",
  usage: "emojiler"
};
   
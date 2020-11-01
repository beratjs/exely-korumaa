const SOURCES = ['stable', 'master', 'rpc', 'commando', 'akairo', 'akairo-master', 'collection'];

const fetch = require('node-fetch');
const { stringify } = require('querystring');
const settings = require('../ayarlar.json')

exports.confing = {
  name: "docs",
  aliases: [],
  description: "Yazdığınız Şeyi Discord.js sitesinde Arar.",
  usage: `${settings.bot.prefix}docs`
};

exports.run = async (client, message, args, ayarlar) => {
  
  if(message.channel.id != settings.channels.botkomut) return message.channel.send("Bu Komutu Sadece \"Bot-Komut\" Kanalında Kullanabilirsin. ").then(a => a.delete({timeout:3000}))
  
    if (!args.length) {
      return message.reply('Lütfen Bir Şey Yaz!');
    }

    let source = SOURCES.includes(args[args.length - 1]) ? args.pop() : 'stable';
    const query = stringify({ src: source, q: args.join(' ') });
    const embed = await fetch(`https://djsdocs.sorta.moe/v2/embed?${query}`).then(res =>
      res.json()
    );

    return message.channel.send({ embed });
};

const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js');
const moment = require('moment');
const db = require("quick.db");
const settings = require('../ayarlar.json')

exports.confing = {
  name: "npm",
  aliases: [],
  description: "Modul Hakkında Bilgi Verir.",
  usage: `${settings.bot.prefix}npm [modul]`
};

const trimArray = arr => {
  if (arr.length > 10) {
    const len = arr.length - 10;
    arr = arr.slice(0, 10);
    arr.push(`${len} more...`);
  }
  return arr;
};


exports.run = async (client, message, [pkg]) => {
  
  
  if(message.channel.id != settings.channels.botkomut) return message.channel.send("Bu Komutu Sadece \"Bot-Komut\" Kanalında Kullanabilirsin. ").then(a => a.delete({timeout:3000}))
  
    if (!pkg) {
      return message.reply('Lütfen bir modül adı gir!');
    }
    pkg = encodeURIComponent(pkg);
    const res = await fetch(`https://registry.npmjs.com/${pkg}`);

    if (res.status === 404) {
      return message.reply(`${pkg} adında bir modül bulamadım :(`);
    }
    const body = await res.json();

    if (body.time.unpublished) {
      return message.channel.send(
        'Bu modül yayından kaldırılmış..'
      );
    }
  
 
    const version = body.versions[body['dist-tags'].latest];
    const maintainers = trimArray(body.maintainers.map(user => user.name));
    const dependencies = version.dependencies ? trimArray(Object.keys(version.dependencies)) : null;

    const embed = new MessageEmbed()
      .setColor('#CB0000')
      .setAuthor('NPM', 'https://i.imgur.com/ErKf5Y0.png', 'https://www.npmjs.com/')
      .setTitle(body.name)
      .setURL(`https://www.npmjs.com/package/${pkg}`)
      .setDescription(body.description)
      .addField('Versiyonu', body['dist-tags'].latest, true)
      .addField('Lisansı', body.license || 'None', true)
      .addField('Sahibi', body.author ? body.author.name : '???', true)
      .addField('Oluşturulma tarihi', moment.utc(body.time.created).format('YYYY/MM/DD hh:mm:ss'), true)
      .addField(
        'Güncellenme tarihi',
        moment.utc(body.time.modified).format('YYYY/MM/DD hh:mm:ss'),
        true
      )
      .addField('Ana dosya', version.main || 'index.js', true)
      .addField(
        'Dependencies',
        dependencies && dependencies.length ? dependencies.join(', ') : 'None'
      )
      .addField('Maintainers', maintainers.join(', '));

    return message.channel.send({ embed });
  }

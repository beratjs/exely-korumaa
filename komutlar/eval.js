const Discord = require('discord.js')
const util = require('util');
const db = require('quick.db')
const tokenuyari = `Tokenımı Alamassın.`
const settings = require('../ayarlar.json')

exports.confing = {
     name: 'eval',
    aliases: ['ev'],
    kategori: 'sahip',
    description: 'Yazılan Kodu Çalıştırır.',
    usage: `${settings.bot.prefix}eval [kod]`
}


exports.run = async (client, message, args) => {
  
let izinli = ["635199312787406848", "536965289598779395"] // BU ŞEKİLDE ARTTIRABİLİRSİNİZ.
if(!izinli.includes(message.member.id)) return message.channel.send('Bu komutu sadece sahibim kullanabilir.')
  
  
    if(!args[0]) {
       return message.channel.send("bir kod yaz.")
    }

        const code = args.join(' ');
    if(code.match(/(client.token)/g)) {
        const newEmbed = new Discord.MessageEmbed()
            .addField('Error', `\`\`\`xl\n${tokenuyari}\`\`\``)
            .setColor('#FF0000');
        message.channel.send(newEmbed);
        return
    }


    function clean(text) {
        if (typeof text !== 'string')
            text = require('util').inspect(text, { depth: 0 })
        text = text
            .replace(/`/g, '`' + String.fromCharCode(8203))
            .replace(/@/g, '@' + String.fromCharCode(8203))
        return text;
    };

    const evalEmbed = new Discord.MessageEmbed().setColor("RANDOM")
    try {
        var evaled = clean(await eval(code));
        if(evaled.startsWith('NTQ3M')) evaled = tokenuyari;
        if (evaled.constructor.name === 'Promise') evalEmbed.setDescription(`\`\`\`\n${evaled}\n\`\`\``)
        else evalEmbed.setDescription(`\`\`\`js\n${evaled}\n\`\`\``)
        const newEmbed = new Discord.MessageEmbed()
        .setAuthor("Eval İşlemi Başarılı")
            .setDescription(`**Eval İşleminde Kullanılan Kod:** \n \`\`\`js\n${message.content}\`\`\` \n\n **Eval Çıktısı**: \n \`\`\`js\n${evaled}\`\`\``)
            .setColor("RANDOM")
            .setTimestamp()
        message.channel.send(newEmbed);
    }
    catch (err) {
        evalEmbed.addField('Error', `\`\`\`js\n${err}\n\`\`\``);
        evalEmbed.setColor('#FF0000');
        message.channel.send(evalEmbed);
    }
}



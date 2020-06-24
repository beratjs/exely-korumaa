const Discord = require('discord.js');//sa marabalar
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const moment = require('moment');
var Jimp = require('jimp');
const { Client, Util } = require('discord.js');
const weather = require('weather-js')
const fs = require('fs');
const YouTube = require("simple-youtube-api");
const queue = new Map();
const ffmpeg = require("ffmpeg"); //bura
const express = require("express");

const ytdl = require("ytdl-core");
const db = require('quick.db');
const http = require('http');

require('./util/eventLoader.js')(client);
const path = require('path');
const request = require('request');
const snekfetch = require('snekfetch');



const app = express();
var prefix = ayarlar.prefix;

const log = message => {
    console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);



//-------------KOMUTLAR-------\\
client.on("message", async msg => {
  let saas = await db.fetch(`saas_${msg.guild.id}`);
  if (saas == 'kapali') return;
  if (saas == 'acik') {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('Aleyküm Selam Hoşgeldin');
  }
  }
});
client.on("guildMemberAdd", async member => {
  let sa = await db.fetch(`sayaçsayı_${member.guild.id}`);
  let as = await db.fetch(`kanal2_${member.guild.id}`);
  if (!sa || !as) return;
  let sonuç = sa - member.guild.memberCount;
  client.channels.cache
    .get(as)
    .send( 
    `${member}, Hoşgeldin  **${sa}** Kişiye Ulaşmak İçin  **${sonuç}** Kişi Kaldı.`
    );
});
client.on("guildMemberRemove", async member => {
  let sa = await db.fetch(`sayaçsayı_${member.guild.id}`);
  let as = await db.fetch(`kanal2_${member.guild.id}`);
  if (!sa || !as) return;
  let sonuç = sa - member.guild.memberCount;

  client.channels.cache
    .get(as)
    .send(
    new Discord.RichEmbed()
    .setDescription(`${member} :outbox_tray: Sunucudan Ayrıldı! **${sa}** Kişiye Ulaşmak İçin  **${sonuç}** Kişi Kaldı.` )
    )
  return;
    
});
client.on('guildMemberAdd', async member => {
  let lukanal = await db.fetch(`hgbb_${member.guild.id}`)
  let luchannel = client.channels.cache.get(lukanal)
  if(!luchannel) return
luchannel.send(` Uuuu Sunucuya Yeni Üye! Karşınızda ${member} Sunucuya Katıldı!`)
})
client.on('guildMemberRemove', async member => {
  let lukanal = await db.fetch(`hgbb_${member.guild.id}`)
  let luchannel = client.channels.cache.get(lukanal)
  if(!luchannel) return
  luchannel.send(` Keşke Gitmeseydin Bee! ${member.user.username} Sunucudan Ayrıldı!`)
})
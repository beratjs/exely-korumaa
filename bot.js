const Discord = require('discord.js');
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
// ISIM \\
const isimloz = "Code Music";
const oynuyorloz = "Code Music";
// ISIM \\

// KOMUTLAR \\
const yardımloz = "müzik";
const playloz = "çal";
const skiploz = "geç";
const playingloz = "çalan-ne";
const volumeloz = "ses";
const queueloz = "sıra";
const stoploz = "bitir";
const pauseloz = "durdur";
const goloz = "devam";
// KOMUTLAR \\



const app = express();
app.get("/", (request, response) => {
  console.log(
    ` az önce pinglenmedi. Sonra ponglanmadı... ya da başka bir şeyler olmadı.`
  );
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
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



//---------------------------------KOMUTLAR---------------------------------\\
//küfür-engel
client.on("message", async msg => {
  
  const lus = await db.fetch(`küfürengel_${msg.guild.id}`)
  if (lus) {
    const kufurengel = ["oç", "amk", "ananı sikiyim", "ananıskm", "piç", "amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "mal", "sik", "yarrak", "am", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "ak", "amq",];
    if (kufurengel.some(word => msg.content.toLowerCase().includes(word))) {
      try {
        if (!msg.member.permissions.has('KICK_MEMBERS')) {
          msg.delete();
          
          return msg.reply('Hey Dur! Bu Sunucuda Küfürü Engelliyorum').then(msg => msg.delete(3000));
          
        }
      } catch(err) {
        console.log(err);
    }
  }
}
if (!lus) return;
});
//reklam
client.on("message", async msg => {
  
  const lus = await db.fetch(`reklamengel_${msg.guild.id}`)
  if (lus) {
    const reklamengel = ["discord.app", "discord.gg", ".party", ".com", ".az", ".net", ".io", ".gg", ".me", "https", "http", ".com.tr", ".org", ".tr", ".gl", "glicht.me/", ".rf.gd", ".biz", "www.", "www"];
    if (reklamengel.some(word => msg.content.toLowerCase().includes(word))) {
      try {
        if (!msg.member.permissions.has('KICK_MEMBERS')) {
          msg.delete();
          
          return msg.reply('Hey Dur! Bu Sunucuda Reklamı Engelliyorum').then(msg => msg.delete(3000));
          
        }
      } catch(err) {
        console.log(err);
    }
  }
}
if (!lus) return;
});
//otorol
client.on("guildMemberAdd", async member => {
let heheü = await db.fetch(`otorol_${member.guild.id}`) 
let ototakipkanal = await db.fetch(`ototakipkanal_${member.guild.id}`)
if(!heheü || !ototakipkanal) return
member.addRole(heheü)
client.channels.get(ototakipkanal).send(`${member}'a Başarıyla Rolü Verildi!`
});
//ototag
	client.on("guildMemberAdd", async member => {
let frenzy_ibrahim = await db.fetch(`Frenzy?Code?Ototag_${member.guild.id}`) 
let frenzykanal = await db.fetch(`Frenzy?Code?OtotagKanal_${member.guild.id}`)
if(!frenzy_ibrahim || !frenzykanal) return
 
 member.setNickname(`${frenzy_ibrahim} ${member.user.username}`) 
client.channels.get(frenzykanal).send(`${member}'a Başarıyla Tagı Verildi!`)
 
});
//sa-as
client.on("message", async msg => {
  let saas = await db.fetch(`saas_${msg.guild.id}`);
  if (saas == 'kapali') return;
  if (saas == 'acik') {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('Aleyküm Selam Hoşgeldin');
  }
  }
});
//hgbb
client.on('guildMemberAdd', async member => {
  let lukanal = await db.fetch(`hgbb_${member.guild.id}`)
  let luchannel = client.channels.get(lukanal)
  if(!luchannel) return
luchannel.send(` Uuuu Sunucuya Yeni Üye! Karşınızda ${member} Sunucuya Katıldı!`)
})
client.on('guildMemberRemove', async member => {
  let lukanal = await db.fetch(`hgbb_${member.guild.id}`)
  let luchannel = client.channels.get(lukanal)
  if(!luchannel) return
  luchannel.send(` Keşke Gitmeseydin Bee! ${member.user.username} Sunucudan Ayrıldı!`)
})
//caps
 client.on("message", async msg => {
    if (msg.channel.type === "dm") return;
      if(msg.author.bot) return;  
        if (msg.content.length > 4) {
         if (db.fetch(`capslock_${msg.guild.id}`)) {
           let caps = msg.content.toUpperCase()
           if (msg.content == caps) {
             if (!msg.member.hasPermission("ADMINISTRATOR")) {
               if (!msg.mentions.users.first()) {
                 msg.delete()
                 return msg.channel.send(` ${msg.author} Çok Fazla Büyük Harf Kullanıyorsun!`).then(m => m.delete(5000))
     }
       }
     }
   }
  }
});
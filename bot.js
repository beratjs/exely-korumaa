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
app.get("/", (request, response) => {
  console.log(
    ` az önce Ayberk abi projeye giriş yaptı  veya invite kodu verdi :D`
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




client.on("guildMemberAdd", async member => {
  if (member.user.bot === true) return;
  let rolisim = await db.fetch(`otorolisim_${member.guild.id}`);
  let kanal = db.fetch(`otorolKanal_${member.guild.id}`);
  let rolid = await db.fetch(`otorol_${member.guild.id}`);
  let bilgiKanal = client.channels.cache.get(kanal)
    bilgiKanal.send(`:new: \`${member.user.tag}\` adlı kullanıcıya **${rolisim}** adlı rol verildi.` );
   member.roles.add(rolid);
});//hmmm hataya bakalım client.on("guildMemberAdd", async member => { bu method degısmıs olabilirmi?


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
client.on("message", async msg => {
  
  const lus = await db.fetch(`küfürengel_${msg.guild.id}`)
  if (lus) {
    const kufurengel = ["oç", "amk", "ananı sikiyim", "ananıskm", "piç", "amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "mal", "sik", "yarrak","amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "ak", "amq",];
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
//MOD-LOG
client.on('messageDelete', async message   => { // mod-log
      let modlogayarla = db.get(`modlog_${message.guild.id}`)
    const modlogkanalı = message.guild.channels.find(kanal => kanal.id === modlogayarla);    
if (!modlogkanalı) return;
  const embed = new Discord.MessageEmbed()
  .setColor("ff0000")
  .setTitle("MESAJ SİLİNDİ")
.setDescription(`<@!${message.author.id}> Adlı Kullanıcı <#${message.channel.id}> Kanalındaki Mesajını Sildi! \nSilinen Mesajı: **${message.content}**`)
  modlogkanalı.sendEmbed(embed);
  })

client.on('guildBanAdd', async message  => {
      let modlogs = db.get(`modlog_${message.guild.id}`)
    const modlogkanal = message.guild.channels.find(kanal => kanal.id === modlogs);    
if (!modlogkanal) return;
  const embed = new Discord.MessageEmbed()
  .setColor("ff0000")

    .setDescription(`Üye Sunucudan Yasaklandı! \n<@!${message.user.id}>, ${message.user.tag}`)
        .setThumbnail(message.user.avatarURL)
  .setFooter(" ! Log Sistemi")
  modlogkanal.sendEmbed(embed);
  })
client.on('channelCreate', async channel  => {
      let modlogayarla = db.get(`modlog_${channel.guild.id}`)
    const modlogkanal = channel.guild.channels.find(kanal => kanal.id === modlogayarla);    
if (!modlogkanal) return;
    if (channel.type === "text") {
                let embed = new Discord.MessageEmbed()
                    .setColor('ff0000')
                .setDescription(`${channel.name} adlı metin kanalı oluşturuldu.`)
                .setFooter(` | Log Sistemi Kanal ID: ${channel.id}`)
                modlogkanal.send(embed);
            };
            if (channel.type === "voice") {
                let embed = new Discord.MessageEmbed()
                .setColor('ff0000')
.setTitle("SES KANALI OLUŞTURULDU")
                .setDescription(`${channel.name} adlı ses kanalı oluşturuldu!`)
                .setFooter(` | Log Sistemi Kanal ID: ${channel.id}`)

                modlogkanal.send(embed);
            }
        
    })
client.on('channelDelete', async channel  => {
      let modlogs = db.get(`modlog_${channel.guild.id}`)
    const modlogkanal = channel.guild.channels.find(kanal => kanal.id === modlogs);    
if (!modlogkanal) return;
    if (channel.type === "text") {
                let embed = new Discord.MessageEmbed()
                    .setColor('ff0000')
                .setDescription(`${channel.name} adlı metin kanalı silini!`)
                .setFooter(`Rays | Log Sistemi Kanal ID: ${channel.id}`)
                modlogkanal.send(embed);
            };
            if (channel.type === "voice") {
                let embed = new Discord.MessageEmbed()
                .setColor('ff0000')
.setTitle("SES KANALI SİLİNDİ")
                .setDescription(`${channel.name} adlı ses kanalı silindi`)
            .setFooter(`Rays | Log Sistemi  Kanal ID: ${channel.id}`)
                modlogkanal.send({embed});
            }
    })
client.on("messageUpdate", async (oldMsg, newMsg) => {
  if (oldMsg.author.bot) return;
  var user = oldMsg.author;
  if (db.has(`modlog_${oldMsg.guild.id}`) === false) return;
  var kanal = oldMsg.guild.channels.get(db.fetch(`modlog_${oldMsg.guild.id}`).replace("<#", "").replace(">", ""))
  if (!kanal) return;
  const embed = new Discord.RichEmbed()
  .setColor("ff0000")
  .addField("Kullanıcı", oldMsg.author.tag, true)
  .addField("Eski Mesaj",`  ${oldMsg.content}  `)
  .addField("Yeni Mesaj", `${newMsg.content}`)
  .setThumbnail(oldMsg.author.avatarURL)
  kanal.send(embed);  
        
    
})
//sayac
client.on("guildMemberAdd", async member => {
  let frenzysayı = await db.fetch(`sayaçsayı_${member.guild.id}`);
  let frenzykanal = await db.fetch(`kanal2_${member.guild.id}`);
  if (!frenzysayı || !frenzykanal) return;
  let sonuç = frenzysayı - member.guild.memberCount;
  client.channels.cache
    .get(frenzykanal)
    .send(
      `<a:blobjoining:699974362081525870> | ${member}, Hoşgeldin  **${frenzysayı}** Kişiye Ulaşmak İçin  **${sonuç}** Kişi Kaldı.`
    );
});
client.on("guildMemberRemove", async member => {
  let frenzysayı = await db.fetch(`sayaçsayı_${member.guild.id}`);
  let frenzykanal = await db.fetch(`kanal2_${member.guild.id}`);
  if (!frenzysayı || !frenzykanal) return;
  let sonuç = frenzysayı - member.guild.memberCount;

  client.channels.cache
    .get(frenzykanal)
    .send(
      ` <a:ablobleaving:699974363209793547> | ${member}, Sunucudan Ayrıldı! **${frenzysayı}** Kişiye Ulaşmak İçin  **${sonuç}** Kişi Kaldı.`
    );
  return;
});
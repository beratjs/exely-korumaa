const chalk = require('chalk')
const moment = require('moment')
const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')

var prefix= ayarlar.prefix;

module.exports = client => {
  console.log(`Far | Light `);
  console.log(`Komutlar Hazır!`);
  console.log(`Far | Light`);
  client.user.setStatus("idle");
  client.user.setActivity("Rays V12 Denemesi", { type: "WATCHING" });
  

  
};
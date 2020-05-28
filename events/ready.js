const chalk = require('chalk')
const moment = require('moment')
const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')

var prefix= ayarlar.prefix;

module.exports = client => {
  console.log(`Star | Code`);
  console.log(`Komutlar Hazı!`);
  console.log(`Star | Code`);
  client.user.setStatus("online");
  //idle = boşta
  //dnd = rahatsız etmeyin
  //online = çevrimiçi
    var oyun = [
        "Merhaba Ben Rays",
        "Prefix'im [ !! ]",
        "Sorun Olursa !!canlı-destek Yazabilirsiniz",
        "!!yardım yardım sekmesini açar.",
        "Destek Sunucumuza Gelmeyi Unutmayın..",
    ];
  
    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setGame(oyun[random], );
        }, 2 * 9000);
  
};
let fs = require('fs')
let PhoneNumber = require('awesome-phonenumber')
let moment = require('moment-timezone')
let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, command, text }) => {
let name = await conn.getName(m.sender)
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let res = 'https://telegra.ph/file/939d32f2758468c27ea56.mp4'
let jam = new Date
let clock = jam.toLocaleTimeString('us')
let waktu = new Date().getHours()
let ucapWaktu = waktu > 2 && waktu < 4 ? 'Dini Hari' : waktu < 11 ? 'ðŸŒ„ Good Morning' : waktu < 16 ? 'â˜€ï¸Good Afternoon' : waktu < 19 ? 'ðŸŒ‡ Good Afternoon' : 'ðŸŒ™ Good Night'
let pp = 'https://telegra.ph/file/a2ae6cbfa40f6eeea0cf1.jpg'
  try {
    pp = await conn.getProfilePicture(m.sender)
  } catch (e) {

  }
//*****************FAKE REPLY*********************
let anu = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
 //*****************MENU*********************
 conn.send3ButtonVid(m.chat, res, `*${ucapWaktu} ${conn.getName(m.sender)}*`, `
Saya Adalah Bot ${conn.getName(conn.user.jid)} Yg Di Kembangkan Oleh @${global.kontak[0].split`@`[0]} Silahkan Tekan Tombol Button "MENU" Untuk Melihat List Command Dari Bot ${conn.getName(conn.user.jid)} Ketik .listmenu
Support By doujindesu.com
Powered By @${global.kontak[0].split`@`[0]}`.trim(), 'LIST MENU', '.listmenu', 'OWNER', '.owner', 'THANKS TO', 'tqto', 'conversation', { quoted: anu, thumbnail: global.image1,contextInfo: { mentionedJid: ['6289637133848@s.whatsapp.net'], forwardingScore: 999, isForwarded: true, externalAdReply: { title: `${ucapWaktu}`, body: `Time: ${clock}\nRuntime: ${Rtime}`, mediaUrl: 'https://www.facebook.com/Inunime-107082474576049/', mediaType: 2, thumbnail: await (await fetch(pp)).buffer()}}})
}

handler.help = ['menu', 'help']
handler.tags = ['main']
handler.command = /^(menu|help)$/i

handler.register = true

module.exports = handler

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)}H ${pad(minutes)}M ${pad(seconds)}S`
}
runtime = process.uptime()
					Rtime = `${kyun(runtime)}`
